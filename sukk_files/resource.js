var dynamicLoading = {
    css: function (path) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        script.async = false
        script.onload = script.onreadystatechange = function () {
            callback && callback()
        };
        head.appendChild(script);
    },
    type: 't2021090101',
    time: '1630465198'
}

// dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/html5_templates/t2021090101/Mobile/javascript/main.js', function () {
    // dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/js/statistic.js?1630465198')    
    // dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/js/writeLog.js?1630465198')
    // dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/js/plugin.js?1630465198')
// })
// dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/js/weixin-share2.js?1630465198')
// dynamicLoading.js('https://book.yunzhan365.com/resourceFiles/js/visitinfo.js?1630465198')
dynamicLoading.css('https://book.yunzhan365.com/resourceFiles/html5_templates/t2021090101/Mobile/style/style.css')
dynamicLoading.css('https://book.yunzhan365.com/resourceFiles/html5_templates/t2021090101/Mobile/style/player.css')
dynamicLoading.css('https://book.yunzhan365.com/resourceFiles/html5_templates/t2021090101/Mobile/style/phoneTemplate.css')
dynamicLoading.css('https://book.yunzhan365.com/resourceFiles/html5_templates/t2021090101/Mobile/style/template.css')