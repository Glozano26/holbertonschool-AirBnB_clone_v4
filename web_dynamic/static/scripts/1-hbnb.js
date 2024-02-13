$(document).ready(function () {

    let idsList = [];
    document.getElementById("input").onclick = function () {
        let inputId = this.id;
        idsList.push(inputId);
    }
  });
