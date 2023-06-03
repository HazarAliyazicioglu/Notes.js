export default class User {
    constructor(email,name){
        this._id = email
        this._name = name
    }

    greeting(){
        return "Hi my name is " + this._name
    }

    contact(){
        return "Contact me with " + this._id
    }
}