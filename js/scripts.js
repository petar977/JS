function compare(a, b) { 
    let number_a = parseInt(a); 
    let number_b = parseInt(b);
    if(isNaN(number_a) || isNaN(number_b)) 
        throw new TypeError("One of the parameters cannot be converted to number.", "scripts.js"); 
    if (number_a > number_b) { 
    return 1; 
    } else if (number_b > number_a) { 
    return -1; 
    } else { 
    return 0; 
    }  
    }
    
leet z = 6 + 8;