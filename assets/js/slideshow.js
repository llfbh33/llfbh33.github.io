
// For first project
const img = document.getElementById('capstone-image');

let slides=[
    'https://profile-images-pencrafted-capstone.s3.us-west-2.amazonaws.com/capstone-edit-page.png',
    'https://profile-images-pencrafted-capstone.s3.us-west-2.amazonaws.com/Screenshot+2024-06-20+190036.png',
    'https://profile-images-pencrafted-capstone.s3.us-west-2.amazonaws.com/Screenshot+2024-06-20+185307.png',
    'https://profile-images-pencrafted-capstone.s3.us-west-2.amazonaws.com/capstone-landing-page.png',

];

let start=0;

function slider(){
    img.style.opacity
    if(start<slides.length){
        start=start+1;
    }
    else{
        start=1;
    }
    console.log(img);
    img.src = slides[start-1]
}
setInterval(slider,2500);

// For second project
const img2 = document.getElementById('group-image');

let slides2=[


];

let start2=0;

function slider2(){
    img2.style.opacity
    if(start2<slides2.length){
        start2=start2+1;
    }
    else{
        start2=1;
    }
    console.log(img2);
    img2.src = slides2[start2-1]
}
setInterval(slider2,2500);
