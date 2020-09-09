//ØVELSE OPGAVER
//øvelse 25
let elem1 = document.querySelector("p");
let elem2 = document.getElementsByTagName("p");
let elem3 = document.getElementsByClassName('.paraClass');
let elem4 = document.querySelector('.paraClass2');
let elem5 = document.getElementById('paraID');
let elem6 = document.querySelector('#paraID2');

//øvelse 25.2
let emptyDiv = document.querySelector(".emptyDiv");
document.querySelector('#emptyP').innerHTML = "Amanda";

console.log(emptyDiv.innerHTML);

//øvelse 26
let button1 = document.querySelector('.button1');
button1.addEventListener("click",function(){
    alert("button1");
})

//øvelse 27
let id1 = document.querySelector('#id1');

id1.addEventListener("click",function(){
    const curColour = document.body.style.backgroundColor;
    if (curColour === 'yellow'){
        document.body.style.backgroundColor = "black";
    }
    else{
        document.body.style.backgroundColor = "yellow";
    }
})

//øvelse 28
let classes5 = document.querySelectorAll('.classes5');
let nmbr = 1;

document.querySelectorAll('.classes5').forEach(classes5 =>{
    classes5.innerHTML = ("Knap" + " " + nmbr)
    nmbr += 1
})

document.querySelectorAll('.classes5').forEach(classes5 =>{
    classes5.addEventListener("click",() =>{
        alert(classes5.innerHTML);
    })
})

//øvelse 28.1
let rrr = document.querySelectorAll('.rrr');

document.querySelectorAll('.rrr').forEach(rrr => {
    switch(rrr.innerHTML){
        case "Rip":
            break;
        case "Rap":
            rrr.style.color ="coral"
            break;
        case "Rup":
            rrr.addEventListener("click",function(){
                alert("Rup")
            })
            break;
    }
})


//øvelse 29
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let operate = document.querySelector('#operate');
let resul1 = document.querySelector('#resul1');
let lommeBtn = document.querySelector('#lommeBtn');

lommeBtn.addEventListener("click",function(){
    let værdi1 = Number(inp1.value);
    let værdi2 = Number(inp2.value);

    switch(operate.value){
        case "+":
            resul1.innerHTML = værdi1 + værdi2;
            break;
        case "-":
            resul1.innerHTML = værdi1 - værdi2;
            break;
        case "*":
            resul1.innerHTML = værdi1 * værdi2;
            break;
        case "/":
                resul1.innerHTML = værdi1 / værdi2;
                break;
            default:
                break;
    }
})



// 7 EVENTLISTENERS
let event1 = document.querySelector('#event1')
let event2 = document.querySelector('#event2')
let event3 = document.querySelector('#event3')
let myDiv = document.querySelector('.myDiv')
let event4 = document.querySelector('#event4')

//greeting
event1.addEventListener("click",function(){
    alert("Hi there!");
});
//date display
event2.addEventListener("click",displayDate);

function displayDate(){
    document.querySelector('#demo').innerHTML=Date();
}
//double mouse
event3.addEventListener("mouseover",myFunction);
event3.addEventListener("mouseout",mySecondFunction);

function myFunction(){
    document.querySelector('#demo2').innerHTML += "Hi! <br>";
}
function mySecondFunction(){
    document.querySelector('#demo2').innerHTML += "Goodbye! <br>";
}

//numbergenerator
myDiv.addEventListener("mousemove",myThirdFunction);

function myThirdFunction(){
    document.querySelector('#demo3').innerHTML = Math.random();
}

event4.addEventListener("click",function(){
    alert("Just kidding, they never stop.");
});

//calculator
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let select = document.querySelector("#operation")
let resultat = document.querySelector("#result"); 
let calcBtn = document.querySelector("#calcBtn")

calcBtn.addEventListener("click", function(){

let val1 = Number(input1.value);
let val2 = Number(input2.value);

  switch (select.value) {
    case "+":
         resultat.innerHTML = val1 + val2; 
          break;
    case "-":
       resultat.innerHTML = val1 - val2;       
        break;

    case "*":
        resultat.innerHTML = val1 * val2;      
      break;

    case "/":
        resultat.innerHTML = val1 / val2; 
    break;
  
      default:
          break;
  }

})

//numbers back
let numBack = document.querySelector('.numBack');
let numBtn = document.querySelector('#numBtn');

numBack.addEventListener("mousemove",myFifthFunction);

function myFifthFunction(){
    document.querySelector('#demo4').innerHTML = Math.random();
}
function removeHandler(){
    numBack.removeEventListener("mousemove",myFifthFunction);
}
//keydown
let logkey = document.querySelector('#log');

document.addEventListener('keydown', logKey);
function logKey(e) {
  log.textContent += ` ${e.code}`;
}

