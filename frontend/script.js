document.addEventListener("DOMContentLoaded", function () {
    // Select the radio buttons and the question 2 container
    const radioButtons = document.querySelectorAll('input[name="question1"]');
    const question2Container = document.getElementById("question2Container");

    // Function to toggle visibility of Question 2
    function toggleQuestion2() {
        const selectedValue = document.querySelector('input[name="question1"]:checked').value;
        question2Container.style.display = selectedValue === "no" ? "block" : "none";
    }

    // Attach event listeners to both radio buttons
    radioButtons.forEach(button => {
        button.addEventListener("change", toggleQuestion2);
    });


    // Select all radio buttons in Question 3
    const question3Radios = document.querySelectorAll('input[name="question3_current"], input[name="question3_designed"], input[name="question3_aligned"], input[name="question3_balance"]');

    // Select the Question 4 container
    const question4Container = document.getElementById("reason2").parentElement;

    // Hide Question 4 by default
    question4Container.style.display = "none";
    
    // Function to check if "Disagree" or "Strongly Disagree" is selected
    function checkDisagreeSelection() {
        let showQuestion4 = false;
        
        question3Radios.forEach((radio) => {
            if (radio.checked && (radio.value === "Disagree" || radio.value === "Strongly Disagree")) {
                showQuestion4 = true;
            }
        });

        // Show or hide Question 4 based on selection
        question4Container.style.display = showQuestion4 ? "block" : "none";

        // Ensure the textarea is required only when visible
        document.getElementById("reason2").required = showQuestion4;
    }

    // Attach event listeners to all radio buttons
    question3Radios.forEach((radio) => {
        radio.addEventListener("change", checkDisagreeSelection);
    });

});
