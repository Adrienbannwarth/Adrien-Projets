/**
 * Description:  Script principal pour HEJ
 * Version: 1.0.0
 * Created: 02/02/2018
 * Last update: 07/02/2018
 * Author: Creano
 */

 ;(function($) {
 	'use strict';

  // Declare object and main parameters
  var site = {};
  site.name = 'Portfolio Adrien';

  // Declare init
  site.init = function() {

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    $('html').removeClass('no-js').addClass('js');


    // Bind site methods on domready
    site.thumbProjectHover();



    // On load
    // $(window).on('load', function () {});

    // ON resize
    $(window).on('resize', function() {
      // modules resize
  }).trigger('resize');

};
site.thumbProjectHover = function() {
	$('.lili').hover(  function() {
		$( this ).addClass( "hover" );
		$('.img-project[data-image="' + $( this ).attr('data-image') + '"]').fadeToggle('');
	}, function() {
		$( this ).removeClass( "hover" );
		$('.img-project[data-image="' + $( this ).attr('data-image') + '"]').fadeToggle('');
	})
}

  // init site on DOM Ready
  $(document).ready(site.init);
})(jQuery);
