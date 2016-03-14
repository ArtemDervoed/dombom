function valid(type) {
        var myMatch;
        if (type == "КАСКО") {
            myMatch = /^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{6}$/;
        }
        if (type == "ДАГО") {
            myMatch = /^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$/;
        }
        if (type == "ОСАГО") {
            myMatch = /^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$/;
        }
        num = document.getElementById('number').value;
        if (!num.match(myMatch)) {
            return 0;
        } else {
            return num;
        }
    }