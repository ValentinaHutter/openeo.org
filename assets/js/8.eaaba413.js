(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(e,s,r){},219:function(e,s,r){"use strict";var a=r(171);r.n(a).a},229:function(e,s,r){"use strict";r.r(s);var a={name:"InlineFrame",props:["url","version"],data:()=>({frameUrl:null}),beforeMount(){this.frameUrl=this.url.replace("{apiTag}",this.version.apiTag).replace("{processesTag}",this.version.processesTag),window.location.hash&&(this.frameUrl+=window.location.hash)}},t=(r(219),r(3)),n=Object(t.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("iframe",{staticClass:"stretch",attrs:{src:this.frameUrl}})}),[],!1,null,null,null);s.default=n.exports}}]);