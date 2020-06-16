(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=t(3),s=t.n(l),i="/api/persons",m=function(){return s.a.get(i).then((function(e){return e.data}))},d=function(e){return s.a.post(i,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.persons,t=e.setPersons,o=e.setBanner,u=Object(a.useState)(""),l=Object(c.a)(u,2),s=l[0],i=l[1],m=Object(a.useState)(""),f=Object(c.a)(m,2),p=f[0],h=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:s,number:p};if(n.map((function(e){return e.name})).includes(s)){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var r=n.find((function(e){return e.name===s})).id;b(r,a).then((function(e){t(n.map((function(n){return n.id===r?e:n}))),setTimeout((function(){o({message:null,colour:"red"})}),3e3),o({message:"The number for ".concat(a.name," has been updated"),colour:"green"})})).catch((function(){setTimeout((function(){o({message:"Information of ".concat(a.name," has already been removed from server."),colour:"red"})}),3e3),o({message:null,color:"red"})}))}}else d(a).then((function(e){setTimeout((function(){o({message:null,colour:"red"})}),3e3),o({message:"Added ".concat(e.name),colour:"green"}),t(n.concat(e))})).catch((function(e){setTimeout((function(){o({message:null,colour:"red"})}),3e3),console.log(e.response.data),o({message:e.response.data.error,colour:"red"})}));i(""),h("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:s,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:p,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},h=function(e){var n=e.filter,t=e.setFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}})," ")},g=function(e){var n=e.persons,t=e.filter,a=e.setPersons;e.setBanner;return r.a.createElement("div",null,n.map((function(e){return e.name.toLowerCase().includes(t)?r.a.createElement("p",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t=e,void(window.confirm("Delete ".concat(t.name,"?"))&&f(t.id).then(a(n.filter((function(e){return e.id!==t.id})))));var t}},"delete")):""})))},v=function(e){var n=e.banner,t={border:"5px solid",borderColor:n.colour,borderRadius:5,backgroundColor:"grey",padding:10};return null===n.message?null:r.a.createElement("div",{style:t},n.message)},E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),s=l[0],i=l[1],d=Object(a.useState)({message:null,colour:"red"}),f=Object(c.a)(d,2),b=f[0],E=f[1];return Object(a.useEffect)((function(){m().then((function(e){return o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{banner:b}),r.a.createElement(h,{filter:s,setFilter:i}),r.a.createElement("h2",null,"add a new"),r.a.createElement(p,{persons:t,setPersons:o,setBanner:E}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,setPersons:o,filter:s,setBanner:E}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.37b81333.chunk.js.map