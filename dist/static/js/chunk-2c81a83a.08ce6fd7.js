(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c81a83a"],{"336f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"overflow-y":"scroll",height:"100vh"},attrs:{id:"scrollWrapper"},on:{scroll:t.handlerScroll}},[a("div",{staticClass:"service-item",style:{height:t.scrollHeight+"px"}},[a("van-sticky",{attrs:{"offset-top":0}},[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.catid,callback:function(e){t.catid=e},expression:"catid"}}),a("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.gongxu_type,callback:function(e){t.gongxu_type=e},expression:"gongxu_type"}}),a("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.guaranteeids,callback:function(e){t.guaranteeids=e},expression:"guaranteeids"}})],1)],1),a("div",{staticClass:"index-content"},[t.list.length?a("div",{staticClass:"content",staticStyle:{padding:"0","margin-top":"10px"}},[t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"item-card",class:1===+e.gongxu_type?"service":"demand",on:{click:function(a){return t.goDetail(e)}}},[a("h3",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("span",[t._v("【"+t._s(e.catname)+"】"+t._s(e.title))])]),a("div",{staticClass:"fuwubiaoqian"},t._l(e.tags,(function(e,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:e,expression:"item"}],key:i,class:"color-"+e.one},[t._v(t._s(e.title))])})),0),a("div",{staticClass:"tags"},[a("span",[t._v(t._s(e.description))])]),a("div",{staticClass:"n-card-img"},[a("div",{staticClass:"img--wraper"},t._l(e.image,(function(t,e){return a("img",{key:e,attrs:{src:t.url,alt:t.alt,srcset:""}})})),0),e.guarantee&&e.guarantee[0]?a("div",{staticClass:"danbao--wraper",on:{click:function(a){return a.stopPropagation(),t.goDanbaoDetail(e)}}},[a("img",{attrs:{src:e.guarantee[0].thumb,alt:"",srcset:""}}),a("span",[t._v(t._s(e.guarantee[0].title))]),a("van-icon",{staticClass:"n-van-icon",attrs:{name:"arrow"}})],1):t._e()]),a("div",{staticClass:"fabu-time"},[t._v("发布时间："+t._s(t.formatDate("YYYY-mm-dd HH:MM:ss",new Date(1e3*+e.inputtime))))]),a("div",{staticClass:"gongqun-lianxi"},[e.public_telegram?a("div",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return a.stopPropagation(),t.openTelegram(e.public_telegram)}}},[a("span",[t._v("进入公群")])])]):t._e(),a("div",{on:{click:function(a){return a.stopPropagation(),t.openTelegram(e.telegram)}}},[a("span",[t._v("立即联系")])])])])})),a("div",{staticStyle:{"margin-bottom":"40px"}},[t.loadAll?a("van-divider",[t._v("数据已加载完毕")]):t._e()],1)],2):t._e(),t.list.length?t._e():a("div",{staticClass:"empty"},[a("p",[t._v("暂无数据，看看其它的吧")])])])],1)])},s=[],n={data(){return{keyword:this.$route.query.keyword,catid:+(this.$route.query.catid||0),option1:[{text:"全部分类",value:0}],gongxu_type:0,option2:[{text:"供/需",value:0},{text:"服务",value:1},{text:"需求",value:2}],guaranteeids:0,option3:[{text:"不限",value:0}],loadAll:!1,list:[],pageSize:10,page:1,scrollHeight:500}},watch:{catid(){this.getList(!0)},gongxu_type(){this.getList(!0)},guaranteeids(){this.getList(!0)}},activated(){this.keyword=this.$route.query.keyword,this.catid=+(this.$route.query.catid||0),this.getList(!0),this.countScroll()},created(){this.getList(!0),this.getCategor(),this.getGuarantList(),this.countScroll()},methods:{goDanbaoDetail(t){console.log(t),this.$router.push({name:"guarantor_details",query:{id:t.guarantee[0].id}})},getGuarantList(){this.$axios.post("/api.php?op=guarantor_api&action=lists",{pageNum:1,pageSize:100}).then(t=>{200===t.code&&t.data.lists.map(t=>{this.option3.push({text:t.title,value:t.id})})})},countScroll(){this.$nextTick(()=>{this.scrollHeight=document.body.clientHeight})},handlerScroll(t){if(this.loadAll)return;let e=t.currentTarget;(this.list||[]).length&&e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.loadAll=(this.list||[]).length<this.pageSize,this.getList(!1))},getCategor(){this.$axios.post("/api.php?op=get_categor").then(t=>{200===t.code&&t.data.map(t=>{this.option1.push({text:t.catname,value:+t.catid})})})},getList(t){!0===t&&(this.list=[],this.page=1),this.$axios.post("/api.php?op=search_api&action=keyword",{keyword:"",catid:+(this.catid||0)||"",gongxu_type:this.gongxu_type,guaranteeids:this.guaranteeids,pageSize:10,pageNum:this.page}).then(e=>{if(200===e.code)if(e.data.lists.map(t=>{t.tags=[],(t.advantage_tag||[]).map(e=>{let a=window.cnchar.spell(e).split("")[0];t.tags.push({title:e,one:a})})}),!0!==t){if(this.list=this.list.concat(e.data.lists),!e.data.lists.length)return void(this.loadAll=!0);this.page++}else this.list=e.data.lists})},goDetail(t){this.$router.push({name:"service",query:{id:t.id,type:t.gongxu_type}})}}},o=n,l=(a("7a37"),a("2877")),r=Object(l["a"])(o,i,s,!1,null,"33d940d2",null);e["default"]=r.exports},"7a37":function(t,e,a){"use strict";a("eab5")},eab5:function(t,e,a){}}]);