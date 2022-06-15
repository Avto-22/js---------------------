/*
პირველ სტრიქონებში localStorage-ში ვქმნი questionsCount, რომელიც ყოველ გვერიდს ჩატვირთვაზე გაიზრდება ერთით. 
ამით ადვილად შემეძლება localStorage-ში შევქმნა კითხვები და გასაღებ სიტყვად განმასხვავებელი questionsCount იქნება.
ასევე for ციკლით ადვილად შემეძლება localStorage-დან შესაბამისი კითვების მიღება ან წაშლა. რადგან თავიდან ყოველთვის
მექნება 10 რთული 8 საშუალო და 5 მარტივი კითვა, შესაბამისად questionsCount-ის მნიშვნელობას დავიწყებ 24-დან რადგან
როცა localStorage-ში მასწავლებელი შექმნის კითვას მას არ გადაეწეროს თავიდანვე არსებული  10 რთული 8 საშუალო და 5 მარტივი კითხვა. if else-ბით კი ყოველ ჩატვირთვაზე ვახერხებ questionsCount-ის ერთით გაზრდას, რადგან
როცა მისი მეშვეობით for ციკლს დავატრიალებ ძაან დიდ რიცხვებზე არ მოუწიოს ასვლა, if else-ბით რომ არ მეწერა
ყოველ ჩათირთვაზე გამოდიოდა რო 24-თ დაიზრდებოდა წიინა მნიშვნელობა და დიდ რიცხვებს შესაბამისად მალე აარტყამდა
. იგივე ლოგიკა მიწერია quiz.js ფაილში, რადგან ამ შემთვევაში გააჩნია რომელი გვერდი ჩაიტვირთება პირველი.
შეიძლება პირველად მასწავლებლის მიერ კითვის შექმნის გვერდი გაიხსნას ან ტესტის გვერდი, ამიტომ მომიწია ორივეგან 
(teacher.js-ში და quiz.js-ში) ასეთი კოდის დაწერა
---------------------------------------------------------------------------------------------------*/
if (window.localStorage.getItem("questionsCount") !== null) {
    window.localStorage.setItem("questionsCount", window.localStorage.getItem("questionsCount"));
    window.localStorage.setItem("questionsCount", JSON.parse(window.localStorage.getItem("questionsCount")) + 1);
} else if (window.localStorage.getItem("questionsCount") == null) {
    window.localStorage.setItem("questionsCount", window.localStorage.getItem("questionsCount"));
    window.localStorage.setItem("questionsCount", JSON.parse(window.localStorage.getItem("questionsCount")) + 24);
}
//--------------------------------------------------------------------------------------------------

let question = document.querySelector("#kitxva");
let corect_answr = document.querySelector("#swori_pasuxi");
let a_answer = document.querySelector("#pasuxi1");
let b_answer = document.querySelector("#pasuxi2");
let c_answer = document.querySelector("#pasuxi3");
let d_answer = document.querySelector("#pasuxi4");
let level = document.querySelector("#done")
let addBtn = document.querySelector("#button");

let Question = function (myQuestion, answer1, answer2, answer3, answer4, corectAnswer, level) {
    this.question = myQuestion;
    this.answer_1 = answer1;
    this.answer_2 = answer2;
    this.answer_3 = answer3;
    this.answer_4 = answer4;
    this.correctAnswer = corectAnswer;
    this.questionLevel = level;
}

addBtn.addEventListener("click", function () {
    let isFull = true;  // ვიყენებ რათა შევამოწმო ყველა ველი შევსებულია თუ არა
    for (let i = 0; i < 6; i++) {
        if (document.getElementsByTagName("input")[i].value.replace(/\s/g, '') == "") {
            if (i == 5) {
                if (document.getElementsByTagName("input")[i].value != "1" && document.getElementsByTagName("input")[i].value != "2" && document.getElementsByTagName("input")[i].value != "3" && document.getElementsByTagName("input")[i].value != "4") {
                    alert("შეიყვანეთ სწორის პასუხის მხოლოდ რიგითობა !");
                    isFull=false;
                    break;
                }
            } else {
                alert("შეავსეთ ყველა ველი");
                isFull = false;
                break;
            }
        }
    }
    if (isFull) {
        if (corect_answr.value != "1" && corect_answr.value != "2" && corect_answr.value != "3" && corect_answr.value != "4") {
        } else {
            window.localStorage.setItem("Question[" + window.localStorage.getItem("questionsCount") + "]", JSON.stringify(new Question(question.value, a_answer.value, b_answer.value, c_answer.value, d_answer.value, corect_answr.value, level.value)));
        }
    }
});