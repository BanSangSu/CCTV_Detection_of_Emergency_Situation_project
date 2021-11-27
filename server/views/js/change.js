

var count1=0;

const Imf  =document.getElementById("Imf");
const i  =document.getElementById("ax");
const a = document.getElementById("ad");
const count = document.getElementById("count_one");

//one
const One = document.getElementById("one");
const OneBody = document.getElementById("one_body");
//two
const Two = document.getElementById("two");
const TwoBody = document.getElementById("two_body");
//three
const Three = document.getElementById("three");
const ThreeBody = document.getElementById("three_body");
//four
const Four = document.getElementById("four");
const FourBody = document.getElementById("four_body");
const Pic = document.getElementById("Pic");
const Pig = document.getElementById("Pig");

//text
const Front = document.getElementById("front");
const OneText = document.getElementById("one_text");

function handel(event){
   
    
    event.preventDefault();
    console.log(a.value);
//width
One.classList.replace("col-xl-6","ImpWidth");
Two.classList.replace("col-xl-6","ExtraWidth");
Three.classList.replace("col-xl-6","ExtraWidth");
Four.classList.replace("col-xl-6","ExtraWidth");

//body
OneBody.classList.replace("card-body","ImpPadding")
TwoBody.classList.replace("card-body","ExtraPadding")
ThreeBody.classList.replace("card-body","ExtraPadding")
FourBody.classList.replace("card-body","ExtraPadding")

//color
OneText.classList.replace("card-header","Imgcolor")
console.log(OneText.classList);
//text
Front.innerText="Emergency";
//hidden
Pic.classList.remove("d-none");
Pig.classList.remove("d-none");
FourBody.classList.replace("cadr-body","ExtraPadding")
    
}

function ImfChange(event){ 
  
}



console.log(One.className);
i.addEventListener("submit", handel);   
Imf.addEventListener("submit",ImfChange);

//row form
//coi-xi-6 - width
