<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question1 = $_POST["question1"];
    $reason1 = $_POST["reason1"];
    $question3_current = $_POST["question3_current"];
    $question3_designed = $_POST["question3_designed"];
    $question3_aligned = $_POST["question3_aligned"];
    $question3_balance = $_POST["question3_balance"];
    $reason2 = $_POST["reason2"];
    $question5 = isset($_POST["question5"]) ? implode(", ", $_POST["question5"]) : ""; // Convert checkbox array to a string
    $state = $_POST["state"];
    $postcode = $_POST["postcode"];

    try {
        require_once "mysqldb.php";

        $query = "INSERT INTO survey_responses (question1, reason1, question3_current, question3_designed, question3_aligned, question3_balance, reason2, question5, state, postcode) VALUES (?,?,?,?,?,?,?,?,?,?);";

        $stmt = $pdo->prepare($query);

       
        $stmt->execute([$question1, $reason1, $question3_current, $question3_designed, $question3_aligned, $question3_balance, $reason2, $question5, $state, $postcode]);

        // Close the connection
        $pdo = null;
        $stmt = null;

        // Redirect to the frontend page after successful submission
        header("Location: ../frontend/check.html");
        exit(); // 

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage()); 
    }

} else {
    header("Location: ../frontend/check.html");
    exit();
}
