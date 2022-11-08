$(document).ready(function(){
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


	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');

	  });

	  
	  function toggleTabSlide(nameClass){
		$(nameClass).each(function(i){
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		  });
	  };

	  toggleTabSlide('.catalog-item__link');
	  toggleTabSlide('.catalog-item__back');
});




