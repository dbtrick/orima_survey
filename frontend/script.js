document.addEventListener("DOMContentLoaded", function () {
    // Select the radio buttons and the question 2 container
    const radioButtons = document.querySelectorAll('input[name="iap"]');
    const question2Container = document.getElementById("question2Container");

    // Function to toggle visibility of Question 2
    function toggleQuestion2() {
        const selectedValue = document.querySelector('input[name="iap"]:checked').value;
        question2Container.style.display = selectedValue === "no" ? "block" : "none";
    }

    // Attach event listeners to both radio buttons
    radioButtons.forEach(button => {
        button.addEventListener("change", toggleQuestion2);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all radio buttons in Question 3
    const question3Radios = document.querySelectorAll('input[name="current"], input[name="designed"], input[name="aligned"], input[name="balance"]');

    // Select the Question 4 container
    const question4Container = document.getElementById("question4").parentElement;

    // Hide Question 4 by default
    question4Container.style.display = "none";
    
    // Function to check if "Disagree" or "Strongly Disagree" is selected
    function checkDisagreeSelection() {
        let showQuestion4 = false;
        
        question3Radios.forEach((radio) => {
            if (radio.checked && (radio.value === "4" || radio.value === "5")) {
                showQuestion4 = true;
            }
        });

        // Show or hide Question 4 based on selection
        question4Container.style.display = showQuestion4 ? "block" : "none";

        // Ensure the textarea is required only when visible
        document.getElementById("question4").required = showQuestion4;
    }

    // Attach event listeners to all radio buttons
    question3Radios.forEach((radio) => {
        radio.addEventListener("change", checkDisagreeSelection);
    });
});



