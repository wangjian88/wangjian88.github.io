var aliasConfig = {
	appName: ["", "", ""],
	totalPageCount: [],
	largePageWidth: [],
	largePageHeight: [],
	normalPath: [],
	largePath: [],
	thumbPath: [],

	ToolBarsSettings: [],
	TitleBar: [],
	appLogoIcon: ["appLogoIcon"],
	appLogoLinkURL: ["appLogoLinkURL"],
	bookTitle: [],
	bookDescription: [],
	ButtonsBar: [],
	ShareButton: [],
	ShareButtonVisible: ["socialShareButtonVisible"],
	ThumbnailsButton: [],
	ThumbnailsButtonVisible: ["enableThumbnail"],
	ZoomButton: [],
	ZoomButtonVisible: ["enableZoomIn"],
	FlashDisplaySettings: [],
	MainBgConfig: [],
	bgBeginColor: ["bgBeginColor"],
	bgEndColor: ["bgEndColor"],
	bgMRotation: ["bgMRotation"],
	backGroundImgURL: ["mainbgImgUrl", "innerMainbgImgUrl"],
	pageBackgroundColor: ["pageBackgroundColor"],
	flipshortcutbutton: [],
	BookMargins: [],
	topMargin: [],
	bottomMargin: [],
	leftMargin: [],
	rightMargin: [],
	HTMLControlSettings: [],
	linkconfig: [],
	LinkDownColor: ["linkOverColor"],
	LinkAlpha: ["linkOverColorAlpha"],
	OpenWindow: ["linkOpenedWindow"],
	searchColor: [],
	searchAlpha: [],
	SearchButtonVisible: ["searchButtonVisible"],

	productName: [],
	homePage: [],
	enableAutoPlay: ["autoPlayAutoStart"],
	autoPlayDuration: ["autoPlayDuration"],
	autoPlayLoopCount: ["autoPlayLoopCount"],
	BookMarkButtonVisible: [],
	googleAnalyticsID: ["googleAnalyticsID"],
	OriginPageIndex: [],
	HardPageEnable: ["isHardCover"],
	UIBaseURL: [],
	RightToLeft: ["isRightToLeft"],

	LeftShadowWidth: ["leftPageShadowWidth"],
	LeftShadowAlpha: ["pageShadowAlpha"],
	RightShadowWidth: ["rightPageShadowWidth"],
	RightShadowAlpha: ["pageShadowAlpha"],
	ShortcutButtonHeight: [],
	ShortcutButtonWidth: [],
	AutoPlayButtonVisible: ["enableAutoPlay"],
	DownloadButtonVisible: ["enableDownload"],
	DownloadURL: ["downloadURL"],
	HomeButtonVisible: ["homeButtonVisible"],
	HomeURL: ['btnHomeURL'],
	BackgroundSoundURL: ['bacgroundSoundURL'],
	//TableOfContentButtonVisible:["BookMarkButtonVisible"],
	PrintButtonVisible: ["enablePrint"],
	toolbarColor: ["mainColor", "barColor"],
	loadingBackground: ["mainColor", "barColor"],
	BackgroundSoundButtonVisible: ["enableFlipSound"],
	FlipSound: ["enableFlipSound"],
	MiniStyle: ["userSmallMode"],
	retainBookCenter: ["moveFlipBookToCenter"],
	totalPagesCaption: ["totalPageNumberCaptionStr"],
	pageNumberCaption: ["pageIndexCaptionStrs"]
};
var aliasLanguage = {
	frmPrintbtn: ["frmPrintCaption"],
	frmPrintall: ["frmPrintPrintAll"],
	frmPrintcurrent: ["frmPrintPrintCurrentPage"],
	frmPrintRange: ["frmPrintPrintRange"],
	frmPrintexample: ["frmPrintExampleCaption"],
	btnLanguage: ["btnSwicthLanguage"],
	btnTableOfContent: ["btnBookMark"],
	btnExitFullscreen: ["btnDisableFullScreen"],
	btnFullscreen: ["btnFullScreen"],
	btnHome: ["homebtnHelp"],
	btnMore: ["btnMoreOptionsLeft"],
	frmToc: ["btnBookMark"],
	frmSearch: ["btnSearch"],
	frmLinkLabel: ["lblLink"] //lblLink  frmShareLinkLabel
};
var bookConfig = {
	bookPageStretch: false,
	maxHeightToSmallMode: 360,
	appName: 'yunzhan365',
	totalPageCount: 0,
	largePageWidth: 1080,
	largePageHeight: 1440,
	normalPath: "files/page/",
	largePath: "files/large/",
	thumbPath: "files/thumb/",

	ToolBarsSettings: "",
	TitleBar: "",
	appLogoLinkURL: "",
	bookTitle: "yunzhan365",
	bookDescription: "",
	ButtonsBar: "",
	ShareButton: "",

	ThumbnailsButton: "",
	ThumbnailsButtonVisible: "ShOW",
	ZoomButton: "",
	ZoomButtonVisible: "yES",
	FlashDisplaySettings: "",
	MainBgConfig: "",
	bgBeginColor: "#cccccc",
	bgEndColor: "#eeeeee",
	bgMRotation: 45,
	pageBackgroundColor: "#FFFFFF",
	flipshortcutbutton: "Show",
	BookMargins: "",
	topMargin: 10,
	bottomMargin: 10,
	leftMargin: 10,
	rightMargin: 10,
	HTMLControlSettings: "",
	linkconfig: "",
	LinkDownColor: "#808080",
	LinkAlpha: 0.5,
	OpenWindow: "_Blank",

	BookMarkButtonVisible: 'true',
	productName: 'Demo created by yunzhan365',
	homePage: '',
	isFlipPdf: "true",
	TableOfContentButtonVisible: "true",
	searchTextJS: 'javascript/search_config.js',
	searchPositionJS: "javascript/text_position[%d].js"
};
var shareObj = [{ "name": "微信", "type": "wechat", "url": "javascript:sharePhoneWeChat()", "logo": "/resourceFiles/share_img/wechat.svg", "title": "微信", "filter": "pc" },
{ "name": "海报", "type": "poster", "url": "javascript:HidePoster()", "logo": "/resourceFiles/share_img/poster.svg", "title": "海报" },
{ "name": "QQ好友", "url": "https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&pics=${shot-img}", "logo": "/resourceFiles/share_img/qq.svg", "type": "qqShare", "title": "QQ好友" },
{ "name": "二维码", "type": "qrcode", "url": "javascript:openQRCode()", "logo": "/resourceFiles/share_img/qrcode.svg", "title": "二维码", "filter": "pc" },
{ "name": "百度贴吧", "url": "https://tieba.baidu.com/f/commit/share/openShareApi?url=${url}&text=${title}&pic=${shot-img}", "logo": "/resourceFiles/share_img/tieba.svg", "type": "baidutieba", "title": "百度贴吧" },
{ "name": "新浪微博", "url": "https://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${shot-img}&searchPic=true", "logo": "/resourceFiles/share_img/weibo.svg", "type": "sinaweibo", "title": "新浪微博" },
{ "name": "QQ空间", "url": "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&pics=${shot-img}", "type": "qzone", "logo": "/resourceFiles/share_img/qzone.svg", "title": "QQ空间" },
{ "name": "链接", "type": "copy", "url": "", "logo": "/resourceFiles/share_img/link.svg", "title": "链接", "filter": "pc" },
{ "name": "领英", "url": "https://www.linkedin.com/shareArticle?mini=true&ro=true&title=${title}&url=${url}&source=0&summary=${title}", "logo": "/resourceFiles/share_img/linkedin.svg", "type": "linkedin", "title": "领英" },
{ "name": "豆瓣", "url": "https://shuo.douban.com/!service/share?href=${url}&name=${title}&image=${shot-img}", "type": "douban", "logo": "/resourceFiles/share_img/douban.svg", "title": "豆瓣" }];
// shareObj = [{"name":"QQ空间","url":"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}","logo":"/resourceFiles/share_img/qzone.ico","title":"QQ空间"},{"name":"新浪微博","url":"http://v.t.sina.com.cn/share/share.php?url=${url}&title=${title}","logo":"/resourceFiles/share_img/sina_weibo.ico","title":"新浪微博"},{"name":"腾讯微博","url":"http://share.v.t.qq.com/index.php?c=share&a=index&title=${title}&url=${url}","logo":"/resourceFiles/share_img/tencent_weibo.ico","title":"腾讯微博"},{"name":"人人网","url":"http://share.renren.com/share/buttonshare.do?link=${url}&title=${title}","logo":"/resourceFiles/share_img/renren.ico","title":"人人网"}];
// var shareObj = [{"name":"QQ好友","url":"https://connect.qq.com/widget/shareqq/index.html?url=${url}&text=${title}","logo":"/resourceFiles/share_img/qq.ico","title":"QQ好友","type":"qqShare",},
// {"name":"QQ空间","url":"https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&pics=${shot-img}","logo":"/resourceFiles/share_img/qzone.ico","title":"QQ空间"},
// {"name":"豆瓣","url":"http://shuo.douban.com/!service/share?href=${url}&name=${title}&image=${shot-img}","logo":"/resourceFiles/share_img/doubai.ico","title":"豆瓣"},
// {"name":"百度贴吧","url":"http://tieba.baidu.com/f/commit/share/openShareApi?url=${url}&text=${title}&pic=${shot-img}","logo":"/resourceFiles/share_img/tieba.ico","title":"百度贴吧"},
// {"name":"新浪微博","url":"http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${shot-img}&searchPic=true","logo":"/resourceFiles/share_img/sina_weibo.ico","title":"新浪微博"},
// {"name":"链接","url":"javascript:shareTocopy()","logo":"/resourceFiles/share_img/link.ico","title":"链接","filter":"pc"},
// {"name":"二维码","url":"javascript:openQRCode()","logo":"/resourceFiles/share_img/qrcode.ico","title":"二维码","filter":"pc"}];
bookConfig.loadingCaptionColor = "#dddddd"; bookConfig.loadingPicture = ""; bookConfig.loadingBackground = "#323232"; bookConfig.appLogoIcon = ""; bookConfig.appLogoLinkURL = ""; bookConfig.appLogoOpenWindow = "Blank"; bookConfig.logoHeight = "40"; bookConfig.logoPadding = "0"; bookConfig.logoTop = "0"; bookConfig.toolbarColor = "#444444"; bookConfig.iconColor = "#cccccc"; bookConfig.pageNumColor = "#333333"; bookConfig.iconFontColor = "#ffffff"; bookConfig.toolbarAlwaysShow = "No"; bookConfig.formFontColor = "#ffffff"; bookConfig.formBackgroundColor = "#27181a"; bookConfig.ToolBarAlpha = "1"; bookConfig.CurlingPageCorner = "Yes"; bookConfig.buttonsSortXML = []; bookConfig.InstructionsButtonVisible = "False"; bookConfig.showBookInstructionOnStart = "False"; bookConfig.showInstructionOnStart = "No"; bookConfig.showGotoButtonsAtFirst = "No"; bookConfig.QRCode = "Hide"; bookConfig.HomeButtonVisible = "Hide"; bookConfig.HomeURL = "%first page%"; bookConfig.aboutButtonVisible = "Hide"; bookConfig.aboutContactInfoTxt = ""; bookConfig.enablePageBack = "Hide"; bookConfig.ShareButtonVisible = "False"; bookConfig.addCurrentPage = "No"; bookConfig.EmailButtonVisible = "Hide"; bookConfig.btnShareWithEmailSubject = ""; bookConfig.btnShareWithEmailBody = "{link}"; bookConfig.ThumbnailsButtonVisible = "True"; bookConfig.thumbnailColor = "#333333"; bookConfig.thumbnailAlpha = "70"; bookConfig.BookMarkButtonVisible = "Hide"; bookConfig.TableOfContentButtonVisible = "True"; bookConfig.isHideTabelOfContentNodes = "Yes"; bookConfig.SearchButtonVisible = "False"; bookConfig.leastSearchChar = "2"; bookConfig.searchFontColor = "#ffffff"; bookConfig.searchKeywordFontColor = "#ffb000"; bookConfig.searchHightlightColor = "#fdc606"; bookConfig.SelectTextButtonVisible = "Hide"; bookConfig.SelectTextButtonIcon = ""; bookConfig.PrintButtonVisible = "Hide"; bookConfig.printWatermarkFile = ""; bookConfig.BackgroundSoundButtonVisible = "False"; bookConfig.FlipSound = "No"; bookConfig.BackgroundSoundURL = "./files/mobile-ext/BackgroundSoundURL.mp3?1597972384"; bookConfig.BackgroundSoundLoop = "-1"; bookConfig.bgSoundVol = "50"; bookConfig.AutoPlayButtonVisible = "True"; bookConfig.autoPlayAutoStart = "No"; bookConfig.autoPlayDuration = "3"; bookConfig.autoPlayLoopCount = "1"; bookConfig.ZoomButtonVisible = "False"; bookConfig.SupportOperatePageZoom = "Yes"; bookConfig.maxZoomWidth = "0"; bookConfig.defaultZoomWidth = "0"; bookConfig.mouseWheelFlip = "Yes"; bookConfig.ZoomMapVisible = "Hide"; bookConfig.DownloadButtonVisible = "Hide"; bookConfig.DownloadURL = ""; bookConfig.downloadConfig = ""; bookConfig.PhoneButtonVisible = "Hide"; bookConfig.PhoneButtonIcon = ""; bookConfig.PhoneNumbers = []; bookConfig.AnnotationButtonVisible = "Hide"; bookConfig.FullscreenButtonVisible = "Hide"; bookConfig.WeChatShareButtonVisible = "Hide"; bookConfig.WeChatShareButtonIcon = ""; bookConfig.textClarityEnhancement = "0"; bookConfig.MagnifierButtonVisible = "Hide"; bookConfig.NoWechatSharing = "Hide"; bookConfig.OnlyOpenInWechat = "False"; bookConfig.bgBeginColor = "#1f2232"; bookConfig.bgEndColor = "#1f2232"; bookConfig.bgMRotation = "90"; bookConfig.backGroundImgURL = "./files/mobile-ext/backGroundImgURL.jpg?1597972384"; bookConfig.backgroundPosition = "Stretch"; bookConfig.backgroundOpacity = "100"; bookConfig.backgroundScene = "None"; bookConfig.LeftShadowWidth = "100"; bookConfig.LeftShadowAlpha = "1"; bookConfig.RightShadowWidth = "40"; bookConfig.RightShadowAlpha = "1"; bookConfig.ShowTopLeftShadow = "Yes"; bookConfig.pageHighlightType = "book"; bookConfig.HardPageEnable = "No"; bookConfig.hardCoverBorderWidth = "8"; bookConfig.borderColor = "#572f0d"; bookConfig.outerCoverBorder = "Yes"; bookConfig.cornerRound = "8"; bookConfig.leftMarginOnMobile = "0"; bookConfig.topMarginOnMobile = "0"; bookConfig.rightMarginOnMobile = "0"; bookConfig.bottomMarginOnMobile = "0"; bookConfig.pageBackgroundColor = "#ffffff"; bookConfig.flipshortcutbutton = "Show"; bookConfig.BindingType = "side"; bookConfig.RightToLeft = "No"; bookConfig.FlipDirection = "0"; bookConfig.flippingTime = "0.3"; bookConfig.retainBookCenter = "Yes"; bookConfig.FlipStyle = "Flip"; bookConfig.autoDoublePage = "Yes"; bookConfig.isTheBookOpen = "No"; bookConfig.thicknessWidthType = "Thick"; bookConfig.thicknessColor = "#ffffff"; bookConfig.SingleModeBanFlipToLastPage = "No"; bookConfig.showThicknessOnMobile = "No"; bookConfig.DoubleSinglePageButtonVisible = "No"; bookConfig.isSingleBookFullWindowOnMobile = "No"; bookConfig.isStopMouseMenu = "Yes"; bookConfig.restorePageVisible = "No"; bookConfig.useTheAliCloudChart = "True"; bookConfig.totalPagesCaption = ""; bookConfig.pageNumberCaption = ""; bookConfig.topMargin = "10"; bookConfig.bottomMargin = "10"; bookConfig.leftMargin = "10"; bookConfig.rightMargin = "10"; bookConfig.hideMiniFullscreen = "No"; bookConfig.maxWidthToSmallMode = "400"; bookConfig.maxHeightToSmallMode = "350"; bookConfig.leftRightPnlShowOption = "None"; bookConfig.highDefinitionConversion = "No"; bookConfig.appLargeLogoIcon = ""; bookConfig.appLargeLogoURL = ""; bookConfig.LargeLogoPosition = "top-left"; bookConfig.LargeLogoTarget = "Blank"; bookConfig.isFixLogoSize = "No"; bookConfig.logoFixWidth = "0"; bookConfig.logoFixHeight = "0"; bookConfig.showHelpContentAtFirst = "No"; bookConfig.updateURLForPage = "No"; bookConfig.securitySetting = "No Security"; bookConfig.passwordTips = ""; bookConfig.OpenWindow = "Blank"; bookConfig.showLinkHint = "No"; bookConfig.googleAnalyticsID = ""; bookConfig.languageSetting = "Chinese"; bookConfig.UIBaseURL = "./sukk_files"; bookConfig.EnableReportButton = "false"; bookConfig.reportUrl = ""; bookConfig.totalPageCount = "36"; bookConfig.largePageWidth = "603"; bookConfig.largePageHeight = "754"; bookConfig.bookTitle = "skifish"; bookConfig.normalPath = "./files/mobile/"; bookConfig.largePath = "./files/mobile/"; bookConfig.thumbPath = "./files/thumb/"; bookConfig.productName = "SKYFISH";
var language = [{ "language": "Chinese", "btnFirstPage": "\u7b2c\u4e00\u9875", "btnNextPage": "\u4e0b\u4e00\u9875", "btnLastPage": "\u6700\u540e\u4e00\u9875", "btnPrePage": "\u4e0a\u4e00\u9875", "btnDownload": "\u4e0b\u8f7d", "btnPrint": "\u6253\u5370", "btnSearch": "\u641c\u7d22", "btnClearSearch": "\u6e05\u9664", "frmSearchPrompt": "\u6e05\u9664", "btnBookMark": "\u76ee\u5f55", "btnHelp": "\u5e2e\u52a9", "btnHome": "\u4e3b\u9875", "btnFullScreen": "\u5168\u5c4f", "btnDisableFullScreen": "\u666e\u5c4f", "btnSoundOn": "\u6253\u5f00\u58f0\u97f3", "btnSoundOff": "\u5173\u95ed\u58f0\u97f3", "btnShareEmail": "\u90ae\u4ef6\u5206\u4eab", "btnSocialShare": "\u670b\u53cb\u5206\u4eab", "btnZoomIn": "\u653e\u5927", "btnZoomOut": "\u7f29\u5c0f", "btnDragToMove": "\u62d6\u52a8\/\u79fb\u52a8", "btnAutoFlip": "\u81ea\u52a8\u7ffb\u9875", "btnStopAutoFlip": "\u505c\u6b62\u7ffb\u9875", "btnGoToHome": "\u8fd4\u56de\u4e3b\u9875", "frmHelpCaption": "\u5e2e\u52a9", "frmHelpTip1": "\u53ef\u4ee5\u53cc\u51fb\u8fdb\u884c\u653e\u5927\u6216\u7f29\u5c0f", "frmHelpTip2": "\u62d6\u52a8\u9875\u9762\u7684\u4e2a\u89d2\u53ef\u4ee5\u8fdb\u884c\u7ffb\u9875", "frmPrintCaption": "\u6253\u5370\u7a97\u53e3", "frmPrintBtnCaption": "\u6253\u5370", "frmPrintPrintAll": "\u6253\u5370\u6240\u6709\u9875\u9762", "frmPrintPrintCurrentPage": "\u6253\u5370\u5f53\u524d\u9875", "frmPrintPrintRange": "\u6253\u5370\u8303\u56f4\uff1a", "frmPrintExampleCaption": "\u4f8b\u5982\uff1a2,5,8-26", "frmPrintPreparePage": "\u6b63\u5728\u51c6\u5907\u9875\uff1a", "frmPrintPrintFailed": "\u6253\u5370\u5931\u8d25\uff1a", "pnlSearchInputInvalid": "\uff08\u6700\u5c11\u9700\u8981\u8f93\u51653\u4e2a\u5b57\u7b26\uff09", "loginCaption": "\u767b\u5f55", "loginInvalidPassword": "\u4f60\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e\uff01", "loginPasswordLabel": "\u5bc6\u7801\uff1a", "loginBtnLogin": "\u767b\u5f55", "loginBtnCancel": "\u53d6\u6d88", "btnThumb": "\u7f29\u7565\u56fe", "lblPages": "\u9875\u6570\uff1a", "lblPagesFound": "\u627e\u5230\u9875\u6570\uff1a", "lblPageIndex": "\u9875", "btnAbout": "\u5173\u4e8e", "frnAboutCaption": "\u5173\u4e8e\u6211\u4eec", "btnSinglePage": "\u5355\u9875", "btnDoublePage": "\u53cc\u9875", "btnSwicthLanguage": "\u5207\u6362\u8bed\u8a00", "tipChangeLanguage": "\u8bf7\u5728\u4e0b\u9762\u9009\u62e9\u4e00\u79cd\u8bed\u8a00", "btnMoreOptionsLeft": "\u66f4\u591a\u9009\u62e9", "btnMoreOptionsRight": "\u66f4\u591a\u9009\u62e9", "btnFit": "\u81ea\u52a8\u9002\u5e94", "smallModeCaption": "\u70b9\u51fb\u5168\u5c4f", "btnAddAnnotation": "\u52a0\u6ce8\u91ca", "btnAnnotation": "\u6ce8\u91ca\u5217\u8868", "FlipPageEditor_SaveAndExit": "\u4fdd\u5b58\u5e76\u9000\u51fa", "FlipPageEditor_Exit": "\u9000\u51fa", "DrawToolWindow_Redo": "\u91cd\u505a", "DrawToolWindow_Undo": "\u64a4\u9500", "DrawToolWindow_Clear": "\u6e05\u9664", "DrawToolWindow_Brush": "\u7b14\u5237", "DrawToolWindow_Width": "\u7b14\u5237\u5bbd\u5ea6", "DrawToolWindow_Alpha": "\u7b14\u5237\u900f\u660e\u5ea6", "DrawToolWindow_Color": "\u7b14\u5237\u9854\u8272", "DrawToolWindow_Eraser": "\u64e6\u9664", "DrawToolWindow_Rectangular": "\u77e9\u5f62", "DrawToolWindow_Ellipse": "\u692d\u5706", "TStuff_BorderWidth": "\u8fb9\u6846\u5bbd\u5e26", "TStuff_BorderAlph": "\u8fb9\u6846\u900f\u660e\u5ea6", "TStuff_BorderColor": "\u5b57\u4f53\u9854\u8272", "DrawToolWindow_TextNote": "\u6587\u672c\u9644\u6ce8", "AnnotMark": "\u4e66\u7b7e", "lastpagebtnHelp": "\u6700\u540e\u4e00\u9875", "firstpagebtnHelp": "\u7b2c\u4e00\u9875", "homebtnHelp": "\u8fd4\u56de\u9996\u9875", "aboubtnHelp": "\u5173\u4e8e", "screenbtnHelp": "\u5728\u4e00\u4e2a\u5b8c\u6574\u7684\u7a97\u53e3\u4e2d\u6253\u5f00\u8be5\u5e94\u7528\u7a0b\u5e8f", "helpbtnHelp": "\u6253\u5f00\u5e2e\u52a9\u7a97\u53e3", "searchbtnHelp": "\u4ece\u4e66\u9875\u4e2d\u641c\u7d22", "pagesbtnHelp": "\u9884\u89c8\u5c0f\u518c\u5b50\u7684\u7f29\u7565\u56fe", "bookmarkbtnHelp": "\u6253\u5f00\u4e66\u7b7e", "AnnotmarkbtnHelp": "\u6253\u5f00\u76ee\u5f55", "printbtnHelp": "\u6253\u5370\u5c0f\u518c\u5b50", "soundbtnHelp": "\u5f00\u542f\u6216\u5173\u95ed\u7684\u58f0\u97f3", "sharebtnHelp": "\u53d1\u9001\u6d88\u606f", "socialSharebtnHelp": "\u793e\u4ea4\u5206\u4eab", "zoominbtnHelp": "\u653e\u5927", "downloadbtnHelp": "\u4e0b\u8f7d\u5ba3\u4f20\u518c", "pagemodlebtnHelp": "\u5355\u9875\u548c\u53cc\u9875", "languagebtnHelp": "\u5207\u6362\u8bed\u8a00", "annotationbtnHelp": "\u6dfb\u52a0\u6279\u6ce8", "addbookmarkbtnHelp": "\u81ea\u5b9a\u4e49\u4e66\u7b7e", "removebookmarkbtnHelp": "\u79fb\u9664\u4e66\u7b7e", "updatebookmarkbtnHelp": "\u66f4\u65b0\u4e66\u7b7e", "btnShoppingCart": "\u8d2d\u7269\u8f66\u6309\u94ae", "Help_ShoppingCartbtn": "\u8d2d\u7269\u8f66", "Help_btnNextPage": "\u4e0b\u9875", "Help_btnPrePage": "\u4e0a\u9875", "Help_btnAutoFlip": "\u81ea\u52a8\u7ffb\u9875", "Help_StopAutoFlip": "\u505c\u6b62\u81ea\u52a8\u7ffb\u9875", "btnaddbookmark": "\u6dfb\u52a0", "btndeletebookmark": "\u5220\u9664", "btnupdatebookmark": "\u66f4\u65b0", "frmyourbookmarks": "\u4f60\u7684\u4e66\u7b7e", "frmitems": "\u9879\u76ee", "DownloadFullPublication": "\u6574\u4efd\u51fa\u7248\u7269", "DownloadCurrentPage": "\u5f53\u524d\u9875", "DownloadAttachedFiles": "\u9644\u4ef6", "lblLink": "\u5206\u4eab\u94fe\u63a5", "btnCopy": "\u590d\u5236\u6309\u94ae", "infCopyToClipboard": "\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u526a\u5207\u677f\u529f\u80fd", "restorePage": "\u662f\u5426\u4ece\u4e0a\u6b21\u7684\u4f4d\u7f6e\u5f00\u59cb", "tmpl_Backgoundsoundon": "\u80cc\u666f\u97f3\u4e50\u5f00", "tmpl_Backgoundsoundoff": "\u80cc\u666f\u97f3\u4e50\u5173", "tmpl_Flipsoundon": "\u7ffb\u9875\u58f0\u5f00", "tmpl_Flipsoundoff": "\u7ffb\u9875\u58f0\u5173", "Help_PageIndex": "\u5f53\u524d\u9875\u7801", "tmpl_PrintPageRanges": "\u9875\u8303\u56f4", "tmpl_PrintPreview": "\u9884\u89c8", "btnSelection": "\u9009\u62e9\u6587\u5b57", "loginNameLabel": "\u60a8\u7684\u540d\u5b57:", "btnGotoPage": "\u8df3\u81f3", "btnSettings": "\u8bbe\u7f6e", "soundSettingTitle": "\u79fb\u52a8\u7248\u58f0\u97f3\u6807\u9898", "closeFlipSound": "\u7ffb\u9875\u58f0\u5f00\u5173", "closeBackgroundSound": "\u80cc\u666f\u58f0\u5f00\u5173", "frmShareCaption": "\u5206\u4eab", "frmShareLinkLabel": "\u94fe\u63a5:", "frmShareBtnCopy": "\u590d\u5236", "frmShareItemsGroupCaption": "\u670b\u53cb\u5206\u4eab", "frmPanelTitle": "\u5206\u4eab\u5230", "frmShareQRcode": "\u4e8c\u7ef4\u7801", "TAnnoActionPropertyStuff_GotoPage": "\u8f6c\u5230\u9875", "btnPageBack": "\u540e\u9000", "btnPageForward": "\u524d\u8fdb", "SelectTextCopy": "\u6587\u672c\u590d\u5236", "selectCopyButton": "\u590d\u5236", "TStuffCart_TypeCart": "\u8d2d\u7269\u8f66", "TStuffCart_DetailedQuantity": "\u6570\u91cf", "TStuffCart_DetailedPrice": "\u4ef7\u683c", "ShappingCart_Close": "\u5173\u95ed", "ShappingCart_CheckOut": "\u4ed8\u6b3e", "ShappingCart_Item": "\u9879\u76ee", "ShappingCart_Total": "\u603b\u8ba1", "ShappingCart_AddCart": "\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66", "ShappingCart_InStock": "\u6709\u8d27", "TStuffCart_DetailedCost": "\u8fd0\u8d39", "TStuffCart_DetailedTime": "\u4ea4\u8d27\u65f6\u95f4", "TStuffCart_DetailedDay": "\u5929\u6570(s)", "ShappingCart_NotStock": "\u65e0\u8d27", "btnCrop": "\u622a\u56fe", "btnDragButton": "\u62d6\u52a8", "btnFlipBook": "\u7ffb\u9875\u4e66", "btnSlideMode": "\u6c34\u5e73\u6ed1\u52a8\u7ffb\u9875", "btnSinglePageMode": "\u5355\u9875\u6a21\u5f0f", "btnVertical": "\u4e0a\u4e0b\u7ffb\u9875\u6d4f\u89c8", "btnHotizontal": "\u5de6\u53f3\u7ffb\u9875\u6d4f\u89c8", "btnClose": "\u5173\u95ed", "btnBookStatus": "\u89c6\u56fe", "checkBoxInsert": "\u52a0\u5165\u5f53\u524d\u7f51\u9875", "lblLast": "\u8fd9\u662f\u6700\u540e\u4e00\u9875\u3002", "lblFirst": "\u8fd9\u662f\u7b2c\u4e00\u9875\u3002", "lblFullscreen": "\u70b9\u51fb\u67e5\u770b\u5168\u5c4f", "lblName": "\u540d\u79f0", "lblPassword": "\u5bc6\u7801", "lblLogin": "\u767b\u5f55", "lblCancel": "\u53d6\u6d88", "lblNoName": "\u7528\u6237\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\u3002", "lblNoPassword": "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\u3002", "lblNoCorrectLogin": "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002", "btnVideo": "\u89c6\u9891\u753b\u5eca", "btnSlideShow": "\u5e7b\u706f\u7247\u653e\u6620", "btnPositionToMove": "\u9f20\u6807\u79fb\u52a8", "lblHelp1": "\u62d6\u52a8\u9875\u9762\u89d2\u67e5\u770b", "lblHelp2": "\u53cc\u70b9\u51fb\u653e\u5927\uff0c\u5728", "lblCopy": "\u590d\u5236", "lblAddToPage": "\u6dfb\u52a0\u5230\u9875\u9762", "lblPage": "\u9875", "lblTitle": "\u6807\u9898", "lblEdit": "\u7f16\u8f91", "lblDelete": "\u5220\u9664", "lblRemoveAll": "\u5220\u9664\u6240\u6709", "tltCursor": "\u5149\u6807", "tltAddHighlight": "\u6dfb\u52a0\u9ad8\u4eae", "tltAddTexts": "\u6dfb\u52a0\u6587\u672c", "tltAddShapes": "\u6dfb\u52a0\u5f62\u72b6", "tltAddNotes": "\u6dfb\u52a0\u6ce8\u91ca", "tltAddImageFile": "\u6dfb\u52a0\u56fe\u50cf\u6587\u4ef6", "tltAddSignature": "\u6dfb\u52a0\u7b7e\u540d", "tltAddLine": "\u6dfb\u52a0\u76f4\u7ebf", "tltAddArrow": "\u6dfb\u52a0\u7bad\u5934", "tltAddRect": "\u6dfb\u52a0\u77e9\u5f62", "tltAddEllipse": "\u6dfb\u52a0\u692d\u5706", "lblDoubleClickToZoomIn": "\u53cc\u51fb\u8fdb\u884c\u653e\u5927\u3002", "frmShareLabel": "\u5206\u4eab", "frmShareInfo": "\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u5206\u4eab\u672c\u51fa\u7248\u7269\u4e2d\u5bf9\u793e\u4ea4\u7f51\u7edc\u3002\u53ea\u9700\u70b9\u51fb\u4e0b\u9762\u7684\u76f8\u5e94\u6309\u94ae\u3002", "frminsertLabel": "\u63d2\u5165\u5230\u7f51\u7ad9", "frminsertInfo": "\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u672c\u51fa\u7248\u7269\u4e2d\u5d4c\u5165\u5230\u4f60\u7684\u7f51\u7ad9\u3002", "btnQRCode": "\u626b\u63cf\u4e8c\u7ef4\u7801", "btnRotateLeft": "\u5de6\u8f6c", "btnRotateRight": "\u53f3\u8f6c", "lblSelectMode": "\u8bf7\u9009\u62e9\u663e\u793a\u65b9\u5f0f", "frmDownloadPreview": "\u9884\u89c8", "frmHowToUse": "\u4f7f\u7528\u8bf4\u660e", "lblHelpPage1": "\u9875\u89d2\u4ee5\u53ca\u4e2d\u95f4\u53ef\u6ed1\u52a8\u7ffb\u9875", "lblHelpPage2": "\u53cc\u51fb\u6216\u8005\u7528\u62c9\u5927\u624b\u52bf\u53ef\u4ee5\u653e\u5927", "lblHelpPage3": "\u70b9\u51fblogo\u67e5\u770b\u66f4\u591a\u4fe1\u606f", "lblHelpPage4": "\u70b9\u51fb\u5de5\u5177\u680f\u6309\u94ae\u8fdb\u884c\u641c\u7d22\uff0c\u5206\u4eab\u7b49", "lblHelpPage5": "\u8bbe\u5907\u5207\u6362\u6a2a\u5c4f\u53ef\u770b\u53cc\u9875", "TTActionQuiz_PlayAgain": "\u91cd\u6765\u4e00\u6b21", "TTActionQuiz_Ration": "\u4f60\u7684\u8bc4\u5206\u662f", "frmTelephone": "\u7535\u8bdd\u5217\u8868", "btnDialing": "\u62e8\u6253", "lblSelectMessage": "\u590d\u5236\u9009\u4e2d\u5185\u5bb9", "btnSelectText": "\u9009\u62e9\u6587\u5b57", "btnNote": "\u6ce8\u91ca", "btnPhoneNumber": "\u7535\u8bdd", "btnWeCharShare": "\u5fae\u4fe1\u5206\u4eab", "btnMagnifierIn": "\u653e\u5927\u955c\u653e\u5927", "btnMagnifierOut": "\u653e\u5927\u955c\u7f29\u5c0f", "frmShareSmallProgram": "\u5c0f\u7a0b\u5e8f\u7801", "btnMagnifier": "\u653e\u5927\u955c", "frmPrintPrintLimitFailed": "\u5bf9\u4e0d\u8d77\uff0c\u4f60\u4e0d\u80fd\u6253\u5370\u8fd9\u4e9b\u9875.", "infNotSupportHtml5": "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301HTML5\uff0c\u63a8\u8350\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668\u6216\u8005360\u5b89\u5168\u6d4f\u89c8\u5668\uff08\u5207\u6362\u5230\u6781\u901f\u6a21\u5f0f\uff09\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u9605\u8bfb\u6548\u679c.", "btnReport": "\u4e3e\u62a5", "btnDoubleSinglePage": "\u5355\u53cc\u9875\u5207\u6362", "btnDownloadPosterPrompt": "\u70b9\u51fb\u4e0b\u8f7d\u6d77\u62a5", "infLongPressToSavePoster": "\u957f\u6309\u4fdd\u5b58\u6d77\u62a5", "infLongPressToIndentify": "\u957f\u6309\u8bc6\u522b\u4e8c\u7ef4\u7801", "infScanCodeToView": "\u5fae\u4fe1\u626b\u7801\u9605\u8bfb", "frmaboutcaption": "\u8054\u7cfb", "frmaboutDESCRIPTION": "\u63cf\u8ff0", "frmaboutAUTHOR": "\u4f5c\u8005", "frmaboutADDRESS": "\u5730\u5740", "frmaboutEMAIL": "\u90ae\u4ef6\u5730\u5740", "frmaboutWEBSITE": "\u7f51\u7ad9", "frmaboutMOBILE": "\u624b\u673a", "frmBookMark": "\u4e66\u7b7e", "btnFullscreen": "\u5168\u5c4f", "btnExitFullscreen": "\u9000\u51fa\u5168\u5c4f", "btnMore": "\u66f4\u591a", "frmPrintall": "\u6253\u5370\u5168\u90e8", "frmPrintcurrent": "\u6253\u5370\u5f53\u524d\u9875", "frmPrintRange": "\u6253\u5370\u9875\u7801\u8303\u56f4", "frmPrintexample": "\u4f8b\u5b50: 2,3,5-10", "frmPrintbtn": "\u6253\u5370", "frmaboutcontactinformation": "\u8054\u7cfb\u4eba\u4fe1\u606f", "frmSearch": "\u641c\u7d22", "frmToc": "\u76ee\u5f55", "btnTableOfContent": "\u663e\u793a\u76ee\u5f55", "lblDescription": "\u6807\u9898", "frmLinkLabel": "\u94fe\u63a5", "frmQrcodeCaption": "\u7528\u624b\u673a\u626b\u63cf\u5e95\u90e8\u7684\u4e8c\u7ef4\u7801\u3002", "btnLanguage": "\u5207\u6362\u8bed\u8a00", "msgConfigMissing": "\u914d\u7f6e\u6587\u4ef6\u4e22\u5931\uff0c\u65e0\u6cd5\u6253\u5f00\u4e66\u7c4d\u3002", "lblSave": "\u4fdd\u5b58" }];
function orgt(s) { return binl2hex(core_hx(str2binl(s), s.length * chrsz)); };

