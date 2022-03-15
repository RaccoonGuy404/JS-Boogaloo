function getNumber (attribut) {
	console.log(attribut);
	arrTestNumbers.push(attribut);
	document.getElementById('arrNumber').value = '';
	console.log(arrTestNumbers);
	document.getElementById('arrPreview').innerHTML = arrTestNumbers;
}

//let arrTestNumbers = [12, 3, 44, 3, 52, 12, 12, 34];
let arrTestNumbers = [];
console.log(arrTestNumbers);

function showArr () {
	sortArrDeleteDoubleNums(arrTestNumbers);
}

function sortArrDeleteDoubleNums (arrVar) {
	let startPunkt = 1;
	
	// ersetzt doppelte nums mit 0
	for (i = 0; i < arrVar.length; i++) {
		let pruefZiffer = arrVar[i];
		//console.log(`Pruefziffer = ${pruefZiffer}`);
		for (j = startPunkt; j < arrVar.length; j++) {
			if (pruefZiffer == arrVar[j] && pruefZiffer != 0) {
				arrVar[j] = 0;
			}
		}
		startPunkt++;
	
		// sortiert nuller nach hinten
		for (k = 0 ; k < arrVar.length; k++){
			if (arrVar[k] == 0 && arrVar[k] < arrVar[k+1]) {
					let temp = arrVar[k];
					arrVar[k] = arrVar[k+1];
					arrVar[k+1] = temp;
				}
		}	
	}
	
	console.log(arrVar);
	document.getElementById('arrOutput').innerHTML = arrVar;
}	