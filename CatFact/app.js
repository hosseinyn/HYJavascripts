// CatFact App

// Selectors :

const many = document.getElementById("fact-many");
const facts = document.getElementById("facts");
// Responsive Elements
const header = document.getElementById("header");
const facts_box = document.getElementById("facts-box");


async function getFact(){
  for(i=1;i <= many.value;i++){
    // Ajax
    let request = await fetch("https://catfact.ninja/fact");
    let response = await request.json();
    
    // DOM Coding
    let output_box = document.createElement("div");
    output_box.className = "fact-box";
    output_box.innerHTML = `
    <img src="Assest/logo.png">
    ${response.fact}
    `;
    facts.appendChild(output_box);
  }
}


// Event

document.body.addEventListener("keypress" , (key) => {
  if(key.key == "Enter"){
    getFact();
  }
})

// Responsive

function mediaQuery(x) {
    // Media Query Functions
    if (x.matches) {
      header.style.display = "none";
      facts_box.style.top = "80px";
      document.body.style.backgroundColor = "#FBAB7E";
      document.body.style.backgroundImage = "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)";
    } else {
      header.style.display = "block";
      facts_box.style.top = "-100px";
      document.body.style.backgroundImage = "url('Assest/Background.jpg')";
    }
}

let x = window.matchMedia("(max-width: 700px)");

mediaQuery(x);

x.addEventListener("change", function() {
  mediaQuery(x);
});
