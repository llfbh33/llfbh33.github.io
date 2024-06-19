let img = document.getElementById('capstone');
console.log(img)

var slides=['image/capstone-edit-page.png','image/capstone-landing-page.png'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";

}
setInterval(slider,2000);
