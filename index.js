//anonymous function
/*document.querySelector("button").addEventListener("click",handleClick)function ()
{
    alert("I got clicked!");
});*/
//detecting mouse press
var btns=[];
btns=document.querySelectorAll("button");
var length=btns.length;
for(var i=0;i<length;i++)
{
     btns[i].addEventListener("click",function ()
     {
       var buttonInnerHTML=this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
        
     });
}


//detecting keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);    /**Returns a string representing the key value of the key represented by the event. */
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case 'w':
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case 's':
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
        case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break; 
        case 'j':
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;  
                    
        case 'k':
                        var crash = new Audio("sounds/crash.mp3");
                        crash.play();
                        break;
        case 'l':
                            var kick = new Audio("sounds/kick-bass.mp3");
                            kick.play();
                            break;
        default:
            console.log(buttonInnerHTML);
            break;
       }

}

function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);//active button class
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}




