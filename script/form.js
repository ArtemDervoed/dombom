var index = 0;
function init() {
    document.getElementById("save").onclick = function () {

        var person = {
            "typeSaved": ""
            , "number": ""
            , "savedPersone": ""
            , "dateSell": ""
            , "savedPrize": ""
            , "sale": ""
        };
        person.typeSaved = document.getElementById("typeSaved").value;
        if (valid(person.typeSaved) != 0) {
            person.number = valid(person.typeSaved);
            person.savedPersone = document.getElementById("savedPersone").value;
            person.dateSell = document.getElementById("dateSell").value;
            person.savedPrize = document.getElementById("savedPrize").value;
            person.sale = document.getElementById("sale").value;
        } else {
            throw "invalidet number";
        }
        refresh(index, person);
        index++;
    };
    document.getElementById("clear").onclick = function () {
        console.log(localStorage);
        localStorage.clear();
        var tab = document.getElementById("table");
        console.log(localStorage);
        tab.removeChild(tbody);
        index = 0;
    };
    document.getElementById("removeRow").onclick = function () {
        var delRow = prompt("Введите номер удаляемой строки", "");
        deleteRow(prompt(delRow));
        var tablet = document.querySelector("tbody");
        tablet.deleteRow(delRow);
        console.log(localStorage);
    };

    

}