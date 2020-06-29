(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=a(6),s=a(1),m="published",u="draft",i="arrow-up",d="arrow-down",b="Are you sure to delete this note?",f="Title is required",E="Author name is required",p="Note is required",N="is-invalid",v="No filter results";var h=function(e){var t=e.note,a=e.deleteNote,c=e.index,r=Object(n.useState)((function(){var e=m;return t.status===e?t.status:l.a.createElement("button",{onClick:function(){return i(e)},className:"btn btn-primary"},"Publish")})),o=Object(s.a)(r,2),u=o[0],i=o[1];return l.a.createElement("tr",null,l.a.createElement("td",{className:"align-middle"},t.date),l.a.createElement("td",{className:"align-middle"},t.title),l.a.createElement("td",{className:"align-middle"},t.body),l.a.createElement("td",{className:"align-middle"},t.author),l.a.createElement("td",{className:"align-middle"},u),l.a.createElement("td",{className:"align-middle"},l.a.createElement("button",{onClick:function(){return a(c)},className:"btn btn-danger"},"Delete")))};var j=function(e){var t=e.notes,a=e.deleteNote,c=e.sortByDate,r=e.reverse,o=e.inputValue,m=Object(n.useState)(t),u=Object(s.a)(m,2),b=u[0],f=u[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),N=p[0],j=p[1];Object(n.useEffect)((function(){f(t.filter((function(e){return e.title.slice(0,o.length)===o.toLowerCase()})))}),[t,o]),Object(n.useEffect)((function(){(""!==N||!1!==r)&&j(r?i:d)}),[r,N]);var O=b.map((function(e,t){return l.a.createElement(h,{note:e,key:t,index:t,deleteNote:a})}));return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},l.a.createElement("span",{className:"d-flex justify-content-between"},"Date",l.a.createElement("span",{onClick:function(){return c()},className:"sort-by ".concat(N)}))),l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",{scope:"col"},"Description"),l.a.createElement("th",{scope:"col"},"Author"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,O.length?O:l.a.createElement("tr",null,l.a.createElement("td",{className:"no-results text-center align-middle",colSpan:12},v))))},O=a(5),g=a(2);var y=function(e){var t=e.onCloseRequest,a=e.addNewNoteToState,c=Object(n.useState)((function(){var e=new Date,t=e.getDate();return e.getMonth()+1+"/"+t+"/"+e.getFullYear()})),r=Object(s.a)(c,1)[0],o=Object(n.useState)({date:r,title:"",body:"",author:"",status:m,submitted:!1}),i=Object(s.a)(o,2),d=i[0],b=i[1];Object(n.useEffect)((function(){v.current.focus()}),[]);var v=Object(n.useRef)(),h=function(e){var t=e!==m?u:e;b(Object(g.a)(Object(g.a)({},d),{},{status:t}))},j=function(e){var t=e.target,a=t.name,n=t.value;b(Object(g.a)(Object(g.a)({},d),{},Object(O.a)({},a,n)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal fade show d-block"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Add Note"),l.a.createElement("button",{onClick:function(){return t()},type:"button",className:"close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body pb-0 px-0"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(Object(g.a)(Object(g.a)({},d),{},{submitted:!0})),d.title&&d.author&&d.body&&(a(d),t())}},l.a.createElement("div",{className:"form-group px-3"},l.a.createElement("label",{htmlFor:"title",className:"col-form-label"},"Title:"),l.a.createElement("input",{onChange:j,type:"text",ref:v,value:d.title,className:"form-control \n                                      ".concat(d.submitted&&!d.title?N:""),name:"title",id:"title"}),d.submitted&&!d.title&&l.a.createElement("p",{className:"invalid-feedback"},f)),l.a.createElement("div",{className:"form-group px-3"},l.a.createElement("label",{htmlFor:"author",className:"col-form-label"},"Author name:"),l.a.createElement("input",{onChange:j,type:"text",value:d.author,className:"form-control \n                                      ".concat(d.submitted&&!d.author?N:""),name:"author",id:"author"}),d.submitted&&!d.author&&l.a.createElement("p",{className:"invalid-feedback"},E)),l.a.createElement("div",{className:"form-group px-3"},l.a.createElement("label",{htmlFor:"message-text",className:"col-form-label"},"Description:"),l.a.createElement("textarea",{onChange:j,value:d.body,className:"form-control \n                                          ".concat(d.submitted&&!d.body?N:""),name:"body",id:"message-text"}),d.submitted&&!d.body&&l.a.createElement("p",{className:"invalid-feedback"},p)),l.a.createElement("div",{className:"modal-footer mt-5"},l.a.createElement("button",{onClick:function(){return t()},type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{onClick:function(){return h()},type:"submit",className:"btn btn-primary"},"Save as Draft"),l.a.createElement("button",{onClick:function(){return h(d.status)},type:"submit",className:"btn btn-primary"},"Add Note"))))))),l.a.createElement("div",{className:"modal-backdrop fade show"}))};var x=function(e){var t=e.notes,a=e.getInputValue;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputFilter",className:"col-sm-2 col-form-label px-0"},"Filter by title"),l.a.createElement("div",{className:"col-sm-2 pl-0"},l.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;a(t)},value:t.title,name:"title",className:"form-control",id:"inputFilter"})))};var w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(s.a)(r,2),u=m[0],i=m[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),E=f[0],p=f[1],N=Object(n.useState)(""),v=Object(s.a)(N,2),h=v[0],O=v[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/vlappdev/notes/master/src/notes.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"text-center mt-5"},"Notes App"),l.a.createElement(x,{notes:a,getInputValue:function(e){O(e)}}),l.a.createElement(j,{notes:a,deleteNote:function(e){var t=a.filter((function(t){return a.indexOf(t)!==e}));window.confirm(b),c(t)},sortByDate:function(){var e=E?-1:1;p(!E),c((function(t){return Object(o.a)(t).sort((function(t,a){return e*(new Date(t.date)-new Date(a.date))}))}))},reverse:E,inputValue:h}),u&&l.a.createElement(y,{onCloseRequest:function(){return i(!1)},addNewNoteToState:function(e){c([].concat(Object(o.a)(a),[e]))}}),l.a.createElement("button",{onClick:function(){i(!0)},className:"btn btn-primary"},"New note"))};a(14);r.a.render(l.a.createElement(w,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f2ba3f8d.chunk.js.map