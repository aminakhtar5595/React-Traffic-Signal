(window["webpackJsonpcamper-leaderboard"]=window["webpackJsonpcamper-leaderboard"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),c=(a(13),a(1)),o=a(2),l=a(4),m=a(3),u=a(5),g=(a(14),function(e){function t(){var e;Object(c.a)(this,t),e=Object(l.a)(this,Object(m.a)(t).call(this));var a=new Date,n=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()];return e.state={date:n,current_day:r},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-danger"},r.a.createElement("h3",{className:"navbar-brand abs"},"Traffic Signal"),r.a.createElement("div",{className:"navbar-collapse collapse",id:"collapsingNavbar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("h4",{className:"nav-link"},this.state.date))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("h4",{className:"nav-link"},this.state.current_day)))))}}]),t}(n.Component)),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).msg_timer=function(){setTimeout((function(){console.log("Red light"),a.setState({msg:r.a.createElement("img",{src:"./red_light.png",alt:"Red Light"})})}),5e3)},a.second_msg_timer=function(){setTimeout((function(){console.log("Yellow light"),a.setState({msg:r.a.createElement("img",{src:"./yellow_light.png",alt:"Yellow Light"})})}),2e4)},a.third_msg_timer=function(){setTimeout((function(){console.log("Green light"),a.setState({msg:r.a.createElement("img",{src:"./green_light.png",alt:"Green Light"})})}),3e4)},a.fourth_msg_timer=function(){setTimeout((function(){console.log("Red light"),a.setState({msg:r.a.createElement("img",{src:"./red_light.png",alt:"Red Light"})})}),6e4)},a.state={counter:60,msg:r.a.createElement("img",{src:"./no-lights.png",alt:"Traffic Lights",className:"signal-image"}),video_url:"./traffic_video.mp4"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.app_timer=setInterval((function(){e.state.counter<=0?(clearInterval(e.app_timer),e.setState({msg:e.state.msg})):e.setState((function(e){return{counter:e.counter-1}})),e.state.counter<10&&e.setState({counter:"0"+parseInt(e.state.counter)})}),1e3),this.msg_timer(),this.second_msg_timer(),this.third_msg_timer(),this.fourth_msg_timer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.app_timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("h3",{className:"counter-link"},"00 : 00 : ",this.state.counter),r.a.createElement("div",{className:"app-image"},r.a.createElement("h4",{id:"app-img"},this.state.msg),r.a.createElement("video",{id:"background-video",autoPlay:!0},r.a.createElement("source",{src:this.state.video_url,type:"video/mp4"}),r.a.createElement("source",{src:this.state.video_url,type:"video/ogg"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8d3f1654.chunk.js.map