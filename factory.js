class MusicFactory {
    constructor(){
        this.creatMusic = (genere)=>{
            let music;
            if(genere==="pop"){
                music= new PopMusic()
            }
            else if (genere==="rock"){
                music=new RockMusic()
            }
            else if (genere==="jaaz"){
                music=new JaazMusic()
            }
            return music;
        }
    }
}

class PopMusic {
    constructor(){
        this.genere = "pop"
        this.getInfo = ()=>{
            return `pop music created`
        }
    }
}

class RockMusic {
    constructor(){
        this.genere = "rock"
        this.getInfo = ()=>{
            return `rock music created`
        }
    }
}

class JaazMusic {
    constructor(){
        this.genere = "jaaz"
        this.getInfo = ()=>{
            return `jaaz music created`
        }
    }
}

const musicFactory = new MusicFactory();
const music1 = musicFactory.creatMusic("pop")
const music2 = musicFactory.creatMusic("rock");

console.log(music1.getInfo()); 
console.log(music2.getInfo()); 
