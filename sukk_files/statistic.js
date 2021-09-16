/**
在初始化完成时会记录visit事件，使用这个js文件，不需要写代码额外记录visit事件。
使用记录日志的js时可以加入3个全局方法：
1.setVisitParams   为visit事件添加更多信息
2.setLogTarget     指定记录日志的对象，比如书籍访问日志：user_id为ulink (用户ID), item_type为Book, item_id为blink (书籍ID)
3.setLogHead       添加公共属性，添加到head中的属性会全部添加到所有日志中

函数体:
function setVisitParams(action){
	//add more informations for visit
	//example: action.screen_width = 1920;
}

function setLogTarget(target){
  //就算不需要设置数据，也要将它们设置为空字符串，否则无法记录日志
  target.user_id = "";
  target.item_type = "";
  target.item_id = "";
}

function setLogHead(head){
	//add more public params
}
**/

(function  (window, document) {
	function createHttpRequest() {
		if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}
	}
	function AliLogTracker(host, project, logstore) {
		this.uri_ = 'https://' + project + '.' + host + '/logstores/' + logstore + '/track?APIVersion=0.6.0';
		this.params_ = new Array();
		this.httpRequest_ = createHttpRequest();
	}
	AliLogTracker.prototype = {
		push: function (key, value) {
			if (!key || !value) {
				return;
			}
			this.params_.push(key);
			this.params_.push(value);
		},
		logger: function () {
			var url = this.uri_;
			var k = 0;
			while (this.params_.length > 0) {
				if (k % 2 == 0) {
					url += '&' + encodeURIComponent(this.params_.shift());
				}
				else {
					url += '=' + encodeURIComponent(this.params_.shift());
				}
				++k;
			}
			try {
				this.httpRequest_.open("GET", url, true);
				this.httpRequest_.send(null);
			}
			catch (ex) {
				if (window && window.console && typeof window.console.log === 'function') {
					console.log("Failed to log to ali log service because of this exception:\n" + ex);
					console.log("Failed log data:", url);
				}
			}

		}
	};
	window.Tracker = AliLogTracker;
})(window, document);


