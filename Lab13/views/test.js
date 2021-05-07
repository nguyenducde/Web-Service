var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
function getAllStudent() {
var listStudentBlock =
    document.querySelector('#list-student');
    
    fetch("http://localhost:5000", requestOptions)
  .then(response => response.text())
        .then(function (result) {
      var html =result.map(function (student) {
        return `
        <li>
        <h6>${student.MSSV}</h6>
        <p>${student.HoVaTen}</p>
        </li>
        `
    });
            listStudentBlock.innerHTML = html.join('');

  } )
    .catch(error => console.log('error', error));
  
}
getAllStudent();

    
    