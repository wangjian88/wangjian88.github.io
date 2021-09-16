jQuery(document).ready(function () {
  var version = new Date().getTime()
  $.ajax({
    url: "javascript/plugin.json" + "?" + version,
    type: 'get',
    crossDomain: true,
    dataType: "json",
    success: function (data) {
      var plugins = data;
      if (typeof (plugins) == "object") {
        for (var i = 0; i < plugins.length; i++) {
          (function () {
            var plugin = plugins[i];
            if (plugin.src) {
              loadJavascript(plugin.src + '?' + version, function () {
                var config = plugin.config;
                if (typeof (config) == "string") {
                  $.ajax({
                    url: config + '?' + version,
                    type: 'get',
                    crossDomain: true,
                    dataType: "json",
                    success: function (data) {
                      var configs = data
                      if (plugin.action)
                        configs.action = plugin.action
                      if (plugin.toServer)
                        configs.toServer = plugin.toServer
                      config = configs
                      if (plugin.name && window[plugin.name]) new window[plugin.name](config);
                    }
                  })
                }
                if (plugin.name && window[plugin.name]) new window[plugin.name](config);
              })
            }
          })(i)
        }
      };
    }
  });
})