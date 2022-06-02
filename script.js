window.addEventListener('DOMContentLoaded', function(){

'use strict'

let data = document.getElementById('expenses_2'),
	result = document.getElementById('result'),
	startBtn = document.getElementById('start'),
	secondBtn = document.getElementById('start2'),
	arr = document.getElementById('massiv'),
	resetBtn = document.getElementById('start3'),
	sum = 0,
	fib = [0, 1];
	
startBtn.addEventListener('click', function(){	
let n = data.value;
		
	for(let i = 2; i < n; i++){
		fib[i] = fib[i - 1] + fib[i - 2]; 
		function summa(){
			sum = sum + fib[i];
		}
			summa();
			
			
	}
		result.value = sum;
		
		console.log(fib);
		console.log(sum);
		sum = 0;
	
});

secondBtn.addEventListener('click', function(){	
		
		arr.value = fib;
		arr.classList.remove('hidden');
		arr.classList.add('showArray');
		
		
		console.log(fib);
		
});
	
resetBtn.addEventListener('click', function(){	
		
	result.value = '';
	data.value = '';	
	arr.classList.remove('showArray');
	arr.classList.add('hidden');
		
});		
		
	
	
})
