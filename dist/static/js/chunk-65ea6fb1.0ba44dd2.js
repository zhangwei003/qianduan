(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ea6fb1"],{1025:function(e,s,a){},7803:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"n-login"},[a("h3",[e._v(" 欢迎注册 "),a("br"),e._v(" "+e._s(e.basic.home_title)+" ")]),a("div",[a("van-cell-group",[a("van-field",{attrs:{label:"",placeholder:"请输入手机号/账号/邮箱"},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}})],1),a("van-cell-group",[a("van-field",{attrs:{type:"password",label:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),a("van-cell-group",[a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-field",{attrs:{label:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(s){e.code=s},expression:"code"}})],1),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[e.imgUrl?a("van-image",{attrs:{width:"100px",fit:"contain",src:e.imgUrl},on:{click:e.refreshImage}}):e._e()],1)],1)],1),a("router-link",{attrs:{to:{name:"login"}}},[a("div",{staticClass:"n-login-tip"},[e._v("已有账号，去登录")])]),a("van-checkbox",{staticClass:"agree",attrs:{"checked-color":"#EEC67F","icon-size":"16px"},model:{value:e.checkbox,callback:function(s){e.checkbox=s},expression:"checkbox"}},[e._v("我已经阅读并同意《用户协议》与《隐私保护》")]),a("div",{staticClass:"n-login-btn",on:{click:e.register}},[e._v("注册")])],1)])},i=[],o={data(){return{imgUrl:"",username:"",password:"",checkbox:!0,code:"",basic:{}}},created(){this.refreshImage(),this.getBasic()},methods:{getBasic(){this.$axios.post("/api.php?op=home_config").then(e=>{200===e.code&&(this.basic=e.data)})},refreshImage(){this.code_key=Math.random(),this.$axios.post("/api.php?op=image_code&action=login",{code_key:this.code_key}).then(e=>{200===e.code&&(this.imgUrl=e.data.image_content)})},register(){return this.username?this.password?void this.$axios.post("/api.php?op=user_api&action=register",{username:this.username,password:this.password,image_code:this.code,code_key:this.code_key}).then(e=>{0===e.code?this.$toast.fail(e.message):(this.$toast.success(e.message),this.$router.push({name:"login"}))}):this.$toast.fail("请填写密码！"):this.$toast.fail("请填写用户名！")}}},c=o,n=(a("c713"),a("2877")),r=Object(n["a"])(c,t,i,!1,null,"7f3edda1",null);s["default"]=r.exports},c713:function(e,s,a){"use strict";a("1025")}}]);