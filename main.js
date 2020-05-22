function getPagamenti() {
  $.ajax ({
    url: "getPagamenti.php",
    method: "GET",
    success: function (data) {
      // inizializzo variabili handlebars
      var source = $("#pagamenti-template").html();
      var template = Handlebars.compile(source);
      // ciclo for of per estrapolare prezzo e status pagamento
      for (var pagamenti of data) {
        var status = pagamenti.status + " , ";
        var prezzo = pagamenti.price;
        var context = {
          pagamento: status + prezzo
        };
        var html = template(context);
        $('#info-pagamenti').append(html);
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
