(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),s=(a(18),a(20),a(1)),l=a(2),i=a(4),m=a(3),u=a(5),d=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Add Books")}}]),t}(n.Component)),p=(a(6),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Search Books")}}]),t}(n.Component)),b=(a(24),a(12)),h=a(11),f=a.n(h),v=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"appointment-list item-list mb-3"},this.props.books.map(function(e){return c.a.createElement("div",{className:"pet-item col media py-3",key:e.bookId},c.a.createElement("div",{className:"mr-3"},c.a.createElement("button",{className:"pet-delete btn btn-sm btn-danger"},c.a.createElement(b.a,null))),c.a.createElement("div",{className:"pet-info media-body"},c.a.createElement("div",{className:"pet-head d-flex"},c.a.createElement("span",{className:"pet-name"},e.bookName),c.a.createElement("span",{className:"apt-date ml-auto"},c.a.createElement(f.a,{date:e.releaseDate,parse:"YYYY-MM-DD HH:MM",format:"MMM-D h:mma"}))),c.a.createElement("div",{className:"owner-name"},c.a.createElement("span",{className:"label-item"},"Author: "),c.a.createElement("span",null,e.author)),c.a.createElement("div",{className:"apt-notes"},e.notes)))}))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={myBooks:[],lastIndex:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then(function(e){return e.json()}).then(function(t){var a=t.map(function(t){return t.bookId=e.state.lastIndex,e.setState({lastIndex:e.state.lastIndex+1}),t});e.setState({myBooks:a})})}},{key:"render",value:function(){return c.a.createElement("main",{className:"page bg-white",id:"petratings"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 bg-white"},c.a.createElement("div",{className:"container"},c.a.createElement(p,null),c.a.createElement(d,null),c.a.createElement(v,{books:this.state.myBooks}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.6aa93c67.chunk.js.map