function onDeviceReady() {
    StatusBar.overlaysWebView(true);
    StatusBar.styleDefault();
  window.open = cordova.InAppBrowser.open;
    // Mock device.platform property if not available
    if (!window.device) {
        window.device = { platform: 'Browser' };
    }
  

  // the init function  automatically display the home page http://www.pebbleparkkids.org/pebble

    init()
 
  // searchLink for validate a entry in the search box
   document.getElementById('link').onclick = function () {
     var parser = document.getElementById('link_id').value;
     
    if (isToRedirect(parser)) {
      window.open('http://www.pebbleparkkids.org/whoops', '_blank', 'location=yes');
      return false;
    } else {
      if(!isHttp(parser)) {parser = 'http://' + parser;} 
      window.open(parser, '_blank', 'location=yes');
      return false;
    }
    
  }

}

document.addEventListener('deviceready', onDeviceReady, false);
