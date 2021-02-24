function addRow(){
let name1 = document.getElementById('name1').value;
let phnumb = document.getElementById('phnumb').value;
let age = document.getElementById('age').value;
let email = document.getElementById('email').value;
let table = document.getElementsByTagName('table')[0];
let newrow = table.insertRow(1);

let cel1 = newrow.insertCell(0);
let cel2 = newrow.insertCell(1);
let cel3 = newrow.insertCell(2);
let cel4 = newrow.insertCell(3);


cel1.innerHTML = name1;
cel2.innerHTML = phnumb;
cel3.innerHTML = age;
cel4.innerHTML = email;
}





