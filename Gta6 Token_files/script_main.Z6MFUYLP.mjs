import{Ia as w,L as g,M as m,N as u,O as _,P as y,Q as b,R as k,T as v,X as F,Z as E,e as c,i as h,ka as I,na as P,xa as S}from"./chunk-LWHBNDDO.mjs";import"./chunk-JR5VT52U.mjs";import{c as t}from"./chunk-RIUMFBNJ.mjs";var T="default"in m?g:m,d={},x=T;d.createRoot=x.createRoot;d.hydrateRoot=x.hydrateRoot;var U=d.createRoot,V=d.hydrateRoot;var f={augiA20Il:{elements:{abFlgzb_J:"features",AkaJGF82_:"features-1",i6tUxd9EZ:"header"},page:u(()=>import("./pD0zDkAXULaW5txzbzExBvIeT8ouFYgODzhICjmgaf4.DUX2ULUV.mjs")),path:"/"}},O=[{code:"en-US",id:"default",name:"English",slug:""}];async function A({routeId:a,pathVariables:o,localeId:r}){await f[a].page.preload();let n=c(P,{isWebsite:!0,routeId:a,pathVariables:o,routes:f,collectionUtils:{},framerSiteId:"e1f3e2af3e9c11c88a39ae8be3011de05b639d9920f9c3397fcdfcd04c190b94",notFoundPage:u(()=>import("./SitesNotFoundPage.js@1.1-EMXJRZTC.mjs")),isReducedMotion:void 0,localeId:r,locales:O,preserveQueryParams:void 0}),s=c(I,{children:n,value:{enableAsyncURLUpdates:!0,replaceNestedLinks:!0,useGranularSuspense:!0,wrapUpdatesInTransitions:!1}});return c(_,{children:s,value:{routes:{}}})}var H=typeof document<"u";if(H){t.__framer_importFromPackage=(o,r)=>()=>c(F,{error:'Package component not supported: "'+r+'" in "'+o+'"'}),t.process={...t.process,env:{...t.process?t.process.env:void 0,NODE_ENV:"production"}},t.__framer_events=t.__framer_events||[],E();let a=document.getElementById("main");"framerHydrateV2"in a.dataset?M(!0,a):M(!1,a)}function D(){H&&t.__framer_events.push(arguments)}async function M(a,o){try{let R=function(e,N){let l=N?.componentStack;console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",e,l),!(Math.random()>.01)&&D("published_site_load_recoverable_error",{message:String(e),componentStack:l,stack:l?void 0:e instanceof Error&&typeof e.stack=="string"?e.stack:null})},r,n,s,i;if(a){let e=JSON.parse(o.dataset.framerHydrateV2);r=e.routeId,n=e.localeId,s=e.pathVariables,i=e.breakpoints}else{let e=v(f,decodeURIComponent(location.pathname),!0,O);r=e.routeId,n=e.localeId,s=e.pathVariables}let p=await A({routeId:r,localeId:n,pathVariables:s});a?(w("framer-rewrite-breakpoints",()=>{S(i),t.__framer_onRewriteBreakpoints?.(i)}),h(()=>{y(),k(),b(),V(o,p,{onRecoverableError:R})})):U(o,{onRecoverableError:R}).render(p)}catch(r){throw D("published_site_load_error",{message:String(r),stack:r instanceof Error&&typeof r.stack=="string"?r.stack:null}),r}}export{A as getPageRoot};
//# sourceMappingURL=script_main.Z6MFUYLP.mjs.map