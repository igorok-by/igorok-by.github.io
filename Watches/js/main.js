$( function() {

	if ( document.documentElement.clientWidth < 992 ) {

		$("#search").before('<div class="input-group w-75"><input type="text" class="form-control" placeholder="Поиск..." aria-label="Search" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-success" type="button"><span class="fa fa-search fa-lg"aria-describedby="button-search"></span></button></div></div>').remove();
    
    } else {

    	var searchTab = '<div class="" id="searchCollapse"><input type="text" class="form-control" id="searchInput" placeholder="Поиск..." aria-label="Search" autofocus></div>';

    	$('#search').click( function() {

    		if ($('#search').prev().hasClass('in')) {
    			$('#searchCollapse').removeClass('in');
    			setTimeout ( function() {
    				$('#searchCollapse').remove();
    			}, 600);
    		
    		} else {
    			$('#search').before(searchTab);
    			setTimeout ( function() {
	    			$('#searchCollapse').addClass('in');
	    		}, 100);
    		}
    	});
	};

	$('#topCarousel').carousel({
		interval: 5000,
		pause: 'hover'
	 });
});