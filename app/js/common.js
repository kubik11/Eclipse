$(function() {


	function eqH(){
		
		$('.offers-inner p').each(function(elem){
			var val = 0;
			var current = $(this).height();
			//alert(current);
			if (val<current){
				val = current;
			}
			});
		$('.offers-inner p').each(function(i){
				$(this).css('height', val + 'px');
			});
		
	}
	eqH();
	// Custom JS

});
