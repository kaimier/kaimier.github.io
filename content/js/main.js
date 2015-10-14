requirejs.config({
	paths:{
		jquery:'jQuery'
	}
});

requirejs(['jquery','validate'],function($,validate){
	console.log(validate.isEqual(1,1));
});