// Easy

// These are purposefully ambiguous.
// 	On your own, come up with attributes and methods that make sense.
// As you go down the list, some classes might be able to inherit from previous classes you've already written.

// Create a class for a person
class Person {
	constructor(name, gender, eyes, hair, age, hasJob){
		this.name = name;
		this.gender = gender;
		this.eyes = eyes;
		this.hair = hair;
		this.age = age;
		this.hasJob = hasJob;
	}
	greet(otherPerson){
		console.log("Hi, my name is " + this.name + ". Nice to meet you, " + otherPerson + ".");
	}
	run(){
		console.log("I'm off!!! *speeds off into the distance*");
	}
}

// Create a class for a pet
class Pet {
	constructor(name, type, age){
		this.name = name;
		this.type = type;
		this.age = age;
	}
	sleep(){
		console.log("Zzz... Zzz... Zzz...");
	}
}

// Create a class for a boat
class Boat {
	constructor(name, size, lifejackets){
		this.name = name;
		this.size = size;
		this.lifejackets = lifejackets;
		this.gasInTank = true;
	}
	refillGasTank(){
		if (this.gasInTank === false){
			console.log("Now refilling gas into the tank...");
			this.gasInTank = true;
		} else {
			console.log("There's already gas in the tank.");
		}
	}
	accelerate(){
		if (this.gasInTank === true){
			console.log("*vrrrrooooooooom*");
		} else {
			console.log("*no response*");
		}
	}
	checkGasTank(){
		console.log(this.gasInTank);
	}
}

// Create a class for an artist
class Artist extends Person {
	constructor(name, gender, eyes, hair, age, hasJob){
		super(name, gender, eyes, hair, age, hasJob);
		this.currentCareer = "artist";
	}
	paint(){
		console.log("Time to make my next Picasso!");
	}
}

// Create a class for a robot
class Robot extends Person {
	constructor(name, gender, eyes, hair, age, hasJob, arms, legs){
		super(name, gender, eyes, hair, age, hasJob);
		this.arms = arms;
		this.legs = legs;
		this.guardians = [];
	}
	assignGuardian(nameOfGuardian){
		this.guardians.push(nameOfGuardian);
	}
	greet(otherPerson){
		super.greet(otherPerson);
	}
}

// Create a class for a computer
class Computer {
	constructor(model, serialNumber, operatingSystemVersion, mouseIncluded){
		this.model = model;
		this.serialNumber = serialNumber;
		this.operatingSystemVersion = operatingSystemVersion;
		this.mouseIncluded = mouseIncluded;
		this.users = [];
	}
	logInNewUser(user){
		this.users.push(user);
	}
}

// Create a class for a dog
class Dog extends Pet {
	constructor(name, type, age, furColor, gender){
		super(name, type, age);
		this.furColor = furColor;
		this.gender = gender;
		this.goodDog = true;
	}
	speak(){
		console.log("Bark, bark, bark!");
	}
}

// Create a class for a painter
class Painter extends Person {
	constructor(name, gender, eyes, hair, age, hasJob){
		super(name, gender, eyes, hair, age);
		this.hasJob = false;
		this.currentCareer = "painter";
	}
	paint(){
		console.log("I DON'T NEED MONEY TO BE CREATIVE!!!");
	}
}

// Create a class for a car
class Car {
	constructor(model, color, gasInTank){
		this.model = model;
		this.color = color;
		this.gasInTank = gasInTank;
	}
	refillGasTank(){
		if (this.gasInTank === false){
			console.log("Now refilling gas into the tank...");
			this.gasInTank = true;
		} else {
			console.log("There's already gas in the tank.");
		}
	}
	accelerate(){
		if (this.gasInTank === true){
			console.log("*vrrrrooooooooom*");
		} else {
			console.log("*no response*");
		}
	}
	checkGasTank(){
		console.log(this.gasInTank);
	}
}

// Create a class for a laptop
class Laptop extends Computer {
	constructor(model, serialNumber, operatingSystemVersion, mouseIncluded){
		super(model, serialNumber, operatingSystemVersion, mouseIncluded);
		this.batteryCharged = true;
	}
	plugInCharger(){
		if (this.batteryCharged === false){
			this.batteryCharged = true;
			console.log("Now recharging.");
		} else {
			console.log("Just in time!");
		}
	}
}

// Create a class for a humvee
class Humvee extends Car {
	constructor(model, color, gasInTank){
		super(model, color, gasInTank);
	}
	attachTrailer(){
		console.log("Trailer is attached.");
	}
}

// Create a class for a smart phone
class SmartPhone extends Computer {
	constructor(model, serialNumber, operatingSystemVersion, mouseIncluded){
		super(model, serialNumber, operatingSystemVersion, mouseIncluded);
		this.contactList = [];
	}
	addContact(contact){
		this.contactList.push(contact);
		console.log(contact + " has been added to the contact list.");
	}
}

// Create a class for a baby
class Baby extends Person {
	constructor(name, gender, eyes, hair, age, hasJob){
		super(name, gender, eyes, hair, age, hasJob)
		this.healthyBirth = true;
	}
	firstWord(word){
		console.log(word + "!");
	}
}

// Create a class for a fire truck
class FireTruck extends Car {
	constructor(model, color, gasInTank, waterStored){
		super(model, color, gasInTank);
		this.waterStored = waterStored;
	}
	fireReadiness(){
		if (this.waterStored === true){
			console.log("This truck is ready to save lives!");
		} else {
			console.log("This truck still needs to be worked on before setting out.");
		}
	}
	siren(){
		console.log("WEEEEEEE WOOOOOOOOOOOO WEEEEEEEEEE WOOOOOOOOOOOO!!!!!!!");
	}
}

// Create a class for a bird
class Bird {
	constructor(homeRegion, color, size, age, abilityToFly){
		this.homeRegion = homeRegion;
		this.color = color;
		this.size = size;
		this.age = age;
		this.abilityToFly = abilityToFly;
		this.wings = 2;
	}
	sing(){
		if (this.size === "small"){
			console.log("Tweet, tweet, tweet!");
		} else if (this.size === "large"){
			console.log("Squak, squak, squak!!!");
		} else {
			console.log("Caw, caw, caw!!");
		}
	}
	fly(){
		if (this.abilityToFly === true){
			console.log("*flies off*");
		} else {
			console.log("This poor thing can't fly.");
		}
	}
}



// Harder

// Create a single factory object to generate robots
// 	The factory should have an array of robots that it has generated
// 	A robot should have a serial number, based on what index it is in the factory's robots array

// Create a class for computer factories
// 	A factory should have a name attribute which is set by passing a parameter into the constructor for the factory
// 	A factory should have an array of computers that it has generated
// 	A computer should have a serial number attribute, based on what index it is in the factory's computers array
// 	A computer should have a maker name attribute, which the factory sets during generation

