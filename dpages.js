(function ($) {
  $(document).ready(function(){
    $('ul.blocks').find('div').draggable({
      //connectWith: ".column",
      start: handleDragEvent,
      connectToSortable: ".column",
      //revert: true,
      helper: 'clone'
    });

    $('.column').droppable({
      drop: handleDropEvent,
    });

    $('.column').sortable({

    });

    $('ul, li').disableSelection();

    function handleDragEvent(event, ui) {
      id = $(this).attr('data-id');
      $.ajax({
        url: Drupal.settings.basePath + 'dpages_box/' + id,
        success: function (msg) {
          console.log(msg.html);
          $(ui.helper).html(msg.html);
        }
      });

/*      console.log($(this).find('.box'));
      ui.helper.html('x');
*/    }
    function handleDropEvent(event, ui) {
      //console.log(ui);
      id = $(this).attr('data-id');
      //dragged = ($(ui.draggable));
    }
  });
})(jQuery);
