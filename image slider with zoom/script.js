let main_img = document.getElementById("main_img");
let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let img_container = document.querySelector(".images");
let imgs = document.querySelectorAll(".slider_imgs img");

let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let counter = 0;

let blurImages = () =>{
    imgs.forEach(img => img.style.opacity = '0.3')
}

const moveleft = () => {
    counter--;
    if(counter < 0){
        counter = imgs.length - 1
    }
    images.style.Image = `url(./images/${images[counter]}.jpg)`;
}

left_btn.addEventListener('click', moveleft);



function ChangeImg(src){
    main_img.src = src;
}