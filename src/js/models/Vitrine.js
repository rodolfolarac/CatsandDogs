import { Cat } from './Cat.js'
import { Dog } from './Dog.js'
export class Vitrine {


    static criarVitrine(mainPagina, animal,nameClass) {
        const card = document.createElement('div')
         card.classList.add('card', nameClass)
         

         const img = document.createElement('img')
         card.classList.add(nameClass)
         const btn = document.createElement('button')

         img.src = animal[0].url
         btn.innerText = `See other ${nameClass}`
         this.eventButton(nameClass, mainPagina,btn,animal)

         card.append(img,btn)

         mainPagina.appendChild(card)

    }

    static async eventButton(nameClass, mainPagina,btn, animal){
        

        btn.addEventListener('click', async (event)=>{

            let img = event.target.parentNode.children[0]
            let newImg = '';

            if(nameClass === 'Cat'){
                 newImg =  await Cat.chamarApi()
            }else {
                 newImg =  await Dog.chamarApi()
            }
   
           img.src = newImg[0].url
          
        })

    }

    
}

