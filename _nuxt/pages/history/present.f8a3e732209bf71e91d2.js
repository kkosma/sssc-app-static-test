webpackJsonp([18],{"5g14":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gh4o"),o=a("zjh+"),i=!1;var s=function(e){i||a("eF2h")},r=a("VU/8")(n.a,o.a,!1,s,"data-v-727a6252",null);r.options.__file="pages/history/present.vue",t.default=r.exports},dBdK:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"[data-v-727a6252]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[data-v-727a6252]{text-shadow:2px 2px 12px rgba(0,0,0,.7)}.ftscroller_container[data-v-727a6252],.ftscroller_x[data-v-727a6252],.ftscroller_y[data-v-727a6252],.hero-image-con[data-v-727a6252]{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-image-con[data-v-727a6252]{top:0}.justify-center[data-v-727a6252]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.container2[data-v-727a6252]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:100vh;position:relative;overflow-x:auto;min-width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-overflow-scrolling:touch}.hero-image-con[data-v-727a6252]{width:100%;height:100%;left:0}.white p[data-v-727a6252]{color:#464646}.white .section[data-v-727a6252]{background-color:#fff}.white h2[data-v-727a6252]{color:#818181}.white h2[data-v-727a6252]:after{background-color:#c2c2c2}",""])},eF2h:function(e,t,a){var n=a("dBdK");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("4ff02123",n,!1,{sourceMap:!1})},gh4o:function(e,t,a){"use strict";t.a={mounted:function(e){this.currentRoute,document.getElementById("prevBtn"),document.getElementById("nextBtn");console.log("mont"),console.log("weereee")},asyncData:function(e){return console.log(e.route,"contect"),{transitionContainer:"",transitionName:"d",yearSelected:"",years:["1910","1929","1942","1974","2001","2004","2010","2014"],n:0,yearPages:["1910","1929","1972","2001"],currentRoute:e.route.name.split("-").pop()}},head:{title:"History",script:[],link:[]},methods:{getRouteName:function(){return this.$route.name}},transition:{mode:"out-in",css:!1,beforeEnter:function(){console.log("beforeenter");document.getElementById("heroimage");var e=document.getElementsByClassName("heading")[0],t=document.getElementsByClassName("map-nav")[0];document.getElementsByClassName("container2")[0].style.opacity=0,Velocity(e,{translateX:"-500px"},{duration:0}),Velocity(t,{translateX:"500px"},{duration:0})},enter:function(e){console.log("historyenter");var t=document.getElementById("heroimage"),a=document.getElementsByClassName("heading")[0],n=document.getElementsByClassName("container2")[0],o=document.getElementsByClassName("map-nav")[0];Velocity(n,{opacity:1},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(a,{translateX:"00px"},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(o,{translateX:"00px"},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(t,{scale:1.1},{duration:800,easing:[.65,.05,.51,.99]})}}}},"zjh+":function(e,t,a){"use strict";var n=function(){var e=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"content"},[t("div",{staticClass:"container2 "},[t("div",{staticClass:"hero-image-con"},[t("img",{staticClass:"obj-fit-cover obj-pos-lc",attrs:{id:"heroimage",src:"/images/history/SSSC16.jpg"}}),t("div",{staticClass:"heading justify-center",staticStyle:{"padding-top":"200px"}},[t("h1",[this._v("Today and into the future we're building Sitka's legacy as an educational and scientific community")])])])])])])}]};t.a=o}});