(function (Tracker) {

  try{
  	
		Tracker.browser = "Other";
		Tracker.system = "Unknown";
		Tracker.device = "PC";
	
		var sUserAgent = navigator.userAgent.toLowerCase();
	
		var browser = {};
	
		browser.webkit = /webkit/.test(sUserAgent);
		browser.mozilla = /firefox/.test(sUserAgent);
	
		browser.firefox = browser.mozilla;
		browser.msie = /msie/.test(sUserAgent) || /trident/.test(sUserAgent) || /edge/.test(sUserAgent);
		browser.edge = /edge/.test(sUserAgent);
	
		browser.opera = /opera/.test(sUserAgent) || /opr/.test(sUserAgent);
		browser.chrome = (/chrome/.test(sUserAgent)) && (!browser.opera) && (!browser.edge);
		browser.uc = /ucbrowser/.test(sUserAgent);
		browser.safari = (/safari/.test(sUserAgent)) && (!browser.chrome) && (!browser.uc) && (!browser.opera);
	
		browser.wechat = /micromessenger/.test(sUserAgent);
	
		browser.version = 0;
	
		function getVersionCode(oReg) {
			var aResult = sUserAgent.match(oReg);
			if (aResult == null || aResult.length == 0) return 0;
	
			var sResult = aResult[0],
				iIndex = sResult.indexOf("/"),
				sVersion = sResult.substring(iIndex + 1, sResult.length);
	
			if (sVersion == "") return 0;
			return parseInt(sVersion);
		}
	
		if (browser.firefox) browser.version = getVersionCode(/firefox\/\d+/);
	
		if (browser.msie) {
	
			var aIEWithVersion = sUserAgent.match(/msie\s?\d+\.0/);
			if (aIEWithVersion == null) {
	
				aIEWithVersion = sUserAgent.match(/trident\/\d+\.0/);
				if (aIEWithVersion != null && aIEWithVersion.length > 0) {
	
					var sTridentWithVersion = aIEWithVersion[0];
					var iVersion = parseInt(sTridentWithVersion.replace("trident/", ""));
	
					browser.version = iVersion + 4;
				} else {
					// edge/12.000
					aIEWithVersion = sUserAgent.match(/edge\/\d+\.0/);
					if (aIEWithVersion != null && aIEWithVersion.length > 0) {
						var sTridentWithVersion = aIEWithVersion[0];
						var iVersion = parseInt(sTridentWithVersion.replace("edge/", ""));
						browser.version = iVersion;
					}
				}
			} else {
				var sIEWithVersion = aIEWithVersion[0];
				var iVersion = parseInt(sIEWithVersion.replace("msie", ""));
				browser.version = iVersion;
			}
		}
	
		if (browser.opera) browser.version = getVersionCode(/opera\/\d+/) || getVersionCode(/opr\/\d+/);
		if (browser.chrome) browser.version = getVersionCode(/chrome\/\d+/);
		if (browser.uc) browser.version = getVersionCode(/ucbrowser\/\d+/);
		if (browser.safari) browser.version = getVersionCode(/safari\/\d+/);
	
		//to tracker.browser
		if (browser.firefox) Tracker.browser = "Firefox";
		if (browser.msie) Tracker.browser = "IE" + browser.version;
		if (browser.edge) Tracker.browser = "Edge";
	
		if (browser.opera) Tracker.browser = "Opera";
		if (browser.chrome) Tracker.browser = "Chrome";
		if (browser.uc) Tracker.browser = "UC";
		if (browser.safari) Tracker.browser = "Safari";
	
		if (browser.wechat) Tracker.browser = "Wechat";
	
	
		//device
		var isPad = /pad/.test(sUserAgent) || /ipod/.test(sUserAgent) || /macintosh/.test(sUserAgent),
			isIPhone = /iphone/.test(sUserAgent),
			isWinPhone = /wpdesktop/.test(sUserAgent) || /windows phone/.test(sUserAgent),
			isBlackBerry = /blackberry/.test(sUserAgent),
			isMobile = /mobile/.test(sUserAgent) || /phone/.test(sUserAgent);
			
		if(isPad){
			try{
				document.createEvent("TouchEvent");
			}catch(ex){
				isPad = false;
			}
		}
	
	  Tracker.device = "PC";
		if (isPad) {
			Tracker.device = "Pad";
		} else {
			if (isIPhone || isWinPhone || isBlackBerry || isMobile) Tracker.device = "Phone";
		}
	
		//system
		function getSystemVersionCode(oReg) {
			var aResult = sUserAgent.match(oReg);
			if (aResult == null || aResult.length == 0) return 0;
	
			var sResult = aResult[0].replace("_", ".");
			aResult = sResult.match(/\d+\.?\d*/);
			if (aResult == null || aResult.length == 0) return 0;
			var sVersion = aResult[0];
			if (sVersion == "") return 0;
	
			return parseFloat(sVersion);
		}
	
		var system = { name: "Unknown", version: "" };
	
		system.WINDOWS = "Windows", system.WP = "WinPhone", system.WP_DESKTOP = "WinPhoneDesktop", system.MAC = "Mac OS",
			system.IOS = "IOS", system.LINUX = "Linux", system.ANDROID = "Android", system.BLACKBERRY = "BlackBerry";
	
		if (/windows/.test(sUserAgent)) {
			system.name = system.WINDOWS;
			system.version = getSystemVersionCode(/windows nt\s?\d+\.?\d?/);
		}
	
		if (/windows phone/.test(sUserAgent)) {
			system.name = system.WP;
			system.version = getSystemVersionCode(/windows phone\s?\d+\.?\d?/);
		}
	
		if (/wpdesktop/.test(sUserAgent)) {
			system.name = system.WP_DESKTOP;
			system.version = getSystemVersionCode(/wpdesktop\s?\d+\.?\d?/);
		}
	
		if (system.name != system.WP) {
	
			if (/iphone/.test(sUserAgent) || /ipad/.test(sUserAgent)) {
				system.name = system.IOS;
				system.version = getSystemVersionCode(/os\s?\d+(_\d+)?/);
			}
			
			if (/macintosh/.test(sUserAgent)) {
				if(Tracker.device == "PC"){
					system.name = system.MAC;
				}else{
					system.name = system.IOS;
				}

				system.version = getSystemVersionCode(/os x\s?\d+(_\d+)?/);
			}
	
			if (/android/.test(sUserAgent)) {
				system.name = system.ANDROID;
				system.version = getSystemVersionCode(/android\s?\d+\.?\d?/);
			}
	
		}
	
		if (/mac/.test(sUserAgent) && (browser.system != browser.IOS)) {
			system.name = system.MAC;
			system.version = getSystemVersionCode(/os x\s?\d+\.?\d?/);
		}
	
		if (/linux/.test(sUserAgent) && (!/android/.test(sUserAgent))) {
			system.name = system.LINUX;
		}
	
		if (/blackberry/.test(sUserAgent)) {
			system.name = system.BLACKBERRY;
			system.version = getSystemVersionCode(/blackberry\s?\d+/);
		}
	
		Tracker.system = system.name + " " + system.version;
	
		function getValue(oReg, sKey) {
			var aResult = sUserAgent.match(oReg);
			if (aResult == null || aResult.length == 0) return "";
	
			var sResult = aResult[0].replace(sKey + "/", "");
			return sResult;
		}
	
		if (/language/.test(sUserAgent)) {
			Tracker.language = getValue(/language\/\w+\-?_?\w+/, "language");
		}
	
		if (!Tracker.language)
			Tracker.language = navigator.language ? navigator.language.toLowerCase() : "";
	
		Tracker.net_type = "normal";
		if (/nettype/.test(sUserAgent)) {
			Tracker.net_type = getValue(/nettype\/\w+/, "nettype");
		}
		
	}catch(ex){
		console.log("Failed to get information from user-agent:\n" + ex);
	}


})(window.Tracker);

