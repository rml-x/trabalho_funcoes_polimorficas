
function pop(a) { // see: https://www.google.com/search?q=pop+operation
    
    let resposta;
    switch (typeof(a)) {
        case 'number':
            resposta = a - 1;
            break;

        case 'string':
            resposta = a.slice(0,-1);
            if(resposta === ''){
                console.log("não há nada aqui agora")
            }
            break;
        case 'object':
            if (Array.isArray(a)){
                resposta = a.slice(0, -1);
            }
            break;
        case 'boolean':
            resposta = !a;
            break;
    }
    return resposta;
}

function next(a) { // open to interpretation
    
    let resposta;
    switch (typeof(a)) {
        case 'number':
            resposta = a + 1;
            break;

        case 'string':
            if (a[a.length - 1] === 'a') {
                resposta = `${a}d`;
            } else if (a[a.length - 1] === 'd') {
                resposta = `${a}t`;
            } else {
                resposta = `${a}a`;
            }
            break;

        case 'object':
            if (Array.isArray(a)){
                resposta = a.map(x => x * 2);
            }
            break;
        case 'boolean':
            resposta = !a;
            break;
    }
    return resposta;
}

 
function middle(a) { // open to interpretation

    let resposta;
    switch(typeof(a)){
        case 'number':
            resposta = a / 2;
            break;

        case 'string':
            var index = Math.floor(a.length/2);
            resposta = a[index];
            break;

        case 'object':
            if (Array.isArray(a)){
                resposta = a[Math.floor(a.length / 2)];
            }
            break;
        case 'boolean':
            resposta = !a;
            break;
    }
    return resposta;
}

export {pop, next, middle}