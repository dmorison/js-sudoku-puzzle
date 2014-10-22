var rows = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*get a random number from an array*/
var randomItem = numbers[Math.floor(Math.random() * numbers.length)];
console.log("this is my new way of getting a random number: " + randomItem);
/*var rowZero = [];*/
var rowOne = [];
var rowTwo = [];
var rowThree = [];
var rowFour = [];
var rowFive = [];
var rowSix = [];
var rowSeven = [];
var rowEight = [];

SUDOKU = {

	build: function(){
		for (var p = 0; p < 9; p++){
			$('#game').append('<tr id="r' + p + '"></tr>');
			for (var o = 0; o < 9; o++){
				$('#r' + p).append('<td id="r' + p + 'c' + o + '">\
					<input id="in' + p + o + '" autocomplete="off" name="row' + p + 'col' + o + '" />\
					</td>');
			}
		}
		for (var i = 0; i < 9; i++){
			$('#r0c' + i + ', #r3c' + i + ', #r6c' + i).css('border-top', '2px solid #000');
			$('#r' + i + 'c0, #r' + i + 'c3, #r' + i + 'c6').css('border-left', '2px solid #000');
			$('#r8c' + i).css('border-bottom', '2px solid #000');
			$('#r' + i + 'c8').css('border-right', '2px solid #000');
		}
	},

	fillup: function(){

		function randomizeArray(array){
			var q = array.length;
			if (q == 0) return false;
			while (--q){
				var w = Math.floor(Math.random() * (q + 1));
				var tempq = array[q];
				var tempw = array[w];
				array[q] = tempw;
				array[w] = tempq;
			}
			return array;
		}

		var dummie = [];
		var rowZero = randomizeArray(numbers);
		console.log(rowZero);

		function dancing(thru){
			var newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			for (var d = 0; d < thru.length; d++){
				console.log(thru[d]);
				var index = newNums.indexOf(thru[d]);
				console.log(index);
				if (index >= 0) {
					newNums.splice(index,1);
				}
				console.log(newNums);
			}
			var select = newNums[Math.floor(Math.random() * newNums.length)];
			console.log(select);
			dummie.push(select);
			console.log(dummie);
			rowOne.push(select);
			console.log(rowZero);
			console.log(rowOne);
		}

		for (var s = 0; s < 3; s++){
			dummie.push(rowZero[s]);
		}
		dancing(dummie);
		dancing(dummie);
		dancing(dummie);
		dummie = [];
		for (var g = 0; g < rowOne.length; g++){
			dummie.push(rowOne[g]);
		}
		/*console.log(dummie.splice(0,3));*/
		console.log(dummie);
		for (var a = 3; a < 6; a++){
			dummie.push(rowZero[a]);
		}
		console.log(dummie);
		dancing(dummie);
		dancing(dummie);
		dancing(dummie);
		dummie = [];
		for (var g = 0; g < rowOne.length; g++){
			dummie.push(rowOne[g]);
		}
		console.log(dummie);
		for (var a = 6; a < 9; a++){
			dummie.push(rowZero[a]);
		}
		console.log(dummie);
		dancing(dummie);
		dancing(dummie);
		dancing(dummie);

		/*var count = 0;
		while (count < 9){
			var rowZero = randomizeArray(numbers);
			console.log(rowZero);
			for (var u = 0; u < 9; u++){
				$('#in' + count + u).attr('value', rowZero[u]);
			}
			count = count + 1;
		}*/
	},

	empty: function(){
		var count = 0;
		while (count < 9){
			for(var y = 0; y < 9; y++){
				$('#in' + count + y).attr('value', '');
			}
			count = count + 1;
		}
	}

}

$(document).ready(function(){

	SUDOKU.build();
	$('.newPuzzle').click(function(){
		SUDOKU.fillup();
		return false;
	});
	$('.clearPuzzle').click(function(){
		SUDOKU.empty();
		return false;
	});

});