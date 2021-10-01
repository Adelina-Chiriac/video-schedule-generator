window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const button = document.getElementById("create");
    button.addEventListener("click", () => {
        const days = document.getElementById("days").value;
        console.log(days);
    });
});

