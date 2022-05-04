export class Dog {
    static url = `https://api.thedogapi.com/v1/images/search`

    static async chamarApi() {
       let arrayDog = await fetch(this.url);
       arrayDog =  await arrayDog.json();

       return arrayDog;
        
    }
}