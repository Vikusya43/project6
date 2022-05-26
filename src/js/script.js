/* let answer=confirm("вам есть 18?");
if(answer == true) {
	console.log('проходите')
} else {
	console.log('уходи')
}

const num = 50;
if (num < 49) {
	console.log('неправильно')
} else if (num>100) {
	console.log('много')
} else {
	console.log('верно')
} */

/* for(let i = 1; i < 8; i++) {
	console.log(i);
} */

/* function logging( a, b ) {
	console.log( a + b )
}

logging(3,5);
logging(7,8); */



											/* slick */
// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 	   /*  adaptiveHeight: true, */
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>'
// 	  });
//   });
											 /* tiny-slider */

 
 const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
 	autoplay: false,
 	controls: false,
 	nav: false,
	 responsive: {
		320: {
			autoplay: true,
			items: 1,
			speed:1200
			

		},
		577: {
			autoplay: true,
			items: 1,
			speed: 1200
			
		},
		769: {
			autoplay: false,
			items: 1
			
		}
	  }
	});
	

	document.querySelector('.carousel__inner').addEventListener('click',  function () {
		slider.goTo('next');
	   });
   document.querySelector('.prev').addEventListener('click',  function () {
	slider.goTo('prev');
   });
   document.querySelector('.next').addEventListener('click', function () {
 	slider.goTo('next');
   });

   $(document).ready(function(){
	  
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	  $(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});	
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
  });
  

	  
	
	

								
