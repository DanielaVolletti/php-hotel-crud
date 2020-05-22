function getPagamenti() {
  $.ajax ({
    url: "getPagamenti.php",
    method: "GET",
    success: function (data) {
      console.log(data);
      for (var pagamenti of data) {
        var status = pagamenti.status;
        var prezzo = pagamenti.price;
        $('#info-pagamenti').append("<li>" + status + " , " + prezzo + "</li>");
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