(function (window) {

	function Logger() {
		this.action = { "action_name": "", "trigger_name": "" };
		this.retry_count = 0;
		this.max_retry_count = 20;
	}

	Logger.tracker = new window.Tracker("cn-beijing.log.aliyuncs.com", "p-wc-rdr", "yzw-logstore");
	Logger.head = {};
	Logger.target = {};


	Logger.prototype = {
		send: function() {
			  if(Logger.target.user_id == undefined) return this.retry();
			
				this.add(Logger.head);
				this.add(Logger.target);
				this.add(this.action);
	
				Logger.tracker.logger();
		},
		
		retry : function(){
			if(this.retry_count >= this.max_retry_count) return;
			this.retry_count++;
			
			var self = this;
			window.setTimeout(function(){
				self.send();
			}, 300);
		},

		add: function(logItem) {
			if (!logItem) return;
			if (typeof(logItem) != "object") return;

			try{
        this.wash(logItem);
        
				for (prop in logItem) {
					var value = logItem[prop];
					if (value != undefined) Logger.tracker.push(prop, value);
				}
			
			}catch(ex){
				console.log("Add parameters to logger failed:\n" + ex);
			}
		},
		
		wash: function(item){
			for(prop in item){
				var value = item[prop];
				if(!value) continue;
				if(typeof(value) != "string") continue;
				
				var iAttack = value.indexOf("'");
				if(iAttack > -1){
					var newValue = value.substring(0, iAttack);
					item[prop] = newValue;
				}
			}
		}
	};

	function GUID() {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		
		try{
			if (window.localStorage) {
				var sGUID = window.localStorage.getItem("logtracking_guid");
				if (sGUID) return sGUID;
			}
		}catch(ex){
		}
		
		var sNewGUID = (S4() + S4() + S4() + S4() + S4() + S4()).toUpperCase();
		
		try{
			if (window.localStorage) {
				window.localStorage.setItem("logtracking_guid", sNewGUID);
			}
		}catch(ex){
		}
		
		return sNewGUID;
	}

	function initLogger() {
		if (!window.setLogTarget) return false;
		Logger.head.client_id = GUID();
		Logger.head.url = removeParams( window.location.href );
		Logger.head.top_url = removeParams( getTopUrl() );
		
		Logger.head.browser = window.Tracker.browser;
		Logger.head.device = window.Tracker.device;
		Logger.head.system = window.Tracker.system;
		Logger.head.language = window.Tracker.language;
		Logger.head.net_type = window.Tracker.net_type;
		
		try{
			if(window.setLogHead) window.setLogHead(Logger.head);
		}catch(ex){
			console.log("Set log head failed:\n" + ex);
		}
		
		try{
			window.setLogTarget(Logger.target);
		}catch(ex){
			console.log("Set log target failed:\n" + ex);
		}
		return true;
	}
	
	function getTopUrl(){
		var sTop, sParent, sUrl;
		try{
			sUrl = window.location.href;
			if(window.parent) sParent = window.parent.location.href;
			if(window.top) sTop = window.top.location.href;
			
			if(sTop) return sTop;
			if(sParent) return sParent;
			return sUrl;
		}catch(err){
			return sUrl;
		}
	}
	
	function removeParams(url){
		if(!url) return "";
		
		var iParams = url.indexOf("?");
		
		if(iParams > -1){
			return url.substring(0, iParams);
		}else{
			return url;
		}
	}

	function visit() {
		var logger = new Logger();
		logger.action.action_name = "Visit";
		logger.action.trigger_name = getReferrer();
		
		try{
			if (window.setVisitParams) window.setVisitParams(logger.action);
	  }catch(ex){
	  	console.log("Add parameters to visit failed:\n" + ex);
	  }
	  
		logger.send();
	}
	
	function getReferrer(){
		var sReferrer = "";
		
		var win = window;
		try{
			if(window.top) win = window.top;
			if(!window.top && window.parent) win = window.parent;
		}catch(err){
			win = window;
		}
		
		try{
			sReferrer = win.document.referrer;
		}catch(err){
			sReferrer = "";
		}
		
		if(!sReferrer){
			try{
				if(win.opener){
					sReferrer =  win.opener.location.href;
				}
			}catch(err){
				sReferrer = "";
			}
		}
		
		return sReferrer;
	}

  //send visit log on ready
	(function(){
		
		var iInterval = window.setInterval(function () {
			if (initLogger()) {
				window.clearInterval(iInterval);

				visit();
			}
		}, 100);
		
	})();
	
	window.Logger = Logger;

})(window);

