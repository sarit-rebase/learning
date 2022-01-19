class ParentCompany {
    constructor(){
        if(ParentCompany._instance){
            return ParentCompany._instance;
        }
        ParentCompany._instance = this;

        this.name = "Medium"
        this.about = "About Medium"
    }
    
}

const pc1 = new ParentCompany()
const pc2 = new ParentCompany()

console.log("pc1", pc1.name); // pc1 Medium
console.log("pc2", pc2.name); // pc2 Medium