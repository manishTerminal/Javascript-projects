const form = document.querySelector("#form")

const error = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#password-confirmation")

const terms = document.querySelector("#terms")

form.addEventListener("submit", (e) => {
	const errorMessages = []
	clearErrors()

	if (username.value.length < 6) {
		errorMessages.push("Username must be 6 character long.")
	}

	if (password.value.length < 10) {
		errorMessages.push("Password must be 10 character long.")
	}

	if (password.value != confirmPassword.value) {
		errorMessages.push("Both password and confirm password didn't match.")
	}

	if (terms.checked != true) {
		errorMessages.push(" Check the terms.")
	}

	if (errorMessages.length > 0) {
		e.preventDefault()
		showErrors(errorMessages)
	}
})

function clearErrors() {
	errorList.innerHTML = " "
}

function showErrors(errorMessages) {
	errorMessages.forEach((errorMessage) => {
		const li = document.createElement("li")
		li.innerText = errorMessage
		errorList.appendChild(li)
	})
	error.classList.add("show")
}
