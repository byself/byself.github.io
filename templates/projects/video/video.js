function Video(settings){

	var me = this;

	if (!(me instanceof Video)) {
		 return new Video();
	};

	var DEFAULT = {
		 container: '.videocontainer',
			 width: 480,
			height: 320,
		       url: '',
		     thumb: '',
		      auto: true
 	};

	var settings = $.extend({}, DEFAULT, settings);


	me.init(settings);

};

Video.prototype = {
	init:function(settings){

		var me = this;

		var videoHtml = "";

		var SWF_URL = "/templates/projects/video/CuPlayer.swf";

		if(me.isFlash()){
			videoHtml = '<video width="'+ settings.width +'px" height="'+ settings.height +'px"  src="'+ settings.url +'" poster="'+ settings.thumb +'" type="video/mp4" controls preload loop></video>';
		}else{
			videoHtml = '<embed type="application/x-shockwave-flash" src="' + SWF_URL + '" width="'+ settings.width +'" height="'+ settings.height +'" id="CuPlayer" name="CuPlayer" bgcolor="#000000" quality="high" allowfullscreen="true" allowscriptaccess="always" wmode="opaque" salign="lt" flashvars="CuPlayerFile='+ settings.url +'&amp;CuPlayerImage='+ settings.thumb +'&amp;CuPlayerShowImage=true&amp;CuPlayerWidth='+ settings.width +'&amp;CuPlayerHeight='+ settings.height +'&amp;CuPlayerAutoPlay=false&amp;CuPlayerAutoRepeat=false&amp;CuPlayerShowControl=true&amp;CuPlayerAutoHideControl=false&amp;CuPlayerAutoHideTime=6&amp;CuPlayerVolume=80&amp;CuPlayerGetNext=false"></embed>';
		};

		$(settings.container).html(videoHtml);

	},

	isFlash: function(){
		if ((navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('iPhone') != -1)) {
			return true;
		}else{
			return false;
		}
	}

};