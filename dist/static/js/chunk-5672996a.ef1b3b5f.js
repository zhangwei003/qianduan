(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5672996a"],{"1cc2":function(t,a,c){"use strict";c.r(a);var n=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",[c("van-nav-bar",{attrs:{title:"反诈指南","left-arrow":""},on:{"click-left":t.onClickLeft}}),c("div",{staticClass:"fanzha"},[c("div",{staticClass:"fanzha-content"},[c("h3",[t._v("文章列表")]),c("div",{staticClass:"wenzhang-list"},t._l(t.articleList,(function(a,n){return c("div",{key:n,staticClass:"wenzhang-card"},[c("p",[c("van-icon",{attrs:{name:"warning-o",color:"#F5CB82"}}),c("span",[t._v(t._s(a.title))])],1),c("div",{staticClass:"intro"},[t._v(t._s(a.content))])])})),0)])])],1)},i=[],s={data(){return{article:{catelogtype:"文章",catelogid:"2108270545430341158"},loadText:"下拉加载更多",articleList:[]}},mounted:function(){this.$axios.post("/api.php?op=antifraud_api&action=lists").then(t=>{200===t.code&&(this.articleList=t.data.lists)})},methods:{onClickLeft(){this.$router.go(-1)}}},e=s,o=(c("305c"),c("ccf0"),c("2877")),l=Object(o["a"])(e,n,i,!1,null,"5fcaecf7",null);a["default"]=l.exports},"305c":function(t,a,c){"use strict";c("e4c8")},"673c":function(t,a,c){},ccf0:function(t,a,c){"use strict";c("673c")},e4c8:function(t,a,c){}}]);