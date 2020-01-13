/*Refactored carousel from this site: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_autohttps://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto*/
/*Would prefer the images to come from a list. Will work on that later*/
new Vue({
  el: '#carouselApp',
  data: function() {
    return {
     slideIndex :0,
     images: [
     	{
     		src: 'http://cphpost.dk/wp-content/uploads/2019/11/inno-630x390.jpg',
     		text: 'Tech trends'
     	},
  		{
  			src: 'https://i0.wp.com/insidethecask.com/wp-content/uploads/2016/07/Innovation.jpg?w=1520',
  			text: 'Tech Spot'	
  		},  		
  		{
  			src: 'https://sloanreview.mit.edu/content/uploads/2019/03/GEN-Stetter-Innovation-2400-300x300.jpg',
  			text: 'Tech Idea'	

  		},  		
  		{
  			src: 'https://happydolphinpress.com/wp-content/uploads/2018/09/techy-background_compressed-300x200.jpg',
  			text: 'Techy'	
	
  		},
  		{
  			src: 'https://mcdn.wallpapersafari.com/medium/27/60/M45A0s.jpg',
  			text: 'Tech chip'
  		}
     ]
    }
  },
  created: function created() {
    this.showSlides();
  },
  methods: {
    showSlides: function() {
		 var i;
		  var slides = document.getElementsByClassName("mySlides");
		 // var dots = document.getElementsByClassName("dot");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		  }
		  this.slideIndex++;
		  if (this.slideIndex > slides.length) {this.slideIndex = 1}    
		 /* for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }*/
		  slides[this.slideIndex-1].style.display = "block";  
		//  dots[this.slideIndex-1].className += " active";
		  setTimeout(this.showSlides, 5000); // Change image every 5 seconds
	}
  }
  
})