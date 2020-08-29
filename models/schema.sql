DROP DATABASE IF EXISTS passport_demo;

CREATE DATABASE passport_demo;

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Who painted the Mona Lisa", "Pablo Picasso", "Claude Monet", "Vincent van Gough", "Leonardo da Vinci", "Leonardo da Vinci", 25, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which time signature is commonly known as Cut Time?", "4/4", "2/2", "6/8", "3/4", "2/2", 25, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Who painted the Sistine Chapel?", "Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Raphael", "Michelangelo", 25, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What French Sculptor designed the Statue of Liberty?", "Auguste Rodin", "Henri Matisse", "Auguste Bartholdi", "Jean-Baptiste Pigalle", "Auguste Bartholdi", 25, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What year did Albrecht Durer create the painting The Young Hare? ", "1502", "1702", "1402", "1602", "1502", 25, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What year was the Mona Lisa finished?", "1487", "1504", "1511", "1523", "1504", 25, 08/28/2020, 08/28/2020);

-- Animals

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What type of animal is a natterjack?", "Toad", "Bird", "Fish", "Insect", "Toad", 27, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which Species of brown bear is not extint?", "Syrian Brown Bear", "California Grizzly Bear", "Atlas Bear", "Mexican Grizzly Bear", "Syrian Brown Bear", 27, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What are rhino horns made out of?", "Skin", "Ivory", "Bone", "Keratin", "Keratin", 27, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("How many known living species of hyenas are there?", "2", "8", "4", "6", "4", 27, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What do you call a baby bat?", "Kid", "Chick", "Pup", "Cub", "Pup", 27, 08/28/2020, 08/28/2020);

-- Celebrities
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Donald J. Trump's middlde name is?", "John", "Jeff", "Jerald", "Jason", "John", 26, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What was the cause of death for Freddie Mercury?", "Brain Hemorrhage", "Stomach Cancer", "Pneumonia", "HIV", "Pneumonia", 26, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What Year did Bob Ross Die?", "1995", "1986", "1997", "1989", "1995", 26, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("By which name is Ramon Estevez better known as?", "Charlie Sheen", "Roman Sheen", "Emilio Estevez", "Martin Sheen", "Martin Sheen", 26, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Aubrey Graham is better known as?", "Travis Scott", "Lil Wayne", "Drake", "2 Chainz", "Drake", 26, 08/28/2020, 08/28/2020);

-- General Knowledge
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What alcoholic drink is made from molasses", "Gin", "Rum", "Vodka", "Whiskey", "Rum", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("After how many years would you celebrate your crystal anniversary?", "10", "15", "20", "25", "15", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("A factiod is what?", "A falsehood", "Useless trivia", "A tiny fact", "A scientific figure", "A falsehood", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Earl Grey tea is black tea flavored with what?", "Lavender", " Vanilla", "Bergamot oil", "Honey", "Bergamot oil", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which country has the most trappist breweries?", "USA", "France", "Netherlands", "Belgium", "Belgium", 9, 08/28/2020, 08/28/2020);

-- Science & Nature
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which is the longest bone in the human body?", "Ulna", "Fibula", "Femur", "Scapula", "Femur", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What is the hottest plant in the solar system?", "Mars", "Mercury", "Jupier", "Venus", "Venus", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which element has the atomic number of 7?", "Oxygen", "Hydrogen", "Neon", "Nitrogen", "Nitrogen", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which of the following is NOT a real element?", "Vitrainium", "Praseodymium", "Hassium", "Lutetium", "Vitrainium", 9, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What element on the periodic table has 92 electrons?", "Sulfur", "Uranium", "Iron", "Hydrogen", "Uranium", 9, 08/28/2020, 08/28/2020);

-- Sports
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Which nation hosted the FIFA World Cup in 2006?", "Brazil", "Germany", "United Kingdom", "SOuth Africa", "Germany", 21, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What team won the 2016 MLS Cup?", "Colorado Rapids", "Seattle Sounders", "Toronto FC", "Montreal Impact", "Seattle Sounders", 21, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What is the oldest team in the NFL?", "Arizona Cardinals", "Chicago Bears", "Green Bay Packers", "New York Giants", "Arizona Cardinals", 21, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What year was the third Super Bowl held?", "1968", "1969", "1970", "1971", "1969", 21, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Who won the 2011 Stanley Cup?", "Boston Bruins", "New York Rangers", "Toronto Maple Leafs", "Montreal Canadiens", "Boston Bruins", 21, 08/28/2020, 08/28/2020);

-- Mythology
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Who was the Roman god of fire?", "Apollo", "Jupiter", "Mercury", "Vulcan", "Vulcan", 20, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Neptune's greek name was?", "Apollo", "Ares", "Poseidon", "Zeus", "Poseidon", 20, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Who was the king of Gods in Ancient Greek Mythology?", "Apollo", "Zeus", "Hermes", "Poseidon", "Zeus", 20, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Talos, the mystical giant bronze man, was the protector of which island?", "Crete", "Cyprus", "Sardinia", "Sicily", "Crete", 20, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("Hera is the god of...", "Agriculture", "Marriage", "Sea", "War", "Marriage", 20, 08/28/2020, 08/28/2020);

-- History
INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("The seed drill was invented by which British inventor?", "Jethro Tull", "Charles Babbage", "Isaac Newton", "J.J Thomson", "Jethro Tull", 23, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("King Henry VIII was the secong monarch of which European royal house?", "Lancaster", "Stuart", "Tudor", "York", "Tudor", 23, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("When did the French Revolution begin?", "1756", "1789", "1799", "1823", "1789", 23, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("In what year did Neil Armstrong and Buzz Aldrin land on the moon?", "1965", "1966", "1969", "1973", "1969", 23, 08/28/2020, 08/28/2020);

INSERT INTO passport_demo.questions (question_field, answer1, answer2, answer3, answer4, correctAnswer, CategoryId, createdAt, updatedAt)
VALUES ("What did the first vending machine in the early 1880s dispense?", "Cigarettes", "Post cards", "Sodas", "Alcohol", "Post cards", 23, 08/28/2020, 08/28/2020);
