(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52199810"],{"2f67":function(t,i,e){},"4e22":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("van-row",[e("van-col",{attrs:{span:"2"}},[e("div",{staticClass:"left-w",attrs:{onclick:"window.history.back()"}},[e("span",{staticClass:"mui-icon mui-icon-arrowleft",attrs:{"data-v-8e558baa":""}})])]),e("van-col",{attrs:{span:"19"}},[e("van-search",{attrs:{shape:"round",clearable:!1,placeholder:"请输入搜索关键词"},on:{search:t.search},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1),e("van-col",{attrs:{span:3}},[e("van-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"small",plain:"",color:"#ffffff",hairline:!0,type:"primary"},on:{click:function(i){return t.searchKey(this.value)}}},[t._v("搜索")])],1)],1),t._m(0),e("div",{staticClass:"lishi-li"},t._l(t.keyword_list,(function(i,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:i.keyword,expression:"v.keyword"}],key:a,staticStyle:{margin:"5px",padding:"0 4px"},on:{click:function(e){return t.searchKey(i.keyword)}}},[t._v(t._s(i.keyword))])})),0),e("div",{staticClass:"lishi"},[e("h3",[t._v("猜你喜欢")]),e("span",{on:{click:t.genghuan}},[e("van-icon",{attrs:{name:"replay"}}),t._v("换一批 ")],1)]),e("div",{staticClass:"xihuan"},t._l(t.likeRandom,(function(i){return e("div",{key:i.id,on:{click:function(e){return t.goService(i)}}},[e("span",{staticClass:"xu"},[t._v("需")]),e("span",{staticClass:"xihuan-con"},[t._v(t._s(i.title))]),e("span",{staticClass:"bao"},[t._v("热")])])})),0),t._m(1),e("div",{staticClass:"bangdan-list"},[e("div",{staticClass:"bangdan"},[e("h3",[t._v("推荐榜单")]),t._l(t.tuijian.service,(function(i,a){return e("div",{key:i,on:{click:function(e){return t.searchKey(i)}}},[e("span",[t._v(t._s(a+1))]),e("b",[t._v(t._s(i))])])}))],2),e("div",{staticClass:"bangdan"},[e("h3",[t._v("需求热搜榜")]),t._l(t.tuijian.demand,(function(i,a){return e("div",{key:i,on:{click:function(e){return t.searchKey(i)}}},[e("span",[t._v(t._s(a+1))]),e("b",[t._v(t._s(i))])])}))],2),e("div",{staticClass:"bangdan"},[e("h3",[t._v("服务类目热搜榜")]),t._l(t.tuijian.service_leimu,(function(i,a){return e("div",{key:i,on:{click:function(e){return t.searchKey(i)}}},[e("span",[t._v(t._s(a+1))]),e("b",[t._v(t._s(i))])])}))],2),e("div",{staticClass:"bangdan"},[e("h3",[t._v("需求类目热搜榜")]),t._l(t.tuijian.demand_leimu,(function(i,a){return e("div",{key:i,on:{click:function(e){return t.searchKey(i)}}},[e("span",[t._v(t._s(a+1))]),e("b",[t._v(t._s(i))])])}))],2)])],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lishi"},[e("h3",[t._v("搜索发现")]),e("span")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lishi"},[e("h3",[t._v("推荐榜单")])])}],n={data(){return{keyword_list:[],value:"",likeRandom:[],likes:[],tuijian:[]}},created(){this.$axios.get("/api.php?op=keyword_list").then(t=>{200===t.code&&(this.keyword_list=t.data),console.log(t)}),this.getLike(),this.getTuijian()},methods:{genghuan(){var t=this.likes;function i(t){return t.sort(()=>Math.random()>.5?-1:1).slice(0,3)}this.likeRandom=i(t)},goService(t){this.$router.push({name:"service",query:{id:t.id}})},searchKey(t){this.$router.push({name:"search_list",query:{keyword:t}})},search(t){console.log(t),this.$router.push({name:"search_list",query:{keyword:this.value}})},getLike(){this.$axios.get("/api.php?op=search_api&action=like").then(t=>{200===t.code&&(this.likes=t.data,this.genghuan())})},getTuijian(){this.$axios.get("/api.php?op=search_api&action=recommend").then(t=>{200===t.code&&(this.tuijian=t.data)})}}},c=n,r=(e("ef77"),e("dec2"),e("2877")),o=Object(r["a"])(c,a,s,!1,null,"83bbd35e",null);i["default"]=o.exports},"94ff":function(t,i,e){},dec2:function(t,i,e){"use strict";e("2f67")},ef77:function(t,i,e){"use strict";e("94ff")}}]);