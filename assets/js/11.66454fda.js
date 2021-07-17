(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16,18],{164:function(e,t,s){},165:function(e,t,s){},170:function(e,t,s){"use strict";s(164)},171:function(e,t,s){"use strict";s(165)},178:function(e,t,s){"use strict";s.r(t);var r={name:"ProcessParameter",props:{parameter:Object,processUrl:String},components:{DeprecationNotice:()=>Promise.all([s.e(0),s.e(1)]).then(s.bind(null,410)),Description:()=>Promise.resolve().then(s.bind(null,398)),ExperimentalNotice:()=>Promise.all([s.e(0),s.e(2)]).then(s.bind(null,409)),JsonSchema:()=>Promise.all([s.e(0),s.e(16)]).then(s.bind(null,400))},computed:{defaultValue(){return JSON.stringify(this.parameter.default)}}},a=(s(170),s(4)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-component process-parameter"},[s("h4",[s("code",[e._v(e._s(e.parameter.name))]),e._v(" "),e.parameter.optional?e._e():s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),e._v(" "),void 0!==e.parameter.default?s("code",{staticClass:"default"},[e._v(" = "+e._s(e.defaultValue))]):e._e()]),e._v(" "),s("div",{staticClass:"details"},[e.parameter.description?s("Description",{attrs:{description:e.parameter.description,processUrl:e.processUrl}}):e._e(),e._v(" "),!0===e.parameter.deprecated?s("DeprecationNotice",{attrs:{entity:"parameter"}}):e._e(),e._v(" "),!0===e.parameter.experimental?s("ExperimentalNotice",{attrs:{entity:"parameter"}}):e._e(),e._v(" "),e.parameter.schema?s("div",{staticClass:"json-schema-container"},[s("JsonSchema",{attrs:{schema:e.parameter.schema,processUrl:e.processUrl}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=i.exports},400:function(e,t,s){"use strict";s.r(t);var r=s(154),a={name:"JsonSchema",components:{Description:()=>Promise.resolve().then(s.bind(null,398)),"openeo-json-schema":()=>Promise.resolve().then(s.bind(null,400))},props:{schema:{type:[Object,Array],default:()=>({})},initShown:{type:Boolean,default:!0},nestingLevel:{type:Number,default:1},processUrl:String},data(){return{visible:this.initShown,filteredObjectSchema:null}},beforeCreate(){r.a.enableHtmlProps(this),this.$options.components.ProcessParameter=s(178).default},computed:{showSchema(){return"object"==typeof this.schema&&null!==this.schema&&this.nestingLevel<20},showAnyType(){return r.a.isAnyType(this.schema)},isProcessGraph(){return"object"===this.schema.type&&"process-graph"===this.schema.subtype},isCompositeType(){return Array.isArray(this.schema)||Array.isArray(this.schema.anyOf)||Array.isArray(this.schema.oneOf)},compositeTypes(){return Array.isArray(this.schema)?this.schema:Array.isArray(this.schema.anyOf)?this.schema.anyOf:Array.isArray(this.schema.oneOf)?this.schema.oneOf:[this.schema]},hasReturns(){return this.isProcessGraph&&r.a.isObject(this.schema.returns)},hasParameters(){return this.isProcessGraph&&Array.isArray(this.schema.parameters)&&this.schema.parameters.length>0}},watch:{initShown(e){this.visible=e},schema:{immediate:!0,handler(e){var t=null;for(var s in e)"required"!=s&&"properties"!=s&&"parameters"!=s&&"returns"!==s&&(null===t&&(t={}),t[s]=e[s]);this.filteredObjectSchema=t,this.visible=this.initShown}}},methods:{show(){this.visible=!0},formatKey(e){switch(e){case"items":return"Array items";case"minItems":return"Min. number of items";case"const":return"Constant value";case"maxItems":return"Max. number of items";case"minimum":return"Minimum value (inclusive)";case"maximum":return"Maximum value (inclusive)";case"exclusiveMinimum":return"Minimum value (exclusive)";case"exclusiveMinimum":return"Maximum value (exclusive)";case"enum":return"Allowed values";case"default":return"Default value";case"type":return"Data type";case"allOf":return"Composite data type";case"contentMediaType":return"Media Type";case"contentEncoding":return"Encoding";case"deprecated":return"Deprecated";case"additionalProperties":return"Each property";default:if(e.length>1)return r.a.prettifyString(e)}return e},formatType(e){return void 0===e&&(e=this.schema),r.a.dataType(e)},showRow(e){return"object"==e?"object"==this.schema.type&&"object"==typeof this.schema.properties:"title"!=e&&"description"!=e&&"subtype"!=e&&"format"!=e&&"anyOf"!=e&&"oneOf"!=e&&("items"!=e||1!==Object.keys(this.schema.items).length||void 0===this.schema.items.type)}}},i=(s(171),s(4)),n=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showSchema?s("div",{staticClass:"vue-component json-schema"},[e.visible?[e.isProcessGraph?s("div",{staticClass:"schemaProcessGraph"},[s("div",{staticClass:"process-graph-parameters"},[s("p",{staticClass:"schema-attrs"},[e._v(e._s(e.formatKey("type"))+": "),s("span",{staticClass:"data-type"},[e._v("child process")])]),e._v(" "),e._m(0),e._v(" "),e.hasParameters?e._l(e.schema.parameters,(function(t,r){return s("ProcessParameter",{key:r,attrs:{parameter:t,processUrl:e.processUrl}})})):s("p",[e._v("No parameters defined.")]),e._v(" "),e._m(1),e._v(" "),e.hasReturns?[e.schema.returns.description?s("Description",{attrs:{description:e.schema.returns.description,processUrl:e.processUrl}}):e._e(),e._v(" "),e.schema.returns.schema?s("div",{staticClass:"json-schema-container"},[s("openeo-json-schema",{attrs:{schema:e.schema.returns.schema}})],1):e._e()]:s("p",[e._v("No constraints defined.")])],2)]):e.showRow("object")?s("div",{staticClass:"schemaObjectElement"},[s("div",{staticClass:"inline-schema-attrs"},[null!==e.filteredObjectSchema?s("openeo-json-schema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}}):e._e(),e._v(" "),s("table",{staticClass:"object-properties"},[e._m(2),e._v(" "),e._l(e.schema.properties,(function(t,r){return s("tr",{key:r},[s("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t\t\t"+e._s(r)+"\n\t\t\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(r)?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),e._v(" "),s("td",{staticClass:"value"},[s("openeo-json-schema",{attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})],1)])}))],2)],1)]):s("table",{staticClass:"schema-attrs"},["string"==typeof e.schema.title?s("tr",[s("td",{attrs:{colspan:"2"}},[s("strong",[e._v(e._s(e.schema.title))])])]):e._e(),e._v(" "),"string"==typeof e.schema.description?s("tr",[s("td",{attrs:{colspan:"2"}},[s("Description",{attrs:{description:e.schema.description,compact:!0}})],1)]):e._e(),e._v(" "),e.showAnyType?s("tr",[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey("type"))+":")]),e._v(" "),s("td",{staticClass:"value data-type"},[e._v("any")])]):e.isCompositeType?[e._m(3),e._v(" "),s("tr",[s("td",{staticClass:"schema-container data-types-container",attrs:{colspan:"2"}},e._l(e.compositeTypes,(function(t,r){return s("openeo-json-schema",{key:r,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1)])]:e._e(),e._v(" "),Array.isArray(this.schema)?e._e():[e._l(e.schema,(function(t,r){return[void 0!==t&&e.showRow(r)?s("tr",{key:r},[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey(r))+":")]),e._v(" "),s("td",{staticClass:"value"},["type"==r?s("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"allOf"==r&&Array.isArray(t)?s("div",{staticClass:"schema-container"},e._l(t,(function(t,r){return s("openeo-json-schema",{key:r,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1):"default"!=r&&"examples"!=r&&!0===t?s("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=r&&"examples"!=r&&!1===t?s("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=r&&Array.isArray(t)?s("ul",{staticClass:"comma-separated-list"},e._l(t,(function(t,r){return s("li",{key:r},[e._v(e._s(t))])})),0):"examples"==r&&Array.isArray(t)&&t.length>1?s("ul",e._l(t,(function(t,r){return s("li",{key:r},[s("code",[e._v(e._s(t))])])})),0):"examples"==r&&Array.isArray(t)&&1===t.length?s("code",[e._v(e._s(t[0]))]):"description"==r?s("Description",{attrs:{description:t,compact:!0}}):"default"==r&&""===t?s("em",[e._v("Empty string")]):"default"!=r||"object"!=typeof t&&"boolean"!=typeof t?"pattern"==r?s("code",[e._v(e._s(t))]):"object"==typeof t?s("openeo-json-schema",{attrs:{schema:t,initShown:e.nestingLevel<3,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}}):s("span",[e._v(e._s(t))]):s("code",[e._v(e._s(JSON.stringify(t)))])],1)]):e._e()]}))]],2)]:s("div",{staticClass:"schema-expand"},[s("a",{on:{click:function(t){return e.show()}}},[e._v("> ...")])])],2):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"schema-attrs",attrs:{title:"The parameters that can be used in the process."}},[t("strong",[this._v("Child Process Parameters:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"schema-attrs",attrs:{title:"Describes what must be returned by the process."}},[t("strong",[this._v("Child Process Return Value:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[this._v("Object Properties:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{staticClass:"data-types-heading",attrs:{colspan:"2"}},[this._v("Data Types:")])])}],!1,null,null,null);t.default=n.exports}}]);