let formValidation = document.querySelector('#form-validation')
let fullName = document.querySelector('#fullname')
let userName = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let genders = document.querySelectorAll('.radio')
let inputs = document.querySelectorAll('.inputs')
let notifications = document.querySelectorAll('.notifications')
let submitBtn  = document.querySelector("#submit")

inputs.forEach(input => {
    input.addEventListener('focusout', e => {
     let input = e.target.id
     checkInput(input)
    
  })
})


document.addEventListener('keypress', (e)=> {
   if(e.key === "Enter")
   e.preventDefault()
   
})


function checkInput(input) {
 if(input === 'fullname') {
  if(fullName.value === '') {
    document.getElementById('fullname-label').innerHTML = 'The full name is required'
  }
  else {
    document.getElementById('fullname-label').innerHTML = ''
  }
 }

 else if(input === 'username'){
     
     if(userName.value === ''){
        document.getElementById('username-label').innerHTML = "The username is required"
}
     else {
        document.getElementById('username-label').innerHTML= ''
       verifyLength()
       verifyCharacters()
     }

 }
 else if(input === 'email'){
     if(email.value === ''){

     
    document.getElementById('email-label').innerHTML = "The email address is required" 
     }

     else {
        document.getElementById('email-label').innerHTML = ''
        verifyEmail()
     }

    

 }
 else if(input === 'password'){
     if (password.value === '') {
    document.getElementById('password-label').innerHTML = "The password is required"
 }

 else {
    document.getElementById('password-label').innerHTML = ''
    verifyPassword()
 }
}

}

function verifyLength() {
   if(userName.value.length < 6 || userName.value.length > 30) {
    document.getElementById('username-label').innerHTML += 'The username length must be from 6 to 30 characters'
   
}
  
}

function verifyCharacters() {
     if (userName.value.length>6 && userName.value.search(/[$-/:-?{-~!"^@#`\[\]]/) > 0) {
        document.getElementById('username-label').innerHTML += 'The username should only contain  letters and numbers'
     
       }
}


function verifyEmail() {
    if(!/\S+@\S+\.\S+/.test(email.value)){
        document.getElementById('email-label').innerHTML += 'The email address format should be ex. example@.com'
     
    }
}


function verifyPassword() {
   if(password.value.length < 8) {
      document.getElementById('password-label').innerHTML += "The password length should be more than 8 characters"
   }
}

submitBtn.addEventListener('click', (e)=> {
   e.preventDefault()
   inputs.forEach( input => {
      checkInput(input.id)
   })
})




