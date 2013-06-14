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
      connectWith: ".column"
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
    }

    function handleDropEvent(event, ui) {
      id = $(this).attr('data-id');

      helper = $(ui.helper).html()
      $(ui.draggable).html(helper);
      console.log($(this).find('li').index($(ui.draggable)));
    }
  });
})(jQuery);
