webpackJsonp([14],{L8Gz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"[data-v-ebfe2cd8]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.history-nav[data-v-ebfe2cd8]{position:fixed}.vignette[data-v-ebfe2cd8]{position:absolute}#svgBack[data-v-ebfe2cd8]{position:absolute;z-index:1}.justify-center[data-v-ebfe2cd8]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.top-nav[data-v-ebfe2cd8]{background:#0f615e;background:-webkit-gradient(linear,left top,right top,from(#0f615e),to(#358e8b));background:linear-gradient(90deg,#0f615e,#358e8b)}.back-button[data-v-ebfe2cd8]{background:#144947}.animals-back-img img[data-v-ebfe2cd8]{opacity:1;-webkit-transition:opacity .4s;transition:opacity .4s;position:absolute;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.content[data-v-ebfe2cd8]{max-height:none}.container2[data-v-ebfe2cd8]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:100vh;position:relative;overflow-x:auto;min-width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-overflow-scrolling:touch}.white p[data-v-ebfe2cd8]{color:#464646}.white .section[data-v-ebfe2cd8]{background-color:#fff}.white h2[data-v-ebfe2cd8]{color:#818181}.white h2[data-v-ebfe2cd8]:after{background-color:#c2c2c2}.page-enter-active[data-v-ebfe2cd8],.page-leave-active[data-v-ebfe2cd8]{-webkit-transition-duration:.7s;transition-duration:.7s}.page-enter[data-v-ebfe2cd8]{opacity:0}.page-enter .particles[data-v-ebfe2cd8]{z-index:0}.page-enter-to[data-v-ebfe2cd8]{opacity:1}.page-enter-to .particles[data-v-ebfe2cd8]{z-index:1;-webkit-transition-delay:.7s;transition-delay:.7s}.page-leave-to[data-v-ebfe2cd8]{opacity:0}",""])},URNx:function(t,e,a){"use strict";var o=["1910","1929","1972","2001","2005","2007","2010"];e.a={components:{},mounted:function(t){this.currentRoute[0].toUpperCase(),this.currentRoute.substr(1),document.getElementById("prevBtn"),document.getElementById("nextBtn");console.log("mont"),console.log("weereee")},asyncData:function(t){return console.log(t.route,"contect"),{transitionContainer:"",transitionName:"d",yearSelected:"",msgChild:null,years:["1910","1929","1942","1974","2001","2005","2004","2010"],n:0,yearPages:o,currentRoute:t.route.name.split("-").pop(),projects:{"Coastal Resilience":{},SEASWAP:{},"Chum Project":{}}}},head:function(){return{style:[{cssText:".animal-name-back { background-color: "+this.shadeColor("#28918d",.4)+"!important;color:"+this.shadeColor("#28918d",.4)+"!important } .overlay-w{background:"+this.shadeColor("#28918d",-.4)+"!important}.top-nav{background:"+this.shadeColor("#28918d",-.3)+"!important}.hero-image-con img,.animal-tile img{background:"+this.shadeColor("#28918d",.3)+"!important}",type:"text/css"}]}},methods:{shadeColor:function(t,e){var a=parseInt(t.slice(1),16),o=e<0?0:255,n=e<0?-1*e:e,i=a>>16,s=a>>8&255,r=255&a;return"#"+(16777216+65536*(Math.round((o-i)*n)+i)+256*(Math.round((o-s)*n)+s)+(Math.round((o-r)*n)+r)).toString(16).slice(1)},backNav:function(){this.msgChild=["doIt"];var t=this.$route.path,e=t.split("/");e.pop(),""==(t=e.join("/"))?this.$router.push("/"):this.$router.push(t)},navLinks:function(t,e){return e=this.$route.name.split("-").pop(),"prev"==t?"history"==e?"":void 0!=o[o.indexOf(e)-1]?o[o.indexOf(e)-1]:"/history":"next"==t?(console.log(e,o,"pagesss"),"history"==e?e+"/1910":void 0!=o[o.indexOf(e)+1]?o[o.indexOf(e)+1]:""):void 0},getRouteName:function(){return this.$route.name}},transition:{mode:"out-in",css:!0,beforeEnter:function(){console.log("beforeenter");document.getElementById("heroimage"),document.getElementsByClassName("heading")[0],document.getElementsByClassName("map-nav")[0],document.getElementsByClassName("page1")[0]},enter:function(t){console.log("historyenter");document.getElementById("heroimage"),document.getElementsByClassName("heading")[0],document.getElementsByClassName("research-child")[0],document.getElementsByClassName("map-nav")[0]},leave:function(t){}}}},cV6F:function(t,e,a){var o=a("L8Gz");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("60b30c18",o,!1,{sourceMap:!1})},nUgT:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page1",staticStyle:{"background-color":"black"}},[a("div",{staticClass:"top-nav "},[a("ul",[a("li",[a("nuxt-link",{attrs:{to:"/",exact:""}},[a("i",{staticClass:"material-icons"},[t._v("home")])])],1),a("li",[a("nuxt-link",{attrs:{to:"/research"}},[t._v(t._s(t.currentRoute[0].toUpperCase()+t.currentRoute.substr(1)))])],1)])]),a("a",{attrs:{transition:t.transitionName}},[a("div",{staticClass:"back-button nav-button",on:{click:function(e){t.backNav()}}},[a("i",{staticClass:"material-icons"},[t._v("keyboard_arrow_left")])])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 0 100% 100%",id:"svgBack"}},[a("linearGradient",{attrs:{id:"background",gradientUnits:"objectBoundingBox",x1:"0%",y1:"0%",x2:"100%",y2:"100%"}},[a("stop",{attrs:{id:"start",offset:"0%","stop-color":"rgb(126, 189, 187)"}}),a("stop",{attrs:{id:"end",offset:"100%","stop-color":"rgb(20, 73, 71)"}})],1),a("rect",{attrs:{id:"rect",width:"100%",height:"100%",fill:"url(#background)"}})],1),t._m(0),a("nuxt-child",t._b({},"nuxt-child",{msgChild:t.msgChild},!1)),t._m(1)],1)])};o._withStripped=!0;var n={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"particles"},[e("video",{attrs:{id:"homevid",autoplay:"",loop:""}},[e("source",{attrs:{src:"/video/particles2.mp4",type:"video/mp4"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animals-back-img"},[e("img",{staticClass:"img-fluid obj-fit-cover obj-pos-c",attrs:{src:"/images/research/research-back.jpg"}})])}]};e.a=n},tAr6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("URNx"),n=a("nUgT"),i=!1;var s=function(t){i||a("cV6F")},r=a("VU/8")(o.a,n.a,!1,s,"data-v-ebfe2cd8",null);r.options.__file="pages/research.vue",e.default=r.exports}});