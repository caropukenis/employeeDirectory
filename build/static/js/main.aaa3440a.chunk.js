(this["webpackJsonpground-hw-19"]=this["webpackJsonpground-hw-19"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a(16),c=a.n(s),i=(a(23),a(3)),o=a(4),l=a(6),d=a(5);a(24);var h=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(n.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,o=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(o.date)})]},t.uuid)})):Object(n.jsx)(n.Fragment,{})})};a(25);var u=function(e){var t=e.headings,a=e.users,r=e.handleSort;return Object(n.jsx)("div",{className:"datatable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(n.jsxs)("th",{className:"col",style:{width:a},onClick:function(){r(t.toLowerCase())},children:[t,Object(n.jsx)("span",{className:"pointer"})]},t)}))})}),Object(n.jsx)(h,{users:a})]})})};a(26);var j=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsx)("form",{className:"form-inline",children:Object(n.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};a(27);var b=function(e){var t=e.handleSearchChange;return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(n.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(n.jsx)(j,{handleSearchChange:t})})})},m=a(17),f=a.n(m),v=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(a(45),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{handleSearchChange:this.handleSearchChange}),Object(n.jsx)("div",{className:"data-area",children:Object(n.jsx)(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(r.Component)),x=(a(46),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{})})}}]),a}(r.Component));a(47);var g=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})},p=(a(48),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})}}]),a}(r.Component));a(49);var w=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);c.a.render(Object(n.jsx)(w,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.aaa3440a.chunk.js.map