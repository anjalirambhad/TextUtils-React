(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),o=n.n(l);n(12),n(13);function c(e){const[t,n]=Object(a.useState)("");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#04273"}},r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let a=t.toUpperCase();n(a),e.showAlert("Converted to Uppercase!","success")}},"Convert to Uppercase"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let a=t.toLowerCase();n(a),e.showAlert("Converted to Lowercase!","success")}},"Convert to Lowercase"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{n(""),e.showAlert("Text is cleared!","success")}},"Clear Text"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!","success")}},"Copy Text"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let a=t.split("").reverse().join("");n(a),e.showAlert("Text is reversed!","success")}},"Reverse Text")),r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},r.a.createElement("h2",null,"Your text summary"),r.a.createElement("p",null,t.split(/\s+/).filter(e=>0!==e.length).length," words and ",t.length," characters"),r.a.createElement("p",null,.008*t.split(" ").length," minutes read"),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,t.length>0?t:"Nothing to preview")))}var s=function(){const[e,t]=Object(a.useState)("light"),[n,l]=Object(a.useState)(null),o=(e,t)=>{l({msg:e,type:t}),setTimeout(()=>{l(null)},1500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{showAlert:o,heading:"Enter text to analyse: ",mode:e}))};var m=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:l,getTTFB:o}=t;n(e),a(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),m()},3:function(e,t,n){e.exports=n(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.2e6e63a7.chunk.js.map