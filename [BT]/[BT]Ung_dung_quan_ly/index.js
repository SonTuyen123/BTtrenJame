function showListClub() {
    let tableBody = '';
    for (let i=0;i<clubListName.length;i++) {
        tableBody += `<tr>
            <td>${i+1}</td>
            <td>${clubListName[i]}</td>
            <td><button onclick="editClubByBtn(${i})">Edit</td>
            <td><button onclick="deleteClubByBtn(${i})">Delete</td>`;
    }
    document.getElementById('tableBody').innerHTML= tableBody;
}
function showCreateForm() {
    document.getElementById('create-form').style.display = 'block';
}
function createClub() {
    let name = document.getElementById('clubName').value;
    clubListName.push(name);
    showListClub();
}
function deleteClubByBtn(posi) {
    let check = confirm(`Delete ${clubListName[posi]}? Are you sure?`);
    if (check) {
        clubListName.splice(posi,1);
        showListClub();
    }
}
function editClubByBtn(position) {
    let editName = prompt('Insert Name');
    clubListName[position]=editName;
    showListClub();
}