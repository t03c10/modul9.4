

function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var star = '';
		
		for (var j = height - 1; j > i; j--) {
			 star += ' '; 
		}
		for (k = 0; k <= (i * 2) ; k++) {
			star += "*";
		}
		console.log(star);
	}
}
drawTree(10);
