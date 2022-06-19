/**Unauthorize person is not allowed to access this file.*/
/**This is the script for the navigation bar plss do not edit the code*/
const navBar = document.querySelector(".nav--bar");
const landingPage = document.querySelector(".landing--page");
const navOptions = {
    root: null,
    threshold: 0.24,
    rootMargin: "0px 0px 100px 0px"
};

const navOb = new IntersectionObserver(function(entries, observe){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navBar.classList.add("active");
        }else{
            navBar.classList.remove("active");
        }
    })
}, navOptions);

navOb.observe(landingPage);




/**This is the slider script pls do not edit the code */
const bntS1 = document.getElementById('sliderBnt1');
const bntS2 = document.getElementById('sliderBnt2');
const bntS3 = document.getElementById('sliderBnt3');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const img1 = document.querySelector('.img--slide');
let ontest = 0;




/**this is the next function on the slider */
next.addEventListener('click', function(){
    if(ontest === 0){
        img1.classList.remove('on1');
        img1.classList.add('on2');
        bntS1.classList.remove('click');
        bntS2.classList.add('click');
        bntS3.classList.remove('click');
        ontest =1;
    }else if(ontest === 1){
        img1.classList.remove('on2');
        img1.classList.add('on3');
        bntS1.classList.remove('click');
        bntS2.classList.remove('click');
        bntS3.classList.add('click');
        ontest = 2;
    }else if(ontest === 2){
        img1.classList.remove('on3');
        img1.classList.add('on1');
        bntS1.classList.add('click');
        bntS2.classList.remove('click');
        bntS3.classList.remove('click');
        ontest = 0;
    }
    
    
})
/**this is the previous function on the slider */
prev.addEventListener('click', function(){

    if(ontest === 2){
        img1.classList.remove('on3');
        img1.classList.add('on2');
        bntS1.classList.remove('click');
        bntS2.classList.add('click');
        bntS3.classList.remove('click');
        ontest = 1;
    }else if(ontest === 1){
        img1.classList.remove('on2');
        img1.classList.add('on1');
        bntS1.classList.add('click');
        bntS2.classList.remove('click');
        bntS3.classList.remove('click');
        ontest = 0;
    }else if(ontest === 0){
        img1.classList.remove('on1');
        img1.classList.add('on3');
        bntS1.classList.remove('click');
        bntS2.classList.remove('click');
        bntS3.classList.add('click');
        ontest = 2;
    }
})

/**This is the navigation button on the sliders*/
bntS1.addEventListener('click', function(){
    bntS1.classList.add('click');
    bntS2.classList.remove('click');
    bntS3.classList.remove('click');
    img1.classList.add('on1');
    img1.classList.remove('on2');
    img1.classList.remove('on3');
    ontest = 0;
})

bntS2.addEventListener('click', function(){
    bntS1.classList.remove('click');
    bntS2.classList.add('click');
    bntS3.classList.remove('click');
    img1.classList.remove('on1');
    img1.classList.add('on2');
    img1.classList.remove('on3');
    ontest = 1;
})

bntS3.addEventListener('click', function(){
    bntS1.classList.remove('click');
    bntS2.classList.remove('click');
    bntS3.classList.add('click');
    img1.classList.remove('on1');
    img1.classList.remove('on2');
    img1.classList.add('on3');
    ontest = 2;
})

/**This is the ripe animation*/


const robot = document.querySelector(".ripe--items--link1");
const book = document.querySelector(".ripe--items--link2");
const vector = document.querySelector(".ripe--items--link3");
const chart = document.querySelector(".ripe--items--link4");
const ripeOptions = {
    root: null,
    threshold: 0.9,
    rootMargin:"0px 100px 0px 0px"
}
const ripeObser = new IntersectionObserver(function(entries , observe){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            robot.classList.add('active');
            book.classList.add('active');
            vector.classList.add('active');
            chart.classList.add('active');
            ripeObser.unobserve(robot);
        }
    })
}, ripeOptions);

ripeObser.observe(robot);

/**This is the Enroll From Script */

const form = document.querySelector(".enrollForm");
const enrollNow = document.querySelector(".enroll--bnt");
const close = document.querySelector(".formClose")
enrollNow.addEventListener('click', function(){
    form.classList.remove('active');

})

close.addEventListener('click', function(){
    form.classList.add('active');
    
})