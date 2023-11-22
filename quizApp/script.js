const form = document.querySelector("#quiz-form")
const answer = Array.from(document.querySelectorAll(".answer"))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")

form.addEventListener("submit", (e) => {
	e.preventDefault()

	questionItems.forEach((questionItem) => {
		questionItem.classList.add("incorrect")
		questionItem.classList.remove("correct")
	})

	const checkedAnswer = answer.filter((n) => n.checked)

	checkedAnswer.forEach((n) => {
		const checkTrue = n.value === "true"
		const questionItem = n.closest(".question-item")

		if (checkTrue) {
			questionItem.classList.add("correct")
			questionItem.classList.remove("incorrect")
		} else {
			questionItem.classList.add("incorrect")
			questionItem.classList.remove("correct")
		}
	})

	const allTrue = checkedAnswer.every((n) => n.value === "true")
	const allAnswered = checkedAnswer.length === questionItems.length

	if (allTrue && allAnswered) {
		alert.classList.add("active")

		setTimeout(() => {
			alert.classList.remove("active")
		}, 1000)
	}
})
