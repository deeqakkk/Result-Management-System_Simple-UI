
$("#button").click(function() {  
    $("#box form").toggle("slow");
    return false;
  });

  
  $("#button1").click(function() {  
    $("#box1 form").toggle("slow");
    return false;
  });

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  