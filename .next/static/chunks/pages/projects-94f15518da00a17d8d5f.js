_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{D85t:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a("RHEb")}])},DKuG:function(e,t){e.exports=function(e,t){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,t&&(n.onload=function(){n.onerror=n.onload=null,t(null,n)},n.onerror=function(){n.onerror=n.onload=null,t(new Error("Failed to load "+e),n)});a.appendChild(n)}},RHEb:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a("q1tI"),o=a.n(n),r=a("CafY"),i=(a("17x9"),a("DKuG")),s=a.n(i);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=["onReady","onStateChange","onPlaybackQualityChange","onPlaybackRateChange","onError","onApiChange"];var d=null;function p(){return d||(d=new Promise((function(e,t){"object"!==typeof window.YT||"function"!==typeof window.YT.ready?s()("https://www.youtube.com/iframe_api",(function(a){a?t(a):window.YT.ready((function(){e(window.YT)}))})):window.YT.ready((function(){e(window.YT)}))}))),d}var u=function(e){var t,a;function o(t){var a;return(a=e.call(this,t)||this).onPlayerReady=a.onPlayerReady.bind(c(a)),a.onPlayerStateChange=a.onPlayerStateChange.bind(c(a)),a.refContainer=a.refContainer.bind(c(a)),a}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=o.prototype;return r.componentDidMount=function(){this.createPlayer()},r.componentDidUpdate=function(e){var t=this,a=Object.keys(this.props).filter((function(a){return t.props[a]!==e[a]}));this.updateProps(a)},r.componentWillUnmount=function(){this.playerInstance&&this.playerInstance.destroy()},r.onPlayerReady=function(e){var t=this.props,a=t.volume,n=t.muted,o=t.suggestedQuality,r=t.playbackRate;"undefined"!==typeof a&&e.target.setVolume(100*a),"undefined"!==typeof n&&(n?e.target.mute():e.target.unMute()),"undefined"!==typeof o&&e.target.setPlaybackQuality(o),"undefined"!==typeof r&&e.target.setPlaybackRate(r),this.resolvePlayer(e.target)},r.onPlayerStateChange=function(e){var t=this.props,a=t.onCued,n=t.onBuffering,o=t.onPause,r=t.onPlaying,i=t.onEnd,s=YT.PlayerState;switch(e.data){case s.CUED:a(e);break;case s.BUFFERING:n(e);break;case s.PAUSED:o(e);break;case s.PLAYING:r(e);break;case s.ENDED:i(e)}},r.getPlayerParameters=function(){return{autoplay:this.props.autoplay,cc_load_policy:this.props.showCaptions?1:0,controls:this.props.controls?1:0,disablekb:this.props.disableKeyboard?1:0,fs:this.props.allowFullscreen?1:0,hl:this.props.lang,iv_load_policy:this.props.annotations?1:3,start:this.props.startSeconds,end:this.props.endSeconds,modestbranding:this.props.modestBranding?1:0,playsinline:this.props.playsInline?1:0,rel:this.props.showRelatedVideos?1:0,showinfo:this.props.showInfo?1:0}},r.getInitialOptions=function(){return{videoId:this.props.video,width:this.props.width,height:this.props.height,playerVars:this.getPlayerParameters(),events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}}},r.updateProps=function(e){var t=this;this.player.then((function(a){e.forEach((function(e){var n=t.props[e];switch(e){case"muted":n?a.mute():a.unMute();break;case"suggestedQuality":a.setPlaybackQuality(n);break;case"volume":a.setVolume(100*n);break;case"paused":n&&2!==a.getPlayerState()?a.pauseVideo():n||2!==a.getPlayerState()||a.playVideo();break;case"id":case"className":case"width":case"height":a.getIframe()[e]=n;break;case"video":if(n){var o=t.props,r={videoId:n,startSeconds:o.startSeconds||0,endSeconds:o.endSeconds};o.autoplay?a.loadVideoById(r):a.cueVideoById(r)}else a.stopVideo()}}))}))},r.createPlayer=function(){var e=this,t=this.props.volume;this.player=p().then((function(t){return new Promise((function(a){e.resolvePlayer=a;var n=new t.Player(e.container,e.getInitialOptions());e.playerInstance=n,l.forEach((function(t){n.addEventListener(t,(function(a){var n=e.props[t];n&&n(a)}))}))}))})),"number"===typeof t&&this.updateProps(["volume"])},r.refContainer=function(e){this.container=e},r.render=function(){var e=this.props,t=e.id,a=e.className,o=e.style;return Object(n.createElement)("div",{id:t,className:a,style:o,ref:this.refContainer})},o}(n.Component);u.defaultProps={autoplay:!1,showCaptions:!1,controls:!0,disableKeyboard:!1,allowFullscreen:!0,annotations:!0,modestBranding:!1,playsInline:!1,showRelatedVideos:!0,showInfo:!0,onCued:function(){},onBuffering:function(){},onPlaying:function(){},onPause:function(){},onEnd:function(){}};var h=u,y=a("Z4Yb"),f=a.n(y),g=o.a.createElement;function m(e){return g("div",{className:"project"},g(h,{className:"player",video:e.video}),g("div",{className:f.a.headingMd},e.category),g("div",{className:f.a.headingLg},e.title))}var v=a("YFqc"),w=a.n(v),P=a("8Kt/"),b=a.n(P),_=o.a.createElement;function E(e){return _(r.a,{home:!0},_(b.a,null,_("title",null,r.b," Projects")),_("h2",{className:f.a.headingLg},"Projects"),_("div",{className:f.a.pdf},_("a",{href:"/data/Leibowitz_Final.pdf"},_("img",{src:"https://daib13.github.io/blogs/20180725_vae_imgs/graphical_model.png",alt:"Paper",className:"".concat(f.a.project)})),_("div",{className:f.a.headingMd},"Natural Language Processing Research")),_(m,{video:"X_eonFkd9ug",category:"Freeze Pitch Presentation"}),_(m,{video:"njvg-jnGTHc",category:"Virtual Reality: MTAR"}),_(m,{video:"ql0CleL4kDs",category:"Virtual Reality: Makerlab Disco Party"}),_("div",{className:f.a.story},_(w.a,{href:"/story"},_("img",{src:"/story_pages/title_page.png",alt:"Title",className:"".concat(f.a.project)})),_("div",{className:f.a.headingMd},"A Fairy Good Story")))}}},[["D85t",0,1,2,3]]]);