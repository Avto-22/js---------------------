/*
პირველ სტრიქონებში localStorage-ში ვქმნი questionsCount, რომელიც ყოველ გვერიდს ჩატვირთვაზე გაიზრდება ერთით. 
ამით ადვილად შემეძლება localStorage-ში შევქმნა კითხვები და გასაღებ სიტყვად განმასხვავებელი questionsCount იქნება.
ასევე for ციკლით ადვილად შემეძლება localStorage-დან შესაბამისი კითვების მიღება ან წაშლა. რადგან თავიდან ყოველთვის
მექნება 10 რთული 8 საშუალო და 5 მარტივი კითვა, შესაბამისად questionsCount-ის მნიშვნელობას დავიწყებ 24-დან რადგან
როცა localStorage-ში მასწავლებელი შექმნის კითვას მას არ გადაეწეროს თავიდანვე არსებული  10 რთული 8 საშუალო და 5 მარტივი
კითხვა. if else-ბით კი ყოველ ჩატვირთვაზე ვახერხებ questionsCount-ის ერთით გაზრდას, რადგან
როცა მისი მეშვეობით for ციკლს დავატრიალებ ძაან დიდ რიცხვებზე არ მოუწიოს ასვლა, if else-ბით რომ არ მეწერა
ყოველ ჩათირთვაზე გამოდიოდა რო 24-თ დაიზრდებოდა წიინა მნიშვნელობა და დიდ რიცხვებს შესაბამისად მალე აარტყამდა
. იგივე ლოგიკა მიწერია quiz.js ფაილში, რადგან ამ შემთვევაში გააჩნია რომელი გვერდი ჩაიტვირთება პირველი.
შეიძლება პირველად მასწავლებლის მიერ კითვის შექმნის გვერდი გაიხსნას ან ტესტის გვერდი, ამიტომ მომიწია ორივეგან 
(teacher.js-ში და quiz.js-ში) ასეთი კოდის დაწერა
-----------------------------------------------------------------------------------------------------------------*/
if (window.localStorage.getItem("questionsCount") === null) {
    window.localStorage.setItem("questionsCount", window.localStorage.getItem("questionsCount"));
    window.localStorage.setItem("questionsCount", JSON.parse(window.localStorage.getItem("questionsCount")) + 24);
}
else if(window.localStorage.getItem("questionsCount") !== null){
    window.localStorage.setItem("questionsCount", window.localStorage.getItem("questionsCount"));
    window.localStorage.setItem("questionsCount", JSON.parse(window.localStorage.getItem("questionsCount")) + 1);
}
//---------------------------------------------------------------------------------------------------------------------
// ვქმნი რთული საშუალო და მარტივი კითვებისტის შესაფერის კონტეინერებს
let hardQuestions = [];
let mediumQuestions = [];
let easyQuestions = [];
// რადგან მასწავლებლის ველიდან localStorage-ში ვინახავ კითვებს for ციკლით ამოვიღებ მათ და გავანაწილებ შესაფერის დონის კონტეინერებში
for (let i = 1; i <= JSON.parse(window.localStorage.getItem("questionsCount")); i++) {
    if (window.localStorage.getItem("Question[" + i + "]") !== null) {
        if (JSON.parse(window.localStorage.getItem("Question[" + i + "]")).questionLevel == "რთული") {
            hardQuestions.push(JSON.parse(window.localStorage.getItem("Question[" + i + "]")));
        }
        if (JSON.parse(window.localStorage.getItem("Question[" + i + "]")).questionLevel == "საშუალო") {
            mediumQuestions.push(JSON.parse(window.localStorage.getItem("Question[" + i + "]")));
        }
        if (JSON.parse(window.localStorage.getItem("Question[" + i + "]")).questionLevel == "მარტივი") {
            easyQuestions.push(JSON.parse(window.localStorage.getItem("Question[" + i + "]")));
        }
    }
}
//---------------------------------------------------------------------------------------------------------
let isAutomaticalClick = false; // ამ ცვლადს ვიყენებ რათა გავიგო კითხვაზე ავტომატურად გადავიდა თუ არა ანუ დრო ამოეწურა თუ არა
let now = document.querySelector(".now"); // აქ ჩაიწერება მერამდენე კითხვაზეა სტუდენტი
let questionCaunt = 1;
now.innerText = questionCaunt; // questionCaunt-ის გაზრდით ვადგენ მერამდენე კითხვაზეა სტუდენტი და now-ში ვწერ მას
let sum = document.querySelector(".sum"); // სულ რამდენი კითვაა. ეს მჭირდება რათა გამოისახოს მერამდენე კითხვაზეა სტუდენტი სულ რამდენიდან

