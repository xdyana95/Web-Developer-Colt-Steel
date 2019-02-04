// // function isEven(x) {
// // 	if (x % 2 === 0 ) {
// // 		return "true"
// // 	}
// // 	else {
// // 		return "false"
// // 	}
// // }


// // function factorial(num) {
// // 	if (num===0){
// // 		return 1;
// // 	}
// // 	var result = num;
// // 	for(var i=num-1; i>=1; i--){
// // 		result *=i
// // 	}
// // 	return result;
// // }
// GET TO 193 TOMORROW.



// function factorial(num) {
// 	if (num ===0) {
// 		return 1;
// 	}
// 	var result = num;
// 	for (var i=num-1; i>1; i--_) {
// 		result *= i
// 	}
// 	return result;
// }

// let Array = ["appddde","orange","banana"]
// function printReverse(arr) {
// 	for (var i=arr.length-1; i>=0; i--) {
// 		console.log(arr[i]);
// 	}
// }

// printReverse(Array);



// function isUniform(argument) {
// 	var firstString = argument[0];
// 	for(var i=1; i<argument.length; i++) {
// 		if(argument[i] !== firstString) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// isUniform([1,1,1,1])

// function sumArray(arr) {
// 	var total = 0
// 	arr.forEach(function(element){
// 		total += element;
// 	});
// 	return total;
// // }

// function sumArray(arr) {
// 	var total =0
// 	for (var i = 0; i<=arr.length -1;i++ ) {
// 		total += arr[i];
// 	}
// 	console.log(total)
// }


// function max(arr) {
// 	var first = arr[0];
// 	for(var i =1; i< arr.length; i++ ) {
// 		if (arr[i] > first) {
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }
  // function factorial(x) {
  // 	var first = 1
  // 	for (var i = 1; i<=x; i++ ) {
  // 		first *= i
  // 	}
  // 	return first
  // }

  function factorial(x) {
  	if (x<0) {
  		return -1;
  	}
  	else if (x ==0) {
  		return 1;
  	}
  	else {
  		return (x*factorial(x-1));
  	}
  }