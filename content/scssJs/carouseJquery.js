	
$(function(){
	$('.chart1').each(function() {
			CharsStart();

		});
	$('.js_update2').click(function() {
		$('.chart1').each(function(){
			$(this).data('easyPieChart').update((Math.random()*200-100));
		});
		
	});

    function CharsStart() {
        $('.chart1').easyPieChart({
        	barColor:'green',
        	tarckColor:'pink',
        	scaleColor:'red',
        	scaleLength:6,
        	lineCap:1,
        	lineWidth:2,
        	size:200,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

    }
});