//根据配置生成的代码
(function (window) {

	function SlsLogger() {
	}

	SlsLogger.prototype = {
		visit:function(trigger_name,current_page,screen_width,screen_height){
                    var logger = new Logger();
                    logger.action.action_name = 'Visit';
logger.action.trigger_name = trigger_name;
logger.action.current_page = current_page;
logger.action.screen_width = screen_width;
logger.action.screen_height = screen_height;
                    logger.send();
                },
flipPage:function(trigger_name,current_page,dest_page,stay_time){
                    var logger = new Logger();
                    logger.action.action_name = 'FlipPage';
logger.action.trigger_name = trigger_name;
logger.action.current_page = current_page;
logger.action.dest_page = dest_page;
logger.action.stay_time = stay_time;
                    logger.send();
                },
jumpLink:function(trigger_name,current_page,dest_url){
                    var logger = new Logger();
                    logger.action.action_name = 'JumpLink';
logger.action.trigger_name = trigger_name;
logger.action.current_page = current_page;
logger.action.dest_url = dest_url;
                    logger.send();
                },
clickButton:function(current_page,button_name,button_caption){
                    var logger = new Logger();
                    logger.action.action_name = 'ClickButton';
logger.action.current_page = current_page;
logger.action.button_name = button_name;
logger.action.button_caption = button_caption;
                    logger.send();
                },
search:function(current_page,search_key){
                    var logger = new Logger();
                    logger.action.action_name = 'Search';
logger.action.current_page = current_page;
logger.action.search_key = search_key;
                    logger.send();
                },
share:function(current_page,dest_platform,shared_page){
                    var logger = new Logger();
                    logger.action.action_name = 'Share';
logger.action.current_page = current_page;
logger.action.dest_platform = dest_platform;
logger.action.shared_page = shared_page;
                    logger.send();
                },
print:function(current_page,printed_page){
                    var logger = new Logger();
                    logger.action.action_name = 'Print';
logger.action.current_page = current_page;
logger.action.printed_page = printed_page;
                    logger.send();
                },
playMedia:function(trigger_name,current_page,media_url,media_type,play_time){
                    var logger = new Logger();
                    logger.action.action_name = 'PlayMedia';
logger.action.trigger_name = trigger_name;
logger.action.current_page = current_page;
logger.action.media_url = media_url;
logger.action.media_type = media_type;
logger.action.play_time = play_time;
                    logger.send();
                },
clickPageItem:function(trigger_name,current_page,item_left,item_top,item_width,item_height){
                    var logger = new Logger();
                    logger.action.action_name = 'ClickPageItem';
logger.action.trigger_name = trigger_name;
logger.action.current_page = current_page;
logger.action.item_left = item_left;
logger.action.item_top = item_top;
logger.action.item_width = item_width;
logger.action.item_height = item_height;
                    logger.send();
                },
read:function(book_url,book_name){
                    var logger = new Logger();
                    logger.action.action_name = 'Read';
logger.action.book_url = book_url;
logger.action.book_name = book_name;
                    logger.send();
                },
showAds:function(ads_type,ads_position,ads_width,ads_height){
                    var logger = new Logger();
                    logger.action.action_name = 'ShowAds';
logger.action.ads_type = ads_type;
logger.action.ads_position = ads_position;
logger.action.ads_width = ads_width;
logger.action.ads_height = ads_height;
                    logger.send();
                },
clickAds:function(ads_type,ads_position,ads_width,ads_height){
                    var logger = new Logger();
                    logger.action.action_name = 'ClickAds';
logger.action.ads_type = ads_type;
logger.action.ads_position = ads_position;
logger.action.ads_width = ads_width;
logger.action.ads_height = ads_height;
                    logger.send();
                },
limitedAccess:function(){
                    var logger = new Logger();
                    logger.action.action_name = 'LimitedAccess';
                    logger.send();
                }

  	};

window.slsLogger = new SlsLogger();
}) (window);