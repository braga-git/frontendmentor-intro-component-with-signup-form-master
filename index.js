function createUser (firstName, lastName, emailAddress, password){
    const user = {
        firstName,
        lastName,
        emailAddress,
        password
    }

    console.log(user)
}

const form = document.getElementById('form')

const firstName = document.getElementById('firstName')
const spanFirstName = document.getElementById('spanFirstName')
const imgFirstName = document.getElementById('imgFirstName')

const lastName = document.getElementById('lastName')
const spanLastName = document.getElementById('spanLastName')
const imgLastName = document.getElementById('imgLastName')

const emailAddress = document.getElementById('emailAddress')
const spanEmailAddress = document.getElementById('spanEmailAddress')
const imgEmailAddress = document.getElementById('imgEmailAddress')

const password = document.getElementById('password')
const spanPassword = document.getElementById('spanPassword')
const imgPassword = document.getElementById('imgPassword')


form.addEventListener('submit', function(ev){
    if(firstName.value === ''){
        firstName.placeholder=''
        firstName.style.borderColor = 'var(--bg-color)'
        firstName.style.borderWidth = '2px'
        
        imgFirstName.style.display = 'block'
        spanFirstName.innerText = 'First Name cannot be empty'
    }
    
    if(lastName.value === ''){
        lastName.placeholder=''
        lastName.style.borderColor = 'var(--bg-color)'
        lastName.style.borderWidth = '2px'
        
        imgLastName.style.display = 'block'
        spanLastName.innerText = 'Last Name cannot be empty'
    }
    
    if(emailAddress.value === ''){
        emailAddress.placeholder='email@example/com'
        emailAddress.style.placeholder = 'var(--bg-color)'
        emailAddress.style.borderColor = 'var(--bg-color)'
        emailAddress.style.borderWidth = '2px'
        emailAddress.classList.add('errorPlaceholder')
        
        imgEmailAddress.style.display = 'block'
        spanEmailAddress.innerText = 'Looks like this is not an email'
    }
    
    if(password.value === ''){
        password.placeholder=''
        password.style.borderColor = 'var(--bg-color)'
        password.style.borderWidth = '2px'
        
        imgPassword.style.display = 'block'
        spanPassword.innerText = 'Password cannot be empty'
    }

    if(firstName.value === '' && lastName.value === '' && emailAddress.value === '' && password.value === ''){
        ev.preventDefault()
    }else{
        createUser(firstName.value, lastName.value, emailAddress.value, password.value)
    }
})