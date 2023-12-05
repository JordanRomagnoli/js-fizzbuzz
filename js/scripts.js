    let i;
    const container = document.getElementById('elements');
    
    

for( i = 1;  i <= 100; i++ ){

    const square = document.createElement('div');
    square.classList.add('col-2','p-4','text-center','rounded-4','m-2','text-white','border','border-white')
    
    
	if ((i % 3 == 0) && (i % 5 == 0)){
        square.classList.add('bg-warning');
        square.append("FizzBuzz")
    }
    
    
    else if (i % 3 == 0){
        square.classList.add('bg-danger');
        square.append("fizz");
    }
    
    
    else if (i % 5 == 0){
        square.classList.add('bg-primary');
        square.append("buzz");
    }
    
    
    else {
        square.classList.add('bg-secondary');
        square.append(i);
        
    }
    
    container.append(square)
    
}

