class User{
    constructor(name){
        this.name=name
    }
    uppercaseName(){
        this.name=this.name.toUpperCase();
        return this.name;
    }
}

//Creating a new user instance with name 'FuzzySid'
const user=new User("FuzzySid")
user.uppercaseName();
