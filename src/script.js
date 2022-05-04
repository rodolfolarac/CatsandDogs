import { Cat } from './js/models/Cat.js'
import { Dog } from './js/models/Dog.js'
import { Vitrine } from './js/models/Vitrine.js'

const dataCat = await Cat.chamarApi()
const dataDog = await Dog.chamarApi()
const main = document.querySelector('.main')


// Vitrine.criarVitrine(main,dataCat,'cat')
Vitrine.criarVitrine(main,dataCat, 'Cat' )
Vitrine.criarVitrine(main,dataDog, 'Dog' )
