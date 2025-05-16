create database Quiz
use Quiz

CREATE TABLE Questions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Question NVARCHAR(500) NOT NULL
);

CREATE TABLE Answers (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Answer  NVARCHAR(200) NOT NULL,
    QuestionId INT NOT NULL,
    IsCorrect BIT NOT NULL,  
    FOREIGN KEY (QuestionId) REFERENCES Questions(Id)
);

CREATE TABLE UserAnswer (
    Id INT PRIMARY KEY IDENTITY(1,1),
    QuestionId INT NOT NULL,
    AnswerId INT NOT NULL,
    AnsweredAt DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (QuestionId) REFERENCES Questions(Id),
    FOREIGN KEY (AnswerId) REFERENCES Answers(Id)
);
-- Question 1
INSERT INTO Questions VALUES ('What is React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 1, 'A JavaScript library for building user interfaces', 1),
( 1, 'A database', 0),
( 1, 'A programming language', 0),
( 1, 'An OS', 0);

-- Question 2
INSERT INTO Questions VALUES ( 'Who developed React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect)  VALUES 
(2, 'Google', 0),
(2, 'Facebook', 1),
(2, 'Microsoft', 0),
(2, 'Twitter', 0);

-- Question 3
INSERT INTO Questions VALUES ('What is a component in React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(3, 'A reusable piece of UI', 1),
(3, 'A type of variable', 0),
(3, 'A server', 0),
(3, 'An API', 0);

-- Question 4
INSERT INTO Questions VALUES ( 'What hook is used to manage state in React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(4, 'useState', 1),
(4, 'useEffect', 0),
(4, 'useContext', 0),
(4, 'useRef', 0);

-- Question 5
INSERT INTO Questions VALUES ('Which method is used to render React elements to the DOM?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 5, 'ReactDOM.render()', 1),
( 5, 'React.render()', 0),
( 5, 'React.create()', 0),
( 5, 'ReactDOM.display()', 0);

-- Question 6
INSERT INTO Questions VALUES ('What is JSX?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 6, 'A JavaScript syntax extension for writing HTML', 1),
( 6, 'A CSS framework', 0),
( 6, 'A database', 0),
( 6, 'A server tool', 0);

-- Question 7
INSERT INTO Questions VALUES ('Which hook is used for side effects in React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(7, 'useEffect', 1),
(7, 'useState', 0),
(7, 'useMemo', 0),
(7, 'useContext', 0);

-- Question 8
INSERT INTO Questions VALUES ('How do you pass data from parent to child component?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(8, 'Using props', 1),
(8, 'Using state', 0),
(8, 'Using context', 0),
(8, 'Using emitters', 0);

-- Question 9
INSERT INTO Questions VALUES ('Which hook can memoize a value?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(9, 'useMemo', 1),
(9, 'useEffect', 0),
(9, 'useRef', 0),
(9, 'useState', 0);

-- Question 10
INSERT INTO Questions VALUES ('What is the default file extension for React components?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 10, '.jsx', 1),
( 10, '.js', 0),
( 10, '.tsx', 0),
( 10, '.html', 0);

-- Question 11
INSERT INTO Questions VALUES ('Which command creates a new React app?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 11, 'npx create-react-app myApp', 1),
( 11, 'react new myApp', 0),
( 11, 'npm start react', 0),
( 11, 'create-react', 0);

-- Question 12
INSERT INTO Questions VALUES ('What is the virtual DOM?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(12, 'A lightweight copy of the real DOM', 1),
(12, 'A server', 0),
(12, 'A browser API', 0),
(12, 'A CSS engine', 0);

-- Question 13
INSERT INTO Questions VALUES ('How do you update state in React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(13, 'By calling the setter function from useState', 1),
(13, 'Modifying state directly', 0),
(13, 'Calling useEffect', 0),
(13, 'Using updateState()', 0);

-- Question 14
INSERT INTO Questions VALUES ('How to handle events in React?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
( 14, 'Using camelCase and passing function', 1),
( 14, 'Using lowercase and strings', 0),
( 14, 'With jQuery', 0),
( 14, 'Using global variables', 0);

-- Question 15
INSERT INTO Questions VALUES ('What is the purpose of keys in lists?');
INSERT INTO Answers (QuestionId,Answer,IsCorrect) VALUES 
(15, 'To help React identify which items changed', 1),
(15, 'To encrypt data', 0),
(15, 'To style items', 0),
(15, 'To navigate pages', 0);