let question = document.querySelector(".question"); // კითხვის ველი
let answer1 = document.querySelector(".answer1");  // პირველი პასუხის ველი
let answer2 = document.querySelector(".answer2");  // მეორე პასუხის ველი
let answer3 = document.querySelector(".answer3");  // მესამე პასუხის ველი
let answer4 = document.querySelector(".answer4");  // მეოთხე პასუხის ველი
let progress = document.querySelector(".nes-progress");
let myQuestions = []; // აქ შევინახვა იმ დონის  კითხვებს, რომელ დონესაც მომხმარებელი აირჩევს

let randomIndex; // ამ ცვლადს გავუტოლებ რანდომ რიცხვის 0-დან შესაფერისი მასივის სიგრძემდე, რათა შემდეგ ეკრანზე კითხვები გამოვიტანო ყოველჯერზე რანდომ, დაულაგებლად

let nextBtn = document.querySelector("#nextBtn"); // შემდეგ კითხვაზე გადასვლის ღილაკი

let endBtn = document.querySelector("#endBtn");   // ტესტის დასრულების ღილაკი

let startBtn = document.querySelector("#startBtn"); // ტესტის დაწყების ღილაკი

let min1 = document.querySelector(".min1");  // წამების სადაც ჩაიწერება
let min2 = document.querySelector(".min2");   // წამების სადაც ჩაიწერება
let minutCount; // წამების რაოდენობა

let choseAnswerArray = []; // მასივი სადაც შევინახავ სტუდენტის მოწკაპულ კითხვებს
let choseQuestions = [];   // მასისი სადაც შევინახავ კითხვებს იმ თანმიმდევრობით, რა თანმიმდევრობითაც რანდომ ამოუგდებს სტუდენტს ეკრანზე

let studentPoint = 0; // სტუდენტის მიღებული ქულა, თავდაპირველად გაჩუმებით მექნება 0-ის ტოლი, შემდეგ გაიზრდება სხვადასხვა პირობისდამიხედვით

let myStudent = JSON.parse(window.localStorage.getItem("Student[" + JSON.parse(window.localStorage.getItem("itemCount")) + "]")); // სტუდენტი რომელიც ახლაა აქტიური, ანუ რომელიც ახლა აკეთებს ტესტს
//-------------------------------------------------------------------------------------------------------------------


/*
ქვემოთ აღწერილია ფუნქცია რომელიც გამოიძახება დაწყების ღილაკზე დაწკაპუნებისას. კერძოდ ქვიზის კონტეინერი გახდება ხილვადი სადაც გამოდის კითხვები, პროგრეს ბარი და შესაფერისი ღილაკები. ასევე ხილვადი გახდება ტაიმერი. რადგან ტესტებს სხვადასხვა ტაიმერი აქვთ, სხვადასხვა კითხვების რაოდენობა და სხვადასხვა შეფასების სისტემებით ეწერება სტუდენტს ქულა if,else-ბით ვარეგულირებ სად რა მნიშვნელობა უნდა წავიდეს.

*/

