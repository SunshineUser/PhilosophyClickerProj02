//philosopher starting price points
let philosopherCost = {

    aristotleCost: 10,
    socratesCost: 50,
    diogenesCost: 1000,
    ciceroCost: 2000,
    senecaCost: 12000,
    aureliusCost: 50000

}

// call element for philosopher pricing
let aristotlePrice = document.getElementById("aristotle-price")
let socratesPrice = document.getElementById("socrates-price")
let diogenesPrice = document.getElementById("diogenes-price")
let ciceroPrice = document.getElementById("cicero-price")
let senecaPrice = document.getElementById("seneca-price")
let aureliusPrice = document.getElementById("aurelius-price")


//state 
let stateOfMankind = {
    light: 0,
    illuminationValue: 0,
    intervalLoopID: undefined,
    clickervalue: 1
}



//passive philosophers
let passiveIlluminationGeneratedText = document.getElementById("passive-light-generated-total")
//light total
let lightNumEle = document.getElementById("lightNum");

// PROCESS TO ADDING AN EVENT LISTENER TO AN HTML ELEMENT 
// Step #1) Make sure that you are "fetching", or accessing that element, through the DOM using a method like getElementById or getElementsByClassName/TagName

let enlightenmentElement = document.getElementById("lightImg");

// Step #2) Setting up your event listener and connecting it to the element that you want 
    // Step #2a) Remember - event listeners require callback functions. Sometimes, it is helpful to write your callback functions OUTSIDE of the .addEventListener method. 
    // Tip: Callback functions are just functions that are passed in as an argument to another function. 

function lightIncrementer(){
    //set the object "state of mankind" light number to clicker value, change the visual element on the HTML page
    stateOfMankind.light = stateOfMankind.light + stateOfMankind.clickervalue;
    lightNumEle.textContent= stateOfMankind.light;
    philosopherAppear()
}

//event listener, associated with the function that changes the object as well as the HTML to represent Light
enlightenmentElement.addEventListener("click", lightIncrementer)



//////Philosophers section//////////
//design Aristotle button
let aristotlebttnEle = document.getElementById("aristotle-bttn");
let socratesbttnEle = document.getElementById("socrates-bttn");
let diogenesbttnEle = document.getElementById("diogenes-bttn");
let cicerobttnEle = document.getElementById("cicero-bttn");
let senecabttnEle = document.getElementById("seneca-bttn");
let aureliusbttnEle = document.getElementById("aurelius-bttn");

let athensbttnEle = document.getElementById("athens-bttn");
let spartabttnEle = document.getElementById("sparta-bttn");
let romebttnEle = document.getElementById("rome-bttn");
//step2 ) attach an event listener to that button element. 
    //2a create a callback function to use.


function priceIncreaseMath(currentRate){
    currentRate = Math.round(currentRate*1.14548169307);
    return (currentRate);
}



function aristotleIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.aristotleCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.aristotleCost;
        //change text on website to show change in enlightenment power
        //increment the cost of buying aristotles by arbitrary maths(rounded)
        philosopherCost.aristotleCost = priceIncreaseMath(philosopherCost.aristotleCost);
        console.log(philosopherCost.aristotleCost);
        aristotlePrice.textContent = philosopherCost.aristotleCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue += 1;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}

function socratesIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.socratesCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.socratesCost;
        //change text on website to show change in enlightenment power
        //increment the cost of buying aristotles by arbitrary maths(rounded)
        philosopherCost.socratesCost = priceIncreaseMath(philosopherCost.socratesCost);
        console.log(philosopherCost.socratesCost);
        socratesPrice.textContent = philosopherCost.socratesCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue += 15;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}

function diogenesIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.diogenesCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.diogenesCost;
        //change text on website to show change in enlightenment power
        philosopherCost.diogenesCost = priceIncreaseMath(philosopherCost.diogenesCost);
        console.log(philosopherCost.diogenesCost);
        diogenesPrice.textContent = philosopherCost.diogenesCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue = stateOfMankind.illuminationValue-1 ;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}

function ciceroIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.ciceroCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.ciceroCost;
        //change text on website to show change in enlightenment power
        philosopherCost.ciceroCost = priceIncreaseMath(philosopherCost.ciceroCost);
        console.log(philosopherCost.ciceroCost);
        ciceroPrice.textContent = philosopherCost.ciceroCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue +=100 ;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}

function senecaIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.senecaCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.senecaCost;
        //change text on website to show change in enlightenment power
        philosopherCost.senecaCost = priceIncreaseMath(philosopherCost.senecaCost);
        console.log(philosopherCost.senecaCost);
        senecaPrice.textContent = philosopherCost.senecaCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue +=500 ;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}
