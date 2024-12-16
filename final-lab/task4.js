class Card {
	constructor(numbers, name, surname, year, month) {
		this.numbers = numbers
		this.name = name
		this.surname = surname
		this.month = month
		this.year = year
	}
}

class User {
	constructor(name, surname, phone, email, gender, card) {
        this.name = name
        this.surname = surname
        this.phone = phone
        this.email = email
        this.gender = gender
		this.card = card
    }
}
function makeUser()
{
	let numbers = document.querySelector('.card-number')
	let name = document.querySelector('.card-holder-name')
	let surname = document.querySelector('.card-holder-surname')
	let year = document.querySelector('.card-expire-year')
	let month = document.querySelector('.card-expire-month')
	let phone = document.querySelector('.card-holder-phone')
	let email = document.querySelector('.card-holder-email')
	let gender = document.querySelector('.card-holder-gender')
	
	card = new Card(numbers.value,name.value,surname.value,year.value,month.value)
	user = new User(name.value, surname.value, phone.value, email.value, gender.value, card)
	users.push(user)
	
	numbers.value = ''
	name.value = ''
	surname.value = ''
	year.value = ''
	month.value = ''
	phone.value = ''
	email.value = ''
}
function getCard()
{
	let numbers = document.querySelector('.get-card-info')
	for (let user of users) {
		if (user.card.numbers == numbers.value) {
			let numbers = document.querySelector('.card-number')
			let name = document.querySelector('.card-holder-name')
			let surname = document.querySelector('.card-holder-surname')
			let year = document.querySelector('.card-expire-year')
			let month = document.querySelector('.card-expire-month')
			numbers.value = user.card.numbers
			name.value = user.card.name
			surname.value = user.card.surname
			year.value = user.card.year
			month.value = user.card.month
		}
	}
}
users = []

let btn = document.querySelector('.create-card-btn')
let get = document.querySelector('.get-card-info-btn')
btn.addEventListener('click', makeUser)
get.addEventListener('click', getCard)
