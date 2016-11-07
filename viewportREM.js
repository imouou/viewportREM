
/*---------------------------------------
 * version: 1.0
 * Author: wilson
 * CreateDate: 2016-11-1
 ----------------------------------------*/

/**
 * [viewportREM 是一个手机响应式适配脚本,通过该脚本可以让页面按设计稿的尺寸完美展现.]
 * @param  {[number]} [size] [字体大小]
 * @param  {[type]} [base] [设计稿大小]
 */
function viewportREM(size,base) {
      
      var metaEl = document.querySelector('meta[name="viewport"]'),
          viewport = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
      
      if (metaEl ) {
          metaEl.content = viewport ;
      } else {
          var element = document.createElement('meta');
              element.name = "viewport";
              element.content = viewport;
          var head = document.getElementsByTagName('head')[0];
              head.appendChild(element);
      }

      // scaling ratio
      var baseSize = 100, // HTML base font size
          baseWidth = base || 540, // Design draft size
          ratio = window.devicePixelRatio, // dpi 
          winWid = document.documentElement.clientWidth, 
          winHei = document.documentElement.clientHeight,
          winWidth = parseInt(winWid) * parseInt(ratio),
          winHeight = parseInt(winHei) * parseInt(ratio),
          fontSize = size ? size : ( winWid / baseWidth * baseSize ).toFixed(2) ;
          size = fontSize;
          
      var domHtml = document.getElementsByTagName('html');
          domHtml[0].style.fontSize = fontSize + 'px';
}
