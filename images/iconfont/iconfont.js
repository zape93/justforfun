(function(window){var svgSprite='<svg><symbol id="icon-dingwei" viewBox="0 0 1024 1024"><path d="M532.48 122.88A409.6 409.6 0 0 0 122.88 532.48c0 226.0992 409.6 450.56 409.6 450.56s409.6-224.4608 409.6-450.56A409.6 409.6 0 0 0 532.48 122.88z m0 573.44a163.84 163.84 0 1 1 163.84-163.84 163.84 163.84 0 0 1-163.84 163.84z" fill="#0000FF" ></path><path d="M491.52 81.92A409.6 409.6 0 0 0 81.92 491.52c0 226.0992 409.6 450.56 409.6 450.56s409.6-224.4608 409.6-450.56A409.6 409.6 0 0 0 491.52 81.92z m0 573.44a163.84 163.84 0 1 1 163.84-163.84 163.84 163.84 0 0 1-163.84 163.84z" fill="#FF0000" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)