function aureliusIsBorn(){
    //have to check number of light points to allow such a genius to exist
    
    if(stateOfMankind.light >= philosopherCost.aureliusCost){
        //subtract total cost of mankinds grace
        stateOfMankind.light -= philosopherCost.aureliusCost;
        //change text on website to show change in enlightenment power
        philosopherCost.aureliusCost = priceIncreaseMath(philosopherCost.aureliusCost);
        console.log(philosopherCost.aureliusCost);
        aureliusPrice.textContent = philosopherCost.aureliusCost;

        lightNumEle.textContent = stateOfMankind.light;
        //represent the change in resources per second by however much the light/building the generator creates
        stateOfMankind.illuminationValue +=2000;
        //represent the visual representation of passive illumination generated
        passiveIlluminationGeneratedText.textContent = stateOfMankind.illuminationValue;
    }
}


function athensIsBuilt(){
    if(stateOfMankind.light >= 500 && stateOfMankind.clickervalue == 1){
        stateOfMankind.light =stateOfMankind.light- 500;
        stateOfMankind.clickervalue += 4;
        document.getElementById("athens-bttn").style.filter="brightness(100%)";
        document.getElementById("sparta-bttn").style.filter="brightness(50%)";
    }
}
function spartaIsBuilt(){
    if(stateOfMankind.light>= 2000 && stateOfMankind.clickervalue <= 5){
        stateOfMankind.light = stateOfMankind.light- 2000;
        stateOfMankind.clickervalue += 30;
        document.getElementById("sparta-bttn").style.filter="brightness(100%)";
        document.getElementById("rome-bttn").style.filter="brightness(50%)";
    }
}

function romeIsBuilt(){
    if(stateOfMankind.light>= 10000 && stateOfMankind.clickervalue <= 35){
        stateOfMankind.light = stateOfMankind.light- 10000;
        stateOfMankind.clickervalue += 115;
        document.getElementById("rome-bttn").style.filter="brightness(100%)";
    }
}
//using the function within an html context to an event listener

aristotlebttnEle.addEventListener("click",aristotleIsBorn)
socratesbttnEle.addEventListener("click",socratesIsBorn)
diogenesbttnEle.addEventListener("click",diogenesIsBorn)
cicerobttnEle.addEventListener("click",ciceroIsBorn)
senecabttnEle.addEventListener("click",senecaIsBorn)
aureliusbttnEle.addEventListener("click",aureliusIsBorn)

//listener for clicker button attributes
athensbttnEle.addEventListener("click",athensIsBuilt)
spartabttnEle.addEventListener("click",spartaIsBuilt)
romebttnEle.addEventListener("click",romeIsBuilt)








// set interval /clear interval demo
let startBttnEle = document.getElementById("start-bttn");

function platoDreams(){
    //increment the amount of light stateOfMankind has
    philosopherAppear();
    stateOfMankind.light += stateOfMankind.illuminationValue;
    //update website
    lightNumEle.textContent = stateOfMankind.light;
}

function illuminationPower(){
    if(stateOfMankind.intervalLoopID==undefined)
    {
        stateOfMankind.intervalLoopID = setInterval(platoDreams,1000)
        console.log(stateOfMankind.intervalLoopID);
    }
    // uses Id number to set up pause function later
}

//illuminate me with your light aritstotle
startBttnEle.addEventListener("click", illuminationPower)

//pause interval

// 1) grab the element

let pauseBttnEle= document.getElementById("pause-bttn") 

function pauseIntervalLoop(){
    clearInterval(stateOfMankind.intervalLoopID);
    console.log(stateOfMankind.intervalLoopID);
};

pauseBttnEle.addEventListener("click", pauseIntervalLoop) 

function philosopherAppear(){
    if(stateOfMankind.light >= philosopherCost.socratesCost)
    {
        document.getElementById("socrates-bttn").style.display = "block";
    }
     if(stateOfMankind.light >= philosopherCost.diogenesCost)
    {
        document.getElementById("diogenes-bttn").style.display = "block";
    }
    if(stateOfMankind.light >= philosopherCost.ciceroCost)
    {
        document.getElementById("cicero-bttn").style.display = "block";
    }
    if(stateOfMankind.light >= philosopherCost.senecaCost)
    {
        document.getElementById("seneca-bttn").style.display = "block";
    }
    if(stateOfMankind.light >= philosopherCost.aureliusCost)
    {
        document.getElementById("aurelius-bttn").style.display ="block";
    }
}
