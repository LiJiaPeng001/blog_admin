(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dafa52"],{"138b":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["createTextVNode"])("添加"),a={class:"action-box"};function c(e,t,n,c,i,u){var l=Object(o["resolveComponent"])("search"),s=Object(o["resolveComponent"])("a-button"),d=Object(o["resolveComponent"])("a-table"),f=Object(o["resolveComponent"])("a-card"),p=Object(o["resolveComponent"])("page-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{columns:i.columns,"data-source":i.list},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{onFetch:u.fetchList,payload:i.payload,"onUpdate:payload":t[1]||(t[1]=function(e){return i.payload=e})},null,8,["onFetch","payload"]),Object(o["createVNode"])(s,{style:{"margin-bottom":"15px"},type:"primary",onClick:u.open},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["onClick"]),Object(o["createVNode"])(d,{rowKey:"id",columns:i.columns,"data-source":i.list},{action:Object(o["withCtx"])((function(e){var t=e.record;return[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("span",{class:"primary",onClick:function(e){return u.open(t)}},"编辑",8,["onClick"]),Object(o["createVNode"])("span",{class:"error",onClick:function(e){return u.remove(t)}},"删除",8,["onClick"])])]})),_:1},8,["columns","data-source"])]})),_:1},8,["columns","data-source"])]})),_:1})}n("96cf");var i=n("1da1"),u=n("864d"),l=Object(o["withScopeId"])("data-v-da9f334a");Object(o["pushScopeId"])("data-v-da9f334a");var s=Object(o["createTextVNode"])("搜索"),d=Object(o["createTextVNode"])("清空");Object(o["popScopeId"])();var f=l((function(e,t,n,r,a,c){var i=Object(o["resolveComponent"])("a-input"),u=Object(o["resolveComponent"])("a-form-item"),f=Object(o["resolveComponent"])("a-button"),p=Object(o["resolveComponent"])("a-form");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{onSubmit:c.submit,class:"form middle-flex",model:a.form},{default:l((function(){return[Object(o["createVNode"])(u,{class:"item",label:"标题",name:"title"},{default:l((function(){return[Object(o["createVNode"])(i,{placeholder:"请输入标题",value:a.form.title,"onUpdate:value":t[1]||(t[1]=function(e){return a.form.title=e})},null,8,["value"])]})),_:1}),Object(o["createVNode"])(u,{class:"item"},{default:l((function(){return[Object(o["createVNode"])(f,{style:{"margin-right":"10px"},type:"primary",onClick:c.submit},{default:l((function(){return[s]})),_:1},8,["onClick"]),Object(o["createVNode"])(f,{onClick:c.reset},{default:l((function(){return[d]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["onSubmit","model"])})),p=n("5530"),b={props:{payload:{type:Object,defualt:function(){return{}}}},data:function(){return{form:this.payload}},watch:{payload:function(){this.form=this.payload}},methods:{submit:function(){this.$emit("update:payload",Object(p["a"])(Object(p["a"])({},this.form),{},{page:1})),this.$emit("fetch")},reset:function(){this.form={},this.submit()}}};n("cf79");b.render=f,b.__scopeId="data-v-da9f334a";var m=b,h={components:{search:m},data:function(){return{columns:[{title:"ID",dataIndex:"id"},{title:"标题",dataIndex:"title"},{title:"分类名称",dataIndex:"cate.name"},{title:"创建时间",dataIndex:"createdAt"},{title:"操作",key:"action",slots:{customRender:"action"}}],list:[],payload:{page:1,per_page:12,title:""}}},mounted:function(){this.fetchList()},methods:{open:function(e){var t=e.id,n=void 0===t?"":t;this.$router.push({path:"/blog/detail",query:{id:n}})},remove:function(e){var t=this,n=e.id;this.$confirm({content:"您确定要删除嘛？",onOk:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["d"](n);case 2:t.fetchList();case 3:case"end":return e.stop()}}),e)})));function o(){return e.apply(this,arguments)}return o}()})},fetchList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["c"](e.payload);case 2:n=t.sent,o=n.list,r=n.total,e.list=o,e.total=r;case 7:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.ruleForm.validate();case 2:if(console.log(e.record),!e.record.id){t.next=8;break}return t.next=6,u["e"](e.record);case 6:t.next=10;break;case 8:return t.next=10,u["a"](e.record);case 10:e.$message.success(e.record.id?"更新成功":"添加成功"),e.visible=!1,e.fetchList();case 13:case"end":return t.stop()}}),t)})))()}}};h.render=c;t["default"]=h},"864d":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u}));var o=n("dc40");function r(e){return Object(o["a"])({url:"/api/koa-blog/blog",params:e})}function a(e){return Object(o["a"])({url:"/api/koa-blog/blog/".concat(e),params:{id:e}})}function c(e){return Object(o["a"])({url:"/api/koa-blog/blog",method:"post",data:e})}function i(e){return Object(o["a"])({url:"/api/koa-blog/blog/".concat(e.id),method:"put",data:e})}function u(e){return Object(o["a"])({url:"/api/koa-blog/blog/".concat(e),method:"delete"})}},cbbf:function(e,t,n){},cf79:function(e,t,n){"use strict";n("cbbf")}}]);
//# sourceMappingURL=chunk-35dafa52.7720d375.js.map