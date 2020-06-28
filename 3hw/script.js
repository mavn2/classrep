//Var for accesing generate button
var button1 = document.body.querySelector("#generate");
//Activates function on button press, which runs generator code
button1.addEventListener("click", function(){
    password();
    
});

//Password Generator
function password(){
  //Prompts to determine passwords parameters
    var length = prompt("Please enter (not type) a number between 8 and 128");
    var spec = confirm("Would you like to include special characters?");
    var num = confirm("Would you like to include numbers?");
    var low = confirm("Would you like to include lowercase letters?");
    var upp = confirm("Would you like to include uppercase letters?");

  //Arrays containing characters
    var specA = ["!","@","#","$","%","^","&","*","(",")","-","+",".","/","<",">","~","|","?",":",";","{","}","[","]"];
    var numA = ["1","2","3","4","5","6","7","8","9"];
    var lowA = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var uppA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  //If statement(s) to check for valid user inputs:
  //Makes sure at least one kind of character is selected, and password can be generated
    if(spec === false && num === false && low === false && upp === false){
    alert("Please select at least one character type! Please refresh page.");
    };
  //Converts user input string to number, checks it 
    var lCheck = Number(length)
    if(lCheck < 8 || lCheck >  128){
        alert("Please input a number (in numeric form) between 8 and 128! Please refresh page.");
    };

  //Groups selected character arrays:
  //Array to recieve character options
    var passC = [];
  //If statements to add arrays to passC
    if(spec === true){
        passC.push(specA);
    };
    if(num === true){
        passC.push(numA);
    };
    if(low === true){
        passC.push(lowA);
    };
    if(upp === true){
        passC.push(uppA);
    }
  //Converts passC to single array
    var passS = passC.toString();
    var passA = passS.split(",");

  //Array to store password as it is generated
    var passF = [];

  //For loop to create password
    for(i=0; i<lCheck; i++){
        passF.push(passA[Math.floor(Math.random()*passA.length)]);
    };

  //Converts password from array to string
    var passW = passF.join("")

  //DOM commands to display password
  //var for <p> element 
    var text = document.body.children[1].querySelector("p")
  //changes placeholder text to password
    text.textContent = passW
}


