(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){e.exports=n.p+"static/media/Ropsten.7a313811.png"},131:function(e,t,n){e.exports=n(284)},136:function(e,t,n){},204:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),s=n(20),r=n.n(s),c=(n(136),n(84)),l=n.n(c),h=n(124),u=n(12),d=n(13),m=n(16),b=n(14),k=n(15),g=n(9),w=n(125),f=(n(43),function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Login into MetaMask",i.a.createElement("br",null)))}}]),t}(o.Component)),p=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Install MetaMask to Sign in"))}}]),t}(o.Component),v=n(41),O=n.n(v),j=n(128),M=n.n(j),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={image:"",clicked:!0},n.handleClick=n.handleClick.bind(Object(g.a)(Object(g.a)(n))),n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({clicked:!this.state.clicked}),this.state.clicked?this.state.image=i.a.createElement("img",{src:M.a,alt:"fireSpot"}):this.state.image="",console.log("hello")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(O.a,{onClick:function(t){return e.handleClick(t)}}," Connect To Ropsten Network"),i.a.createElement("br",null),this.state.image)}}]),t}(o.Component),C=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Signed in with MetaMask!",i.a.createElement("br",null)))}}]),t}(o.Component),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).components={foo:f,boo:p,coo:E,doo:C},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.components[this.props.tag||"foo"];return i.a.createElement(e,null)}}]),t}(o.Component),S=n(42),L=n.n(S),A=(n(204),n(206),n(212),n(248).detect),x=function(e){function t(e,n){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(g.a)(Object(g.a)(a))),a.handleClose=a.handleClose.bind(Object(g.a)(Object(g.a)(a))),a.network=a.network.bind(Object(g.a)(Object(g.a)(a))),a.mount=a.mount.bind(Object(g.a)(Object(g.a)(a))),a.init=a.init.bind(Object(g.a)(Object(g.a)(a))),a.state={show:!1,install:!1,isMetaMask:!1,isLoginMetaMask:!1,isDesiredNetwork:!1,isLogin:!1},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){"undefined"!==typeof web3?this.state.install=!1:this.state.install=!0,console.log("hello"),console.log(this.state.install)}},{key:"mount",value:function(){if("undefined"!==typeof web3)this.setState({isMetaMask:!1}),this.init();else{var e=A();if(!(a=!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))))switch(e.name){case"firefox":window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/","_blank");break;case"chrome":window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en","_blank");case"opera":window.open("https://addons.opera.com/en/extensions/details/metamask/","_blank")}this.setState({isMetaMask:!0})}}},{key:"init",value:function(){var e=Object(h.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:e.sent,this.setState({isDesiredNetwork:!0,isMetaMask:!1}),this.network(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({isLoginMetaMask:!0,isMetaMask:!1});case 11:window.ethereum.on("accountsChanged",function(e){console.log(e),1===e.length&&(console.log("hi"),t.setState({isLoginMetaMask:!0,isMetaMask:!1,isDesiredNetwork:!1,isLogin:!1}))});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"network",value:function(){var e=this;if("3"===window.ethereum.networkVersion)this.setState({isLogin:!0});else{window.ethereum.on("networkChanged",function(t){console.log(t),"3"===t?e.setState({isLogin:!0}):(e.setState({isLogin:!1}),e.setState({isDesiredNetwork:!0}))})}}},{key:"handleClose",value:function(){window.location.reload(),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0}),this.mount()}},{key:"render",value:function(){var e;return this.state.isMetaMask&&(e=i.a.createElement(y,{tag:"boo"})),this.state.isLoginMetaMask&&(e=i.a.createElement(y,{tag:"foo"})),this.state.isDesiredNetwork&&(e=i.a.createElement(y,{tag:"coo"})),this.state.isLogin&&(e=i.a.createElement(y,{tag:"doo"})),a&&(e=i.a.createElement(o.Fragment,null,"Mobile coming soon!")),console.log(this.state.install),i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{mb:3,onClick:this.handleShow},this.state.install?"Install MetaMask":"Connect with MetaMask"),i.a.createElement(L.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(L.a.Header,{closeButton:!0},i.a.createElement(L.a.Title,null,"Lets Start!")),i.a.createElement(L.a.Body,null,e),i.a.createElement(L.a.Footer,null,i.a.createElement(O.a,{variant:"secondary",onClick:this.handleClose},"Close"),i.a.createElement(O.a,{variant:"primary",onClick:this.handleClose},"Done!"))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.92179ce6.chunk.js.map