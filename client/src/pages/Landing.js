function Landing(props) {
  const handleNameInput = (event) => {
    props.setStudentName(event.target.value);
  }

  const addStudent = () => {
    props.setStudents([...props.students, props.studentName]);
    props.setStudentName('');
  }

  return (
    <main>
      <h1>Landing</h1>
      <p>Welcome to our React Starter Site</p>

      <h3>Student List:</h3>
      {props.students.map((student, i) => (
        <p key={i}>{student}</p>
      ))}

      <input onChange={handleNameInput} value={props.studentName} type="text" placeholder="Type student name" />
      <button onClick={addStudent}>Add Student</button>
    </main>
  )
}

export default Landing;

// btn.addEventListener('click', function() {
//   const input = document.querySelector('#name-input');

//   students.push(input.value);

//   // Output the new student to the DOM
// })
