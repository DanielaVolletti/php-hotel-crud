function getPagamenti() {
  $.ajax ({
    url: "getPagamenti.php",
    method: "GET",
    success: function (data) {
      for (var pagamenti of data) {
        $('#info-pagamenti').append("<li>" + pagamenti + "</li>");
      }
    }, error: function (error) {
        console.log(error);
    }

  });
}

function init() {
  getPagamenti();
}

$(document).ready(init);
