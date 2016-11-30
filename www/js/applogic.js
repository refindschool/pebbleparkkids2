function init() {
      window.open('http://www.pebbleparkkids.org/pebble', '_blank', 'location=yes');
      return false;
}
    

function isUrl(s) {
   var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}


function isHttp(s) {
   var regexp = /http|https/;
   return regexp.test(s);
}

function isToRedirect(s) {
   var regexp = /127.0.0.1/;
   return regexp.test(s);
}
