window.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll("button");
    const divs = document.querySelectorAll("div");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Create the input element
            const input = document.createElement("input");
            input.classList.add("link");
            // Create the save button
            const saveButton = document.createElement("button");
            saveButton.classList.add("save");
            saveButton.innerHTML = "Save";
            // Add the input to the DOM
            divs[index].insertBefore(input, button);
            // Add the save button to the DOM
            divs[index].insertBefore(saveButton, button);
        })
    })
    console.log(buttons);
});

