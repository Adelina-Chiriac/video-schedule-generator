window.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            console.log(button, index);
        })
    })
    console.log(buttons);
});

