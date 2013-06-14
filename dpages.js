(function ($) {
  $(document).ready(function(){
    $('ul.blocks').find('li').draggable({
      //connectWith: ".column",
      connectToSortable: ".column",
      //revert: true,
      helper: 'clone'
    });

    $('.column').droppable({
      drop: handleDropEvent,
    });

    $('.column').sortable({

    });

    function handleDropEvent(event, ui){
      //console.log(ui);
      id = $(this).attr('data-id');
      //dragged = ($(ui.draggable));
      $(this).children().each(function(){
        console.log($(this));
      });
    }
  });
})(jQuery);
