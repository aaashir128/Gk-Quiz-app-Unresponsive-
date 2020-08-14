


// function nextQuiz(){
//     var worldGk = document.getElementById("World-gk")
//     var domesticGk = document.getElementById("Domestic-gk")
//     if(worldGk.style.visibility = "hidden"){
//         // worldGk.style.visibility = " visible"
//         // domesticGk.style.visibility = "hidden"
//         domesticGk.replaceWith(worldGk)
//         worldGk.style.visibility = 'visible'

//     }    
// }
var score = 0;


function submit(){
    var right1 = document.getElementById('ans1')
    if(right1.checked == true){
        score++
    }
    var right2 = document.getElementById('ans2')
    if(right2.checked == true){
        score++
    }
    var right3 = document.getElementById('ans3')
    if(right3.checked == true){
        score++
    }    
    var right4 = document.getElementById('ans4')
    if(right4.checked == true){
        score++
    }
    var right5 = document.getElementById('ans5')
    if(right5.checked == true){
        score++
    }
    var right6 = document.getElementById('ans6')
    if(right6.checked == true){
        score++
    }
    var right7 = document.getElementById('ans7')
    if(right7.checked == true){
        score++
    }
    var answ1 = document.getElementById('answ1')
    if(answ1.checked == true){
        score++
    }
    var answ2 = document.getElementById('answ2')
    if(answ2.checked == true){
        score++
    }
    var answ3 = document.getElementById('answ3')
    if(answ3.checked == true){
        score++
    }    
    var answ4 = document.getElementById('answ4')
    if(answ4.checked == true){
        score++
    }
    document.write("Your total score is: " + score) 
}


