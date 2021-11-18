"use strict";

var myInit = {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};


let myRequest = new Request("../../js/json/testfile.json", myInit);


fetch(myRequest)
    .then(function (resp) {
        // let jsonData = JSON.parse(response);
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
    });


var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = {
    "table": "name",
    "limit": 20
};
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "General Informations";
        txt += "<table><thead><th>Typ</th><th>Information</th></thead><tbody>";
        for (var key in myObj.general) {
            txt += "<tr><td>" + key + "</td><td>" + myObj.general[key] + "</td></tr>";
        }
        txt += "</tbody></table>";
        txt += "<table class='table table-striped'><th>ID</th><th>Title</th><th>Price</th><th>Unit</th><br>";
        for (var x = 0; x < myObj.books.length; x++) {
            txt += "<tr><td>" + myObj.books[x].id + "</td>";
            txt += "<td>" + myObj.books[x].title + "</td>";
            txt += "<td>" + myObj.books[x].price + "</td>";
            txt += "<td>" + myObj.books[x].unit + "</td></tr>";
        }
        txt += "</table>";
        document.getElementById("demo").innerHTML = txt;
    }
};
xmlhttp.open("GET", "../../js/json/testfile.json", true); //Link für json Datei//
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);