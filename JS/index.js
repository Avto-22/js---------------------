let Question1 = function (myQuestion, answer1, answer2, answer3, answer4, corectAnswer, level) {
    this.question = myQuestion;
    this.answer_1 = answer1;
    this.answer_2 = answer2;
    this.answer_3 = answer3;
    this.answer_4 = answer4;
    this.correctAnswer = corectAnswer;
    this.questionLevel = level;
}
// ძირითადი 10 რთული კითვის შექმნა localStorage-ში
let hard_Q1 = new Question1("აშშ-ის რომელ შტატშია ყველაზე მეტი უნივერსიტეტი და კოლეჯი?", "ნიუ-იორკი", "კალიფორნია", "ვაშინგტონი", "ფლორიდა", "2", "რთული");
let hard_Q2 = new Question1("რომელ ქალაქში მდებარეობს პეტრონასის ტყუპი კოშკები?", "დუბაი", "სინგაპური", "კუალა ლუმპური", "სიდნეი", "3", "რთული");
let hard_Q3 = new Question1("რომელ ქალაქში მდებარეობს ეს გადახრილი კოშკი?", "პიზა", "მილანი", "რომი", "ალბერობელო", "1", "რთული");
let hard_Q4 = new Question1("რომელია ყავის მწარმოებელი ყველაზე დიდი ქვეყანა მსოფლიოში?", "ვიეტნამი", "კოლუმბია", "ბრაზილია", "პერუ", "3", "რთული");
let hard_Q5 = new Question1("რა ენაზე საუბრობს ირანის მოსახლეობის ყველაზე დიდი ნაწილი?", "სპარსული", "ქურთული", "ბალოჩი", "პაშაი", "1", "რთული");
let hard_Q6 = new Question1("კანადის რომელი პროვინცია ესაზღვრება კვებეკს დასავლეთით?", "ონტარიო", "ალბერტა", "სასკაჩევანი", "მანიტოვა", "1", "რთული");
let hard_Q7 = new Question1("ევროპის რომელ ქვეყანას აქვს ყველაზე გრძელი სანაპირო ზოლი?", "საბერძნეთი", "იტალია", "ხორვატია", "ნორვეგია", "4", "რთული");
let hard_Q8 = new Question1("რომელი ქვეყნის დედაქალაქია ბოგოტა?", "არგენტინა", "პერუ", "ბოლივია", "კოლუმბია", "4", "რთული");
let hard_Q9 = new Question1("სად მდებარეობს გაერო-ს შტაბ-ბინა?", "ნიუ-იორკი", "ბრიუსელი", "ჟენევა", "ვაშინგტონი", "1", "რთული");
let hard_Q10 = new Question1("რომელია მარჯნის რიფებისა და კუნძულების უზარმაზარი ჯაჭვი მსოფლიოში?", "წითელი ზღვის მარჯნის რიფი", "ახალი კალედონიის ბარიერული რიფი", "ფლორიდას რიფი", "დიდი ბარიერული რიფი", "4", "რთული");

window.localStorage.setItem("Question[1]", JSON.stringify(hard_Q1));
window.localStorage.setItem("Question[2]", JSON.stringify(hard_Q2));
window.localStorage.setItem("Question[3]", JSON.stringify(hard_Q3));
window.localStorage.setItem("Question[4]", JSON.stringify(hard_Q4));
window.localStorage.setItem("Question[5]", JSON.stringify(hard_Q5));
window.localStorage.setItem("Question[6]", JSON.stringify(hard_Q6));
window.localStorage.setItem("Question[7]", JSON.stringify(hard_Q7));
window.localStorage.setItem("Question[8]", JSON.stringify(hard_Q8));
window.localStorage.setItem("Question[9]", JSON.stringify(hard_Q9));
window.localStorage.setItem("Question[10]", JSON.stringify(hard_Q10));
//--------------------------------------------------------------------------------------------------------

//ძირითადი 8 საშუალო კითვის შექმნა localStorage-ში
let medium_Q1 = new Question1("რომელ ქვეყანაში მდებარეობს ტრევის შადრევანი?", "ესპანეთი", "საფრანგეთი", "იტალია", "გერმანია", "3", "საშუალო");
let medium_Q2 = new Question1("რომელია მოცულობით ყველაზე დიდი აქტიური ვულკანი დედამიწაზე?", "ეტნა", "მაუნა-ლოა", "მაუნა-კეა", "ერებუსი", "2", "საშუალო");
let medium_Q3 = new Question1("რომელია ყველაზე დიდი უდაბნო მსოფლიოში?", "ანტაქრტიდა", "არქტიკა", "საჰარა", "გობი", "1", "საშუალო");
let medium_Q4 = new Question1("ჩამოთვლილთაგან რომელი არაა ოპერაციული სისტემა?", "Photoshop", "Linux", "Android", "MacOS", "1", "საშუალო");
let medium_Q5 = new Question1("ჩამოთვილილი სისტემებიდან რომელია Microsoft-ის შექმნილი?", "OS x", "Windows", "Linux", "CP/M", "2", "საშუალო");
let medium_Q6 = new Question1("ჩამოთვლილთაგან რომელი სისტემა ეკუთვნის Samsung-ს ?", "Tizen", "Android", "iOS", "One UI", "1", "საშუალო");
let medium_Q7 = new Question1("რომელი ოპერაციული სისტემის ბირთვზეა დაფუძნებული ანდროიდი?", "Symbian", "Windows", "OS X", "Linux", "4", "საშუალო");
let medium_Q8 = new Question1("ჩამოთვლილი ოპერაციული სისტემებიდან რომელია შექმნილი სმარტფონებისათვის?", "Fedora", "Harmony OS", "Android", "Harmony OS და Android", "4", "საშუალო");

