import { browser } from '$app/environment';
import type { AnalyticsInstance } from 'analytics';
export let analytics: AnalyticsInstance;

export const initAnalytics = async (): Promise<void> => {
	if (browser && !analytics) {
		try {
			const [{ Analytics }, { default: plausible }] = await Promise.all([
				import('analytics'),
				import('analytics-plugin-plausible')
			]);
			analytics = Analytics({
				app: 'mermaid-live-editor',
				plugins: [
					plausible({
						domain: 'mermaid.live',
						hashMode: false,
						trackLocalhost: false, // By default 'false'
						apiHost: 'https://plausible.io'
					})
				]
			});
		} catch (e) {
			console.log(e);
			console.info('Analytics blocked ;)');
		}
	}
};

export const detectType = (text: string): string => {
	const possibleDiagramTypes = [
		'classDiagram',
		'erDiagram',
		'flowChart',
		'gantt',
		'gitGraph',
		'graph',
		'journey',
		'pie',
		'stateDiagram'
	];
	const firstLine = text
		.replace(/^\s*%%.*\n/g, '\n')
		.trimStart()
		.split(' ')[0]
		.toLowerCase();
	const detectedDiagram = possibleDiagramTypes.find((d) => firstLine.includes(d.toLowerCase()));
	return detectedDiagram;
};

export const countLines = (code: string): number => {
	return (code.match(/\n/g) || '').length + 1;
};

export const saveStatistics = (graph: string): void => {
	const graphType = detectType(graph);
	const length = countLines(graph);
	logEvent('render', { graphType, length });
};

const minutesToMilliSeconds = (minutes: number): number => {
	return minutes * 60_000;
};

const defaultDelay = minutesToMilliSeconds(1);
const delaysPerEvent = {
	render: minutesToMilliSeconds(5),
	panZoom: minutesToMilliSeconds(10),
	copyClipboard: defaultDelay,
	download: defaultDelay,
	copyMarkdown: defaultDelay,
	loadGist: defaultDelay,
	loadSampleDiagram: defaultDelay,
	renderDiagram: defaultDelay,
	history: defaultDelay,
	migration: defaultDelay,
	themeChange: defaultDelay
};
export type AnalyticsEvent = keyof typeof delaysPerEvent;
const timeouts: Record<string, number> = {};
// manual debounce to reduce the number of events sent to analytics
export const logEvent = (name: AnalyticsEvent, data?: unknown): void => {
	if (!analytics) {
		return;
	}
	const key = data ? JSON.stringify({ name, data }) : name;
	if (timeouts[key] === undefined) {
		void analytics.track(name, data);
	} else {
		clearTimeout(timeouts[key]);
	}
	timeouts[key] = window.setTimeout(() => {
		delete timeouts[key];
	}, delaysPerEvent[name]);
};
