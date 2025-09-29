import {pop, next, middle} from './org.js'

var numero = 9

var texto = 'adt'

var lista = [2, 3, 8, 2, 4]

var booleano = true

 

console.log(pop(numero))

console.log(pop(texto))

console.log(pop(lista))

console.log(pop(booleano))

 

console.log(pop(pop(pop(pop(pop(numero))))))

console.log(pop(pop(pop(pop(pop(texto))))))

console.log(pop(pop(pop(pop(pop(lista))))))

 

console.log(next(numero))

console.log(next(texto))

console.log(next(lista))

console.log(next(booleano))

 

console.log(next(next(next(numero))))

console.log(next(next(next(texto))))

console.log(next(next(next(lista))))

 

console.log(middle(numero))

console.log(middle(texto))

console.log(middle(lista))

console.log(middle(booleano))

 
