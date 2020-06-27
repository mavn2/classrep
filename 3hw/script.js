//Prompts to determine passwords paramenters
var length = prompt("Please enter (not type) a number between 8 and 128")
var spec = confirm("Would you like to include special characters?")
var num = confirm("Would you like to include numbers?")
var low = confirm("Would you like to include lowercase letters?")
var upp = confirm("Would you like to include uppercase letters?")

//Arrays containing characters
var specA = ["!","@","#","$","%","^","&","*","(",")","-","+",".","/",",","<",">","~","|","?",":",";","{","}","[","]"]
var numA = ["1","2","3","4","5","6","7","8","9"]
var lowA = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]