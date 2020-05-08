var doCoolStuff = function () {
	document.getElementById('cool').className = 'cool red';
}


var car = {
		make: 'VW',
		type: 'Polo',
		color: 'blue',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: [
		'seat 1',
		'seat 2', 
		'seat 3', 
		'seat 4'
		],
		turnOn: function () {
			this.isTurnedOn = true;
		},
		fly: function () {
			alert('Hi Im Tom');
		},

		switchCar: function(isOn) {
			console.log('turn car '+isOn)
			if (isOn == true) {
				this.isTurnedOn = true;
				alert("Turned Off")
			} else {
				this.isTurnedOn = false;
			}
		}

	};

	console.log('hello there friends!');