$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		infinite: false,
		dots: false,
		draggable: false,

		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				arrows: false,
				dots: true,
			  }
			},
			{
				breakpoint: 575,
				settings: {
				  arrows: false,
				  dots: true,
				  autoplay: true,
				  autoplaySpeed: 1200,
				}
			  },
		]
});