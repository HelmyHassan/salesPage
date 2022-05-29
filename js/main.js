$(function () {
    $("select").select2();
  });







$(document).ready(function(){

  $(".filterBtn").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.product').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".product").not('.'+value).hide('3000');
          $('.product').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filterBtn").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});



$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var product = $('.product');
    $(".product").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    
    });
  });
});





function deleteRow(el) {
  if(!confirm("Are you sure you want to delete?")) return true;
  
  var tablel = el.parentNode.parentNode.parentNode.parentNode;
  var row = el.parentNode.parentNode.rowIndex;

  tablel.deleteRow(row)

}


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});










