//>>built
define("dijit/Viewport",["dojo/Evented","dojo/on","dojo/ready","dojo/_base/window","dojo/window"],function(_1,on,_2,_3,_4){var _5=new _1();_2(200,function(){var _6=_4.getBox();_5._rlh=on(_3.global,"resize",function(){var _7=_4.getBox();if(_6.h==_7.h&&_6.w==_7.w){return;}_6=_7;_5.emit("resize");});});return _5;});