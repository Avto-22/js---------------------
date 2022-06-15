let id_input = document.querySelector("#id_input");
let worning_text = document.querySelector(".worning_text");
let showMe = document.querySelector(".showMe");
function checkTeacher() { // პაროლის სისწორის შემოწმების ფუნქცია
    if (true) {
        location.replace("../HTML/question.html");
    }
    else {

        id_input.style.boxShadow = "0 0 5pt 2pt red";
    }
}
function writing() {
    id_input.style.boxShadow = "0 0 5pt 2pt lightblue";
}

let clickCount = 0;
/*
პაროლის გამოჩენა და დამალვა თვალის დაჭერისას. ვიყენებ clickCount პარამეტრს, რომლის პირველი მნიშვნელობა იქნება 0,
როცა სააჭერს მომხმარებელი მისი მნიშვნელობა ერთით გაიზრდება. რადგან გვერდის ჩატვირთვისას პაროლი დაბურულია და 
ლოგიკურად ყოველი მეორე დაკლიკება ნიშნავს რომ, მომხმარებლს უნდა პაროლი ისევ დამალოს ამიტომ ყოველ კენტ clickCount-ზე
პაროლს ხილვადს გავხდი ხოლო ყოველ ლუწ clickCount-ზე პაროლს ისევ დავმალავ
*/
showMe.addEventListener("click", function () {
    clickCount++;
    if (clickCount % 2 != 0) {
        id_input.type = "text";
    }
    else {
        id_input.type = "password";
    }
});