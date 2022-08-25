//main storage 
let users = JSON.parse(localStorage.getItem("users")) || []

class User {
    constructor(n){
        this.organisation = "Betrix24"
    }

    #validateEmail(email) {

        let value = email.includes("#") ? false : true

        return value;   
    }

    #validatepassword(password){

        let value = password.includes("123") ? false : true;
        
        return value

    }

    signup(name,email,mobile,password) {

        let isValidated = false
        
        isValidated = this.#validateEmail(email) && this.#validatepassword(password)

        if(isValidated){
            
            this.name = name
            this.email = email
            this.mobile = mobile
            this.password = password

            alert("User registered succesfully")
            window.location.href="signin.html"
            
            users.push(this)
            localStorage.setItem("users",JSON.stringify(users))
            
        }else{
            alert("please enter valid credential")
        }
        
    }
}


let form=document.querySelector("form")
form.addEventListener("submit",signup_page)

function signup_page(event){
    event.preventDefault();
    let name=form.name.value
    let email=form.email.value
    let mobile=form.mobile.value
    let password=form.password.value
    let u3 = new User(name)
    u3.signup(name,email,mobile,password)
    // console.log(name,email,mobile,password)    
}

console.log(users);