startBtn.addEventListener("click", function () {
    document.querySelector(".quizContainer").hidden = false;
    document.querySelector(".timer").hidden = false;
    document.querySelector(".start").hidden = true;
    if (myStudent.testLevel == "რთული") {
        min1.innerText = 30; // დონის შესაფერისი წამების რაოდენობა დავალების მოთხოვნის მიხედვით
        minutCount = 30;
        if (sum.innerText > 1) {
            progress.value = 100 / (sum.innerText);
        } else if (sum.innerText == "1") {
            progress.value = 100;
        } // პროგრეს ბარის დასარეგულირებლად 100 ვყოფ კითხვების რაოდენობაზე, რათა შემდეგ სიმეტრიულად გავზარდო პროგრესბარის მნიშვნელობა, რომელიც ქვემოთ მიწერია
    }
    if (myStudent.testLevel == "საშუალო") {
        min1.innerText = 45;
        minutCount = 45;

        if (sum.innerText > 1) {
            progress.value = 100 / (sum.innerText);
        } else if (sum.innerText == "1") {
            progress.value = 100;
        }
    }
    if (myStudent.testLevel == "მარტივი") {
        min1.innerText = 60;
        minutCount = 60;
        if (sum.innerText > 1) {
            progress.value = 100 / (sum.innerText);
        } else if (sum.innerText == "1") {
            progress.value = 100;
        }
    }
});

let visitedCount = 0;

/* ქვემოთ აღწერილია ფუნქცია რომელიც გამოიძახება დასრულების ღილაკზე ხელის დაჭერისას
კერძოდ კი დაიწერება მოსწავლის ქულა სხვადსახხვა კრიტერიუმების გათვალისწინებით
*/
endBtn.addEventListener("click", function () {
    visitedCount++;
    let maxPoint = choseQuestions.length;
    if (myStudent.testLevel == "რთული") {
        maxPoint *= 3;
    }
    if (myStudent.testLevel == "საშუალო") {
        maxPoint *= 2;
    }
    if (myStudent.testLevel == "მარტივი") {
        maxPoint *= 1;
    }
    let choseAnswer = document.quiz.answer.value;
    choseAnswerArray.push(choseAnswer);
    for (let i = 0; i < choseQuestions.length; i++) {
        if (choseAnswerArray[i] == choseQuestions[i].correctAnswer) {
            if (myStudent.testLevel == "რთული") {
                if (isAutomaticalClick) { studentPoint += 0; } // აქ ვიყენებ isAutomaticalClick პარამეტრს რომლითაც ვადგენ მოსწავლეს დრო ამოეწურა და თავისით გადავიდა პროგრამა შემდეგ კითხვაზე თუ არა და შესაბამისი ქულაც იწერება
                else if (!isAutomaticalClick) { studentPoint += 3; }
            }
            if (myStudent.testLevel == "საშუალო") {
                if (isAutomaticalClick) { studentPoint += 0; }
                else if (!isAutomaticalClick) { studentPoint += 2; }
            }
            if (myStudent.testLevel == "მარტივი") {
                if (isAutomaticalClick) { studentPoint += 0; }
                else if (!isAutomaticalClick) { studentPoint += 1; }
            }
        } else if (choseAnswerArray[i] != choseQuestions[i].correctAnswer) {
            if (myStudent.testLevel == "რთული") {
                studentPoint -= 1;
            }
            if (myStudent.testLevel == "საშუალო") {
                studentPoint += 0;
            }
            if (myStudent.testLevel == "მარტივი") {
                studentPoint += 0;
            }
        }
    }
    // საბოლოო ქულის დაწერის მომენტში შეცდომას უშვებდა ხოლმე. კერძოდ მიღებულ ქულას ამრავლებდა 2-ზე visitedCount-ის დახმარებით კი ამ პრობლემის გადაჭრის გზა მიწერია
    if (visitedCount > 1) {
        studentPoint /= visitedCount;
    }
    if (studentPoint < 0) {
        studentPoint = 0;
    }
    myStudent.myPoints = studentPoint;

    window.localStorage.setItem("Student[" + JSON.parse(window.localStorage.getItem("itemCount")) + "]", JSON.stringify(myStudent));// აქ კი სტუდენტს ვუფიქსირებ ქულას რომელიც მიიღო

    document.querySelector(".point").innerText = studentPoint + "/" + maxPoint; // დასრულებისას ეკრანზე გამოვა რამდენი ქულა მიიღო სტუდენტმა მაქსიმუმიდან

    // რაც არ მჭირდება ეკრანიდან ვმალავ და რაც მჭირდება ხილვადობას ვაძლევ
    document.querySelector(".quizContainer").hidden = true;
    document.querySelector(".timer").hidden = true;
    endBtn.hidden = true;

    // აქ მქონდა რაღაც ბაგები. რაღაც პერიოდის შემდეგ ეკრანზე ჩნდებოდა ისეთი კონტეინერები რომელთა გამოჩენაც საჭირო აღარ იყო და ქვემოთ if,else-ბით მათი გადაჭრის ხერხები მიწერია.

    if (document.querySelector(".start").hidden == true) {
        document.querySelector(".point-container").hidden = false;
    }
    else
        if (document.querySelector(".start").hidden == false) {
            document.querySelector(".point-container").hidden = true;
            if (visitedCount > 0) {
                location.reload();
            }
        }
    if (studentPoint == maxPoint) {   // თუ მოსწავლე აიღებს მაქსიმუმ ქულას ეკრანზე გამოვა მისი ქულა და ფონად ფეიერვერკის  ვიდეოჩანაწერი ედება
        document.querySelector("#myVideo").hidden = false;
        document.querySelector(".point").style.color = "white";
        document.querySelector(".point").style.fontSize = "28px";
        document.querySelector(".point").innerText = "მაქსიმუმი " + document.querySelector(".point").innerText;;
    } else {
        document.querySelector(".point").style.color = "darkslategrey";
    }
});

