(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a9a":function(e,t,n){"use strict";n("52bc")},"2b08":function(e,t,n){"use strict";n("bc84")},3415:function(e,t){e.exports="data:image/png;base64,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"},"52bc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{search:e.searchMovies}}),n("Content",{attrs:{movies:e.movies}})],1)},o=[],s=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[e._m(0),n("div",{staticClass:"nav-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{size:"35",type:"text",placeholder:"Click on the magnifying glass to search!"},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.searchQuery)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),n("font-awesome-icon",{staticClass:"fas fa-search",attrs:{icon:"search"},on:{click:function(t){return e.$emit("search",e.searchQuery)}}}),n("div",{staticClass:"category"},[e._v("BAMBINI")]),n("div",{staticClass:"bell-container"},[n("font-awesome-icon",{staticClass:"fas fa-bell",attrs:{icon:"bell"}}),n("div",{staticClass:"notif"},[e._v("2")])],1),n("div",{staticClass:"profile-pic"},[e._v(":3")]),n("font-awesome-icon",{staticClass:"fas fa-caret-down",attrs:{icon:"caret-down"}})],1)])}),r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-left"},[a("img",{attrs:{src:n("3415"),alt:""}}),a("ul",[a("li",[e._v("Home")]),a("li",[e._v("Serie TV")]),a("li",[e._v("File")]),a("li",[e._v("Originali")]),a("li",[e._v("Aggiunti di recente")]),a("li",[e._v("La mia lista")])])])}],c={name:"Header",data:function(){return{searchQuery:""}},props:{}},l=c,u=(n("0a9a"),n("2877")),d=Object(u["a"])(l,s,r,!1,null,"9060ec26",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h2",[e._v("ORIGINALI NETFLIX")]),n("div",{staticClass:"series-list"},e._l(e.movies,(function(t,a){return n("Card",{key:t.id,attrs:{movies:e.movies,index:a}})})),1)])},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item col-6 col-md-4 col-xl-2",style:{backgroundImage:"url("+this.image+")"}},[n("div",{staticClass:"layer"}),n("div",{staticClass:"series-info"},[n("h5",[e._v(e._s(e.movies[e.index].title))]),n("div",{staticStyle:{fontSize:"13px"}},[e._v(" Titolo Originale: ")]),n("div",{staticClass:"or-title"},[e._v(e._s(e.movies[e.index].original_title))]),n("div",{staticStyle:{fontSize:"13px"}},[e._v(" Lingua Originale: ")]),n("div",{staticClass:"or-lang"},[e._v(e._s(e.movies[e.index].original_language))]),n("div",{staticStyle:{fontSize:"13px"}},[e._v("Rating:")]),n("div",[e._v(e._s(e.movies[e.index].vote_average))])])])},h=[],m=(n("a9e3"),{name:"Card",props:{movies:Array,index:Number},methods:{getImage:function(){var e=this.movies[this.index].poster_path;return null===e?"https://png2.cleanpng.com/sh/9b45967c7b67474da3a608ce21c9512b/L0KzQYm3UcI5N5J6fZH0aYP2gLBuTfxwb5CyeuRqbnSwdrF1lL14bZN4geZuLYTsgMS0VfE3bJU8T6UEYUG6cYq1U8Y4PGo2Sqo6NUG6QYWBUME6PmQ2SpD5bne=/kisspng-logo-brand-font-website-tips-5a6dd7739a17a9.3674912815171480196312.png":"https://image.tmdb.org/t/p/w342".concat(e)}},data:function(){return{image:this.getImage()}}}),A=m,y=(n("e0d0"),Object(u["a"])(A,g,h,!1,null,"2df1c083",null)),b=y.exports,w={name:"Content",components:{Card:b},props:{movies:Array}},x=w,C=(n("2b08"),Object(u["a"])(x,p,v,!1,null,"28eb327a",null)),B=C.exports,j=n("bc3a"),E=n.n(j),k={name:"App",components:{Header:f,Content:B},data:function(){return{movies:[]}},created:function(){var e=this;E.a.get("https://api.themoviedb.org/3/search/movie/?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=ritorno+al+futuro").then((function(t){e.movies=t.data.results,console.log(e.movies)}))},methods:{searchMovies:function(e){var t=this;e=e.replace(/\s/g,"+"),console.log(e),E.a.get("https://api.themoviedb.org/3/search/movie/?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=".concat(e)).then((function(e){t.movies=e.data.results,console.log(t.movies)}))}}},q=k,O=(n("5c0b"),Object(u["a"])(q,i,o,!1,null,null,null)),K=O.exports,N=n("ecee"),T=n("c074"),M=n("ad3d");N["c"].add(T["c"]),N["c"].add(T["a"]),N["c"].add(T["b"]),a["a"].component("font-awesome-icon",M["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(K)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"85d7":function(e,t,n){},"9c0c":function(e,t,n){},bc84:function(e,t,n){},e0d0:function(e,t,n){"use strict";n("85d7")}});
//# sourceMappingURL=app.ff858ab6.js.map