!function(){function t(t){return t&&t.__esModule?t.default:t}const o=(t,o)=>Math.floor(Math.random()*(o-t+1))+t;var e,s={};s=function(){"use strict";var t=document,o=t.createTextNode.bind(t);function e(t,o,e){t.style.setProperty(o,e)}function s(t,o){return t.appendChild(o)}function n(o,e,n,i){var r=t.createElement("span");return e&&(r.className=e),n&&(!i&&r.setAttribute("data-"+e,n),r.textContent=n),o&&s(o,r)||r}function i(t,o){return t.getAttribute("data-"+o)}function r(o,e){return o&&0!=o.length?o.nodeName?[o]:[].slice.call(o[0].nodeName?o:(e||t).querySelectorAll(o)):[]}function l(t){for(var o=[];t--;)o[t]=[];return o}function c(t,o){t&&t.some(o)}function a(t){return function(o){return t[o]}}function u(t,o,s){var n="--"+o,i=n+"-index";c(s,(function(t,o){Array.isArray(t)?c(t,(function(t){e(t,i,o)})):e(t,i,o)})),e(t,n+"-total",s.length)}var h={};function f(t,o,e){var s=e.indexOf(t);if(-1==s)e.unshift(t),c(h[t].depends,(function(o){f(o,t,e)}));else{var n=e.indexOf(o);e.splice(s,1),e.splice(n,0,t)}return e}function m(t,o,e,s){return{by:t,depends:o,key:e,split:s}}function d(t){return f(t,0,[]).map(a(h))}function p(t){h[t.by]=t}function g(t,e,i,l,a){t.normalize();var u=[],h=document.createDocumentFragment();l&&u.push(t.previousSibling);var f=[];return r(t.childNodes).some((function(t){if(!t.tagName||t.hasChildNodes()){if(t.childNodes&&t.childNodes.length)return f.push(t),void u.push.apply(u,g(t,e,i,l,a));var s=t.wholeText||"",r=s.trim();r.length&&(" "===s[0]&&f.push(o(" ")),c(r.split(i),(function(t,o){o&&a&&f.push(n(h,"whitespace"," ",a));var s=n(h,e,t);u.push(s),f.push(s)}))," "===s[s.length-1]&&f.push(o(" ")))}else f.push(t)})),c(f,(function(t){s(h,t)})),t.innerHTML="",s(t,h),u}var v=0;function C(t,o){for(var e in o)t[e]=o[e];return t}var M="words",y=m(M,v,"word",(function(t){return g(t,"word",/\s+/,0,1)})),x="chars",b=m(x,[M],"char",(function(t,o,e){var s=[];return c(e[M],(function(t,e){s.push.apply(s,g(t,"char","",o.whitespace&&e))})),s}));function T(t){var o=(t=t||{}).key;return r(t.target||"[data-splitting]").map((function(e){var s=e["🍌"];if(!t.force&&s)return s;s=e["🍌"]={el:e};var n=d(t.by||i(e,"splitting")||x),r=C({},t);return c(n,(function(t){if(t.split){var n=t.by,i=(o?"-"+o:"")+t.key,l=t.split(e,r,s);i&&u(e,i,l),s[n]=l,e.classList.add(n)}})),e.classList.add("splitting"),s}))}function w(t){var o=(t=t||{}).target=n();return o.innerHTML=t.content,T(t),o.outerHTML}function A(t,o,e){var s=r(o.matching||t.children,t),n={};return c(s,(function(t){var o=Math.round(t[e]);(n[o]||(n[o]=[])).push(t)})),Object.keys(n).map(Number).sort(O).map(a(n))}function O(t,o){return t-o}T.html=w,T.add=p;var D=m("lines",[M],"line",(function(t,o,e){return A(t,{matching:e[M]},"offsetTop")})),P=m("items",v,"item",(function(t,o){return r(o.matching||t.children,t)})),S=m("rows",v,"row",(function(t,o){return A(t,o,"offsetTop")})),L=m("cols",v,"col",(function(t,o){return A(t,o,"offsetLeft")})),N=m("grid",["rows","cols"]),R="layout",k=m(R,v,v,(function(t,o){var l=o.rows=+(o.rows||i(t,"rows")||1),c=o.columns=+(o.columns||i(t,"columns")||1);if(o.image=o.image||i(t,"image")||t.currentSrc||t.src,o.image){var a=r("img",t)[0];o.image=a&&(a.currentSrc||a.src)}o.image&&e(t,"background-image","url("+o.image+")");for(var u=l*c,h=[],f=n(v,"cell-grid");u--;){var m=n(f,"cell");n(m,"cell-inner"),h.push(m)}return s(t,f),h})),E=m("cellRows",[R],"row",(function(t,o,e){var s=o.rows,n=l(s);return c(e[R],(function(t,o,e){n[Math.floor(o/(e.length/s))].push(t)})),n})),H=m("cellColumns",[R],"col",(function(t,o,e){var s=o.columns,n=l(s);return c(e[R],(function(t,o){n[o%s].push(t)})),n})),q=m("cells",["cellRows","cellColumns"],"cell",(function(t,o,e){return e[R]}));return p(y),p(b),p(D),p(P),p(S),p(L),p(N),p(k),p(E),p(H),p(q),T}();class n{position=-1;cells=[];constructor(t){this.position=t}}class i{DOM={el:null};position=-1;previousCellPosition=-1;original;state;color;originalColor;cache;constructor(t,{position:o,previousCellPosition:e}={}){this.DOM.el=t,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=o,this.previousCellPosition=e}set(t){this.state=t,this.DOM.el.innerHTML=this.state}}class r{DOM={el:null};lines=[];lettersAndSymbols=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"];effects={fx1:()=>this.fx1(),fx2:()=>this.fx2(),fx3:()=>this.fx3(),fx4:()=>this.fx4(),fx5:()=>this.fx5(),fx6:()=>this.fx6()};totalChars=0;constructor(o){this.DOM.el=o;const e=t(s)({target:this.DOM.el,by:"lines"});e.forEach((o=>t(s)({target:o.words})));for(const[t,o]of e[0].lines.entries()){const e=new n(t);let s=[],r=0;for(const t of o)for(const o of[...t.querySelectorAll(".char")])s.push(new i(o,{position:r,previousCellPosition:0===r?-1:r-1})),++r;e.cells=s,this.lines.push(e),this.totalChars+=r}}clearCells(){for(const t of this.lines)for(const o of t.cells)o.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}fx1(){let t=0;this.clearCells();const o=(e,s,n=0)=>{s.cache=s.state,44===n?(s.set(s.original),++t,t===this.totalChars&&(this.isAnimating=!1)):0===s.position?s.set(n<9?["*","-","'",'"'][Math.floor(4*Math.random())]:this.getRandomChar()):s.set(e.cells[s.previousCellPosition].cache),"&nbsp;"!=s.cache&&++n,n<45&&setTimeout((()=>o(e,s,n)),15)};for(const t of this.lines)for(const e of t.cells)setTimeout((()=>o(t,e)),200*(t.position+1))}fx2(){let t=0;const o=(e,s,n=0)=>{19===n?(s.set(s.original),s.DOM.el.style.opacity=0,setTimeout((()=>{s.DOM.el.style.opacity=1}),300),++t,t===this.totalChars&&(this.isAnimating=!1)):s.set(this.getRandomChar()),++n<20&&setTimeout((()=>o(e,s,n)),40)};for(const t of this.lines)for(const e of t.cells)setTimeout((()=>o(t,e)),30*(e.position+1))}fx3(){let t=0;this.clearCells();const e=(o,s,n=0)=>{9===n?(s.set(s.original),++t,t===this.totalChars&&(this.isAnimating=!1)):s.set(this.getRandomChar()),++n<10&&setTimeout((()=>e(o,s,n)),80)};for(const t of this.lines)for(const s of t.cells)setTimeout((()=>e(t,s)),o(0,2e3))}fx4(){let t=0;this.clearCells();const o=(e,s,n=0)=>{s.cache=s.state,29===n?(s.set(s.original),++t,t===this.totalChars&&(this.isAnimating=!1)):0===s.position?s.set(["*",":"][Math.floor(2*Math.random())]):s.set(e.cells[s.previousCellPosition].cache),"&nbsp;"!=s.cache&&++n,n<30&&setTimeout((()=>o(e,s,n)),15)};for(const t of this.lines)for(const e of t.cells)setTimeout((()=>o(t,e)),400*Math.abs(this.lines.length/2-t.position))}fx5(){let t=0;this.clearCells();const o=(e,s,n=0)=>{s.cache={state:s.state,color:s.color},29===n?(s.color=s.originalColor,s.DOM.el.style.color=s.color,s.set(s.original),++t,t===this.totalChars&&(this.isAnimating=!1)):0===s.position?(s.color=["#3e775d","#61dca3","#61b3dc"][Math.floor(3*Math.random())],s.DOM.el.style.color=s.color,s.set(n<9?["*","-","'",'"'][Math.floor(4*Math.random())]:this.getRandomChar())):(s.set(e.cells[s.previousCellPosition].cache.state),s.color=e.cells[s.previousCellPosition].cache.color,s.DOM.el.style.color=s.color),"&nbsp;"!=s.cache.state&&++n,n<30&&setTimeout((()=>o(e,s,n)),10)};for(const t of this.lines)for(const e of t.cells)setTimeout((()=>o(t,e)),200*(t.position+1))}fx6(){let t=0;const e=(s,n,i=0)=>{n.cache={state:n.state,color:n.color},14===i?(n.set(n.original),n.color=n.originalColor,n.DOM.el.style.color=n.color,++t,t===this.totalChars&&(this.isAnimating=!1)):(n.set(this.getRandomChar()),n.color=["#2b4539","#61dca3","#61b3dc"][Math.floor(3*Math.random())],n.DOM.el.style.color=n.color),++i<15&&setTimeout((()=>e(s,n,i)),o(30,110))};for(const t of this.lines)for(const o of t.cells)setTimeout((()=>e(t,o)),80*(t.position+1))}trigger(t="fx1"){t in this.effects&&!this.isAnimating&&(this.isAnimating=!0,this.effects[t]())}}(e="biu0hfr",new Promise((t=>{WebFont.load({typekit:{id:e},active:t})}))).then((()=>{document.body.classList.remove("loading");const t=document.querySelector(".rnd-content"),o=new r(t);o.trigger("fx5"),[...document.querySelectorAll(".effects > button")].forEach((t=>{t.addEventListener("click",(()=>{o.trigger(`fx${t.dataset.fx}`)}))}))}))}();