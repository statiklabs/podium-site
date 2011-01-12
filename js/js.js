var pauseWhenImageOpen = false;
$(function(){
    $(".button").hover(function () {
			    $(this).animate({
				    opacity: 0.8
			    }, "fast");
		    },
		    function () {
		    	$(this).animate({
		    		opacity: 1
		    	}, "fast");
	});
	$("a.fancybox").fancybox({
		onStart		:	function() {
			pauseWhenImageOpen = true;
		},
		onCancel	:	function() {
			pauseWhenImageOpen = false; 
		},
		onComplete	:	function() {
            pauseWhenImageOpen = true;
		},
		onCleanup	:	function() {
            pauseWhenImageOpen = false; 
		},
		onClosed	:	function() {
            pauseWhenImageOpen = false; 
		}
	});

});