// ქვემოთ აღწერილია ფუნქცია რომელიც გამოიძახება შემდეგ კითხვაზე გადასვლის ღილაკზე დაჭერისას.
nextBtn.addEventListener("click", function () {
    let choseAnswer = document.quiz.answer.value; // აქ ვინახავ სტუდენტის მიერ არჩეულ კითხვას 
    if (window.localStorage.getItem("LevelQuiz") == "რთული") {
        myQuestions = hardQuestions;  // myQuestions გახდება იმ კონტეინერის ტოლი რა ტიპის ტესტსაც სტუდენტი აკეთებს

        if (hardQuestions.length > 1) {
            questionCaunt++;
            now.innerText = questionCaunt; // მერამდენე კითხვაზეა სტუდენტი ვწერ
        }
        if (myQuestions.length > 0) {
            if (hardQuestions.length == 1) {
                endBtn.hidden = false;
                nextBtn.hidden = true;
                now.innerText = sum.innerText;
            }
            /* ქვემოთ კი მიწერია კითვების გამოსვლა ეკრანზე რანდომად. კერძოდ კი randomIndex ვიღებ რანდომ ინდექსს და მისი საშუალებით
            აირჩევს პროგრამა შესაბამისად რომელიმე რანდომ არჩეულ კითხვას და შემდეგ როცა კითვა გამოტანილი იქნება შემდეგ კითხვაზე ღილაკის დაჭერისას ჭაიშლება ეს კითხვა ჩემი კითვების მასივიდან, რათა აღარ განმეორდეს იგი. რათქმაუნდა შესაძლებელია randomIndex-ის მნიშვნელობა განმეორდეს, მაგარამ რადგან კითხვა წაშლილი მექნება მისი ინდექსი შესაბამისად სხვა კითვის ინდექსი
            გახდება და განმეორებაც შეუძლებელი იქნება
            */
            randomIndex = Math.floor(Math.random() * myQuestions.length);
            let randomElement = myQuestions[randomIndex];
            question.innerText = randomElement.question;
            answer1.innerText = randomElement.answer_1;
            answer2.innerText = randomElement.answer_2;
            answer3.innerText = randomElement.answer_3;
            answer4.innerText = randomElement.answer_4;
            myQuestions.splice(randomIndex, 1);
            progress.value += 100 / sum.innerText; // ვარეგულირებ როგორი არითმეტიკული პროგრესიით უნდა გაიზარდოს პროგრეს ბარის მნიშვნელობა
            min1.innerText = 30;
            minutCount = 30;
            choseAnswerArray.push(choseAnswer); // ვინახავ არჩეულ კითხვას შესაფერის მასივში
            choseQuestions.push(randomElement); /* ვინახავ ეკრანზე გამოსულ რანდომ კითხვის  შესაფერის მასივში, რათა ამ ორი მასივის მეშვეობით შევაფასო სტუდენტი. ანუ ეს მასივები ტოლი სიგრძისანი გამოდიან და ერთი მასივის 
            ყოველი ინდექსი მეორე მასივის იგივე ინდექსს შეეფერება. ანუ პასუხების მასივის პირველი ელემენტი კითხვების მასივის
            პირველი ელემენტის პასუხი გამოდის და ასე შემდეგ.
            */
        }
    }

    // ქვემოთაც იგივე ფუნქცისს შიაარსი მიწერია უბარლოდ განხილული ეხლა უკვე საშუალო და მარტივი ტესტებისთვის
    if (window.localStorage.getItem("LevelQuiz") == "საშუალო") {
        myQuestions = mediumQuestions;
        if (mediumQuestions.length > 1) {
            questionCaunt++;
            now.innerText = questionCaunt;
        }
        if (myQuestions.length > 0) {
            if (mediumQuestions.length == 1) {
                endBtn.hidden = false;
                nextBtn.hidden = true;
                now.innerText = sum.innerText;
            }
            randomIndex = Math.floor(Math.random() * myQuestions.length);
            let randomElement = myQuestions[randomIndex];
            question.innerText = randomElement.question;
            answer1.innerText = randomElement.answer_1;
            answer2.innerText = randomElement.answer_2;
            answer3.innerText = randomElement.answer_3;
            answer4.innerText = randomElement.answer_4;
            myQuestions.splice(randomIndex, 1);
            progress.value += 100 / sum.innerText;
            min1.innerText = 45;
            minutCount = 45;
            choseAnswerArray.push(choseAnswer);
            choseQuestions.push(randomElement);
        }
    }
    if (window.localStorage.getItem("LevelQuiz") == "მარტივი") {
        myQuestions = easyQuestions;
        if (easyQuestions.length > 1) {
            questionCaunt++;
            now.innerText = questionCaunt;
        }
        if (myQuestions.length > 0) {
            if (easyQuestions.length == 1) {
                endBtn.hidden = false;
                nextBtn.hidden = true;
                now.innerText = sum.innerText;
            }
            randomIndex = Math.floor(Math.random() * myQuestions.length);
            let randomElement = myQuestions[randomIndex];
            question.innerText = randomElement.question;
            answer1.innerText = randomElement.answer_1;
            answer2.innerText = randomElement.answer_2;
            answer3.innerText = randomElement.answer_3;
            answer4.innerText = randomElement.answer_4;
            myQuestions.splice(randomIndex, 1);
            progress.value += 100 / sum.innerText;
            min1.innerText = 60;
            minutCount = 60;
            choseAnswerArray.push(choseAnswer);
            choseQuestions.push(randomElement);
        }
    }
});//-----------------------------------------------------------------------------------------------------------------