var pageEditor = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
bookConfig.CreatedTime = 1597972264;//suffix time
bookConfig.SmallProgramUrl = '//book.yunzhan365.com/kuwh/pizz/files/extfile/WX_QRURL.png';
var staticAd = []

if (bookConfig.languageSetting && bookConfig.languageSetting != "") {
	bookConfig.language = bookConfig.languageSetting.split(";")[0];
}


// if(window.location.search && window.location.search!="") {
// 	var bookConfigImgKey = ["loadingPicture", "appLogoIcon", "printWatermarkFile", "BackgroundSoundURL", "backGroundImgURL"];
// 	for(var i = 0; i < bookConfigImgKey.length; i++) {
// 		var keyVal = bookConfig[bookConfigImgKey[i]];
// 		if(keyVal && keyVal!="") {
// 			bookConfig[bookConfigImgKey[i]] = keyVal + window.location.search;
// 		}
// 	} 
// }
try {
	var phoneNumber = bookConfig.PhoneNumbers;
} catch (e) {
	console.log("PhoneNumbers not nudefind");
	var phoneNumber = [];
}
try {
	// var bookConfigImgKey = ["loadingPicture", "appLogoIcon", "printWatermarkFile", "BackgroundSoundURL", "backGroundImgURL"];
	var bookConfigImgKey = ["appLogoIcon"];
	for (var i = 0; i < bookConfigImgKey.length; i++) {
		var keyVal = bookConfig[bookConfigImgKey[i]];
		if (keyVal && keyVal != "") {
			bookConfig[bookConfigImgKey[i]] = keyVal + "?" + new Date().getTime();
		}
	}
	// for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
	// 	if(pageEditor[i].length==0){
	// 		continue;
	// 	}
	// 	for(var j=0;j<pageEditor[i].length;j++){
	// 		var anno=pageEditor[i][j];
	// 		if(anno==undefined)continue;
	// 		if(anno.overAlpha==undefined){
	// 			anno.overAlpha=bookConfig.LinkAlpha;
	// 		}
	// 		if(anno.outAlpha==undefined){
	// 			anno.outAlpha=0;
	// 		}
	// 		if(anno.downAlpha==undefined){
	// 			anno.downAlpha=bookConfig.LinkAlpha;
	// 		}
	// 		if(anno.overColor==undefined){
	// 			anno.overColor=bookConfig.LinkDownColor;
	// 		}
	// 		if(anno.downColor==undefined){
	// 			anno.downColor=bookConfig.LinkDownColor;
	// 		}
	// 		if(anno.outColor==undefined){
	// 			anno.outColor=bookConfig.LinkDownColor;
	// 		}
	// 		if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
	// 			anno.alpha=bookConfig.LinkAlpha;
	// 		}
	// 	}
	// }
} catch (e) {
}
try {
	$.browser.device = 2;
} catch (ee) {
}
















