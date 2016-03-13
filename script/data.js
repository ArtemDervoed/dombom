function refresh(ind, person) {
    var tbody = document.createElement('tbody');
    localStorage.setItem(ind.toString(), person);
    localStorage.setItem(ind.toString(), JSON.stringify(person));
    var storagePerson = JSON.parse(localStorage.getItem(ind.toString()));
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td = document.createElement('td');
    td.innerHTML = storagePerson.typeSaved;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = storagePerson.number;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = storagePerson.savedPersone;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = storagePerson.dateSell;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = storagePerson.savedPrize;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = storagePerson.sale;
    tr.appendChild(td);
    tbody.appendChild(tr);
    document.getElementById('table').appendChild(tbody);

}

function deleteRow(numRow) {
    localStorage.removeItem(numRow.toString());
    var matches = document.querySelectorAll("tr");
    for (var i = 0; i < matches.length; i++) {
        if (i == numRow) {
            matches[i].style.backgroundColor = "yellow";
        }

    }
}