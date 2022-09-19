function displayUsers(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        row=`
            <tr>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td style="background-color:${user.color};"></td>
            </tr>
        `
        $("#usersTable").append(row);
}
}
function init(){
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;