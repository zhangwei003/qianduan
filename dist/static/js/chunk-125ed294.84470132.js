(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125ed294"],{"1cc2":function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("van-nav-bar",{attrs:{title:"反诈指南","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"fanzha"},[n("div",{staticClass:"fanzha-content"},[n("h3",[t._v("文章列表")]),n("div",{staticClass:"wenzhang-list"},t._l(t.articleList,(function(a,i){return n("div",{key:i,staticClass:"wenzhang-card"},[n("p",[n("van-icon",{attrs:{name:"warning-o",color:"#F5CB82"}}),n("span",[t._v(t._s(a.title))])],1),n("div",{staticClass:"intro"},[t._v(t._s(a.content))])])})),0)])])],1)},c=[],s={data(){return{article:{catelogtype:"文章",catelogid:"2108270545430341158"},loadText:"下拉加载更多",articleList:[]}},mounted:function(){this.$axios.post("/api.php?op=antifraud_api&action=lists").then(t=>{200===t.code&&(this.articleList=t.data.lists)})},methods:{onClickLeft(){this.$router.go(-1)}}},e=s,o=(n("305c"),n("fda0"),n("2877")),l=Object(o["a"])(e,i,c,!1,null,"f9450134",null);a["default"]=l.exports},"305c":function(t,a,n){"use strict";n("e4c8")},cc27:function(t,a,n){},e4c8:function(t,a,n){},fda0:function(t,a,n){"use strict";n("cc27")}}]);