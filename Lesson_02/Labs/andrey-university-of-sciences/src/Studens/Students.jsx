//Each Student has name, faculty and a collection of grades.
//Add some fucking Students as useState.
//Rander them by dynamic randaring.
//Use map to render them.
//Each student from students Array is a fucking Student.jsx file type.
//Use a component for each student.
//Add a fucking style from Students.css file.
//Do not take the Students.jsx file, you are in there already.
//Do not take the University.jsx file, you are in another fucking file' you are in the students.jsx file.
// Use the all sttle seted on the Student.css:
//From this component i can add and remove students, calculate the avg of all students grades avges and find the most excellent student.
//If this need more components, like add student or other, they should be created in the src/Student folder.
//USe the Student.jsx file to render the students.

import { useEffect, useState } from 'react';
import './Students.css'; // Assuming you have a CSS file for styles
import Student from './Student';

function Students() {
  const [students, setStudents] = useState([
    { name: 'John Doe', faculty: 'Computer Science', grades: [90, 85, 88] },
    { name: 'Jane Smith', faculty: 'Mathematics', grades: [92, 81, 89] },
    { name: 'Alice Johnson', faculty: 'Physics', grades: [95, 87, 90] }
  ]);

  const [newStudent, setNewStudent] = useState({})
  const [avgOfAllStudents, setAvgOfAllStudents] = useState(0);
  const [mostExellentStudent, setMostExellentStudent] = useState({})
  
  useEffect(() => {
    const avgs = students.map(s => s.grades.reduce((a, b) => a + b, 0) / s.grades.length);
    setAvgOfAllStudents(avgs.length ? (avgs.reduce((a, b) => a + b, 0) / avgs.length).toFixed(2) : 0);
    const maxAvg = Math.max(...avgs);
    const idx = avgs.indexOf(maxAvg);
    setMostExellentStudent(students[idx] || {});
  }, [students]);
  

  // Method to add a new grade to an existing student by name
  const addGradeToStudent = (studentName, grade) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.name === studentName
          ? { ...student, grades: [...student.grades, grade] }
          : student
      )
    );
  };

  // Add the all elements used on the Students.css file
  return (
    <>
      <div className="add-student">
        <input className='input-name' type="text" placeholder="Name" onChange={e => setNewStudent({ ...newStudent, name: e.target.value })} />
        <input className='input-faculty' type="text" placeholder="Faculty" onChange={e => setNewStudent({ ...newStudent, faculty: e.target.value })} />
        <input className='input-grade' type="number" placeholder="Grade" onChange={e => setNewStudent({ ...newStudent, grades: [Number(e.target.value)] })} />

        <button onClick={() => {
          if (newStudent.name && newStudent.faculty && newStudent.grades) {
            setStudents([...students, newStudent]);
            setNewStudent({});
          }
        }}>
          Add Student
        </button>
      </div>
      <div className='all-students-avg'>
        <h2>All Students Average Grades: {avgOfAllStudents}</h2>
      </div>
      <div className='most-exellent-student'>
        <h2>Most Exellent Student: <strong> {mostExellentStudent.name} </strong></h2>
      </div>
      <div className="students-table">
        {students && students.map((student, index) => {
          return (
            <div key={index} className="student-row">
              <Student
                studentData={student}
                studentIndex={index}
                addGrade={addGradeToStudent}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Students 