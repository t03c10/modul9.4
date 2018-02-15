

function drawTree(height) {
for (var i = 0; i < height; i++) {
	var star='';
	var space = '     ';
	
for (var j = 0; j <= i; j++) {
		 star += '*'; }
		 space -= ' ';
		console.log(space + star);
		}
	}
	
	drawTree(5);
