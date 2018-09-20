var pins = {
	name: "Pokemon Poke Puff Enamel Pins 2",
	goal: 400,
	description: "A continuation of the first Pokepuff enamel pin kickstarter.",
	pledges: 139333,
	backers: 305,
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


pledgeLevels: [{
		name: 'Pledge $15 or more',
		price: 15, 
		includes: ['1 pin', 'bonus charm'],
		available: true
	},
	{
		name: 'Pledge $28 or more',
		price: 28, 
		includes: ['2 pins', 'bonus charm'],
		available: true
	},
	{
		name: 'Pledge $40 or more',
		price: 40, 
		includes: ['3 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $50 or more',
		price: 50, 
		includes: ['4 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $59 or more',
		price: 59, 
		includes: ['5 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $66 or more',
		price: 66, 
		includes: ['6 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $73 or more',
		price: 73, 
		includes: ['7 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $79 or more',
		price: 79, 
		includes: ['8 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $85 or more',
		price: 85, 
		includes: ['9 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $90 or more',
		price: 90, 
		includes: ['10 pins', 'bonus charm'],
		available: true	
	},
	{
		name: 'Pledge $95 or more',
		price: 95, 
		includes: ['11 pins'],
		available: true	
	},
	{
		name: 'Pledge $99 or more',
		price: 99, 
		includes: ['12 pins'],
		available: true	
	}
	];



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