
function pop(a) { // see: https://www.google.com/search?q=pop+operation
    //if (typeof(a) != 'object') throw 'erro, tipo diferente de array'
    
    switch (typeof(a)) {
        case 'number':
            a = a - 1;
            break;
    
        case 'string':
            a = a.slice(0,-1)
            if(a === ''){
            console.log("não há nada aqui agora")
            }
            break;
        case 'object':
            if (Array.isArray(a)){
            a = a.slice(0, -1);
            }
            break;
        case 'boolean':
            a =! a
            break;
    } 
    return a
}

function next(a) { // open to interpretation
    var util
    switch (typeof(a)) {
        case 'number':
            a = a + 1;
            break;
    
        case 'string':
            if (a[a.length - 1] === 'a') {
                a = `${a}d`
            }
            if (a[a.length - 1] === 'd') {
                a = `${a}t`
            }
            else { 
                a = `${a}a`
            }
            break;

        case 'object':
            if (Array.isArray(a)){         
            for (let index = 0; index < a.length; index++) {
                
                
            }
            }
            break;
        case 'boolean':
            a =! a
            break;
    
    } 
    return a
}

 

function middle(a) { // open to interpretation
    return null
}

export {pop, next, middle}