let post = document.querySelectorAll('#post')
let testimonial = document.querySelectorAll('.testimonial')
const b = 991.9
const c = 767.9
const windowSize = window.innerWidth

let sliderFunc = (slidePostItems,article,className) => {
        if(article.length > 0){
            let slider =  tns({
                container:`${className}`,
                items:slidePostItems,
               // axis:'horizontal',
               // controlsContainer:false,
                swipeAngle:false,
                speed:700,
                nav:true,
                controls:true,
                autoplay:true,
                autoplayHoverPause:true,
                autoplayTimeout:3500,
                autoplayButtonOutput:false
            })
        } 
        document.querySelector(".tns-controls").style.display="none"
        document.querySelector(".tns-controls").style.display="none"
}

if(windowSize > b){sliderFunc(4,post,'#post')}
else if(windowSize <= b && windowSize > c){sliderFunc(2,post,'#post')}
else{sliderFunc(1,post,'#post')}
sliderFunc(1,testimonial,'.testimonial')

window.addEventListener('resize', () => location.reload(true))
