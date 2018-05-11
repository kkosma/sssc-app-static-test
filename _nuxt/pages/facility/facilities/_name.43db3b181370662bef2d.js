webpackJsonp([9],{JMOe:function(e,t){e.exports={title:"Molly O. Ahlgren Aquarium",image:"/images/uploads/aquarium-facility.jpg",__content:"<p>Explore the Molly O. Ahlgren aquarium at the Sitka Sound Science Center. Touch the critters of the tidal pools, listen to whale songs, climb up under a tank to get a fish eye view, check out some amazing whale bones, and learn all about the animals that live in the ocean surrounding Sitka.</p>\n<p><strong>Touch Tanks</strong>—the undersea life is literally at your fingertips. Run a finger over a pointy urchin, stroke the smooth sides of an anemone, and admire the foot-long starfish that live within the touch tanks.</p>\n<p><strong>60 Feet Deep</strong>—an 800-gallon saltwater tank contains some of the fish and invertebrates found 60 feet below the surface of the ocean. Get eye to eye with deep-dwelling rockfish, sculpins, our resident wolf eel, Wanda, and many others—no scuba gear needed!</p>\n<p><strong>Mounted Aquariums</strong>—six mounted aquatic habitats showcase mini-versions of many of the ecosystems important to marine life in Southeast Alaska.</p>\n<p><strong>Killer Whale Skeleton</strong>—the skeleton of an adolescent killer whale is suspended in our aquarium. The body of the whale was discovered in 2011 on Kruzof Island near Sitka. Click here to watch a video of the rearticulation of the skeleton before coming and seeing for yourself!</p>\n<p>Our aquarium is dedicated to the late Molly O. Ahlgren, a Sheldon Jackson College professor whose enthusiasm and love of learning reached far out of the classroom. Molly was not only the creator of the aquarium but also a driving force for science education throughout Southeast Alaska. She believed that the best type of learning was hands-on learning and had her grad students build the touchtanks you’ll find in our aquarium today. She believed that there was magic in nature and wanted to bring that magic up out of the sea for people to touch and learn about. She said,</p>\n<p><em>“There is a magic indwelt in nature, the mystery of life and passion, the drive to embrace each moment and not let a second pass un-experienced.”</em></p>\n<p>There was a magic indwelt in Molly too, a magic she has left for you to find in the aquarium.</p>\n"}},Kr1Q:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"right"},[a("div",{attrs:{id:"impetusInfo"}},[a("div",{staticClass:"info-con"},[a("h1",[e._v(e._s(e.project.title))]),a("h3",[e._v(e._s(e.project.age))])]),a("div",{staticClass:"info-body"},[a("div",{domProps:{innerHTML:e._s(e.project.__content)}})])])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n},Q5eJ:function(e,t,a){"use strict";var i=a("bOdI"),n=a.n(i);t.a={validate:function(e){var t=e.params;return console.log(t,"paramssss",this.props),t.name},asyncData:function(e){var t=e.params,i=e.env;e.error;console.log(t.name,"paramsideee");var n=a("gAAz")("./"+t.name+".md");return console.log("projectt",n),{project:n,projects:i.projects}},transition:n()({name:"id",mode:"out-in",css:!0,leave:function(e){console.log("indexleave");document.getElementById("homevid");Velocity(nav,{translateX:"500px",opacity:0},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(heading,{translateX:"-500px",opacity:0},{duration:800,easing:[.65,.05,.51,.99]}),Velocity(video,{scale:"1.5",opacity:0},{duration:800,easing:[.65,.05,.51,.99]})},beforeEnter:function(){console.log("beforeevnt");var e=document.getElementsByClassName("animal-type-heading")[0];Velocity(e,{translateY:"50px",opacity:0},{duration:0})},enter:function(e){console.log("categoryenter");var t=document.getElementsByClassName("animal-type-heading")[0];Velocity(t,{translateY:"0px",opacity:0},{duration:800,easing:[100,0]})}},"leave",function(e){}),head:function(){return{title:this.name}},mounted:function(e){var t;(a=document.getElementById("impetusInfo")).clientHeight>1080?t=Math.abs(a.clientHeight-1480):Math.abs(t=a.clientHeight+660),console.log(a.clientHeight,t,"boundsss");new Impetus({onUp:function(){},route:this,source:a,boundY:[-t,0],initialValues:[0,0],update:function(e,t){a.style.transform="translateY("+t+"px)"}});var a=document.getElementById("impetusInfo")}}},XgSg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Q5eJ"),n=a("Kr1Q"),o=!1;var r=function(e){o||a("tkyu")},s=a("VU/8")(i.a,n.a,!1,r,"data-v-0579161f",null);s.options.__file="pages/facility/facilities/_name.vue",t.default=s.exports},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("C4MV"),o=(i=n)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,o.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},c3D9:function(e,t){e.exports={title:"Sheldon Jackson Hatchery",image:"/images/uploads/sheldon-jackson-hatchery.jpg",__content:"<p>The Sheldon Jackson Hatchery is an operating salmon hatchery permitted by the Alaska Department of Fish and Game to raise and produce 250,000 coho, 3 million pink, and 12 million chum each year. It also serves as an educational and training tool—the only training facility of this scope in Alaska. Since its inception in 1974, the Sheldon Jackson Hatchery has trained many of Alaska’s fisheries biologists, fisheries managers, and aquaculture specialists.</p>\n<p>Visitors to Sitka Sound Science Center can tour our operational hatchery. Learn in detail about the relationship between hatcheries and commercial fishing, how hatcheries work in Alaska, and how they capitalize on the life cycle of the salmon.</p>\n<p>The Sheldon Jackson Hatchery has a close partnership with the Northern Southeast Regional Aquaculture Association (NSRAA). In addition to providing training and research opportunities to members of NSRAA, the hatchery releases 9 million of the chum it produces at NSRAA’s Deep Inlet fishery.</p>\n<p>The Sheldon Jackson Hatchery also partners with the Fisheries Technology Program at the University of Alaska Southeast (UAS), Sitka campus. The Fisheries Technology Program provides associate degrees and certification in aquaculture and fisheries management.</p>\n<p>We also have our own hatchery internship opportunity, click here for more details.</p>\n<p>Sitka Sound Science Center offers hands-on training opportunities for students in the programs via workshops and internships.</p>\n"}},gAAz:function(e,t,a){var i={"./aquarium.md":"JMOe","./gift-shop.md":"wkLh","./hatchery.md":"c3D9","./steward-library.md":"kGYh"};function n(e){return a(o(e))}function o(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="gAAz"},iwz6:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'.info-distribution-map[data-v-0579161f]{position:relative;height:100%}#dmapus[data-v-0579161f],#dmapworld[data-v-0579161f]{top:0;left:0;z-index:2;width:200px}#dmapus[data-v-0579161f]{z-index:3;position:absolute}.animal-back[data-v-0579161f]{width:100vw;height:100vh;position:absolute;top:0;left:0;display:block;background-color:#13284b}.animal-id-img[data-v-0579161f]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;position:relative}.video-back[data-v-0579161f]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;mix-blend-mode:soft-light;opacity:.35}.info-nav[data-v-0579161f]{margin:64px 0;margin:4rem 0;padding:0 112px;padding:0 7rem;font-family:Proxima Nova;font-size:20.8px;font-size:1.3rem;color:#2e3131}.info-nav i[data-v-0579161f]{font-size:44px;font-size:2.75rem;color:#355da7;text-align:center;vertical-align:middle;line-height:16px;line-height:1rem}.info-nav li[data-v-0579161f]{display:inline-block;margin:0 8px;margin:0 .5rem}.info-con[data-v-0579161f]{padding:100px;padding-top:140px;position:relative;min-height:480px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.info-icon i[data-v-0579161f]{font-size:64px;font-size:4rem;color:#fff}.info-con[data-v-0579161f]:after{content:"";width:100%;height:100%;position:absolute;top:0;left:30%;background:url("/images/facility/facility-icon.svg") no-repeat;opacity:.05;background-size:80%;-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}.info-body[data-v-0579161f]{padding:60px 100px;background-color:#fffcf6;color:#000;min-height:50%;padding-bottom:640px}.info-body p[data-v-0579161f]{color:#454545}.info-row[data-v-0579161f]{display:-webkit-box;display:-ms-flexbox;display:flex}.info-header[data-v-0579161f],.info-row[data-v-0579161f]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%}.info-header[data-v-0579161f]{display:block;margin:48px 0;margin:3rem 0;margin-bottom:32px;margin-bottom:2rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.info-item-text[data-v-0579161f],.info-item[data-v-0579161f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;justify-items:start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-box-flex:1;-ms-flex:1;flex:1}.info-item-text[data-v-0579161f]{-ms-flex-item-align:start;align-self:start;font-weight:300}.info-icon[data-v-0579161f]{width:60px;height:60px;margin:0 auto;-ms-flex-item-align:start;align-self:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex}.info-lifespan[data-v-0579161f]{background:url("/images/lifespan.svg") no-repeat;opacity:.5}.info-population[data-v-0579161f]{background:url("/images/population-icon.svg") no-repeat}.info-length[data-v-0579161f]{background:url("/images/size.svg") no-repeat;width:120px;opacity:.5;background-position:50%}.info-label[data-v-0579161f],.info-text[data-v-0579161f]{text-transform:uppercase;font-size:16px;font-size:1rem;color:#fff;text-align:center;font-family:Proxima Nova;font-weight:700;margin:4.8px 0;margin:.3rem 0}.info-label[data-v-0579161f]{margin-top:20px;color:hsla(0,0%,100%,.55);font-size:19.2px;font-size:1.2rem}.info-text[data-v-0579161f]{font-weight:300;font-size:20.8px;font-size:1.3rem;text-transform:none}h1[data-v-0579161f]{font-family:Sofia;font-size:72px;font-size:4.5rem;color:#fff;line-height:1.2;left:0;text-transform:none;text-align:left;font-weight:900;text-transform:uppercase}h2[data-v-0579161f]{color:#00b3ad;font-family:museo-sans,sans-serif;font-size:48px;font-size:3rem;font-style:italic;font-weight:300;margin:12px 0;margin:.75rem 0;padding:0 112px;padding:0 7rem}h3[data-v-0579161f]{font-family:Sofia;font-size:38.4px;font-size:2.4rem;margin-top:16px;margin-top:1rem;font-weight:300;font-style:italic;color:hsla(0,0%,100%,.55)}hr[data-v-0579161f]{opacity:.25;height:25px;margin-top:32px;margin-top:2rem;margin-bottom:32px;margin-bottom:2rem;border-top:0;background:url(/images/dotted-line.svg);background-size:25px 25px;background-origin:content-box;background-position:50%;background-repeat:repeat-x;border:none;opacity:1}p[data-v-0579161f]{font-size:20px}.player[data-v-0579161f]{text-align:center;margin-top:100px;font-family:sans-serif}.page-enter-active[data-v-0579161f],.page-leave-active[data-v-0579161f]{-webkit-transition:opacity .7s;transition:opacity .7s;-webkit-transition-timing-function:easeInQuad;transition-timing-function:easeInQuad}.page-enter[data-v-0579161f],.page-leave-to[data-v-0579161f]{-webkit-transition:opacity .s;transition:opacity .s;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-delay:.05s;transition-delay:.05s}.page-enter-active .info-body[data-v-0579161f],.page-enter-active .info-con[data-v-0579161f],.page-leave-active .info-body[data-v-0579161f],.page-leave-active .info-con[data-v-0579161f]{-webkit-transition:opacity .5s,-webkit-transform .6s;transition:opacity .5s,-webkit-transform .6s;transition:transform .6s,opacity .5s;transition:transform .6s,opacity .5s,-webkit-transform .6s;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transform:translateY(0);transform:translateY(0);opacity:1;-webkit-transition-delay:.1s;transition-delay:.1s}.page-enter .info-body[data-v-0579161f],.page-enter .info-con[data-v-0579161f]{-webkit-transform:translateY(3rem);transform:translateY(3rem);opacity:0;-webkit-transition-delay:0s;transition-delay:0s}.page-leave-to .info-body[data-v-0579161f],.page-leave-to .info-con[data-v-0579161f]{-webkit-transform:translateY(-3rem);transform:translateY(-3rem);opacity:0;-webkit-transition-delay:0s;transition-delay:0s}.page-enter-active .overlay-w[data-v-0579161f],.page-leave-active .overlay-w[data-v-0579161f]{opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s}.page-enter .overlay-w[data-v-0579161f],.page-leave-to .overlay-w[data-v-0579161f]{opacity:0}',""])},kGYh:function(e,t){e.exports={title:"Steward Library",image:"/images/uploads/steward-library.jpg",__content:"<p>A library is at the heart of every institution that seeks to understand our world and to expand our knowledge of it. It is a requirement for the accreditation of every institution of higher learning in the US. A library is a physical symbol of the network through which knowledge is made available and shared. It represents books, but far more, in our Internet world, it represents access in our workplaces, our homes and the field to information that helps and confirms what we seek to do.</p>\n<p>Margaret and David earned PhDs at Yale University. They both taught at Emory University, and later Margaret became Professor in the Psychiatry Department at the University of California, Davis, School of Medicine and Associate Dean of the Medical School. David taught at The Pacific School of Religion and The Graduate Theological Union in Berkeley where he worked as Convener of the GTU Inter-Area PhD program and Dean of Advanced Professional Studies at PSR. They collaborated on research dealing with children and families at risk as they taught and published together.</p>\n<p>Margaret and David have supported what they see as the core of the Sitka Sound Science Center. They have helped us link with colleges and research institutions to advocate for the experiences of the natural world which Sitka has to offer their studies and research efforts. They have helped us organize Sitka community resources to serve students and researchers who come here. They suggested the concept of “Field Station” as a way to understand our commitment to the complex relationships involved in matching students and researchers with the incredible natural resources available in Sitka. They are helping us develop programs that express our identity as a Field Station in a sustainable way. </p>\n"}},tkyu:function(e,t,a){var i=a("iwz6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("0b085180",i,!1,{sourceMap:!1})},wkLh:function(e,t){e.exports={title:"Gift Shop",image:"/images/uploads/gift-shop.jpg",__content:"<p>The Sitka Sound Science Center Retail Shop is a fantastic place to get gifts and gear for all the ocean-loving people in your life. Located in the historic Mill Building next door to the Science Center, our retail shop is full of great finds: beautiful apparel and accessories, classy decor and dining ware, books, cards, and more.</p>\n<p>If you didn’t get a chance to visit our retail shop, or just want to see even more beautiful Science Center swag, you can shop online at our online store.</p>\n"}}});