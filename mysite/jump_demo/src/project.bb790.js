window.__require=function t(e,o,r){function n(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var l=o[c]={exports:{}};e[c][0].call(l.exports,function(t){return n(e[c][1][t]||t)},l,l.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({AudioManager:[function(t,e,o){"use strict";cc._RF.push(e,"ac898qrY6hBAa2tHR/P0zyo","AudioManager");var r=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){}return t.prototype.playMusic=function(t,e){void 0===e&&(e=.5);var o="audio/music/"+t;cc.loader.loadRes(o,cc.AudioClip,function(t,o){t?console.error(t):(cc.audioEngine.setMusicVolume(e),cc.audioEngine.playMusic(o,!0))})},t.prototype.playSound=function(t,e){void 0===e&&(e=1);var o="audio/sound/"+t;cc.loader.loadRes(o,cc.AudioClip,function(t,o){t?console.error(t):(cc.audioEngine.setEffectsVolume(e),cc.audioEngine.playEffect(o,!1))})},t.NAME="AudioManager",t=r([i("AudioManager")],t)}());o.AudioManager=c,cc._RF.pop()},{}],BrokenPlatform:[function(t,e,o){"use strict";cc._RF.push(e,"2be66x8vUBNP4EVnbNqaNbI","BrokenPlatform");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./NormalPlatform"),c=t("./Singleton"),a=t("./PoolManager"),s=t("./AudioManager"),p=cc._decorator,l=p.ccclass,u=(p.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isBroken=!1,e}return r(e,t),e.prototype.onEnable=function(){this.isBroken=!1;var t=this.getComponent(cc.Animation);t&&t.play("idle")},e.prototype.onDisable=function(){},e.prototype.onPlayerLanding=function(t){if(!this.isBroken){console.log("Do nothing");var e=this.getComponent(cc.Animation);e&&(e.play("broke",0),c.I(s.AudioManager).playSound("Explosions/explosion_15")),this.isBroken=!0}},e.prototype.onBrokenComplete=function(){c.I(a.default).setNode(this.node)},e=n([l],e)}(i.default));o.default=u,cc._RF.pop()},{"./AudioManager":"AudioManager","./NormalPlatform":"NormalPlatform","./PoolManager":"PoolManager","./Singleton":"Singleton"}],EventManager:[function(t,e,o){"use strict";cc._RF.push(e,"8b985b+wJJInYF4ZRH30BsK","EventManager");var r=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){}return t.prototype.isMatch=function(t,e,o){return t===this.type&&e===this.callback&&o===this.thisArg},t}());o.EventData=c;var a=function(){function t(){this.eventMap={},this.caller2Events={}}return t.prototype.on=function(t,e,o){var r=this.eventMap[t];r||(r=this.eventMap[t]=[]);var n=new c;n.type=t,n.callback=e,n.thisArg=o,r.push(n)},t.prototype.off=function(t,e,o){var r=this.eventMap[t];if(r)for(var n=r.length-1;n>=0;--n){if(r[n].isMatch(t,e,o)){r.splice(n,1);break}}},t.prototype.dispatch=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var r=this.eventMap[t];if(r)for(var n=0,i=r.length;n<i;++n){var c=r[n];c.callback.apply(c.thisArg,e)}},t.NAME="EventManager",t=r([i],t)}();o.default=a,cc._RF.pop()},{}],GameRoot:[function(t,e,o){"use strict";cc._RF.push(e,"c20ab7eZdZMiYkWvpWcDtKB","GameRoot");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.player=null,e}return r(e,t),e.prototype.onLoad=function(){},e.prototype.update=function(t){},e.prototype.lateUpdate=function(t){},n([a({type:cc.Node})],e.prototype,"player",void 0),e=n([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"69e59yOP11KUa7teS11E3FB","Main");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0;cc.Canvas.instance.designResolution,cc.winSize},e.prototype.onDeviceMotion=function(t){},e=n([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],NormalPlatform:[function(t,e,o){"use strict";cc._RF.push(e,"2d0d7KdCt5CxKAxBJHhoJhC","NormalPlatform");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Platform"),c=cc._decorator,a=c.ccclass,s=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onPlayerLanding=function(t){t.applyJump()},e=n([a],e)}(i.default));o.default=s,cc._RF.pop()},{"./Platform":"Platform"}],PatrolPlatform:[function(t,e,o){"use strict";cc._RF.push(e,"cf360Au7N1Hr5tAhi6T0JCP","PatrolPlatform");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./NormalPlatform"),c=t("./Singleton"),a=t("./PoolManager"),s=cc._decorator,p=s.ccclass,l=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onEnable=function(){var t=this.getComponent(cc.Animation);t&&t.play("patrol")},e.prototype.lateUpdate=function(){this.node.convertToWorldSpaceAR(cc.v2()).y<0&&c.I(a.default).setNode(this.node.parent)},e=n([p],e)}(i.default));o.default=l,cc._RF.pop()},{"./NormalPlatform":"NormalPlatform","./PoolManager":"PoolManager","./Singleton":"Singleton"}],Patroller:[function(t,e,o){"use strict";cc._RF.push(e,"cd983CgeANDe5fJuUPRY1lF","Patroller");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.begOffset=cc.v2(-50,0),e.endOffset=cc.v2(50,0),e.duration=1,e.time=0,e}return r(e,t),e.prototype.onLoad=function(){this.rigidBody=this.getComponent(cc.RigidBody),this.velocity=this.endOffset.sub(this.begOffset).div(this.duration)},e.prototype.update=function(t){this.time=(this.time+t)%(2*this.duration);var e=this.time<this.duration,o=this.rigidBody.linearVelocity;o=e?this.velocity.mul(1):this.velocity.mul(-1),this.rigidBody.linearVelocity=o},n([a],e.prototype,"begOffset",void 0),n([a],e.prototype,"endOffset",void 0),n([a],e.prototype,"duration",void 0),e=n([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Platform:[function(t,e,o){"use strict";cc._RF.push(e,"6949cYN/C9PbqtXHNbex0PO","Platform");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Player"),c=t("./Singleton"),a=t("./PoolManager"),s=cc._decorator,p=s.ccclass,l=s.property,u=0,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nameLabel=null,e.platformId=0,e}return r(e,t),e.prototype.onLoad=function(){this.platformId=++u,this.nameLabel&&(this.nameLabel.string=this.platformId.toString())},e.prototype.onEnable=function(){},e.prototype.lateUpdate=function(){this.node.convertToWorldSpaceAR(cc.v2()).y<0&&c.I(a.default).setNode(this.node)},e.prototype.onDisable=function(){},e.prototype.onCollisionEnter=function(t,e){var o=t.node.getComponent(i.default);if(o){var r=e.world.aabb,n=e.world.preAabb.clone(),c=t.world.aabb,a=t.world.preAabb.clone();a.x=c.x,n.x=r.x,a.y=c.y,n.y=r.y,cc.Intersection.rectRect(a,n)&&o.playerSpeed.y<0&&a.yMax>n.yMax&&this.onPlayerLanding(o)}},e.prototype.onPlayerLanding=function(t){},n([l({type:cc.Label})],e.prototype,"nameLabel",void 0),e=n([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./Player":"Player","./PoolManager":"PoolManager","./Singleton":"Singleton"}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"dcabbu1omRMo63JBJPnaDQH","Player");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Singleton"),c=t("./PoolManager"),a=t("./AudioManager"),s=t("./EventManager"),p=cc._decorator,l=p.ccclass,u=p.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.rootNode=null,e.platformRoot=null,e.jumpSpeed=600,e.jumpMaxTimes=1,e.walkMaxSpeed=400,e.gravity=1e3,e.maxDownSpeed=1e3,e.moveDamp=150,e.keyDown={},e.leftJumpTimes=0,e.playerSpeed=cc.v2(),e.stopMoveOnceKeyUp=!0,e.isGameOver=!1,e.generateCurrY=0,e.generateAheadY=100,e.boardGapMin=50,e.boardGapMax=80,e.boardPrefabs=[],e.score=0,e}return r(e,t),e.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.playerOriginPos=this.node.getPosition().clone(),this.rootOriginPos=this.rootNode.getPosition().clone(),this.stageSize=cc.winSize,i.I(a.AudioManager).playMusic("BGM_04",.2)},e.prototype.update=function(t){this.checkInput(),this.playMove(t),this.playJump(t),this.playFollow(t),this.generateBoard(),this.checkGameOver(),this.playerSpeed.x>0?this.playerSpeed.x=Math.max(0,this.playerSpeed.x-this.moveDamp*t):this.playerSpeed.x<0&&(this.playerSpeed.x=Math.min(0,this.playerSpeed.x+this.moveDamp*t))},e.prototype.checkInput=function(){if(this.isGameOver)this.getKeyDown(cc.macro.KEY.space)&&this.restart();else{var t=this.getKeyDown(cc.macro.KEY.a),e=this.getKeyDown(cc.macro.KEY.d);this.getKeyDown(cc.macro.KEY.w);t?this.playerSpeed.x=-this.walkMaxSpeed:e?this.playerSpeed.x=this.walkMaxSpeed:this.stopMoveOnceKeyUp&&(this.playerSpeed.x=0)}},e.prototype.playJump=function(t){this.playerSpeed.y-=this.gravity*t,this.playerSpeed.y<-this.maxDownSpeed&&(this.playerSpeed.y=-this.maxDownSpeed)},e.prototype.playFollow=function(t){this.isGameOver?this.rootNode.setPosition(cc.v2(this.rootNode.position.x,this.rootNode.y-t*this.playerSpeed.y*2)):this.playerSpeed.y>0&&this.node.convertToWorldSpaceAR(cc.v2()).y>.5*this.stageSize.height&&(this.rootNode.setPosition(cc.v2(this.rootNode.position.x,this.rootNode.y-t*this.playerSpeed.y)),this.score=Math.floor(Math.max(this.score,-this.rootNode.position.y)),i.I(s.default).dispatch("MSG_SET_SCORE",this.score))},e.prototype.playMove=function(t){this.node.setPosition(this.node.getPosition().addSelf(this.playerSpeed.mul(t))),this.node.position.x<0?this.node.setPosition(this.node.position.x+this.stageSize.width,this.node.position.y):this.node.position.x>this.stageSize.width&&this.node.setPosition(this.node.position.x-this.stageSize.width,this.node.position.y)},e.prototype.generateBoard=function(){if(!this.isGameOver)for(;this.generateCurrY<this.stageSize.height+this.generateAheadY-this.rootNode.y;){var t=this.boardPrefabs[Math.floor(Math.random()*this.boardPrefabs.length)],e=i.I(c.default).getNode(t,this.platformRoot),o=e.width/2+Math.floor(Math.random()*(this.stageSize.width-e.width)),r=Math.floor(Math.random()*(this.boardGapMax-this.boardGapMin)+this.boardGapMin);this.generateCurrY+=r,e.setPosition(o,this.generateCurrY)}},e.prototype.checkGameOver=function(){this.isGameOver||this.node.convertToWorldSpaceAR(cc.v2()).y<0&&(i.I(a.AudioManager).playSound("Game Over/game_over_25"),this.isGameOver=!0)},e.prototype.restart=function(){for(var t=this.platformRoot.children,e=t.length-1;e>=0;--e){var o=t[e];this.platformRoot.removeChild(o),i.I(c.default).setNode(o)}this.node.setPosition(this.playerOriginPos),this.rootNode.setPosition(this.rootOriginPos),this.isGameOver=!1,this.generateCurrY=0,this.score=0,i.I(s.default).dispatch("MSG_RESTART")},e.prototype.lateUpdate=function(t){},e.prototype.applyJump=function(){var t=this.getKeyDown(cc.macro.KEY.w);this.playerSpeed.y=this.jumpSpeed*(t?2:1),i.I(a.AudioManager).playSound(t?"Jump/jump_04":"Jump/jump_03")},e.prototype.onBeginContact=function(t,e,o){console.log("onBeginContact");var r=t.getManifold();1==r.localNormal.y?t.disabled=!0:-1==r.localNormal.y&&(console.log("Ground"),this.leftJumpTimes=this.jumpMaxTimes)},e.prototype.onEndContact=function(t,e,o){console.log("onEndContact")},e.prototype.onPreSolve=function(t,e,o){},e.prototype.onPostSolve=function(t,e,o){},e.prototype.onKeyDown=function(t){this.keyDown[t.keyCode]=!0},e.prototype.onKeyUp=function(t){this.keyDown[t.keyCode]=!1},e.prototype.getKeyDown=function(t){return this.keyDown[t]},n([u({type:cc.Node})],e.prototype,"rootNode",void 0),n([u({type:cc.Node})],e.prototype,"platformRoot",void 0),n([u({type:[cc.Prefab]})],e.prototype,"boardPrefabs",void 0),e=n([l],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./AudioManager":"AudioManager","./EventManager":"EventManager","./PoolManager":"PoolManager","./Singleton":"Singleton"}],PoolManager:[function(t,e,o){"use strict";cc._RF.push(e,"6fc27W2odFK3Yk2SylPfmeS","PoolManager");var r=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){this.nodePools={}}return t.prototype.getNode=function(t,e){void 0===e&&(e=null);var o,r=this.nodePools[t.name];return r&&0!=r.length?o=r.pop():(o=cc.instantiate(t)).name=t.name,e&&(o.parent=e),o.active=!0,o},t.prototype.setNode=function(t){var e=this.nodePools[t.name];e||(this.nodePools[t.name]=e=[]),t.parent=null,t.active=!1,e.push(t)},t.NAME="PoolManager",t=r([i],t)}());o.default=c,cc._RF.pop()},{}],Score:[function(t,e,o){"use strict";cc._RF.push(e,"d8fbejPWWJOyYju5BG8rigD","Score");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Singleton"),c=t("./EventManager"),a=cc._decorator,s=a.ccclass,p=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.score=null,e.currScore=0,e.showScore=0,e.deltaScore=500,e}return r(e,t),e.prototype.onEnable=function(){i.I(c.default).on("MSG_SET_SCORE",this.setScore,this),i.I(c.default).on("MSG_RESTART",this.onRestart,this)},e.prototype.onDisable=function(){i.I(c.default).off("MSG_SET_SCORE",this.setScore,this)},e.prototype.onLoad=function(){this.reset()},e.prototype.update=function(t){if(this.showScore!=this.currScore){var e=this.currScore-this.showScore;if(e>0){var o=Math.min(e,Math.floor(t*this.deltaScore));this.showScore+=o}else{o=Math.max(e,-Math.floor(t*this.deltaScore));this.showScore+=o}this.updateScoreTxt()}},e.prototype.addScore=function(t){this.setScore(this.currScore+t)},e.prototype.setScore=function(t,e){void 0===e&&(e=!1),this.currScore=t,e&&(this.showScore=this.currScore,this.updateScoreTxt())},e.prototype.onRestart=function(){this.setScore(0,!0)},e.prototype.reset=function(){this.setScore(0,!0)},e.prototype.updateScoreTxt=function(){this.score&&(this.score.string=this.showScore.toString())},n([p(cc.Label)],e.prototype,"score",void 0),e=n([s],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./EventManager":"EventManager","./Singleton":"Singleton"}],ScrollBg:[function(t,e,o){"use strict";cc._RF.push(e,"b10491mfN9G7bkbaCAKOsu3","ScrollBg");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Singleton"),c=t("./PoolManager"),a=cc._decorator,s=a.ccclass,p=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefab=null,e.bgs=[],e.curMaxY=0,e.curMinY=0,e}return r(e,t),e.prototype.onLoad=function(){this.stageSize=cc.winSize,this.curMinY=0;for(var t=this.node.convertToWorldSpaceAR(cc.v2(0,this.stageSize.height)).y;this.curMaxY<t;){var e=i.I(c.default).getNode(this.prefab,this.node);this.bgs.push(e),e.y=this.curMaxY,this.curMaxY+=e.height}var o=i.I(c.default).getNode(this.prefab,this.node);this.bgs.push(o),o.y=this.curMaxY,this.curMaxY+=o.height},e.prototype.lateUpdate=function(t){for(;;){if(this.node.convertToWorldSpaceAR(cc.v2(0,this.curMaxY)).y>=this.stageSize.height)break;if(!(e=this.bgs.shift()))break;this.bgs.push(e),e.y=this.curMaxY,this.curMaxY+=e.height,this.curMinY+=e.height}for(;;){var e;if(this.node.convertToWorldSpaceAR(cc.v2(0,this.curMinY)).y<=0)break;if(!(e=this.bgs.pop()))break;this.bgs.unshift(e),e.y=this.curMinY-e.height,this.curMaxY-=e.height,this.curMinY-=e.height}},n([p(cc.Prefab)],e.prototype,"prefab",void 0),e=n([s],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./PoolManager":"PoolManager","./Singleton":"Singleton"}],Singleton:[function(t,e,o){"use strict";cc._RF.push(e,"d8140XEXjBNfYxDkyrLX3TD","Singleton");var r=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){}return t.get=function(t,e,o){void 0===e&&(e=""),void 0===o&&(o=null);var r=o||t.NAME;r+=e;var n=this.allInst[r];return n||(n=this.allInst[r]=new t),n},t.allInst={},t=r([i],t)}());o.default=c,o.I=function(t,e,o){return void 0===e&&(e=""),void 0===o&&(o=null),c.get(t,e,o)},cc._RF.pop()},{}]},{},["AudioManager","BrokenPlatform","EventManager","GameRoot","Main","NormalPlatform","PatrolPlatform","Patroller","Platform","Player","PoolManager","Score","ScrollBg","Singleton"]);