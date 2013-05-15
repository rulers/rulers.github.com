/**
 * @const Rulers Object.
**/

if(!window.Rulers) Rulers ={};

/**
 * @param {object} window console debug for IE
**/
if (!('console' in window)) {
  window.console = {};
  window.console.log = function(str){
      return str;
  };
}

/**
 * @constructor
 * @param {object} w window
 * @param {object} d document
 * @param {function} $ jQuery
 */
(function(w, d, $) {
  /* console.log("dev"); */

  // for All Content.
  dispatcher(".",function(){
    // console.log('common func call.');
    $(document).ready(function() {
		$('.notyet').click(function(e){
			alert("I said this content is Not yet don't you?.");
			return false;
		});

		$('.contact').click(function(e){
			if(window.confirm('Do you want to contact to me? ')){
				location.href = "http://www.linkedin.com/pub/masaaki-kurihara/3/782/166";
			}
			else{

			window.alert('I know!');

			}
				return false;
			});
    });
  });

})(window, document, jQuery);

/**
 * @function URL Dipatcher.
 * @param {string} path lcoation.pathname.
 * @param {function} func callback functions.
 */
function dispatcher (path, func) {
    dispatcher.path_func = dispatcher.path_func || [];
    if (func) return dispatcher.path_func.push([path, func]);
    for(var i = 0, l = dispatcher.path_func.length; i < l; ++i) { // >
        var func = dispatcher.path_func[i],
          match = path.match(func[0]);
        // console.log(match)
        match && func[1](match);
    }

}

dispatcher(location.pathname);