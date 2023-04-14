const student = {
  firstName: "krishna",
  lastName: "Patel",
  age: 23,
  skills: ["JavaScript", "HTML", "CSS"],
  country: "india",
  enrolled: {
    math: true,
    science: true,
    history: false
  },
  student2:{
  firstName: "raj",
  lastName: "Patel",
  age: 18,
  skills: ["JavaScript", "HTML", "CSS","Python"],
  country: "india",
  enrolled: {
    math: true,
    science: false,
    history: true
  }
  }
};


const studentString = JSON.stringify(student);

localStorage.setItem("student", studentString);