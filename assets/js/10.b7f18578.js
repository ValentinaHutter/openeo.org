(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(e,t,s){},163:function(e,t,s){},167:function(e,t,s){"use strict";s(162)},168:function(e,t,s){"use strict";s(163)},300:function(e,t,s){"use strict";s.r(t);var a=s(155),r={name:"JsonSchema",components:{Description:()=>Promise.all([s.e(0),s.e(1)]).then(s.bind(null,305)),"openeo-json-schema":()=>Promise.resolve().then(s.bind(null,300))},props:{schema:{type:[Object,Array],default:()=>({})},initShown:{type:Boolean,default:!0},nestingLevel:{type:Number,default:1},processUrl:String},data(){return{visible:this.initShown,filteredObjectSchema:null}},beforeCreate(){a.a.enableHtmlProps(this),this.$options.components.ProcessParameter=s(169).default},computed:{showSchema(){return"object"==typeof this.schema&&null!==this.schema&&this.nestingLevel<20},showAnyType(){return a.a.isAnyType(this.schema)},isProcessGraph(){return"object"===this.schema.type&&"process-graph"===this.schema.subtype},isCompositeType(){return Array.isArray(this.schema)||Array.isArray(this.schema.anyOf)||Array.isArray(this.schema.oneOf)},compositeTypes(){return Array.isArray(this.schema)?this.schema:Array.isArray(this.schema.anyOf)?this.schema.anyOf:Array.isArray(this.schema.oneOf)?this.schema.oneOf:[this.schema]},hasReturns(){return this.isProcessGraph&&a.a.isObject(this.schema.returns)},hasParameters(){return this.isProcessGraph&&Array.isArray(this.schema.parameters)&&this.schema.parameters.length>0}},watch:{initShown(e){this.visible=e},schema:{immediate:!0,handler(e){var t=null;for(var s in e)"required"!=s&&"properties"!=s&&"parameters"!=s&&"returns"!==s&&(null===t&&(t={}),t[s]=e[s]);this.filteredObjectSchema=t,this.visible=this.initShown}}},methods:{show(){this.visible=!0},formatKey(e){switch(e){case"items":return"Array items";case"minItems":return"Min. number of items";case"const":return"Constant value";case"maxItems":return"Max. number of items";case"minimum":return"Minimum value (inclusive)";case"maximum":return"Maximum value (inclusive)";case"exclusiveMinimum":return"Minimum value (exclusive)";case"exclusiveMinimum":return"Maximum value (exclusive)";case"enum":return"Allowed values";case"default":return"Default value";case"type":return"Data type";case"allOf":return"Composite data type";case"contentMediaType":return"Media Type";case"contentEncoding":return"Encoding";case"deprecated":return"Deprecated";case"additionalProperties":return"Each property";default:if(e.length>1)return e.charAt(0).toUpperCase()+e.slice(1)}return e},formatType(e){return void 0===e&&(e=this.schema),a.a.dataType(e)},showRow(e){return"object"==e?"object"==this.schema.type&&"object"==typeof this.schema.properties:"title"!=e&&"description"!=e&&"subtype"!=e&&"format"!=e&&"anyOf"!=e&&"oneOf"!=e&&("items"!=e||1!==Object.keys(this.schema.items).length||void 0===this.schema.items.type)}}},i=(s(167),s(168),s(4)),n=Object(i.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showSchema?s("div",{staticClass:"vue-component json-schema"},[e.visible?[e.isProcessGraph?s("div",{staticClass:"schemaProcessGraph"},[s("div",{staticClass:"process-graph-parameters"},[s("p",{staticClass:"schema-attrs"},[e._v(e._s(e.formatKey("type"))+": "),s("span",{staticClass:"data-type"},[e._v("child process")])]),e._v(" "),e._m(0),e._v(" "),e.hasParameters?e._l(e.schema.parameters,(function(t,a){return s("ProcessParameter",{key:a,attrs:{parameter:t,processUrl:e.processUrl}})})):s("p",[e._v("No parameters defined.")]),e._v(" "),e._m(1),e._v(" "),e.hasReturns?[e.schema.returns.description?s("Description",{attrs:{description:e.schema.returns.description,processUrl:e.processUrl}}):e._e(),e._v(" "),e.schema.returns.schema?s("div",{staticClass:"json-schema-container"},[s("openeo-json-schema",{attrs:{schema:e.schema.returns.schema}})],1):e._e()]:s("p",[e._v("No constraints defined.")])],2)]):e.showRow("object")?s("div",{staticClass:"schemaObjectElement"},[s("div",{staticClass:"inline-schema-attrs"},[null!==e.filteredObjectSchema?s("openeo-json-schema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}}):e._e(),e._v(" "),s("table",{staticClass:"object-properties"},[e._m(2),e._v(" "),e._l(e.schema.properties,(function(t,a){return s("tr",{key:a},[s("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t\t\t"+e._s(a)+"\n\t\t\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(a)?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),e._v(" "),s("td",{staticClass:"value"},[s("openeo-json-schema",{attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})],1)])}))],2)],1)]):s("table",{staticClass:"schema-attrs"},["string"==typeof e.schema.title?s("tr",[s("td",{attrs:{colspan:"2"}},[s("strong",[e._v(e._s(e.schema.title))])])]):e._e(),e._v(" "),"string"==typeof e.schema.description?s("tr",[s("td",{attrs:{colspan:"2"}},[s("Description",{attrs:{description:e.schema.description,compact:!0}})],1)]):e._e(),e._v(" "),e.showAnyType?s("tr",[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey("type"))+":")]),e._v(" "),s("td",{staticClass:"value data-type"},[e._v("any")])]):e.isCompositeType?[e._m(3),e._v(" "),s("tr",[s("td",{staticClass:"schema-container data-types-container",attrs:{colspan:"2"}},e._l(e.compositeTypes,(function(t,a){return s("openeo-json-schema",{key:a,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1)])]:e._e(),e._v(" "),Array.isArray(this.schema)?e._e():e._l(e.schema,(function(t,a){return s("tr",{key:a},[e.showRow(a)?[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey(a))+":")]),e._v(" "),s("td",{staticClass:"value"},["type"==a?s("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"allOf"==a&&Array.isArray(t)?s("div",{staticClass:"schema-container"},e._l(t,(function(t,a){return s("openeo-json-schema",{key:a,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1):"default"!=a&&"examples"!=a&&!0===t?s("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=a&&"examples"!=a&&!1===t?s("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=a&&Array.isArray(t)?s("ul",{staticClass:"comma-separated-list"},e._l(t,(function(t,a){return s("li",{key:a},[e._v(e._s(t))])})),0):"examples"==a&&Array.isArray(t)&&t.length>1?s("ul",e._l(t,(function(t,a){return s("li",{key:a},[s("code",[e._v(e._s(t))])])})),0):"examples"==a&&Array.isArray(t)&&1===t.length?s("code",[e._v(e._s(t[0]))]):"description"==a?s("Description",{attrs:{description:t,compact:!0}}):"default"==a&&""===t?s("em",[e._v("Empty string")]):"default"!=a||"object"!=typeof t&&"boolean"!=typeof t?"pattern"==a?s("code",[e._v(e._s(t))]):"object"==typeof t?s("openeo-json-schema",{attrs:{schema:t,initShown:e.nestingLevel<3,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}}):s("span",[e._v(e._s(t))]):s("code",[e._v(e._s(JSON.stringify(t)))])],1)]:e._e()],2)}))],2)]:s("div",{staticClass:"schema-expand"},[s("a",{on:{click:function(t){return e.show()}}},[e._v("> ...")])])],2):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"schema-attrs",attrs:{title:"The parameters that can be used in the process."}},[t("strong",[this._v("Child Process Parameters:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"schema-attrs",attrs:{title:"Describes what must be returned by the process."}},[t("strong",[this._v("Child Process Return Value:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[this._v("Object Properties:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{staticClass:"data-types-heading",attrs:{colspan:"2"}},[this._v("Data Types:")])])}],!1,null,"04cd24c6",null);t.default=n.exports}}]);