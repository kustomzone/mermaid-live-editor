import"../chunks/disclose-version.Bg9kRutz.js";import{p as y,f as x,a as w,n as $,d as s,g as o,h as m,t as q}from"../chunks/utils.BCvjygOv.js";import{s as j}from"../chunks/render.BMrZuwY8.js";import{i as M}from"../chunks/preload-helper.DCjzZeWy.js";import{s as T,a as p,t as u,b as v}from"../chunks/store.Nan7lcVq.js";import{s as z,a as D,t as f}from"../chunks/theme.DZMYo0kW.js";import{b as g}from"../chunks/paths.CPhHjnwq.js";import{i as O,aJ as W,aK as A}from"../chunks/state.BBiHDmzh.js";import{o as E}from"../chunks/index-client.f3GdDfgr.js";const H=!0,J=!0,K=!1,L="ignore",X=Object.freeze(Object.defineProperty({__proto__:null,csr:J,prerender:H,ssr:K,trailingSlash:L},Symbol.toStringTag,{value:"Module"}));var P=u('<div class="absolute left-0 top-0 z-50 flex h-screen w-screen justify-center bg-gray-600 align-middle opacity-50 svelte-6pksaq"><div class="my-auto text-4xl font-bold text-indigo-100 svelte-6pksaq"><div class="loader mx-auto svelte-6pksaq"></div> <div class="svelte-6pksaq"> </div></div></div>'),R=u('<main class="h-screen text-primary-content svelte-6pksaq"><!></main> <!>',1);function Y(h,i){y(i,!0);const n=T(),_=()=>v(f,"$themeStore",n),l=()=>v(A,"$loadingStateStore",n);E(()=>{window.addEventListener("hashchange",()=>{O()}),"serviceWorker"in navigator&&navigator.serviceWorker.register(`${g}/service-worker.js`,{scope:`${g}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const r=window.matchMedia("(prefers-color-scheme: dark)").matches;_().theme===void 0&&D(r?"dark":"light"),f.subscribe(({theme:e,isDark:t})=>{e&&(document.querySelectorAll("html")[0].dataset.theme=e,W(t))})});var c=R(),a=x(c),k=s(a);z(k,()=>i.children??$),o(a);var S=m(a,2);M(S,()=>l().loading,r=>{var e=P(),t=s(e),d=m(s(t),2),b=s(d,!0);o(d),o(t),o(e),q(()=>j(b,l().message)),p(r,e)}),p(h,c),w()}export{Y as component,X as universal};
