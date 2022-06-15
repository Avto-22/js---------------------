let hardStudents = [];
let mediumStudents = [];
let easyStudents = [];
// ტესტის დონეების მიხედვით ვყრი სტუდენტებს შესაბამის მასივებში
for (let i = 0; i < JSON.parse(window.localStorage.getItem("itemCount")); i++) {
    if (window.localStorage.getItem("Student[" + i + "]") !== null) {
        if (JSON.parse(window.localStorage.getItem("Student[" + i + "]")).testLevel == "რთული") {
            hardStudents.push(JSON.parse(window.localStorage.getItem("Student[" + i + "]")));
        }
        if (JSON.parse(window.localStorage.getItem("Student[" + i + "]")).testLevel == "საშუალო") {
            mediumStudents.push(JSON.parse(window.localStorage.getItem("Student[" + i + "]")));
        }
        if (JSON.parse(window.localStorage.getItem("Student[" + i + "]")).testLevel == "მარტივი") {
            easyStudents.push(JSON.parse(window.localStorage.getItem("Student[" + i + "]")));
        }
    }
}//----------------------------------------------------------------------------------------------------
// ყველა მასივში ვალაგებ  სტუდენტებს მათი მიღებული ქულის კლებადობით
hardStudents.sort((a, b) => {
    if (a.myPoints > b.myPoints)
        return -1;
    if (a.myPoints < b.myPoints)
        return 1;
    return 0;
});
mediumStudents.sort((a, b) => {
    if (a.myPoints > b.myPoints)
        return -1;
    if (a.myPoints < b.myPoints)
        return 1;
    return 0;
});
easyStudents.sort((a, b) => {
    if (a.myPoints > b.myPoints)
        return -1;
    if (a.myPoints < b.myPoints)
        return 1;
    return 0;
});//----------------------------------------------------------------------------
let hard_table = document.querySelector(".hard_table");
let medium_table = document.querySelector(".medium_table");
let easy_table = document.querySelector(".easy_table");

//------------------------ვათავსებ სტუდენტებს შესაფერის ცხრილებში

for (let i = 0; i < hardStudents.length; i++) {
    let h_new_tr = document.createElement("tr");
    let h_new_number_th = document.createElement("th");
    let h_new_name_th = document.createElement("th");
    let h_new_lasName_th = document.createElement("th");
    let h_new_group_th = document.createElement("th");
    let h_new_point_th = document.createElement("th");
    h_new_number_th.innerText = i + 1;
    h_new_name_th.innerText = hardStudents[i].name;
    h_new_lasName_th.innerText = hardStudents[i].lastname;
    h_new_point_th.innerText = hardStudents[i].myPoints;
    h_new_group_th.innerText = hardStudents[i].group;
    h_new_tr.appendChild(h_new_number_th);
    h_new_tr.appendChild(h_new_name_th);
    h_new_tr.appendChild(h_new_lasName_th);
    h_new_tr.appendChild(h_new_point_th);
    h_new_tr.appendChild(h_new_group_th);
    hard_table.appendChild(h_new_tr);
}

for (let i = 0; i < mediumStudents.length; i++) {
    let m_new_tr = document.createElement("tr");
    let m_new_number_th = document.createElement("th");
    let m_new_name_th = document.createElement("th");
    let m_new_lasName_th = document.createElement("th");
    let m_new_group_th = document.createElement("th");
    let m_new_point_th = document.createElement("th");
    m_new_number_th.innerText = i + 1;
    m_new_name_th.innerText = mediumStudents[i].name;
    m_new_lasName_th.innerText = mediumStudents[i].lastname;
    m_new_point_th.innerText = mediumStudents[i].myPoints;
    m_new_group_th.innerText = mediumStudents[i].group;
    m_new_tr.appendChild(m_new_number_th);
    m_new_tr.appendChild(m_new_name_th);
    m_new_tr.appendChild(m_new_lasName_th);
    m_new_tr.appendChild(m_new_point_th);
    m_new_tr.appendChild(m_new_group_th);
    medium_table.appendChild(m_new_tr);
}

for (let i = 0; i < easyStudents.length; i++) {
    let new_tr = document.createElement("tr");
    let new_number_th = document.createElement("th");
    let new_name_th = document.createElement("th");
    let new_lasName_th = document.createElement("th");
    let new_group_th = document.createElement("th");
    let new_point_th = document.createElement("th");
    new_number_th.innerText = i + 1;
    new_name_th.innerText = easyStudents[i].name;
    new_lasName_th.innerText = easyStudents[i].lastname;
    new_point_th.innerText = easyStudents[i].myPoints;
    new_group_th.innerText = easyStudents[i].group;
    new_tr.appendChild(new_number_th);
    new_tr.appendChild(new_name_th);
    new_tr.appendChild(new_lasName_th);
    new_tr.appendChild(new_point_th);
    new_tr.appendChild(new_group_th);
    easy_table.appendChild(new_tr);
}//---------------------------------------------------------------------------