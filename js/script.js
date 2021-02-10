// Question 1
console.log("Question 1")

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    console.log("I'm a button");
});

// Question 2
console.log("Question 2");

const input = document.querySelector("input");
const countButton = document.querySelector("form button");
const countOutput = document.querySelector("b.count");

function countCharacters() {
    const characterCount = input.value.trim().length;
    countOutput.innerHTML = characterCount;
    console.log(countOutput.innerHTML);
}

countButton.addEventListener("click", countCharacters);