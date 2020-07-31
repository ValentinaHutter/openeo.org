(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{280:function(e,t,s){"use strict";s.r(t);var o=s(3),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("After two release candidates in early 2020, the openEO Consortium released the first stable version of its "),s("a",{attrs:{href:"https://api.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEO API"),s("OutboundLink")],1),e._v(" and their set of "),s("a",{attrs:{href:"https://processes.openeo.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("common processes"),s("OutboundLink")],1),e._v(". This blog post gives an overview of the most notable changes since "),s("RouterLink",{attrs:{to:"/news/2019-03-07-openeo-api-040.html"}},[e._v("version 0.4")]),e._v(" and provides an outlook on the next months' project activity.")],1),e._v(" "),s("p",[s("em",[e._v("For those who are new to openEO, we have developed an open API to connect R, Python, JavaScript and other clients to big Earth observation cloud back-ends in a simple and unified way. The idea is that this will make cloud-based processing of large satellite image collections, or other data cubes such as weather model data easier for data scientists. The entire development process has been open, and all "),s("RouterLink",{attrs:{to:"/software.html"}},[e._v("software")]),e._v(" developed in this project is open source and available on "),s("a",{attrs:{href:"https://github.com/open-eo",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(". For more information about openEO, please read "),s("RouterLink",{attrs:{to:"/about.html"}},[e._v("page about the project")]),e._v(" first.")],1)]),e._v(" "),s("h2",{attrs:{id:"processes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[e._v("#")]),e._v(" Processes")]),e._v(" "),s("p",[e._v("The most important change was introduced just recently in openEO API version 1.0.0 RC2. Until then, openEO process graphs allowed users to express processing algorithms and execute them on a back-end using "),s("em",[e._v("pre-defined processes")]),e._v(" exposed by a back-end provider. While this still exists, a user can now also promote a process graph to a full openEO process description, following the same schema as the pre-defined processes: it must include the processing instructions and metadata like an identifier, parameters, return values, examples etc. This allows "),s("em",[e._v("user-defined processes")]),e._v(" to be stored and used like pre-defined processes, enabling users to extend the processing capabilities of a back-end. Users can now encapsulate algorithms in separate user-defined processes and re-use these in other user-defined processes. This also allows the exchange of processes (algorithms) between users and back-ends, and creates the possibility for a repository of user-contributed processes that other users can benefit from. A place for finding and sharing such processes is (planned to be) the "),s("a",{attrs:{href:"https://hub.openeo.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEO Hub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Through user-defined processes (and user defined functions) users may also be able to substitute processes that back-ends have not implemented. In fact, several pre-defined processes are defined with alternative processing instructions that use other openEO pre-defined processes to solve the task. For example, the pre-defined process "),s("code",[e._v("normalized_ difference")]),e._v(" can be emulated with a combination of the processes "),s("code",[e._v("add")]),e._v(", "),s("code",[e._v("subtract")]),e._v(" and "),s("code",[e._v("divide")]),e._v(". So if a back-end is missing the "),s("code",[e._v("normalized_difference")]),e._v(" process, a user can just "),s("a",{attrs:{href:"https://processes.openeo.org/#normalized_difference",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it"),s("OutboundLink")],1),e._v(" and use an openEO client to push it to the back-end where it then acts as drop-in replacement for the missing pre-defined process. In the future we plan to allow just using the URL of the process, so that no download/upload would be required.")]),e._v(" "),s("p",[e._v("As mentioned above, openEO offers a set of "),s("a",{attrs:{href:"https://processes.openeo.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("common processes"),s("OutboundLink")],1),e._v(" to improve interoperability and portability between back-ends. This is not a complete list and is expected to be extended by the openEO Consortium. More than that, we would like to see that processes arise from the community and that we can take over and standardize whatever comes up and is useful for the different domains working with openEO. We can then simply use the user-defined processes as they share the same schema as the pre-defined processes.")]),e._v(" "),s("p",[e._v("The pre-defined openEO processes are released separately from the API to ensure a faster release cycle than we plan for the API. We want to be able to quickly adapt to community needs with additional processes. Future version of the processes are valid with any future API version through the specification of the process metadata standard in openEO.")]),e._v(" "),s("p",[e._v("The pre-defined processes itself also got an update just after the API release, but "),s("a",{attrs:{href:"https://github.com/Open-EO/openeo-processes/blob/1.0.0/CHANGELOG.md#100---2020-07-31",target:"_blank",rel:"noopener noreferrer"}},[e._v("the changes"),s("OutboundLink")],1),e._v(" are relatively small compared to the API. The focus was to clarify unspecified and ambiguous parts of the specification. Some processes such as "),s("code",[e._v("apply_neighborhood")]),e._v(" and "),s("code",[e._v("constant")]),e._v(" were added for the use cases. In collaboration with "),s("a",{attrs:{href:"https://jwagemann.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Julia Wagemann"),s("OutboundLink")],1),e._v(" from the "),s("a",{attrs:{href:"https://www.ecmwf.int/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMWF"),s("OutboundLink")],1),e._v(" we started defining processes such as "),s("code",[e._v("aggregate_temporal_frequency")]),e._v(", "),s("code",[e._v("anomaly")]),e._v(" and "),s("code",[e._v("climatological_normal")]),e._v(" for climatology and meteorology use-cases. Unfortunately, this effort could not be finished yet due to the COVID-19 situation. We want to continue to broaden the processes to be useful for more domains apart from core Earth Observation.")]),e._v(" "),s("h2",{attrs:{id:"stac-and-ogc-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stac-and-ogc-apis"}},[e._v("#")]),e._v(" STAC and OGC APIs")]),e._v(" "),s("p",[e._v("The openEO API now supports STAC (API) versions 0.9 and 1.x, which implements OGC API - Features. Thus, a potential integration of the openEO API with upcoming OGC API standards should be easy to establish.")]),e._v(" "),s("h2",{attrs:{id:"user-defined-functions-udfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-functions-udfs"}},[e._v("#")]),e._v(" User-defined Functions (UDFs)")]),e._v(" "),s("p",[s("em",[e._v("Note: Don't get confused, user-defined processes and user-defined functions describe different things.")])]),e._v(" "),s("p",[e._v("Although already foreseen in API version 0.4.0, the openEO UDF API has evolved and is better integrated in the openEO API. It now allows to run Docker containers or custom scripts in potentially any programming language. The UDF API itself is not part of the openEO API, but is a separate specification to describe the data exchange between a back-end implementing the openEO API and a UDF API instance. The UDF API is in release candidate phase and we'll likely post a separate blog post focussing solely on them. Currently, implementations in R and Python are available. It is foreseen that users could also host their own UDF API instances and call them from remote back-ends.")]),e._v(" "),s("h2",{attrs:{id:"other-improvements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-improvements"}},[e._v("#")]),e._v(" Other improvements")]),e._v(" "),s("p",[e._v("Other notable changes and additions:")]),e._v(" "),s("ul",[s("li",[e._v("Support for importing user-provided data sets has been added.")]),e._v(" "),s("li",[e._v("Providers can now expose their terms of service and privacy policies.")]),e._v(" "),s("li",[e._v("The WebSocket-based Subscription API for notifications and monitoring introduced in version 0.4 has been replaced by a logging mechanism in the HTTP API. This makes implementing the API easier for clients and back-ends, but doesn't work in real-time any longer.")])]),e._v(" "),s("p",[e._v("The full set of changes can be found in the "),s("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/blob/1.0.0/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("API's change log"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),s("p",[e._v("With openEO, we are digging into new grounds regarding the interoperability of big Earth observation clouds. While we could solve a lot of issues that came up, there were some issues that we couldn't solve as part of the API and processes. We want to be honest and give some insights into the lessons learned, so I have posted these as a "),s("RouterLink",{attrs:{to:"/news/2020-07-31-lessons-learned.html"}},[e._v("separate blog post")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),s("p",[e._v("The API's development went through several iterations and is working well for our broad range of use cases, which we'll report soon. "),s("RouterLink",{attrs:{to:"/software.html"}},[e._v("Implementations")]),e._v(" by several organizations for several API versions provide evidence that the API and the processes are useful for a wide range of use cases. Client and back-end developers will now finish their implementations and we hope to have the first operational services this year. We will follow up with new blog posts once other releases are available. If you are interested in trying out openEO, please "),s("RouterLink",{attrs:{to:"/contact.html"}},[e._v("contact us")]),e._v(" to get more information.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);