if (window.localStorage.getItem("LevelQuiz") == "რთული") {
    sum.innerText = hardQuestions.length;
    if (hardQuestions.length == 1) {
        nextBtn.hidden = true;
        endBtn.hidden = false;
    }
    myQuestions = hardQuestions;
    randomIndex = Math.floor(Math.random() * myQuestions.length);
    let randomElement = myQuestions[randomIndex];
    question.innerText = randomElement.question;
    answer1.innerText = randomElement.answer_1;
    answer2.innerText = randomElement.answer_2;
    answer3.innerText = randomElement.answer_3;
    answer4.innerText = randomElement.answer_4;
    myQuestions.splice(randomIndex, 1);
    min1.innerText = 30;
    minutCount = 30;
    let timeInterval0 = setInterval(interval0, 1000);
    // Timer-ის ფუნქცია
    function interval0() {
        if (minutCount <= 0) {
            min1.innerText = "00";
            if (hardQuestions.length == 0) {
                endBtn.click();
                clearInterval(timeInterval0);
            } else {
                nextBtn.click();
            }
            isAutomaticalClick = true;
        }
        else {
            minutCount--;
            if (minutCount < 10) { //როცა 10-ზე ნაკლები რიცხვები წამოვა წინ დავუწერ ნულიანს და შემდეგ timer-ს. ანუ 08,09 ასეთი რიცხვების მისაღებად
                min1.innerHTML = "0" + minutCount;
            } else {
                min1.innerText -= 1;
            }
        }
    }
    //ტექსტი რომელიც გამოვა ტესტის დაწყებამდე, რა დონისაა ის და თითო კითხვისთვის გამოყოფილი დრო
    document.querySelector("._2").innerHTML = " რთული";
    document.querySelector("._4").innerHTML = " 30 წამი";
    choseQuestions.push(randomElement);
}

