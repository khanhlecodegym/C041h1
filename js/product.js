let studentsC4 = ["Thanh Nokia", "Lân Iphone"];

let students_main = document.getElementById("students_main");
let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', addStudent);

function getStudents(studentsC4) {
  for (let i = 0; i < studentsC4.length; i++) {
    createStudent(studentsC4[i]);
  }
}

function createStudent(student) {
  let studentElement = document.createElement("div");
  studentElement.classList.add("row");

  let studentName = student;
  let studentHTML = `
    <div class="col-8">${studentName}</div>
    <div class="col-2"><button>Edit</button></div>
    <div class="col-2"><button>Delete</button></div>
    `;

    studentElement.innerHTML = studentHTML;
    students_main.appendChild(studentElement);
}

function addStudent() {
    let studentName = document.getElementById('studentName').value;

    if(studentName === '') {
        alert('Nhập tào lao');
        return;
    }

    studentsC4.push(studentName);
    createStudent(studentName);
    document.getElementById('studentName').value = "";
}

getStudents(studentsC4);