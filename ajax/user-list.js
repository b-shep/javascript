
$().ready(() => {

    $.getJSON("http://localhost:8080/users/")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(users) {
    let tbody = $("#tbody");
    for(let user of users) {
        let row = `<tr>`;
        row += `<td>${user.id}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstName}, ${user.lastName}</td>`;
        row += `<td>${user.phoneNumber}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.isReviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.isAdmin ? "Yes" : "No"}</td>`;
        row += `</tr>`;
        tbody.append(row);
    }
}