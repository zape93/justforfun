(function(window){var svgSprite='<svg><symbol id="icon-camera1" viewBox="0 0 1294 1024"><path d="M904.319435 64.0006a16.63999 16.63999 0 0 1 15.99999 11.519993l29.439981 87.679945a90.879943 90.879943 0 0 0 86.399946 63.99996h122.879924a71.039956 71.039956 0 0 1 71.039955 71.039956v592.639629A71.039956 71.039956 0 0 1 1159.039276 960.00004h-1023.99936A71.039956 71.039956 0 0 1 63.99996 888.960084V296.320455a71.039956 71.039956 0 0 1 71.039956-70.399956h337.919788a90.879943 90.879943 0 0 0 86.399946-63.99996l29.439982-86.399946A16.63999 16.63999 0 0 1 604.799622 64.0006h299.519813m0-63.99996H604.799622a80.63995 80.63995 0 0 0-76.799952 55.039966l-29.439982 88.319944a26.879983 26.879983 0 0 1-25.599984 18.559989H135.039916A135.039916 135.039916 0 0 0 0 296.320455v592.639629A135.039916 135.039916 0 0 0 135.039916 1024h1023.99936a135.039916 135.039916 0 0 0 135.039915-135.039916V296.320455a135.039916 135.039916 0 0 0-135.039915-135.039916h-122.879924a26.879983 26.879983 0 0 1-25.599984-18.559988L981.119387 55.040606a80.63995 80.63995 0 0 0-76.799952-55.039966z"  ></path><path d="M754.559528 333.440432a259.199838 259.199838 0 1 1-259.199838 259.199838 259.839838 259.839838 0 0 1 259.199838-259.199838m0-63.99996a323.199798 323.199798 0 1 0 323.199798 323.199798 323.839798 323.839798 0 0 0-323.199798-323.199798z"  ></path><path d="M754.559528 448.00036a143.99991 143.99991 0 1 1-143.99991 144.63991A143.99991 143.99991 0 0 1 754.559528 448.00036m0-63.99996A207.99987 207.99987 0 1 0 959.9994 592.64027 207.99987 207.99987 0 0 0 754.559528 384.0004z"  ></path><path d="M289.919819 96.64058h-127.99992a31.99998 31.99998 0 0 1 0-63.99996h127.99992a31.99998 31.99998 0 0 1 0 63.99996z"  ></path><path d="M289.919819 349.440422h-127.99992a31.99998 31.99998 0 0 1 0-63.99996h127.99992a31.99998 31.99998 0 0 1 0 63.99996z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)