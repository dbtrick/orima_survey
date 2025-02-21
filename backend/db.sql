CREATE TABLE survey_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question1 VARCHAR(3), -- Yes/No response
    reason1 TEXT, -- If question 1 is No
    question3_current VARCHAR(50), -- Rating for "My course is current"
    question3_designed VARCHAR(50), -- Rating for "My course is well designed"
    question3_aligned VARCHAR(50), -- Rating for "My course aligns with my learning outcomes"
    question3_balance VARCHAR(50), -- Rating for "My course has a good balance of theory and practice"
    reason2 TEXT, -- If they disagreed in Question 3
    question5 TEXT, -- Stores selected checkboxes as a comma-separated list
    state VARCHAR(10), -- State selection
    postcode VARCHAR(10), -- User-entered postcode
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
