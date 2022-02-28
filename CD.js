//Data types
let d =  "Dionel"  // String
let z = 21 // Number
const watterBottle = {
    size: "small",
    sticker: "yes",
    cap: "yes"
} // Object

const room =  ["Erik", "Caleb", "Ashley"]; // Array

//Conditionals
let groceryItems = "Tomato"
if(groceryItems === "Tomato"){
    console.log("Tomatoes are $0.49")
}else if(groceryItems === "Blueberries"){
    console.log("Blueberries are $3.00")}


// Methods
const brand = ["Nike", "Adidas", "Jordans", "Gucci"]
document.getElementById("demo1").innerHTML = brand.push("New Balance")
brand.toUpperCase

//Function
function myFunction(){ // created a function
    let text = document.getElementById("demo").innerHTML // Creating a var using the method getElementById the id "demo" turned into a var.          
    document.getElementById("demo").innerHTML = 
    text.replace("Microsoft" , "Spotify") // We use the getElementById  we used the method .replace to switch Microsoft to Spotify.
}

//classes
class vehicles{
    constructor(car, truck, train, RV, bus){
        this.car = car;
        this.truck = truck;
        this.train = train;
        this.RV = RV;
        this.bus = bus;
    }
}


