(function ($) {
  $(document).ready(function(){
    $('ul.blocks').find('li').draggable({
      //connectWith: ".column"
      revert: true,
    });
    $('.column').droppable({
      drop: handleDropEvent,
    });

    function handleDropEvent(event, ui){
      console.log(ui);
    }
  });
})(jQuery);
