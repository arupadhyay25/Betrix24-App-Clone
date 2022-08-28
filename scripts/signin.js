

class User_signin {
    #validateEmail(arr,email) {
        for(let i=0;i<arr.length;i++){
            if(arr[i].email==email){
                return true;
            }
        }
        return false
    }

    #validatepassword(arr,password){
        for(let i=0;i<arr.length;i++){
            if(arr[i].password==password){
                let email=arr[i].name
                localStorage.setItem("email",JSON.stringify(email))
                return true;
            }
        }
        return false
    }
    
    signin(arr,email, password) {
        
        let isValidated = false
        
        isValidated = this.#validateEmail(arr,email) && this.#validatepassword(arr,password)

        if(isValidated){

            alert("Signin succesfully")
            window.location.href="homepage.html"
        }else{
            alert("please enter valid credential")
        }

    }
}

let form=document.querySelector("form")
form.addEventListener("submit",login_page)

function login_page(event){
    let users = JSON.parse(localStorage.getItem("users"))
    event.preventDefault();
    let email=form.email.value
    let password=form.password.value
    let u3 = new User_signin()
    u3.signin(users,email,password) 
    console.log(email,password);
}