var arr = [457863,0,445,49,14,-5,7,6,12378,-251];
function bubbleSort(arr) {
	for (var j = 0; j < arr.length-1; j++) {
		for (var i = 0; i < arr.length -1 - j; i++) {
			if (arr[i] > arr[i+1]) {				
				var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
			}		
		}
	}
}
bubbleSort(arr);
postMessage(arr);
// function selectSort(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		var min = i;
// 		for (var j = i + 1; j < arr.length; j++) {
// 			if (arr[j] < arr[min]) {
// 				min = j;
// 			}
// 		}
// 		if (min != i) {
// 			var temp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// }
// selectSort(arr);
