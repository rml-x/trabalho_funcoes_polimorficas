function itera(a) { 
    var resp
    for (const i in a) {
        console.log([i], a[i])
        resp = resp + a[i]
        
    }
    
}

function pop(a) { // see: https://www.google.com/search?q=pop+operation
    if (typeof(a) != 'object') throw 'erro, tipo diferente de array'

    
    return "ok"
}

 

function next(a) { // open to interpretation
    return null
}

 

function middle(a) { // open to interpretation
    return null
}

export {pop, next, middle, itera}