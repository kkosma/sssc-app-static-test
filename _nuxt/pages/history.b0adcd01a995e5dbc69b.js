webpackJsonp([27],{"6F89":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page1",staticStyle:{"background-color":"#fffdfa",height:"100%",width:"100%",position:"absolute"}},[a("div",{staticClass:"top-nav history-nav"},[a("div",{staticClass:"nav-back",staticStyle:{"background-image":"url('/images/history/nav-back-history.jpg')"}}),a("ul",[a("li",[a("nuxt-link",{attrs:{to:"/",exact:""}},[a("i",{staticClass:"material-icons"},[e._v("home")])])],1),a("li",[a("nuxt-link",{attrs:{to:"/history"}},[e._v("History")])],1)])]),a("nuxt-link",{attrs:{to:"/history",transition:e.transitionName}},[a("div",{staticClass:"back-button nav-button"},[a("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_left")])])]),a("nuxt-child"),a("div",{staticClass:"bottom-nav"},[a("div",{staticClass:"slide-nav nav-button"},[a("nuxt-link",{staticClass:"nav-left",attrs:{to:e.navLinks("prev",e.currentRoute),id:"prevBtn"},nativeOn:{click:function(t){e.updateTimeline(e.currentRoute)}}},[a("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_left")])]),a("nuxt-link",{staticClass:"nav-right",attrs:{to:e.navLinks("next",e.currentRoute),id:"nextBtn"},nativeOn:{click:function(t){e.updateTimeline(e.currentRoute)}}},[a("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_right")])])],1),a("ol",{staticClass:"flex-con history-event"},[a("h2",[e._v("Our History")]),e._l(e.yearPages,function(t,n,o){return a("nuxt-link",{key:t,staticClass:"time-dot",attrs:{tag:"li",to:"/history/"+t,"data-year":t},nativeOn:{click:function(a){e.timeLine(a),e.yearSelected=t}}},[a("span",[e._v(e._s(t[0].toUpperCase()+t.substr(1)))]),a("a",{staticClass:"dot"})])})],2)])],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};t.a=o},AM2X:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"h1[data-v-08d2122b]{font-size:48px;font-size:3rem}.ftscroller_container[data-v-08d2122b],.ftscroller_x[data-v-08d2122b],.ftscroller_y[data-v-08d2122b],.hero-image-con[data-v-08d2122b]{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-image-con[data-v-08d2122b]{height:100vh;width:100vw}.justify-center[data-v-08d2122b]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.container2[data-v-08d2122b]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:100vh;position:relative;overflow-x:auto;min-width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-overflow-scrolling:touch}.white p[data-v-08d2122b]{color:#464646}.white .section[data-v-08d2122b]{background-color:#fff}.white h2[data-v-08d2122b]{color:#818181}.white h2[data-v-08d2122b]:after{background-color:#c2c2c2}.flex-con[data-v-08d2122b]{-ms-flex-item-align:center;align-self:center;bottom:auto;padding-bottom:20px}.bottom-nav[data-v-08d2122b]{background-color:#3356a0;height:110px;width:100%;position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:4}.slide-nav[data-v-08d2122b]{bottom:0;right:20px;height:110px}",""])},f7vZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pFRA"),o=a("6F89"),i=!1;var s=function(e){i||a("rRq+")},r=a("VU/8")(n.a,o.a,!1,s,"data-v-08d2122b",null);r.options.__file="pages/history.vue",t.default=r.exports},pFRA:function(e,t,a){"use strict";var n=["1910","1929","1972","2001","2005","2007","2010-2014","present"];t.a={mounted:function(e){console.log("timelines"),console.log(this,"contect");this.currentRoute,document.getElementById("prevBtn"),document.getElementById("nextBtn");console.log("mont"),console.log("weereee")},asyncData:function(e){return{transitionContainer:"",transitionName:"d",yearSelected:"",n:0,yearPages:n,currentRoute:e.route.name.replace("history-","")}},head:{title:"History",script:[],link:[]},methods:{updateTimeline:function(e){var t=this;setTimeout(function(a){if(console.log("yeard",e),e=t.$route.name.replace("history-",""),console.log("yeard",e,void 0),"history"==e){a=document.querySelector('[data-year="'+n[0]+'"]');console.log(a,"parent"),a.classList.add("yearSelected")}else{a=document.querySelector('[data-year="'+e+'"]');document.getElementsByClassName("yearSelected")[0]&&document.getElementsByClassName("yearSelected")[0].classList.remove("yearSelected");var o=a.previousElementSibling,i=a.nextElementSibling;if(o)for(o.classList.add("older-event");o=o.previousElementSibling;)o.classList.add("older-event");if(i)for(i.classList.remove("older-event");i=i.nextElementSibling;)i.classList.remove("older-event")}},20,parent)},timeLine:function(e){if("A"==e.target.tagName){console.log("yearsssssssssssss",e.target),document.getElementsByClassName("yearSelected")[0]&&document.getElementsByClassName("yearSelected")[0].classList.remove("yearSelected");var t=e.target.parentElement;console.log(e.target,"tareget",t);var a=t.previousElementSibling,n=t.nextElementSibling;if(a)for(setTimeout(function(e){e.classList.add("older-event")},50,a);a=a.previousElementSibling;)setTimeout(function(e){e.classList.add("older-event")},50,a),console.log(a,"prev",a.classList);if(n)for(n.classList.remove("older-event");n=n.nextElementSibling;)n.classList.remove("older-event")}},navLinks:function(e,t){if(t=this.$route.name.replace("history-",""),"prev"==e)return"history"==t?"":void 0!=n[n.indexOf(t)-1]?n[n.indexOf(t)-1]:"/history";if("next"==e){if(console.log(t,n,"pagesss"),"history"==t)return t+"/1910";if(void 0!=n[n.indexOf(t)+1]){var a=n[n.indexOf(t)+1];return console.log(a,"neeeeeeeeeeeeeee"),a}return""}},getRouteName:function(){return this.$route.name}},transition:{mode:"out-in",css:!0,beforeEnter:function(){console.log("beforeenter");document.getElementById("heroimage");var e=document.getElementsByClassName("heading")[0],t=document.getElementsByClassName("map-nav")[0];document.getElementsByClassName("page1")[0].style.opacity=0,Velocity(e,{translateX:"-500px"},{duration:0}),Velocity(t,{translateX:"500px"},{duration:0})},enter:function(e){console.log("historyenter");var t=document.getElementById("heroimage"),a=document.getElementsByClassName("heading")[0],n=document.getElementsByClassName("page1")[0],o=document.getElementsByClassName("map-nav")[0];Velocity(n,{opacity:1},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(a,{translateX:"00px"},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(o,{translateX:"00px"},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(t,{scale:1.1},{duration:800,easing:[.65,.05,.51,.99]})},leave:function(e,t){var a=this.$route.name;console.log("to","from",a);document.getElementById("heroimage"),document.getElementsByClassName("heading")[0];var n=document.getElementsByClassName("content")[0],o=(document.getElementsByClassName("page")[0],document.getElementsByClassName("page1")[0]);"index"==a?Velocity(o,{opacity:0},{duration:600,easing:[.65,.05,.51,.99],complete:function(e){t()}}):(console.log("notindx"),Velocity(n,{opacity:0},{duration:600,easing:[.65,.05,.51,.99],complete:function(e){t()}}))}}}},"rRq+":function(e,t,a){var n=a("AM2X");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("eddf7ce0",n,!1,{sourceMap:!1})}});