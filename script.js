function getHistory(){
	return document.getElementById('top_history').innerText;
}

function printHistory(i){
	document.getElementById('top_history').innerText = i;
}

function getResult(){
	return document.getElementById('final_result').innerText;
}

function printResult(i){
	if(i == ''){
		document.getElementById("final_result").innerText = i;
	}
	else{
		document.getElementById('final_result').innerText = i;
	}
}

function reverseNumberFormat(i){
	return Number(i.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator2");
for(var j = 0; j<operator.length; j++){
	operator[j].addEventListener('click',function(){
		if(this.id == "clear"){
			printHistory("");
			printResult("");
		}
		if(this.id == "backspace"){
			var output = reverseNumberFormat(getResult()).toString();
			if(output){
				output = output.substr(0,output.length-1);
				printResult(output);
			}
		}
		else{
			var output = getResult();
			var history = getHistory();
			if(output=="" && history!=""){   // when changing conditions/operator in history 18.50
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);  // removing last clicked operator
				}
			}
			if(output!="" || history!=""){  // normal case
				// line removed 
				if(output == ""){
					output = output;
				}
				else{
					reverseNumberFormat(output);
				}
				history+=output;
				if(this.id=="="){
					var result=eval(history);
					printResult(result);
					printHistory("");
				}
				else{
					history+=this.id;
					printHistory(history);
					printResult("");
				}
			}
		}
	});
}

var operator = document.getElementsByClassName("operator");
for(var j = 0; j<operator.length; j++){
	operator[j].addEventListener('click',function(){
		if(this.id == "clear"){
			printHistory("");
			printResult("");
		}
		if(this.id == "backspace"){
			var output = reverseNumberFormat(getResult()).toString();
			if(output){
				output = output.substr(0,output.length-1);
				printResult(output);
			}
		}
		// else{
		// 	var output = getResult();
		// 	var history = getHistory();
		// 	if(output=="" && history!=""){   // when changing conditions/operator in history 18.50
		// 		if(isNaN(history[history.length-1])){
		// 			history= history.substr(0,history.length-1);  // removing last clicked operator
		// 		}
		// 	}
		// 	if(output!="" || history!=""){  // normal case
		// 		// line removed 
		// 		if(output == ""){
		// 			output = output;
		// 		}
		// 		else{
		// 			reverseNumberFormat(output);
		// 		}
		// 		history+=output;
		// 		if(this.id=="="){
		// 			var result=eval(history);
		// 			printResult(result);
		// 			printHistory("");
		// 		}
		// 		else{
		// 			history+=this.id;
		// 			printHistory(history);
		// 			printResult("");
		// 		}
		// 	}
		// }
	});
}

// THIS SECTION - to append values/numbers from keys
var number = document.getElementsByClassName("number");
for(var i =0; i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getResult());
		if(output!=NaN){		// To check if the output is a number
			output=output+this.id;
			printResult(output);
		}
	})
}
 // Same for the number 0 as well
var number = document.getElementsByClassName("number0");
for(var i =0; i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getResult());
		if(output!=NaN){		// To check if the output is a number
			output=output+this.id;
			printResult(output);
		}
	})
}





// condition ? true : false
				// output= output==""?output:reverseNumberFormat(output);