window.localStorage.setItem("Question[11]", JSON.stringify(medium_Q1));
window.localStorage.setItem("Question[12]", JSON.stringify(medium_Q2));
window.localStorage.setItem("Question[13]", JSON.stringify(medium_Q3));
window.localStorage.setItem("Question[14]", JSON.stringify(medium_Q4));
window.localStorage.setItem("Question[15]", JSON.stringify(medium_Q5));
window.localStorage.setItem("Question[16]", JSON.stringify(medium_Q6));
window.localStorage.setItem("Question[17]", JSON.stringify(medium_Q7));
window.localStorage.setItem("Question[18]", JSON.stringify(medium_Q8));
//----------------------------------------------------------------------------------------------------------

//ძირითადი 5 მარტივი კითვის შექმნა localStorage-ში
let easy_Q1 = new Question1("სად ცხოვრობს შრეკი?", "ფერმაში", "გამოქვაბულშ", "ჭაობში", "კორპუსის ბინაში", "3", "მარტივი");
let easy_Q2 = new Question1("ვინაა შრეკის საუკეთესო მეგობარი, რომელიც მუდამ მის ნერვებზე თამაშობს?", "მგელი", "ვირი", "გოჭი", "დრაკონი", "2", "მარტივი");
let easy_Q3 = new Question1("რატომ უნდა შრეკს პრინცესა ფიონას გადარჩენა?", "ფიონა უყვარს", "მეფისგან ჯილდოს მიღება უნდა", "საკუთარი ჭაობის გადარჩენა უნდა", "უნდა რომ ადამიანი გახდეს", "3", "მარტივი");
let easy_Q4 = new Question1("რა არის ჩექმებიანი კატის მთავარი იარაღი ძლიერი მტრის წინაშე?", "საწამლავი, რომელსაც კლანჭბში მალავს", "უსაყვარლესი გამოხედვა", "თაგვის ხაფანგი", "მისი ჩექმების მომწამლავი სუნი", "2", "მარტივი");
let easy_Q5 = new Question1("რომელ ბოსტნეულს ადარებს შრეკი კაციჭამიებს?", "კომბოსტოს", "კარტოფილს", "ხახვს", "ბროკოლს", "3", "მარტივი");

window.localStorage.setItem("Question[19]", JSON.stringify(easy_Q1));
window.localStorage.setItem("Question[20]", JSON.stringify(easy_Q2));
window.localStorage.setItem("Question[21]", JSON.stringify(easy_Q3));
window.localStorage.setItem("Question[22]", JSON.stringify(easy_Q4));
window.localStorage.setItem("Question[23]", JSON.stringify(easy_Q5));
//---------------------------------------------------------------------------------------------------------

/*
ვქმნი localStorage-ში itemCount-ს რომელიც გაიზრდება 1-ით, როცა გვერდი ჩაიტვირთება ხოლმე. 
itemCount-ის მეშვეობით შემეძლება შევქმნა სტუდენტები ისეთი გასაღები სიტყვით რომლებთაც შორის განსხვავება მხოლოდ
itemCount იქნება. შესაბამისად ადვილად შემეძლება for ციკლით localStorage-ში შესვლა და სასურველი სტუდენტების მიღება 
ან წაშლა. ქვევით სოწრედ ამ for ციკლის გამოყენებით ვაკეთებ: თუ ერთი და იგივე დონის ქვიზი ერთმა მონაწილემ რამდენჯერმე გააკეთა ამით ცხრილში დავტოვებ მის მხოლოდ ბოლო ნამუშევარს.
--------------------------------------------------------------------------------------------------*/
window.localStorage.setItem("itemCount", window.localStorage.getItem("itemCount"));
window.localStorage.setItem("itemCount", JSON.parse(window.localStorage.getItem("itemCount")) + 1);
//------------------------------------------------------------------------------------------------------

let sign_btn = document.getElementById("button");
let student_name = document.querySelector(".student_name");
let student_lastname = document.querySelector(".student_lastname");
let student_group = document.querySelector(".student_group");
let worning_text = document.querySelector(".worning_text");
let done = document.querySelector("#done");

