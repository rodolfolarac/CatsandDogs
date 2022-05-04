export class Cat {
    
    static url = `https://api.thecatapi.com/v1/images/search/`;

    static async  chamarApi(){


    let arrayCat = await fetch(this.url)
    arrayCat = await arrayCat.json();

    return arrayCat

    
    }
}







    // const arrayCat = await fetch(Cat.url)
    // .then((response)=>{
        
    //         return   response.json();
    //     }).then((data) => {
            
    //         return data
    //     })