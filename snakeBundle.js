"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,t){var i,o,a,n,s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(s)return o=!(i=!0),{s:function(){s=s.call(e)},n:function(){var e=s.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw a}}};if(Array.isArray(e)||(s=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return s&&(e=s),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var i;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(i="Object"===(i=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(i){var o=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(i);return _possibleConstructorReturn(this,o?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var game,snake,food,bonus,Preloader=function(){_inherits(i,Phaser.Scene);var t=_createSuper(i);function i(){var e;return _classCallCheck(this,i),(e=t.call(this,{key:"preloader"})).loadText,e}return _createClass(i,[{key:"preload",value:function(){console.log("Preloader starting!"),this.loadText=this.add.text(game.config.width/2,game.config.height/2,"ЗАГРУЗКА...",{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"40px",fill:"white"}),this.loadText2=this.add.text(game.config.width/2,game.config.height/2,"ЗАГРУЗКА...",{fontFamily:"Nunito",fontStyle:"bold",fontSize:"40px",fill:"white"}),this.loadText2.alpha=0,this.loadText.setOrigin(.5),this.load.setPath("assets/"),this.load.image("info","gameInfo.png"),this.load.image("controlsInfo","controlsInfo.png"),this.load.image("ageInfo","ageInfo.png"),this.load.image("background_0","skins/bg_0.png"),this.load.image("background_1","skins/bg_1.png"),this.load.image("background_2","skins/bg_2.png"),this.load.image("head_0","skins/head_0.png"),this.load.image("head_1","skins/head_1.png"),this.load.image("head_2","skins/head_2.png"),this.load.image("head_lick_0","/skins/head_lick_0.png"),this.load.image("head_lick_1","/skins/head_lick_1.png"),this.load.image("head_lick_2","/skins/head_lick_2.png"),this.load.image("body_0","skins/body_0.png"),this.load.image("body_1","skins/body_1.png"),this.load.image("body_2","skins/body_2.png"),this.load.image("tail_0","skins/tail_0.png"),this.load.image("tail_1","skins/tail_1.png"),this.load.image("tail_2","skins/tail_2.png"),this.load.image("scoreIcon","ui/scoreIcon.png"),this.load.image("bestIcon","ui/bestIcon.png"),this.load.image("menuStart","ui/menuStart.png"),this.load.image("menuGameOver","ui/menuGameOver.png"),this.load.image("mainBG_0","ui/uibg_0.png"),this.load.image("mainBG_1","ui/uibg_1.png"),this.load.image("mainBG_2","ui/uibg_2.png"),this.load.image("pause","ui/pause.png"),this.load.image("button","button.png"),this.load.image("selector","selector.png"),this.load.image("food","food.png"),this.load.image("food_small","food_small.png"),this.load.image("food_big","food_big.png"),this.load.image("bonus_1","bonus_1.png"),this.load.image("bonus_0","bonus_0.png"),this.load.image("bonus_small_0","bonus_small_0.png"),this.load.image("bonus_small_1","bonus_small_1.png"),this.load.image("bonus_big_0","bonus_big_0.png"),this.load.image("bonus_big_1","bonus_big_1.png"),this.load.image("head_helmet_0","/skins/head_helmet_0.png"),this.load.image("head_helmet_1","/skins/head_helmet_1.png"),this.load.image("head_helmet_2","/skins/head_helmet_2.png"),this.load.image("head_helmet_nolick_0","/skins/head_helmet_nolick_0.png"),this.load.image("head_helmet_nolick_1","/skins/head_helmet_nolick_1.png"),this.load.image("head_helmet_nolick_2","/skins/head_helmet_nolick_2.png"),this.load.audio("background-music","sounds/background_music.mp3"),this.load.audio("bite","sounds/bite.mp3"),this.load.audio("bonus","sounds/bonus.mp3"),this.load.audio("click","sounds/click.mp3"),this.load.audio("down","sounds/down.mp3"),this.load.audio("left","sounds/left.mp3"),this.load.audio("lose","sounds/lose.mp3"),this.load.audio("right","sounds/right.mp3"),this.load.audio("up","sounds/up.mp3")}},{key:"create",value:function(){console.log("Preloader Finish!"),this.scene.start(mainMenu)}}]),i}(),preloader=new Preloader,MainMenu=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"mainMenu"})}return _createClass(t,[{key:"create",value:function(){var t=this;console.log("MainMenu is started!"),game_session.action.startGameSession=(new Date).getTime(),console.log(game_session.action.startGameSession),this.texturePack=getTexturePack(),gameState.onMenu=!0,this.menuBG=this.add.image(game.config.width/2,game.config.height/2,"mainBG_".concat(this.texturePack)).setOrigin(.5),this.menuBG.setDisplaySize(game.config.width,game.config.height),this.mainbg=this.add.image(game.config.width/2,game.config.height/2,"menuStart").setOrigin(.5),this.mainbg.setDisplaySize(game.config.width,game.config.height),this.controlsInfo=this.add.image(260,70,"controlsInfo").setOrigin(.5),this.ageInfo=this.add.image(game.config.width-210,70,"ageInfo").setOrigin(0,.5),this.btnStart=this.add.sprite(game.config.width/2,game.config.height/2+100,"button").setScale(.5),this.btnStart.setOrigin(.5),this.btnClose=this.add.sprite(this.btnStart.x,this.btnStart.y+120,"button").setScale(.5),this.btnClose.setOrigin(.5),this.selector=this.add.image(this.btnStart.x,this.btnStart.y,"selector").setScale(.44),this.selector.setOrigin(.5),this.btnStartText=this.add.text(this.btnStart.x,this.btnStart.y,"НАЧАТЬ ИГРУ",{fontFamily:"Nunito",fontSize:"60px",color:"black",fontStyle:"bold",align:"center"}),this.btnStartText.setOrigin(.5),this.btnCloseText=this.add.text(this.btnClose.x,this.btnClose.y,"ВЫЙТИ",{fontFamily:"Nunito",fontSize:"60px",color:"black",fontStyle:"bold",align:"center"}),this.btnCloseText.setOrigin(.5),this.input.keyboard.on("keydown-ENTER",this.gameToggle,this),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.onPressExit()}),this.clickSound=this.sound.add("click",{loop:!1}),this.loadScore(),this.anims.create({key:"food-animation",frames:[{key:"food_small",duration:500},{key:"food",duration:500},{key:"food_big",duration:500}],frameRate:6,repeat:-1}),this.bonus=new Bonus(this,-1,-1,"bonus_".concat(1),1),this.bonus.alpha=0,this.anims.create({key:"liking_0",frames:[{key:"head_0"},{key:"head_lick_0",duration:1e3}],frameRate:6,repeat:-1}),this.anims.create({key:"liking_1",frames:[{key:"head_1"},{key:"head_lick_1",duration:1e3}],frameRate:6,repeat:-1}),this.anims.create({key:"liking_2",frames:[{key:"head_2"},{key:"head_lick_2",duration:1e3}],frameRate:6,repeat:-1}),this.anims.create({key:"onGodeAnimation_0",frames:[{key:"head_helmet_0"},{key:"head_helmet_nolick_0",duration:1e3}],frameRate:4,repeat:-1}),this.anims.create({key:"onGodeAnimation_1",frames:[{key:"head_helmet_1"},{key:"head_helmet_nolick_1",duration:1e3}],frameRate:4,repeat:-1}),this.anims.create({key:"onGodeAnimation_2",frames:[{key:"head_helmet_2"},{key:"head_helmet_nolick_2",duration:1e3}],frameRate:4,repeat:-1}),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"checkPosX",value:function(t,e){console.log("Координаты клика:".concat(t.offsetX,", ").concat(t.offsetY));var i=!1;return e.forEach(function(e){e===t.offsetX&&(i=!0)}),i}},{key:"checkPosY",value:function(t,e){var i=!1;return e.forEach(function(e){Math.floor(e)===t.offsetY&&(i=!0)}),i}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_snake")?(game_session.highscore=JSON.parse(localStorage.getItem("heighScore_snake")),this.hieghScoreText=this.add.text(game.config.width/2,game.config.height-100,"РЕКОРД  ".concat(JSON.parse(localStorage.getItem("heighScore_snake"))),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"65px",fill:"#2E3D66"}).setOrigin(.5)):this.hieghScoreText=this.add.text(game.config.width/2,game.config.height-100,"РЕКОРД 0",{fontFamily:"Nunito",fontStyle:"bold",fontSize:"65px",fill:"#2E3D66"}).setOrigin(.5)}},{key:"selectorDown",value:function(){1==gameState.onMenu&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,this.btnCloseText.setColor("white"),this.clickSound.play())}},{key:"selectorUp",value:function(){1==gameState.onMenu&&this.selector.y!=this.btnStart.y&&(this.selector.y=this.btnStart.y,this.clickSound.play())}},{key:"gameToggle",value:function(){var e;1==gameState.onMenu&&(this.selector.y==this.btnStart.y?(this.startGame(),this.clickSound.play()):this.selector.y==this.btnClose.y&&(this.clickSound.play(),null!=(e=window)&&e.parent.postMessage("GameExit","*"),this.exit()))}},{key:"startGame",value:function(){gameState.onMenu=!1,this.scene.start("snakegame")}},{key:"exit",value:function(){game_session.action.closeGameSession=(new Date).getTime()}},{key:"onPressExit",value:function(){0==gameState.onGame&&gameOver.exit()}},{key:"update",value:function(){this.selector.y===this.btnClose.y?this.btnCloseText.setColor("white"):this.btnCloseText.setColor("#F0516B"),this.selector.y===this.btnStart.y?this.btnStartText.setColor("white"):this.btnStartText.setColor("#F0516B")}}]),t}(),mainMenu=new MainMenu,Entity=function(){_inherits(n,Phaser.GameObjects.Image);var a=_createSuper(n);function n(e,t,i,o){return _classCallCheck(this,n),(t=a.call(this,e,t,i)).scene=e,t.scene.add.existing(_assertThisInitialized(t)),t.setData("type",o),t.setData("isDead",!1),t}return _createClass(n)}(),Food=function(){_inherits(a,Entity);var o=_createSuper(a);function a(e,t,i){return _classCallCheck(this,a),(e=o.call(this,e,t,i)).body=e.scene.physics.add.sprite(t*CELL,i*CELL,"food").play("food-animation"),e.body.setDisplaySize(32,32),e.body.setSize(30,30,!0),e.body.setOrigin(.5),e.total=0,e}return _createClass(a,[{key:"eat",value:function(){this.total++}}]),a}(),Bonus=function(){_inherits(s,Entity);var n=_createSuper(s);function s(e,t,i,o,a){return _classCallCheck(this,s),(e=n.call(this,e,t,i)).onPlate=!1,e.body=e.scene.physics.add.sprite(t*CELL,i*CELL,o).play("bonus-animation_".concat(a)),e.body.setDisplaySize(32,32),e.body.setOrigin(.5),e.index=a,e.bonusSound=e.scene.sound.add("bonus",{loop:!1,volume:.5}),e.scene.anims.create({key:"bonus-animation_0",frames:[{key:"bonus_small_".concat(0),duration:500},{key:"bonus_".concat(0),duration:500},{key:"bonus_big_".concat(0),duration:500}],frameRate:6,repeat:-1}),e.scene.anims.create({key:"bonus-animation_1",frames:[{key:"bonus_small_".concat(1),duration:500},{key:"bonus_".concat(1),duration:500},{key:"bonus_big_".concat(1),duration:500}],frameRate:6,repeat:-1}),e}return _createClass(s)}(),Snake=function(){_inherits(n,Entity);var a=_createSuper(n);function n(e,t,i){var o;return _classCallCheck(this,n),(o=a.call(this,e,t,i)).headPosition=new Phaser.Geom.Point(t,i),o.body=e.add.group(),o.head=o.scene.physics.add.sprite(t*CELL,i*CELL,"head_".concat(mainMenu.texturePack)).play("liking_".concat(mainMenu.texturePack)),o.body.add(o.head),o.head.setOrigin(.5),o.head.setScale(.4),o.head.setDepth(4),o.head.rotation=4.7,o.alive=!0,o.speed=130,o.moveTime=0,o.tail=o.scene.physics.add.sprite(o.head.x,o.head.y,"tail_".concat(mainMenu.texturePack)),o.body.add(o.tail),o.tail.setOrigin(.5),o.tail.setDisplaySize(32,32),o.tail.setSize(32,32,!0),o.bodyGraphics=o.scene.add.graphics(),o.end=new Phaser.Geom.Point(t,i),o.heading=RIGHT,o.direction=RIGHT,o.bodySegments=o.body.getChildren(),o.onGod=!1,o.biteSound=o.scene.sound.add("bite",{loop:!1,volume:.5}),o.leftSound=o.scene.sound.add("left",{loop:!1,volume:.5}),o.rightSound=o.scene.sound.add("right",{loop:!1,volume:.5}),o.upSound=o.scene.sound.add("up",{loop:!1,volume:.5}),o.downSound=o.scene.sound.add("down",{loop:!1,volume:.5}),o.deadSound=o.scene.sound.add("lose",{loop:!1,volume:.5}),o.turnPoints=[],new Phaser.Geom.Point(o.head.x,o.head.y).name="turnPointL",new Phaser.Geom.Point(o.head.x,o.head.y).name="turnPointR",new Phaser.Geom.Point(o.head.x,o.head.y).name="turnPointU",new Phaser.Geom.Point(o.head.x,o.head.y).name="turnPointD",o}return _createClass(n,[{key:"snakeRotation",value:function(){for(var e=0;e<this.turnPoints.length;e++)for(var t=1;t<this.bodySegments.length;t++)this.bodySegments[t].x==this.turnPoints[e].x&&this.bodySegments[t].y==this.turnPoints[e].y&&(this.bodySegments[t].rotation=this.bodySegments[t-1].rotation)}},{key:"updateBodyGraphics",value:function(){for(var e=[this.bodySegments[0]],t=!0,i=1;i<this.bodySegments.length-1;i++){t?this.bodySegments[i].y!=e[e.length-1].y&&(e.push(this.bodySegments[i-1]),t=!1):this.bodySegments[i].x!=e[e.length-1].x&&(e.push(this.bodySegments[i-1]),t=!0);var o=this.bodySegments[i].x,a=this.bodySegments[i].y,n=this.bodySegments[i-1].x,s=this.bodySegments[i-1].y;Math.abs(o-n)==CELL^Math.abs(a-s)==CELL||(e.push(this.bodySegments[i-1]),e.push(null),e.push(this.bodySegments[i]))}switch(e.push(this.bodySegments[this.bodySegments.length-2]),2<=(e=this.removeDuplicatesKeepFirst(e)).length&&this.bodyGraphics.clear(),mainMenu.texturePack){case 0:this.bodyGraphics.fillStyle(16742656);break;case 1:this.bodyGraphics.fillStyle(16207978);break;case 2:this.bodyGraphics.fillStyle(15919136)}for(var r=1;r<e.length;r++){var h=e[r-1],l=e[r];null!=h&&null!=l&&(h.x==l.x?this.bodyGraphics.fillRoundedRect(Math.min(h.x,l.x)-14,Math.min(h.y,l.y)-14,28,Math.abs(h.y-l.y)+28,6):h.y==l.y&&this.bodyGraphics.fillRoundedRect(Math.min(h.x,l.x)-14,Math.min(h.y,l.y)-14,Math.abs(h.x-l.x)+28,28,6))}this.bodyGraphics.fillPath()}},{key:"removeDuplicatesKeepFirst",value:function(e){var t=new Set;return e.filter(function(e){return!(null!==e&&t.has(e)||(t.add(e),0))})}},{key:"update",value:function(e){if(1==gameState.onGame&&(this.updateBodyGraphics(),this.snakeRotation(),e>=this.moveTime))return this.move(e)}},{key:"faceLeft",value:function(){var e;1!=gameState.onGame||this.direction!==UP&&this.direction!==DOWN||(this.heading=LEFT,this.leftSound.play(),this.head.rotation=1.57079,e=new Phaser.Geom.Point(this.head.x,this.head.y),this.turnPoints.push(e))}},{key:"faceRight",value:function(){var e;1!=gameState.onGame||this.direction!==UP&&this.direction!==DOWN||(this.heading=RIGHT,this.rightSound.play(),this.head.rotation=4.71238,e=new Phaser.Geom.Point(this.head.x,this.head.y),this.turnPoints.push(e))}},{key:"faceUp",value:function(){var e;1!=gameState.onGame||this.direction!==LEFT&&this.direction!==RIGHT||(this.heading=UP,this.upSound.play(),this.head.rotation=3.14159,e=new Phaser.Geom.Point(this.head.x,this.head.y),this.turnPoints.push(e))}},{key:"faceDown",value:function(){var e;1!=gameState.onGame||this.direction!==LEFT&&this.direction!==RIGHT||(this.heading=DOWN,this.downSound.play(),this.head.rotation=0,e=new Phaser.Geom.Point(this.head.x,this.head.y),this.turnPoints.push(e))}},{key:"move",value:function(e){if(1==gameState.onGame){if(!1===this.onGod)switch(this.heading){case LEFT:this.headPosition.x=Phaser.Math.Clamp(this.headPosition.x-1,3,game.config.width/CELL-3);break;case RIGHT:this.headPosition.x=Phaser.Math.Clamp(this.headPosition.x+1,3,game.config.width/CELL-3);break;case UP:this.headPosition.y=Phaser.Math.Clamp(this.headPosition.y-1,6,Math.floor(game.config.height/CELL-2));break;case DOWN:this.headPosition.y=Phaser.Math.Clamp(this.headPosition.y+1,6,Math.floor(game.config.height/CELL-2))}else if(1==this.onGod)switch(this.heading){case LEFT:this.headPosition.x=Phaser.Math.Wrap(this.headPosition.x-1,3,game.config.width/CELL-2);break;case RIGHT:this.headPosition.x=Phaser.Math.Wrap(this.headPosition.x+1,2,game.config.width/CELL-3);break;case UP:this.headPosition.y=Phaser.Math.Wrap(this.headPosition.y-1,6,Math.floor(game.config.height/CELL-1));break;case DOWN:this.headPosition.y=Phaser.Math.Wrap(this.headPosition.y+1,5,Math.floor(game.config.height/CELL-2))}return this.direction=this.heading,Phaser.Actions.ShiftPosition(this.body.children.entries,this.headPosition.x*CELL,this.headPosition.y*CELL,1,this.end),Phaser.Actions.GetFirst(this.bodySegments,{x:this.head.x,y:this.head.y},1)&&0==this.onGod?(console.log("dead"),this.alive=!1,this.deadSound.play(),!1):(this.moveTime=e+this.speed,this.alive=!0)}}},{key:"grow",value:function(){var t=this;this.bodySegments[1].setSize(30,30,!0),this.tail.setTexture("body_".concat(mainMenu.texturePack)),this.tail.setDisplaySize(30,30),this.tail.alpha=0,this.tail=this.scene.add.sprite(this.head.x,this.head.y,"tail_".concat(mainMenu.texturePack)),this.tail.rotation=this.bodySegments[this.bodySegments.length-1].rotation,this.tail.alpha=0,this.body.add(this.tail),this.tail.setOrigin(.5),this.tail.setDisplaySize(40,40),this.bodySegments.forEach(function(e){e.setDisplaySize(30,30),e.setSize(30,30,!0),e.alpha=0,t.head.alpha=1,t.head.setScale(.4)})}},{key:"godMode",value:function(){var e=this;this.onGod=!0,this.head.stop("liking_".concat(mainMenu.texturePack)),this.head.play("onGodeAnimation_".concat(mainMenu.texturePack)),setTimeout(function(){e.onGod=!1,e.head.play("liking_".concat(mainMenu.texturePack))},15e3)}},{key:"speedUp",value:function(){var e=this;this.speed-=50,setTimeout(function(){e.speed+=50},15e3)}},{key:"collideWithBonus",value:function(e){return null!=this.scene.bonus.body&&this.head.x===e.body.x&&this.head.y===e.body.y&&(1!==e.index?this.speedUp():this.godMode(),e.bonusSound.play(),!0)}},{key:"collideWithFood",value:function(e){return this.head.x===e.body.x&&this.head.y===e.body.y&&(this.grow(),e.eat(),this.biteSound.play(),this.speed<150&&e.total%5==0&&(this.speed+=5),!0)}},{key:"updateGrid",value:function(e){var t,i=_createForOfIteratorHelper(this.body.getChildren());try{for(i.s();!(t=i.n()).done;){var o=t.value,a=o.y/CELL;e[o.x/CELL][a]=!1}}catch(e){i.e(e)}finally{i.f()}return e}}]),n}(),SnakeGame=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"snakegame"})}return _createClass(t,[{key:"create",value:function(){var t=this;switch(console.log("play now!"),game_session.action.startGame=(new Date).getTime(),console.log(game_session.action.startGame),gameState.onGame=!0,this.texturePack=mainMenu.texturePack,this.bgGraph=this.add.graphics(),mainMenu.texturePack){case 0:this.bgGraph.fillStyle(5033060);break;case 1:this.bgGraph.fillStyle(4096431);break;case 2:this.bgGraph.fillStyle(8421592)}this.bgGraph.fillRect(0,0,game.config.width,game.config.height),this.backGround=this.add.image(game.config.width/2,game.config.height/2,"background_".concat(this.texturePack)).setOrigin(.5,.51),this.backGround.setDisplaySize(game.config.width,game.config.height),this.bgmusic=this.sound.add("background-music",{loop:!1,volume:.5}),this.marker=0,this.bgmusic.play(),this.scoreText=this.add.text(game.config.width/2-100,55,"".concat(gameState.score),{fontFamily:"Nunito",fontStyle:"bold",fontSize:"40px",fill:"white",textAlign:"start"}).setOrigin(.5),this.scoreIcon=this.add.image(this.scoreText.x-90,this.scoreText.y,"scoreIcon").setOrigin(.5).setDisplaySize(60,66),this.gameInfo=this.add.image(290,60,"info").setOrigin(.5),this.foodArray=[];for(var e=0;e<1;e++){var i=new Food(snacegame,30,20,"food");this.foodArray.push(i)}this.snake=snake=new Snake(snacegame,20,20,"body_0"),this.snake.grow(),this.snake.grow(),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.pause()}),this.loadScore(),console.log(this.snake),this.snake.bodySegments[1].setSize(30,30,!0),this.stopSound=setInterval(function(){t.soundOff(),5<=t.marker&&clearInterval(t.stopSound)&&t.bgmusic.stop()},1e3),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.getField()}},{key:"soundOff",value:function(){0<this.bgmusic.volume&&(this.bgmusic.volume-=.1,this.marker++)}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_snake")&&(console.log(localStorage.getItem("heighScore_snake")),this.hieghScoreText=this.add.text(this.scoreText.x+260,this.scoreText.y,"".concat(JSON.parse(localStorage.getItem("heighScore_snake"))),{fontFamily:"Nunito",fontStyle:"bold",fontSize:"40px",fill:"white",textAlign:"start"}).setOrigin(.5),this.hieghScoreIcon=this.add.image(this.hieghScoreText.x-90,this.hieghScoreText.y,"bestIcon").setDisplaySize(72,66).setOrigin(.5))}},{key:"pause",value:function(){gameState.onGame=!1,this.scene.pause(snacegame),this.scene.launch(scenePause)}},{key:"addBonus",value:function(e,t,i){var o=this;0<gameState.score&&gameState.score%10==0&&(this.bonus=new Bonus(this,e,t,"bonus_".concat(i),i),console.log(i),console.log(this.bonus),setTimeout(function(){o.bonus.destroy()},1e4))}},{key:"update",value:function(e,t){if(5<=this.marker&&clearInterval(this.stopSound)&&this.bgmusic.stop(),this.scoreText.setText("".concat(gameState.score)),game_session.score=gameState.score,snake.update(e)){null!=this.bonus&&snake.collideWithBonus(this.bonus)&&this.bonus.destroy();var i,o=_createForOfIteratorHelper(this.foodArray);try{for(o.s();!(i=o.n()).done;){var a=i.value;snake.collideWithFood(a)&&(this.repositionFood(a),gameState.score+=1)}}catch(e){o.e(e)}finally{o.f()}}snake.alive||(this.snake.destroy(),this.scene.start("gameOver"))}},{key:"repositionFood",value:function(e){var t,i=[],o=_createForOfIteratorHelper(this.snake.bodySegments);try{for(o.s();!(t=o.n()).done;){var a=t.value;i.push({x:a.x,y:a.y})}}catch(e){o.e(e)}finally{o.f()}if(console.log(i),0<validLocationsX.length){var n,s={x:this.getPositionX(),y:this.getPositionY()},r={x:this.getPositionX(),y:this.getPositionY()},h=_createForOfIteratorHelper(i);try{for(h.s();!(n=h.n()).done;){var l=n.value;s.x==Math.floor(l.x/CELL)&&s.y==Math.floor(l.y/CELL)?(s={x:this.getPositionX(),y:this.getPositionY()},console.log(s.x,s.y)):r.x==Math.floor(l.x/CELL)&&r.y==Math.floor(l.y/CELL)&&(r={x:this.getPositionX(),y:this.getPositionY()})}}catch(e){h.e(e)}finally{h.f()}return e.body.setPosition(s.x*CELL,s.y*CELL),this.addBonus(r.x,r.y,Math.floor(2*Math.random())),!0}return!1}},{key:"getPositionX",value:function(){return Math.floor(Phaser.Math.RND.pick(validLocationsX))}},{key:"getPositionY",value:function(){return Math.floor(Phaser.Math.RND.pick(validLocationsY))}},{key:"getField",value:function(){for(var e=6;e<game.config.height/CELL-2;e++)validLocationsY.push(Math.floor(e));for(var t=3;t<game.config.width/CELL-3;t++)validLocationsX.push(Math.floor(t))}}]),t}(),validLocationsY=[],validLocationsX=[],snacegame=new SnakeGame,ScenePause=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"scenePause"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.onPause=!0,this.bgpauseImage=this.add.image(game.config.width/2,game.config.height/2,"mainBG_".concat(mainMenu.texturePack)).setOrigin(.5),this.bgpauseImage.setDisplaySize(game.config.width,game.config.height),this.pauseScreen=this.add.image(game.config.width/2,game.config.height/2,"pause").setOrigin(.5).setDisplaySize(game.config.width,game.config.height),this.btnStart=this.add.sprite(game.config.width/2,game.config.height/2+100,"button").setScale(.5),this.btnStart.setOrigin(.5),this.controlsInfo=this.add.image(310,70,"controlsInfo").setOrigin(.5),this.btnClose=this.add.sprite(this.btnStart.x,this.btnStart.y+120,"button").setScale(.5),this.btnClose.setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+100,"selector"),this.selector.setScale(.44),this.selector.setOrigin(.5),this.btnStartText=this.add.text(game.config.width/2,game.config.height/2+100,"ПРОДОЛЖИТЬ",{fontFamily:"Nunito",fontSize:"60px",color:"black",fontStyle:"bold",align:"center"}),this.btnStartText.setOrigin(.5),this.btnCloseText=this.add.text(this.btnClose.x,this.btnClose.y,"ВЫЙТИ",{fontFamily:"Nunito",fontSize:"60px",color:"black",fontStyle:"bold",align:"center"}),this.btnCloseText.setOrigin(.5),this.btnStart.setInteractive(),this.btnClose.setInteractive(),this.btnClose.on("pointerdown",this.exit,this),this.btnStart.on("pointerdown",this.resumeGame,this),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.onPause||t.onPressExit()}),this.input.keyboard.on("keydown-ENTER",this.gameToggle,this),this.scoreText=this.add.text(game.config.width/2,game.config.height-150,"СЧЁТ: ".concat(gameState.score),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"32px",fill:"#2E3D66"}).setOrigin(.5),this.loadScore(),this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_snake")&&(console.log(localStorage.getItem("heighScore_snake")),this.hieghScoreText=this.add.text(game.config.width/2,game.config.height-100,"РЕКОРД: ".concat(JSON.parse(localStorage.getItem("heighScore_snake"))),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"40px",fill:"#2E3D66"}).setOrigin(.5))}},{key:"selectorDown",value:function(){1==gameState.onPause&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,mainMenu.clickSound.play())}},{key:"selectorUp",value:function(){1==gameState.onPause&&this.selector.y!=this.btnStart.y&&(this.selector.y=this.btnStart.y,mainMenu.clickSound.play())}},{key:"gameToggle",value:function(){var e;1==gameState.onPause&&(this.selector.y==this.btnStart.y?(this.resumeGame(),mainMenu.clickSound.play()):this.selector.y==this.btnClose.y&&(mainMenu.clickSound.play(),null!=(e=window)&&e.parent.postMessage("GameExit","*"),gameOver.exit()))}},{key:"resumeGame",value:function(){gameState.onPause=!1,gameState.onGame=!0,this.scene.resume(snacegame),this.scene.stop(scenePause)}},{key:"exit",value:function(){game_session.action.closeGameSession=(new Date).getTime()}},{key:"onPressExit",value:function(){var e;1==gameState.onPause&&(game_session.onClose=!0,null!=(e=window)&&e.parent.postMessage("GameExit","*"),game_session.action.closeGameSession=(new Date).getTime())}},{key:"update",value:function(){this.selector.y===this.btnClose.y?this.btnCloseText.setColor("white"):this.btnCloseText.setColor("#F0516B"),this.selector.y===this.btnStart.y?this.btnStartText.setColor("white"):this.btnStartText.setColor("#F0516B")}}]),t}(),scenePause=new ScenePause,GameOver=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"gameOver"})}return _createClass(t,[{key:"create",value:function(){var t=this;game_session.action.gameOver=(new Date).getTime(),console.log(game_session.action.gameOver),snacegame.bgmusic.stop(),gameState.onGame=!1,gameState.isOver=!0,this.menuBG=this.add.image(game.config.width/2,game.config.height/2,"mainBG_".concat(mainMenu.texturePack)).setOrigin(.5),this.menuBG.setDisplaySize(game.config.width,game.config.height),this.controlsInfo=this.add.image(310,70,"controlsInfo").setOrigin(.5),this.gameOverImg=this.add.image(game.config.width/2,game.config.height/2,"menuGameOver").setOrigin(.5),this.gameOverImg.setDisplaySize(game.config.width,game.config.height),this.scoreText=this.add.text(game.config.width/2,game.config.height-150,"СЧЁТ: ".concat(gameState.score),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"32px",fill:"#2E3D66"}).setOrigin(.5),this.scoreText.setOrigin(.5),this.btnRestart=this.add.sprite(game.config.width/2,game.config.height/2+100,"button"),this.btnRestart.setOrigin(.5),this.btnRestart.setScale(.5),this.btnClose=this.add.sprite(this.btnRestart.x,this.btnRestart.y+120,"button").setScale(.5),this.btnClose.setOrigin(.5),this.selector=this.add.sprite(this.btnRestart.x,this.btnRestart.y,"selector"),this.selector.setOrigin(.5),this.selector.setScale(.44),this.btnRestart.setInteractive(),this.btnClose.setInteractive(),this.btnRestartText=this.add.text(game.config.width/2,game.config.height/2+100,"ЗАНОВО",{fontFamily:"Nunito",fontSize:"60px",fontStyle:"bold",align:"center",color:"black"}),this.btnRestartText.setOrigin(.5),this.btnCloseText=this.add.text(this.btnClose.x,this.btnClose.y,"ВЫЙТИ",{fontFamily:"Nunito",fontSize:"60px",fontStyle:"bold",align:"center",color:"black"}),this.btnCloseText.setOrigin(.5),this.btnRestart.on("pointerdown",this.startGame,this),this.btnClose.on("pointerdown",this.exit,this),this.input.keyboard.on("keydown-ENTER",this.gameToggle,this),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.onPressExit()}),this.saveScore(),this.loadScore(),game_session.score=gameState.score,this.versionText=this.add.text(game.config.width-60,game.config.height-40,"".concat(game_version),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"selectorDown",value:function(){1==gameState.isOver&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,this.btnCloseText.setColor("white"),this.clickSound.play())}},{key:"selectorUp",value:function(){1==gameState.isOver&&this.selector.y!=this.btnRestart.y&&(this.selector.y=this.btnRestart.y,mainMenu.clickSound.play())}},{key:"gameToggle",value:function(){1==gameState.isOver&&(this.selector.y==this.btnRestart.y?(mainMenu.clickSound.play(),this.startGame()):this.selector.y==this.btnClose.y&&(mainMenu.clickSound.play(),this.exit()))}},{key:"startGame",value:function(){gameState.isOver=!1,gameState.score=0,mainMenu.texturePack=getTexturePack(),this.scene.start("snakegame")}},{key:"exit",value:function(){var e;game_session.onClose=!0,null!=(e=window)&&e.parent.postMessage("GameExit","*"),game_session.action.closeGameSession=(new Date).getTime()}},{key:"onPressExit",value:function(){0==gameState.onGame&&this.exit()}},{key:"saveScore",value:function(){this.heighScore=gameState.score,game_session.highscore=JSON.parse(localStorage.getItem("heighScore_snake")),this.oldScore=JSON.parse(localStorage.getItem("heighScore_snake")),this.heighScore>this.oldScore?localStorage.setItem("heighScore_snake",JSON.stringify(this.heighScore)):this.heighScore=this.oldScore}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_snake")&&(console.log(localStorage.getItem("heighScore_snake")),this.hieghScoreText=this.add.text(game.config.width/2,game.config.height-100,"РЕКОРД: ".concat(JSON.parse(localStorage.getItem("heighScore_snake"))),{fontFamily:"Nunito-black",fontStyle:"bold",fontSize:"40px",fill:"#2E3D66"}).setOrigin(.5))}},{key:"update",value:function(){this.selector.y===this.btnClose.y?this.btnCloseText.setColor("white"):this.btnCloseText.setColor("#F0516B"),this.selector.y===this.btnRestart.y?this.btnRestartText.setColor("white"):this.btnRestartText.setColor("#F0516B")}}]),t}(),gameOver=new GameOver,UP=0,DOWN=1,LEFT=2,RIGHT=3,CELL=32,game_version="v 0.2.2",game_session={ts:0,game_id:"",action:{startGameSession:0,startGame:0,levelUp:0,gameOver:0,closeGameSession:0},score:null,highscore:null,level:null,onClose:!1};function getTexturePack(){return Math.floor(3*Math.random())}var gameState={onMenu:!1,onPause:!1,isOver:!1,onGame:!1,score:0};window.onload=function(){var e={type:Phaser.CANVAS,width:1920,height:1080,backgroundColor:"#000",parent:"phaser-example",scene:[preloader,mainMenu,snacegame,scenePause,gameOver],physics:{default:"arcade"},scale:{mode:Phaser.Scale.FIT},audio:{noAudio:!0}};document.getElementsByTagName("canvas").outline=0,console.log("Game is starting!"),game=new Phaser.Game(e)};