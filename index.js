//button Listener
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerhtml = this.innerHTML;
        handleclick(buttonInnerhtml);
        animation(buttonInnerhtml);
    });
}

//Keypress listener

document.addEventListener('keypress',function(event){
    handleclick(event.key);
    animation(event.key);
});

function handleclick(key){
    if(key === 'w'){
        audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if(key === 'a'){
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(key === 's'){
        audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    else if(key === 'd'){
        audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(key === 'j'){
        audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(key === 'k'){
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(key === 'l'){
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
}

function animation(pressedKey){
    var activeButton = document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}