// იგივე მომენტები ხდება ქვევითაც უბრალოდ განხილული მაქ ახლა უკვე საშუალო და მარტივი ტესტის ვარიანტები

if (window.localStorage.getItem("LevelQuiz") == "საშუალო") {
    sum.innerText = mediumQuestions.length;

    if (mediumQuestions.length == 1) {
        nextBtn.hidden = true;
        endBtn.hidden = false;
    }
    myQuestions = mediumQuestions;
    randomIndex = Math.floor(Math.random() * myQuestions.length);
    let randomElement = myQuestions[randomIndex];
    question.innerText = randomElement.question;
    answer1.innerText = randomElement.answer_1;
    answer2.innerText = randomElement.answer_2;
    answer3.innerText = randomElement.answer_3;
    answer4.innerText = randomElement.answer_4;
    myQuestions.splice(randomIndex, 1);
    min1.innerText = 45;
    minutCount = 45;
    let timeInterval = setInterval(interval, 1000);
    function interval() {
        if (minutCount <= 0) {
            min1.innerText = "00";
            if (mediumQuestions.length == 0) {
                endBtn.click();
                clearInterval(timeInterval);
            } else {
                nextBtn.click();
            }
            isAutomaticalClick = true;
        }
        else {
            minutCount--;
            if (minutCount < 10) {
                min1.innerText = "0" + minutCount;

            } else {
                min1.innerText -= 1;
            }
        }
    }
    document.querySelector("._2").innerHTML = " საშუალო";
    document.querySelector("._4").innerHTML = " 45 წამი";
    choseQuestions.push(randomElement);
}
if (window.localStorage.getItem("LevelQuiz") == "მარტივი") {
    sum.innerText = easyQuestions.length;
    if (easyQuestions.length == 1) {
        nextBtn.hidden = true;
        endBtn.hidden = false;
    }
    myQuestions = easyQuestions;
    randomIndex = Math.floor(Math.random() * myQuestions.length);
    let randomElement = myQuestions[randomIndex];
    question.innerText = randomElement.question;
    answer1.innerText = randomElement.answer_1;
    answer2.innerText = randomElement.answer_2;
    answer3.innerText = randomElement.answer_3;
    answer4.innerText = randomElement.answer_4;
    myQuestions.splice(randomIndex, 1);
    min1.innerText = 60;
    minutCount = 60;
    let timeInterval1 = setInterval(interval1, 1000);
    function interval1() {
        if (minutCount <= 0) {
            min1.innerText = "00";
            if (easyQuestions.length == 0) {
                endBtn.click();
                clearInterval(timeInterval1);
            } else {
                nextBtn.click();
            }
            isAutomaticalClick = true;
        }
        else {
            minutCount--;
            if (minutCount < 10) {
                min1.innerText = "0" + minutCount;
            } else {
                min1.innerText -= 1;
            }
        }
    }
    document.querySelector("._2").innerHTML = " მარტივი";
    document.querySelector("._4").innerHTML = " 60 წამი";
    choseQuestions.push(randomElement);
}
//-------------------------------------------------------------------------------------

/*
   გსვლის ღილაკზე დაწკაპუნებისას გამოიძახება ეს ფუნქცია: ჩაიტვირთება ის გვერდი სადაც გამოსახული იქნება ტესტის თავიდან დაწყების რეგისტრაცია და ლიდერ ბორდზე გადასვლის ღილაკი, სადაც მონაწილის ქულა ჩაწერილი იქნება შესაფერის ტიპის ლიდერ ბორდზე და სტუდენტები ცხრილში დალაგებული იქნებიან მათ მიერ მიღებული ქულის კლებადობით
*/
function backCk() {
    location.replace("../HTML/index.html");
}
function repeatCk(){
    location.reload();
}