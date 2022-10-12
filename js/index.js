const questions = document.querySelectorAll(".question");
// console.log(questions);
questions.forEach((question) => {
    let btn = question.querySelector(".question-btn");
    btn.addEventListener("click", (e) => {
        questions.forEach((items) => {
            if (items !== question) {
                items.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    });
});