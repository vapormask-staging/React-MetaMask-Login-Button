(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(16),s=n.n(r),c=(n(84),n(48)),l=n.n(c),u=n(74),h=n(9),d=n(10),m=n(13),b=n(11),k=n(12),w=n(7),g=n(75),f=(n(29),function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Login into MetaMask",i.a.createElement("br",null)))}}]),t}(o.Component)),O=function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Install MetaMask to Sign in"))}}]),t}(o.Component),j=function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Connect to  ropsten network",i.a.createElement("br",null)))}}]),t}(o.Component),p=function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Sign in into your account now",i.a.createElement("br",null)))}}]),t}(o.Component),v=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).components={foo:f,boo:O,coo:j,doo:p},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.components[this.props.tag||"foo"];return i.a.createElement(e,null)}}]),t}(o.Component),M=n(34),E=n.n(M),y=n(28),C=n.n(y),S=(n(149),n(151),n(157).detect),L=function(e){function t(e,n){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(w.a)(Object(w.a)(a))),a.handleClose=a.handleClose.bind(Object(w.a)(Object(w.a)(a))),a.handleClick=a.handleClick.bind(Object(w.a)(Object(w.a)(a))),a.network=a.network.bind(Object(w.a)(Object(w.a)(a))),a.mount=a.mount.bind(Object(w.a)(Object(w.a)(a))),a.init=a.init.bind(Object(w.a)(Object(w.a)(a))),a.state={show:!1,isMetaMask:!1,isLoginMetaMask:!1,isDesiredNetwork:!1,isLogin:!1},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"mount",value:function(){if("undefined"!==typeof web3)this.setState({isMetaMask:!1}),this.init();else{switch(S().name){case"firefox":window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/","_blank");break;case"chrome":window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en","_blank");case"opera":window.open("https://addons.opera.com/en/extensions/details/metamask/","_blank")}this.setState({isMetaMask:!0}),a=!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)),console.log(a)}}},{key:"handleClick",value:function(e){e.preventDefault(),this.init()}},{key:"init",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:e.sent,this.setState({isDesiredNetwork:!0,isMetaMask:!1}),this.network(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({isLoginMetaMask:!0,isMetaMask:!1});case 11:window.ethereum.on("accountsChanged",function(e){console.log(e),1===e.length&&(console.log("hi"),t.setState({isLoginMetaMask:!0,isMetaMask:!1,isDesiredNetwork:!1,isLogin:!1})),console.log("Hello")});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"network",value:function(){var e=this;if("3"===window.ethereum.networkVersion)this.setState({isLogin:!0});else{window.ethereum.on("networkChanged",function(t){console.log(t),"3"===t?e.setState({isLogin:!0}):(e.setState({isLogin:!1}),e.setState({isDesiredNetwork:!0}))})}}},{key:"handleClose",value:function(){window.location.reload(),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0}),this.mount()}},{key:"render",value:function(){var e;return this.state.isMetaMask&&(e=i.a.createElement(v,{tag:"boo"})),this.state.isLoginMetaMask&&(e=i.a.createElement(v,{tag:"foo"})),this.state.isDesiredNetwork&&(e=i.a.createElement(v,{tag:"coo"})),this.state.isLogin&&(e=i.a.createElement(v,{tag:"doo"})),a&&(e=i.a.createElement(o.Fragment,null,"Mobile coming soon!")),i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{mb:3,onClick:this.handleShow},"Connect with MetaMask"),i.a.createElement(C.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(C.a.Header,{closeButton:!0},i.a.createElement(C.a.Title,null,"Lets Start!")),i.a.createElement(C.a.Body,null,e),i.a.createElement(C.a.Footer,null,i.a.createElement(E.a,{variant:"secondary",onClick:this.handleClose},"Close"),i.a.createElement(E.a,{variant:"primary",onClick:this.handleClose},"Done!"))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n(196)},84:function(e,t,n){}},[[79,2,1]]]);
//# sourceMappingURL=main.7294456f.chunk.js.map