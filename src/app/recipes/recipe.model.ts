export class Recipe {
    //creates a recipe model
    public name: string;
    public description: string; //the description
    public imagePath: string; //holds a url of the image path

    //constructor to instanciate with new keyword
    constructor(name: string, desc: string, imagePath: string){
    //a built in function every class has and
    //executes it once you create a new instance
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
    }
}