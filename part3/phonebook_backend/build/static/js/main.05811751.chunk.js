(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(14),r=t.n(a),o=t(3),u=t(0),i=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(u.jsxs)("p",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))},s=function(e){return Object(u.jsxs)("form",{onSubmit:e.addPerson,children:[Object(u.jsxs)("div",{children:["name:",Object(u.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(u.jsxs)("div",{children:["number:",Object(u.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.notification;return null===n?null:Object(u.jsx)("div",{className:n.type,children:n.message})},l=function(e){return Object(u.jsx)("input",{value:e.value,onChange:e.onChange})},f=t(4),h=t.n(f),b="/api/persons",j=function(){return h.a.get(b).then((function(e){return e.data}))},m=function(e){return h.a.post(b,e).then((function(e){return e.data}))},O=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),f=Object(o.a)(r,2),h=f[0],b=f[1],v=Object(c.useState)(""),x=Object(o.a)(v,2),g=x[0],w=x[1],C=Object(c.useState)(""),N=Object(o.a)(C,2),y=N[0],S=N[1],k=Object(c.useState)(null),P=Object(o.a)(k,2),D=P[0],E=P[1];Object(c.useEffect)((function(){j().then((function(e){a(e)}))}),[]);var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";E({message:e,type:n}),setTimeout((function(){E(null)}),5e3)},L=0===y.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>0}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{notification:D}),"filter shown with:",Object(u.jsx)(l,{value:y,onChange:function(e){S(e.target.value)}}),Object(u.jsx)("h3",{children:"add a new"}),Object(u.jsx)(s,{handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){w(e.target.value)},newNumber:g,newName:h,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===h}));n?window.confirm("".concat(n.name," already in phonebook, replace the old number with new one?"))&&O(n.id,{name:n.name,number:g}).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e}))),J("Changed number of  ".concat(n.name)),b(""),w("")})):m({name:h,number:g}).then((function(e){a(t.concat(e)),J("Added ".concat(h)),b(""),w("")})).catch((function(e){console.log(e.response.data),J("hello!!!")}))}}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(i,{persons:L,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&p(e).then((function(c){a(t.filter((function(n){return n.id!==e}))),J("Deleted ".concat(n.name))})).catch((function(){a(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," had already been removed"),"error")}))}})]})};t(38);r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.05811751.chunk.js.map