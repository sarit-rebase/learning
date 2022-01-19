module.exports = class Version {
    private static instance: Version;
    v! : number
    time!: string

    constructor(){
        if(Version.instance){
            return Version.instance;
        }
        this.v = 1
        this.time = new Date().toString()
        Version.instance = this

    }
}