(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/filancy/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31a7":function(e,t,n){},"331e":function(e,t,n){"use strict";n("31a7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHome"),n("portal-target",{attrs:{name:"options"}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[e._m(0),n("input",{staticClass:"home-search",attrs:{type:"search",name:"q","aria-label":"Search through site content",placeholder:"Search by location"},on:{focus:e.focusItput}}),n("portal",{attrs:{to:"options"}},[n("TheOptions",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}]})],1)],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"home-heading"},[e._v(" It's time to find "),n("span",{staticClass:"home-heading__ginger"},[e._v("the perfect job")])])}],s=n("5530"),l=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"options",on:{submit:function(t){return t.preventDefault(),e.showMainArr.apply(null,arguments)}}},[n("button",{staticClass:"options-clouse",on:{click:function(t){return t.preventDefault(),e.focusItput.apply(null,arguments)}}},[e._v("X")]),n("ul",{staticClass:"options-list"},e._l(e.mainArr,(function(e){return n("OptionList",{key:e.name,attrs:{name:e.name,arr:e.arr}})})),1),n("button",{staticClass:"options-btn"},[e._v("Clear")])])},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"options-item"},[n("fieldset",{staticClass:"options-form"},[n("legend",{staticClass:"options-name"},[e._v(e._s(e.name))]),n("ul",{staticClass:"options-form__list"},e._l(e.arr,(function(t){return n("TheForm",{key:t.name,attrs:{nameItem:t.name,active:t.active,name:e.name}})})),1)]),n("section",{staticClass:"options-more"},[n("h3",{staticClass:"options-name"},[e._v(e._s(e.moreObj.name))]),n("ul",{staticClass:"options-form__list"},e._l(e.moreObj.arr,(function(e){return n("TheMore",{key:e.id,attrs:{name:e}})})),1)])])},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"form"},[n("input",{staticClass:"form-input",attrs:{type:"radio",id:e.nameItem,name:e.name},domProps:{value:e.nameItem,checked:e.active},on:{click:function(t){return e.itemFind(e.name,e.nameItem)}}}),n("label",{staticClass:"form-label label",attrs:{for:e.nameItem}},[e._v(" "+e._s(e.nameItem)+" ")])])},d=[],h={props:["active","nameItem","name"],methods:Object(s["a"])(Object(s["a"])({},Object(l["d"])(["findItem"])),{},{itemFind:function(e,t){this.$store.commit("findItem",{name:e,nameItem:t})}})},b=h,g=(n("6380"),n("2877")),O=Object(g["a"])(b,v,d,!1,null,null,null),_=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"more"},[n("button",{staticClass:"more-buttons"},[e._v(e._s(e.name))])])},A=[],y={props:["name"]},I=y,w=(n("a0fc"),Object(g["a"])(I,j,A,!1,null,null,null)),C=w.exports,M={components:{TheForm:_,TheMore:C},props:["name","arr"],computed:Object(s["a"])({},Object(l["c"])(["moreObj"]))},S=M,k=(n("331e"),Object(g["a"])(S,f,p,!1,null,null,null)),x=k.exports,T={components:{OptionList:x},mounted:function(){this.showMainArr(),this.saveMainArr()},computed:Object(s["a"])({},Object(l["c"])(["mainArr"])),methods:Object(s["a"])({},Object(l["b"])(["saveMainArr","showMainArr","focusItput"]))},P=T,E=(n("5804"),Object(g["a"])(P,u,m,!1,null,null,null)),$=E.exports,N={components:{TheOptions:$},computed:Object(s["a"])({},Object(l["c"])(["active"])),methods:Object(s["a"])({},Object(l["b"])(["focusItput"]))},F=N,J=(n("d7c2"),Object(g["a"])(F,i,c,!1,null,null,null)),q=J.exports,L={components:{TheHome:q},name:"App"},R=L,B=(n("5c0b"),Object(g["a"])(R,a,o,!1,null,null,null)),D=B.exports,H=n("9483");Object(H["a"])("".concat("/filancy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("e9c4"),n("b0c0"),n("7db0"),n("d3b7"),n("c740"),n("a434"),n("159b"),n("99af");r["default"].use(l["a"]);var W=new l["a"].Store({state:{isActive:!1,mainArr:[{name:"Location",arr:[{name:"New York",active:!1},{name:"Remote",active:!1},{name:"Los Angeles",active:!1},{name:"Chicago",active:!1}]},{name:"Requirements",arr:[{name:"Communication",active:!1},{name:"Microsoft excel",active:!1},{name:"Microsoft Word",active:!1}]},{name:"Task",arr:[{name:"Answering phone calls",active:!1},{name:"Providing customer service",active:!1},{name:"Creating reports",active:!1}]},{name:"Required experience",arr:[{name:"0",active:!1},{name:"1 year",active:!1},{name:"3years",active:!1},{name:"5+ years",active:!1}]}],moreObj:{name:"More",arr:["Positions","Companies","Benefits"]}},getters:{active:function(e){return e.isActive},mainArr:function(e){return e.mainArr},moreObj:function(e){return e.moreObj}},mutations:{showMainArr:function(e){if(localStorage.getItem("mainArr"))try{e.mainArr=JSON.parse(localStorage.getItem("mainArr"))}catch(t){localStorage.removeItem("mainArr")}},saveMainArr:function(e){var t=JSON.stringify(e.mainArr);localStorage.setItem("mainArr",t)},findItem:function(e,t){var n=t.name,r=t.nameItem,a=e.mainArr.find((function(e){return e.name===n})),o=a.arr.findIndex((function(e){return e.name===r})),i=a.arr.find((function(e){return e.name===r}));if(!1===i.active)a.arr.splice(o,1),a.arr.unshift(i),a.arr.forEach((function(e){e.active=!1})),i.active=!0;else if(localStorage.getItem("mainArr"))try{var c=JSON.parse(localStorage.getItem("mainArr")),s=c.find((function(e){return e.name===n}));a.arr.splice(0,a.arr.lenght),a.arr=s.arr.concat()}catch(l){localStorage.removeItem("mainArr")}},focusItput:function(e){e.isActive=!e.isActive}},actions:{showMainArr:function(e){e.commit("showMainArr")},saveMainArr:function(e){e.commit("saveMainArr")},findItem:function(e,t){var n=t.name,r=t.nameItem;console.log(n),console.log(r),e.commit("findItem",{name:n,nameItem:r})},focusItput:function(e){e.commit("focusItput")}},modules:{}}),X=n("2b88"),Y=n.n(X);r["default"].use(Y.a),r["default"].config.productionTip=!1,new r["default"]({store:W,render:function(e){return e(D)}}).$mount("#app")},5804:function(e,t,n){"use strict";n("70c0")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6380:function(e,t,n){"use strict";n("b9ff")},"70c0":function(e,t,n){},8687:function(e,t,n){},"9c0c":function(e,t,n){},a0fc:function(e,t,n){"use strict";n("8687")},b9ff:function(e,t,n){},ba6c:function(e,t,n){},d7c2:function(e,t,n){"use strict";n("ba6c")}});
//# sourceMappingURL=app.1c788563.js.map