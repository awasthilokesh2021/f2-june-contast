
const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];


function buildAdata(k){
    const tbodydata = document.getElementById("tbody-data");
      var out = "";
    for(let i=0;i<k.length;i++){
         out += `<tr>
        <td>${k[i].ID}</td>
         <td>${k[i].name}</td>
        <td>${k[i].email}</td>
         <td>${k[i].age}</td>
         <td>${k[i].grade}</td>
        <td>${k[i].degree } </td>
        </tr> 
        `;
        tbodydata.innerHTML = out
    }
}

buildAdata(students)


  
document.getElementById("search-btn").addEventListener("keyup", () =>{
    let filter = document.getElementById('search-btn').value.toUpperCase();
 
    let mytable = document.getElementById('table-data')
 
    let tr = mytable.getElementsByTagName('tr')

    for(var i=0;i<tr.length;i++){
       let td = tr[i].getElementsByTagName('td')[1];
       if(td){
 
          let textvalue = td.textContent || td.innerHTML;
          
          if(textvalue.toUpperCase().indexOf(filter) > -1)
          {
             tr[i].style.display = "";
          }
          else
          {
             tr[i].style.display = 'none';
          }
 
       }
    }
})

    


function onformSubmit(){
   var formData = readData();
   inserData(formData);
}

function readData(){
   var formData = {};
    formData["name"] = document.getElementById("btn-name").value
    formData["email"] = document.getElementById("btn-name1").value
    formData["gpa"] = document.getElementById("btn-name2").value
    formData["age"] = document.getElementById("btn-name3").value
    formData["degree"] = document.getElementById("btn-name4").value

    return formData;
}

function inserData(data){
  var table = document.getElementById("table-data").getElementsByTagName('tbody')[0]
  var newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = data.age;
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = data.gpa;
  cell5 = newrow.insertCell(4);
  cell5.innerHTML = `${data.degree} <a>edit</a> <a>delete</a>`
}