// ვქმნი ობიქტს Student-ს, რომელსაც აქვს სახელი, გვარი, ჯგუფის ნომერი და არჩეული ტესტის დონე
let Student = function (name, lastname, level, group) {
    this.name = name;
    this.lastname = lastname;
    this.testLevel = level;
    this.myPoints = 0;
    this.group = group;
}

/*
ვამოწმებ თუ სტუდენტმა შეავსო ყველა საჭირო ველი და თუ ყველაფერი სწორია მაშინ ვქმნი localStorage-ში სტუდენტის ობიექტს
რომელსაც გადავცემ შევსებული ველებიდან საჭირო პარამეტრებს, წინააღდმეგ შემთხვევაში როცა ველები არაა სწორად შევსებული
(მხოლოდ სფეისები ან არაფერი აქვს ველში შევანილი) გამოდის შესაფერისი შეტყობინება.
*/
function checkStudentLoad() {
    if (student_lastname.value.replace(/\s/g, '') != "" && student_name.value.replace(/\s/g, '') != "" && student_group.value.replace(/\s/g, '') != "" && parseInt(student_group.value) > 0) {
        window.localStorage.setItem("Student[" + window.localStorage.getItem("itemCount") + "]", JSON.stringify(new Student(student_name.value, student_lastname.value, done.value, student_group.value)));
        window.localStorage.setItem("LevelQuiz", done.value);
        location.replace("../HTML/quiz.html");
        let lastStud = JSON.parse(window.localStorage.getItem("Student[" + window.localStorage.getItem("itemCount") + "]"));
        for (let i = 1; i < JSON.parse(window.localStorage.getItem("itemCount")); i++) { // თუ ერთი და იგივე დონის ქვიზი ერთმა მონაწილემ რამდენჯერმე გააკეთა ამით ცხრილში დავტოვებ მის მხოლოდ ბოლო ნამუშევარს
            if (JSON.parse(window.localStorage.getItem("Student[" + i + "]")) !== null) {
                let stud = JSON.parse(window.localStorage.getItem("Student[" + i + "]"));
                if (stud.name == lastStud.name && stud.lastname == lastStud.lastname && stud.testLevel == lastStud.testLevel && stud.group == lastStud.group) {
                    window.localStorage.removeItem("Student[" + i + "]");
                }
            }
        }
    }
    else {
        worning_text.hidden = false;
        if (student_lastname.value.replace(/\s/g, '') == "") {
            worning_text.innerText = "შეიყვანეთ გვარი ";
            document.querySelector(".student_lastname").style.boxShadow = "0 0 5pt 2pt red";
        }
        if (student_name.value.replace(/\s/g, '') == "") {
            worning_text.innerText = "შეიყვანეთ სახელი ";
            document.querySelector(".student_name").style.boxShadow = "0 0 5pt 2pt red";
        }
        if (student_group.value.replace(/\s/g, '') == "" || parseInt(student_group.value) <= 0) {
            worning_text.innerText = "შეიყვანეთ ჯგუფის ნომერი";
            document.querySelector(".student_group").style.boxShadow = "0 0 5pt 2pt red";
        }
        if (student_lastname.value.replace(/\s/g, '') == "" && student_name.value.replace(/\s/g, '') == "") {
            worning_text.innerText = "შეიყვანეთ სახელი და გვარი";
        }
        if (student_lastname.value.replace(/\s/g, '') == "" && (student_group.value.replace(/\s/g, '') == "" || parseInt(student_group.value) < 0)) {
            worning_text.innerText = "შეიყვანეთ გვარი და ჯგუფის ნომერი";
        }
        if (student_group.value.replace(/\s/g, '') == "" && (student_name.value.replace(/\s/g, '') == "" || parseInt(student_group.value) < 0)) {
            worning_text.innerText = "შეიყვანეთ სახელი და ჯგუფის ნომერი";
        }
        if (student_lastname.value.replace(/\s/g, '') == "" && student_name.value.replace(/\s/g, '') == "" && (student_group.value.replace(/\s/g, '') == "") || parseInt(student_group.value) < 0) {
            worning_text.innerText = "შეიყვანეთ სახელი, გვარი და ჯგუფის ნომერი";
        }
    }
}

/*
როგორ უნდა შეიცვალოს input ველის ჩრდილები, როცა კურსორი input ველში დგას
*/
function writing() {
    worning_text.hidden = true;
    document.querySelector(".student_name").style.backgroundColor = "black";
    document.querySelector(".student_name").style.boxShadow = "0 0 5pt 2pt blue";
}
function writing1() {
    worning_text.hidden = true;
    document.querySelector(".student_lastname").style.backgroundColor = "black";
    document.querySelector(".student_lastname").style.boxShadow = "0 0 5pt 2pt blue";
}
function writing2() {
    worning_text.hidden = true;
    document.querySelector(".student_group").style.backgroundColor = "black";
    document.querySelector(".student_group").style.boxShadow = "0 0 5pt 2pt blue";
}
function out() {
    document.querySelector(".student_name").style.backgroundColor = "black";
}