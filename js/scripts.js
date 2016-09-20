$(document).ready(function() {
  $("form#beer").submit(function(event) {
    //var control = $("input#control").val());
    //var jeans = $("input#jeans").val());
    var gender = $("select#gender").val();
    var vacation = $("select#vacation").val();
    //var motorcycle = $("input#motorcycle").val());

  if (gender === "male" && vacation === "beach") {
    var yourbeer = "Corona";
  }
  else if (gender === "female" && vacation === "beach") {
    var yourbeer = "Pacifico";
  }
  else if (gender === "male" && vacation === "mountains") {
    var yourbeer = "Ice Axe IPA";
  }
  else if (gender === "female" && vacation === "mountains") {
    var yourbeer = "Basecamps Smore Stout";
  }
  else if (gender === "male" && vacation === "desert") {
    var yourbeer = "Phream Pilsner";
  }
  else if (gender === "female" && vacation === "desert") {
    var yourbeer = "HUB Organic Lager";
  }
  else if (gender === "male" && vacation === "city") {
    var yourbeer = "PBR";
  }
  else if (gender === "female" && vacation === "city") {
    var yourbeer = "Wine";
  }



    $("#yourbeer").show();
    $("#perfect").text(yourbeer);

    event.preventDefault();

  });
});
