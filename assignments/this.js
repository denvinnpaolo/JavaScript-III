/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object Binding- Using "this" keyword without binding it specifically to any function will result in it directing to the window or console that is being shown at.
* 2. Implicit Binding-The use of "this" keyword in an Implicit binding points it to the object that it is declared in.
* 3. New Binding- This type of binding sets the basic layout for objects that have similar "keys." The use of "new" in the first line of the function helps direct it to the Parent object which binds the NEW object to the parent.
* 4. Explicit Binding- The use of ".call" and ".apply" sets the binding explicitly which means
*
* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding
function myCar(car){
    console.log(this);
    return car;
}

myCar("Ferrari");

// Principle 2

// code example for Implicit Binding

const sayCarFunc = car =>{
    car.sayCar = function(){
        console.log(`I got my dream car!! its a ${this.car}`);
        console.log(this);
    }
    
}

const myOtherCar ={car:'Ferrari'};
const yourCar ={car:'Lamborgini'};

sayCarFunc(myOtherCar);


myOtherCar.sayCar();
// Principle 3

// code example for New Binding

function Dog(dog){
    this.bark="woof woof";
    this.dog=dog;
    this.barking=function(){
        console.log(`I heard the ${this.dog} go ${this.bark}`);
        console.log(this);
    }
}

const terrier = new Dog("Terrier");
const doberman = new Dog("Doberman")

terrier.barking();
doberman.barking();

// Principle 4

// code example for Explicit Binding
const obj = {
    name: 'Denvinn Magsino',
    city: 'Valley Glen',
    favoriteFood: 'Korean Barbecue'
  }
  
  const thingsYouEnjoy = ['Coding', 'Javascript', 'Skateboarding', 'Motorboating', 'My GF', 'Music']
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  }

 console.log(tellUsAboutYourself.call(this.obj,...thingsYouEnjoy));