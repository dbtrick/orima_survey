document.addEventListener("DOMContentLoaded", function () {

    //For question 1 & 2
    const question1Yes = document.getElementById("question1Yes");
    const question1No = document.getElementById("question1No");
    
    const question2Container = document.getElementById("question2Container");

    function toggleQuestion2() {
        if (question1No.checked) {
            question2Container.style.display = "block";  // Show Question 2
        } else {
            question2Container.style.display = "none";  // Hide Question 2
        }
    }

    // Add event listeners
    question1Yes.addEventListener("change", toggleQuestion2);
    question1No.addEventListener("change", toggleQuestion2);


     //For question 3 & 4
    // Select all radio buttons in Question 3
    const question3Radios = document.querySelectorAll('input[name="question3_current"], input[name="question3_designed"], input[name="question3_aligned"], input[name="question3_balance"]');

    const question4Container = document.getElementById("question4").parentElement;

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
        document.getElementById("question4").required = showQuestion4;
    }

    // Attach event listeners to all radio buttons
    question3Radios.forEach((radio) => {
        radio.addEventListener("change", checkDisagreeSelection);
    });


   
});

