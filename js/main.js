var pins = {
	name: "Pokemon Poke Puff Enamel Pins 2",
	goal: 400,
	description: "A continuation of the first Pokepuff enamel pin kickstarter.",
	pledges: 14041,
	backers: 307,
};

console.log(pins);

pins.image = "pins.png";

var pinsName, goal, description, pledges, backers;

var pinsName = document.getElementById('pins');
pinsName.textContent = pins.name;
var goal = document.getElementById("goal");
goal.textContent = '$' + pins.goal;
var description = document.getElementById("description");
description.textContent = pins.description;
var pledges = document.getElementById('pledges');
pledges.textContent = pins.pledges;
var backers = document.getElementById('backers');
backers.textContent = pins.backers;


var	pledgeLevels = [{
		name: 'Pledge $15 or more',
		price: 15, 
		features: '1 pin + a bonus charm',
		available: 'Yes!'
	},
	{
		name: 'Pledge $28 or more',
		price: 28, 
		features: '2 pins + a bonus charm',
		available: 'Yes!'
	},
	{
		name: 'Pledge $40 or more',
		price: 40, 
		features: '3 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $50 or more',
		price: 50, 
		includes: '4 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $59 or more',
		price: 59, 
		features: '5 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $66 or more',
		price: 66, 
		features: '6 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $73 or more',
		price: 73, 
		features: '7 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $79 or more',
		price: 79, 
		features: '8 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $85 or more',
		price: 85, 
		features: '9 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $90 or more',
		price: 90, 
		features: '10 pins + a bonus charm',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $95 or more',
		price: 95, 
		features: '11 pins',
		available: 'Yes!'	
	},
	{
		name: 'Pledge $99 or more',
		price: 99, 
		features: '12 pins',
		available: 'Yes!'	
	}
	];

var pledgeLevelName, price, features, available;
// pledgeLevelName = document.getElementById('pledgeLevelName'); 
// price = document.getElementById('price');
// features = document.getElementById('features');
// available = document.getElementById('available');

// name.textContent = pledgeLevels.name;
// price.textContent = '$' + pledgeLevels[0].price; 
// features.textContent = pledgeLevels.features;
// available.textContent = pledgeLevels.available;

var container = document.getElementById( 'pledge-container' );

for ( i = 0; i < pledgeLevels.length; i++ ) {

console.log( pledgeLevels[i] );
container.innerHTML +=  '<h1>' + pledgeLevels[i].name + '</h1>';
container.innerHTML += '<h2>' + 'Price: ' + '$' + pledgeLevels[i].price + '</h2>';
container.innerHTML += '<h3>' + 'Features: ' + pledgeLevels[i].features + '</h3>';
container.innerHTML += '<h4>' + 'Available: ' + pledgeLevels[i].available + '</h4>' + '<br>';





var countDownDate = new Date("Sep 23, 2018 11:30:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
}






