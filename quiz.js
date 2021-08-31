let questions = [
    {
    id: 1,
    question: "What's the name of Harry's wizarding school?",
    answer: "Hogwarts",
    options: [
    "Yancy",
    "Crawford",
    "Hogwarts",
    "Massachusetts"
    ]
    },
    {
    id: 2,
    question: "Who is the Golden Trio?",
    answer: "Harry, Ron and Hermione",
    options: [
    "Harry, Malfoy and Luna",
    "Harry, Ron and Neville",
    "Harry, Dean and Seamus",
    "Harry, Ron and Hermione"
    ]
    },
    {
    id: 3,
    question: "What is Voldemorts true identity?",
    answer: "Tom Riddle",
    options: [
    "Corban Yaxley",
    "Tom Riddle",
    "Lucius Malfoy",
    "Severus Snape"
    ]
    },
    {
    id: 4,
    question: "When is Harrys Birthday?",
    answer: "July 31, 1980",
    options: [
    "July 31, 1980",
    "June 30, 1980",
    "August 28, 1991",
    "March 10, 1981"
    ]
    },
    {
    id: 5,
    question: "What was Nevilles last words in the book series?",
    answer: "I'll join you when hell freezes over, Dumbledores Army!",
    options: [
    "I don't want to fight anymore",
    "Now let's get upstairs and fight, or all the good Death Eaters'll be taken",
    "I'll join you when hell freezes over, Dumbledores Army!",
    "ROOKWOOD!"
    ]
    },
    {
    id: 6,
    question: "Who is Harrys godfather?",
    answer: "Sirius Black",
    options: [
    "Remus Lupin",
    "Arthur Weasley",
    "Sirius Black",
    "Albus Dumbledore"
    ]
    }
    ];
    
    let value = JSON.stringify(questions);
    localStorage.setItem("question", value);
    
    
    let question_count = 0;
    let points = 0;
    
    window.onload = function() {
    show(question_count);
    };
    
    function next() {
    if (question_count == questions.length - 1)
    {
    location.href = "end.html";
    }
    console.log(question_count);
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
    }
    else{
    points += 0;
    sessionStorage.setItem("points", points);
    }
    console.log(points);
    
    question_count++;
    show(question_count);
    }
    
    function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
    
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `;
    toggleActive();
    }
    
    function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }