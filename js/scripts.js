var yourBeer = function(gender, vacation) {
  if (gender === "male" && vacation === "beach") {
    return "Corona";
  }
  else if (gender === "female" && vacation === "beach") {
    return "Pacifico";
  }
  else if (gender === "male" && vacation === "mountains") {
    return "Ice Axe IPA";
  }
  else if (gender === "female" && vacation === "mountains") {
    return "Basecamps Smore Stout";
  }
  else if (gender === "male" && vacation === "desert") {
    return "Phream Pilsner";
  }
  else if (gender === "female" && vacation === "desert") {
    return "HUB Organic Lager";
  }
  else if (gender === "male" && vacation === "city") {
    return "PBR";
  }
  else if (gender === "female" && vacation === "city") {
    return "Wine";
  };
};

$(document).ready(function() {
  $("form#beer").submit(function(event) {
    //var control = $("input#control").val());
    //var jeans = $("input#jeans").val());
    var gender = $("select#gender").val();
    var vacation = $("select#vacation").val();
    //var motorcycle = $("input#motorcycle").val());


    var yourbeer = yourBeer(gender,vacation);
    $("#yourbeer").show();
    $("#perfect").text(yourbeer);

    event.preventDefault();

  });
});
