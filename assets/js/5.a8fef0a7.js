(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(t,e,n){"use strict";var s={computed:{unreleased(){return null!==this.version.apiTag.match(/(draft|alpha|beta)/i)},versioned(){return null!==this.$page.regularPath.match(/\/documentation\/([^\/]+)\//)},otherVersions(){return this.$site.themeConfig.versions.map((t,e)=>{var n=this.$site.themeConfig.versions[this.versionIndex],s=this.$site.themeConfig.versions[e];return t.regularPath=this.$page.regularPath.replace(n.path,s.path),t}).filter((t,e)=>e!==this.versionIndex&&this.$site.pages.findIndex(e=>e.regularPath==t.regularPath)>=0)},version(){return this.$site.themeConfig.versions[this.versionIndex]},defaultVersion(){return this.$site.themeConfig.versions[this.$site.themeConfig.defaultVersion]},versionIndex(){const{themeConfig:t}=this.$site;var e=this.$page.regularPath.match(/\/documentation\/([^\/]+)\//);if(Array.isArray(e)&&"string"==typeof e[1])for(var n in t.versions)if(t.versions[n].folder===e[1])return parseInt(n);return 0}}},i=n(4),r=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=r.exports},158:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"c",(function(){return m}));const s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function d(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,s){const{pages:i,themeConfig:r}=n,a=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return g(t);const o=a.sidebar||r.sidebar;if(o){const{base:n,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,o);return"auto"===s?g(t):s?s.map(t=>function t(e,n,s,i=1){if("string"==typeof e)return p(n,e,s);if(Array.isArray(e))return Object.assign(p(n,e[0],s),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(p(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}},164:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:h,h:r,m:i,s:s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",_={};_[b]=g;var $=function(t){return t instanceof w},k=function(t,e,n){var s;if(!t)return b;if("string"==typeof t)_[t]&&(s=t),e&&(_[t]=e,s=t);else{var i=t.name;_[i]=t,s=i}return!n&&s&&(b=s),s||!n&&b},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},y=v;y.l=k,y.i=$,y.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function g(t){this.$L=k(t.locale,null,!0),this.parse(t)}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return y},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return C(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<C(t)},m.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,u=!!y.u(e)||e,d=y.p(t),p=function(t,e){var s=y.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?s:s.endOf(a)},f=function(t,e){return y.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case c:return u?p(1,0):p(31,11);case l:return u?p(1,m):p(0,m+1);case o:var _=this.$locale().weekStart||0,$=(g<_?g+7:g)-_;return p(u?v-$:v+(6-$),m);case a:case h:return f(b+"Hours",0);case r:return f(b+"Minutes",1);case i:return f(b+"Seconds",2);case s:return f(b+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,u=y.p(t),d="set"+(this.$u?"UTC":""),p=(o={},o[a]=d+"Date",o[h]=d+"Date",o[l]=d+"Month",o[c]=d+"FullYear",o[r]=d+"Hours",o[i]=d+"Minutes",o[s]=d+"Seconds",o[n]=d+"Milliseconds",o)[u],f=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var g=this.clone().set(h,1);g.$d[p](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[y.p(t)]()},m.add=function(n,u){var h,d=this;n=Number(n);var p=y.p(u),f=function(t){var e=C(d);return y.w(e.date(e.date()+Math.round(t*n)),d)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===a)return f(1);if(p===o)return f(7);var g=(h={},h[i]=t,h[r]=e,h[s]=1e3,h)[p]||1,m=this.$d.getTime()+n*g;return y.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].substr(0,r)},h=function(t){return y.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:y.s(r,2,"0"),h:h(1),hh:h(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return s.replace(f,(function(t,e){return e||g[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,d){var p,f=y.p(h),g=C(n),m=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=y.m(this,g);return b=(p={},p[c]=b/12,p[l]=b,p[u]=b/3,p[o]=(v-m)/6048e5,p[a]=(v-m)/864e5,p[r]=v/e,p[i]=v/t,p[s]=v/1e3,p)[f]||v,d?b:y.a(b)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return _[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=k(t,e,!0);return s&&(n.$L=s),n},m.clone=function(){return y.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),x=w.prototype;return C.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",c],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,w,C),t.$i=!0),C},C.locale=k,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=_[b],C.Ls=_,C.p={},C}()},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},174:function(t,e,n){},175:function(t,e,n){},176:function(t,e,n){},177:function(t,e){t.exports=function(t){return null==t}},178:function(t,e,n){},179:function(t,e,n){},180:function(t,e,n){},181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){},217:function(t,e,n){"use strict";n.r(e);var s=n(158),i={name:"SidebarGroup",components:{DropdownTransition:n(218).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(217).default},methods:{isActive:s.e}},r=(n(230),n(4)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,s,i){const r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,n)}function l(t,e,n,i,r,a=1){return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u,e.level-1),l(t,e.children,n,i,r,a+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:r,$themeLocaleConfig:a},props:{item:u,sidebarDepth:c}}){const h=Object(s.e)(i,u.path),d="auto"===u.type?h||u.children.some(t=>Object(s.e)(i,u.basePath+"#"+t.slug)):h,p="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):o(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,a.sidebarDepth,r.sidebarDepth,1].find(t=>void 0!==t),g=a.displayAllHeaders||r.displayAllHeaders;if("auto"===u.type)return[p,l(t,u.children,u.basePath,i,f)];if((d||g)&&u.headers&&!s.d.test(u.path)){return[p,l(t,Object(s.c)(u.headers),u.path,i,f)]}return p}};n(231);function c(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?c(t,e):"page"===e.type&&Object(s.e)(t,e.path))}var h={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(r.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(c(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)}}},d=Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},218:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(222),n(4)),r=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},219:function(t,e,n){"use strict";n(170)},220:function(t,e,n){"use strict";n(171)},221:function(t,e,n){"use strict";n(172)},222:function(t,e,n){"use strict";n(173)},223:function(t,e,n){"use strict";n(174)},224:function(t,e,n){"use strict";n(175)},225:function(t,e,n){"use strict";n(176)},226:function(t,e,n){"use strict";n(178)},227:function(t,e,n){var s=n(6),i=n(1),r=n(5);t.exports=function(t){return"string"==typeof t||!i(t)&&r(t)&&"[object String]"==s(t)}},228:function(t,e,n){"use strict";n(179)},229:function(t,e,n){"use strict";n(180)},230:function(t,e,n){"use strict";n(181)},231:function(t,e,n){"use strict";n(182)},232:function(t,e,n){"use strict";n(183)},233:function(t,e,n){"use strict";n(184)},234:function(t,e,n){"use strict";n(185)},321:function(t,e,n){"use strict";n.r(e);var s=n(164),i=n.n(s),r=n(158),a={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction(){this.$emit("focusout")}}},o=n(4),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,u={name:"Home",components:{NavLink:l},props:["blog","defaultVersion"],computed:{data(){return this.$page.frontmatter}}},c=(n(219),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[n("img",{attrs:{src:"/images/openeo_logo.png",alt:"openEO"}}),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      openEO develops an open API to connect R, Python, JavaScript and other clients to big Earth observation cloud back-ends in a simple and unified way.\n    ")]),t._v(" "),n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:{link:"/about/",text:"Why?"}}}),t._v(" "),n("NavLink",{staticClass:"action-button",attrs:{item:{link:this.$site.themeConfig.docPath,text:"Get Started!"}}})],1)]),t._v(" "),n("div",{staticClass:"features"},[n("div",{staticClass:"feature"},[n("h2",[t._v("Latest News")]),t._v(" "),n("News",{attrs:{limit:2}})],1),t._v(" "),n("div",{staticClass:"feature"},[n("h2",[t._v("Other Channels")]),t._v(" "),n("Channels")],1),t._v(" "),t._m(0)]),t._v(" "),n("Content",{staticClass:"theme-default-content custom"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"feature"},[e("h2",[e("img",{staticStyle:{height:"1.8rem"},attrs:{align:"right",src:"https://openeo.org/images/eu.jpg",alt:"EU flag"}}),this._v("\n        Funding\n      ")]),this._v(" "),e("p",[this._v("\n        openEO is an H2020 project funded under call EO-2-2017: EO Big Data Shift, under grant number "),e("a",{attrs:{href:"http://cordis.europa.eu/projects/776242",target:"_blank"}},[this._v("776242")]),this._v(". The project runs from Oct 2017 to Sept 2020.\n      ")])])}],!1,null,null,null).exports),h=n(49),d=n.n(h),p=(t,e,n=null)=>{let s=d()(e,"title","");return d()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),f(t,s)};const f=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var g={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,i=[];for(let r=0;r<e.length&&!(i.length>=n);r++){const a=e[r];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(p(t,a))i.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(i.length>=n);e++){const n=a.headers[e];n.title&&p(t,a,n.title)&&i.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},m=(n(220),Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,s){return n("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),v=(n(221),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),b=n(218),_=n(50),$=n.n(_),k={name:"DropdownLink",components:{NavLink:l,DropdownTransition:b.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>$()(e)===t}},C=(n(223),{name:"NavLinks",components:{NavLink:l,DropdownLink:Object(o.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(s){return n("li",{key:s.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:s},on:{focusout:function(n){t.isLastItemOfArray(s,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userLinks(){return this.$site.themeConfig.nav.map(t=>(t.userNav?(t.items=this.getNav("userNav"),t.index=Math.random()):t.devNav&&(t.items=this.getNav("devNav"),t.index=Math.random()),Object.assign(this.resolveNavLinkItem(t),{items:(t.items||[]).map(t=>this.resolveNavLinkItem(t))})))}},methods:{resolveNavLinkItem:t=>Object.assign(t,{type:t.items&&t.items.length?"links":"link"}),prepareNavLinks(t,e){if(Array.isArray(t))return t.map(t=>this.prepareNavLinks(t,e));var n=Object.assign({},t);for(var s in n)n[s]&&"object"==typeof n[s]?n[s]=this.prepareNavLinks(n[s],e):"link"!==s||n.link.match(/^(\/|[\w\d]+:)/i)||(n.link=e+n.link);return n},getNav(t){const{versions:e,defaultVersion:n}=this.$site.themeConfig;var s=e.findIndex(t=>this.$page.regularPath.startsWith(t.path));s<0&&(s=n);var i=this.prepareNavLinks(e[s][t],e[s].path);return i.push({text:"Versions",items:e.map(t=>({text:t.title,link:t.path}))}),i}}}),y=(n(224),Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return e("div",{key:t.index||t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var x={name:"Navbar",components:{SidebarButton:v,NavLinks:y,SearchBox:m,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(w(this.$el,"paddingLeft"))+parseInt(w(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},S=(n(225),Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),L=n(177),O=n.n(L),D={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=O()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:s="master",docsRepo:i=e}=this.$site.themeConfig;return t&&i&&this.$page.relativePath?this.createEditLink(e,i,n,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(t)){return(r.i.test(e)?e:t).replace(r.a,"")+"/src"+`/${s}/`+(n?n.replace(r.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(r.i.test(e)?e:"https://github.com/"+e).replace(r.a,"")+"/edit"+`/${s}/`+(n?n.replace(r.a,"")+"/":"")+i}}},I=(n(226),Object(o.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),N=n(227),M=n.n(N),j={name:"PageNav",props:["sidebarItems"],computed:{prev(){return P(E.PREV,this)},next(){return P(E.NEXT,this)}}};const E={NEXT:{resolveLink:function(t,e){return T(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return T(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function P(t,{$themeConfig:e,$page:n,$route:s,$site:i,sidebarItems:a}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:u}=t,c=l(e),h=u(n),d=O()(h)?c:h;return!1===d?void 0:M()(d)?Object(r.j)(i.pages,d,s.path):o(n,a)}function T(t,e,n){const s=[];!function t(e,n){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+n]}}var A=j,H=(n(228),{components:{PageEdit:I,PageNav:Object(o.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),V=(n(229),Object(o.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:n(217).default,NavLinks:y},props:["items"]},W=(n(232),Object(o.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),R=n(157),Y={name:"VersionChooser",components:{NavLink:l},props:{sidebar:{type:Boolean,default:!1}},mixins:[R.a]},B=(n(233),{name:"Layout",components:{Home:c,Page:V,Sidebar:W,Navbar:S,VersionChooser:Object(o.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.versioned?n("div",{attrs:{id:"docVersionChooser"}},[t.sidebar?n("nav",{staticClass:"nav-links"},[n("div",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown-wrapper open"},[t._m(0),t._v(" "),n("ul",{staticClass:"nav-dropdown"},[t.otherVersions.length?t._l(t.otherVersions,(function(t,e){return n("li",{key:e,staticClass:"dropdown-item"},[n("NavLink",{attrs:{item:{link:t.regularPath,text:t.title}}})],1)})):n("li",{staticClass:"dropdown-item"},[n("em",[t._v("Not available")])])],2)])])]):n("div",{staticClass:"dropdown-wrapper"},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":"Version"}},[n("span",{staticClass:"title"},[t._v("Version: "+t._s(t.version.title))]),t._v(" "),n("span",{staticClass:"arrow right"})]),t._v(" "),n("ul",{staticClass:"nav-dropdown",staticStyle:{display:"none"}},[n("li",{staticClass:"dropdown-item"},[n("h4",[t._v("Applicable API Versions")]),t._v(" "),n("ul",{staticClass:"dropdown-subitem-wrapper"},[t.unreleased?n("li",{staticClass:"dropdown-subitem"},[n("em",[t._v("Unreleased")])]):t._l(t.version.apiVersions,(function(e){return n("li",{key:e,staticClass:"dropdown-subitem"},[n("span",[t._v(t._s(e))])])}))],2)]),t._v(" "),n("li",{staticClass:"dropdown-item"},[n("h4",[t._v("Other Page Versions")]),t._v(" "),n("ul",{staticClass:"dropdown-subitem-wrapper"},[t.otherVersions.length?t._l(t.otherVersions,(function(t,e){return n("li",{key:e,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:{link:t.regularPath,text:t.title}}})],1)})):n("li",{staticClass:"dropdown-subitem"},[n("em",[t._v("Not available")])])],2)])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":"Other Versions"}},[e("span",{staticClass:"title"},[this._v("Other Page Versions")])])}],!1,null,null,null).exports},mixins:[R.a],data:()=>({isSidebarOpen:!1}),computed:{shouldShowFullpage(){return this.$page.frontmatter.iframe||this.$page.frontmatter.fullpage},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!this.shouldShowFullpage&&!t.news&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.k)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},filters:{date:t=>i()(t).format("MMMM D, YYYY")},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=(n(234),Object(o.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[n("VersionChooser",{attrs:{sidebar:!0}}),t._v(" "),t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),n("VersionChooser"),t._v(" "),t.$page.frontmatter.home?n("Home",{attrs:{defaultVersion:t.defaultVersion}}):t.$page.frontmatter.news?n("main",{staticClass:"page"},[n("div",{staticClass:"theme-default-content news"},[n("h1",[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),n("small",{staticClass:"news-meta"},[t._v("Written\n        "),t.$page.frontmatter.date?[t._v("on "),n("em",[t._v(t._s(t._f("date")(t.$page.frontmatter.date)))])]:t._e(),t._v(" "),t.$page.frontmatter.author?[t._v("by "),n("em",[t._v(t._s(t.$page.frontmatter.author))])]:t._e(),t._v(".\n      ")],2),t._v(" "),n("Content")],1)]):t.shouldShowFullpage?n("main",{staticClass:"fullpage",class:{page:!t.$page.frontmatter.stripCSS}},[t.$page.frontmatter.iframe?n("InlineFrame",{key:t.$page.key,attrs:{url:t.$page.frontmatter.iframe,version:t.version}}):n("Content",{staticClass:"fullpage-content"})],1):t.$page.frontmatter.custom?n("main",{staticClass:"page"},[n("Content",{staticClass:"theme-default-content custom"})],1):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null));e.default=G.exports}}]);