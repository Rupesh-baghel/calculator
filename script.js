


let input = document.querySelector(".screen");
let buttons = document.querySelectorAll(".buttons");

let string = "";

document.querySelector(".ac").addEventListener("click", function () {
    string = "";
    input.value = "";
});

document.querySelector(".del").addEventListener("click", function () {
    string = string.substring(0, string.length - 1);
    input.value = string;
});

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
                console.log(string);
            } catch (error) {
                input.value = "Error";
                string = "";
                console.error("Error in calculation", error);
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
            console.log(string);
        }
    });
});







































