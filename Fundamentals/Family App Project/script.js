class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  celebrateBirthday() {
    this.age++
  }

  changeName(newName) {
    this.name = newName;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = ""; // Clear the table body
  
  for (const familyMember of familyMembers) {
    const row = document.createElement('tr');
    const index = familyMembers.indexOf(familyMember);
    row.innerHTML = `
    <td>${familyMember.name}</td>
    <td>${familyMember.age}</td>
    <td>${familyMember.gender}</td>
    <td>
    <button onclick="celebrateBirthday(${index})">Add Age</button> 
    <button onclick="changeName(${index})">Change Name</button></td>
    `;
    familyList.append(row);
  }
}

function celebrateBirthday(index) {
  familyMembers[index].celebrateBirthday();
  reloadFamilyMembers();
}

function changeName(index) {
  const newName = prompt('Enter the new name:');
  if (newName) {
    familyMembers[index].changeName(newName);
    reloadFamilyMembers();
  }
}