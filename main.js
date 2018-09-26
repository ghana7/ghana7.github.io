var allMainBoxes = document.getElementsByClassName("mainBox");


for(var i = 0; i < allMainBoxes.length; i++) {
	console.log(allMainBoxes[i]);
}
function openPage(name) {
	//alert(name);
	var box = document.getElementById(name);
	var backButton = document.getElementById("backButton");
	
	setTimeout(function() {
		backButton.classList.remove("closed");
	}, 500);
	for(var i = 0; i < allMainBoxes.length; i++) {
		let b = allMainBoxes[i];
		if(b.id == name) {
			b.classList.add("open");
		}
		else {
			b.classList.add("invisible");
			setTimeout(function() {
				b.classList.add("closed");
			}, 450);
		}
		
	}
	
	
}

function backToMain() {
	for(var i = 0; i < allMainBoxes.length; i++) {
		let b = allMainBoxes[i];
		b.classList.remove("open");
		b.classList.remove("closed");
		setTimeout(function() {
			b.classList.remove("invisible")
		}, 450);
	}
	backButton.classList.add("closed");
}