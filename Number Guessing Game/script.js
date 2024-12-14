let m = document.querySelector(".numguess");
let resulted = document.querySelector(".result");
let number = 40
let prints;
function numberguess(){
    let number = parseInt(m.value);
    if(number<10 && number>0){
        prints = "way to low";
    }else if(number>10 && number<30){
        prints = "To Low";
    }else if(number<39 && number>31){
        prints ="Go a little higher"
    }else if(number== 40){
        prints= "You have guessed correctly";
    }else if (number>40){
        prints = "Too high";
    }
    resulted.innerHTML = prints;
}

