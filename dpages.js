(function ($) {
  $(document).ready(function(){
    $('ul.blocks').find('div').draggable({
      //connectWith: ".column",
      //start: handleDragEvent,
      connectToSortable: ".column",
      revert: 'invalid',
      helper: 'clone',
    });

    /*$('.column').droppable({
      drop: handleDropEvent,
    });*/


    $('.column').sortable({
      items: '.box',
      connectWith: ".column",
      helper: function(){
        return $('<div>mini helper</div>');
      },
      sort: function(event, ui){
        event.stopPropagation();
      },
      update: function(event, ui){
      },
      stop: function (event, ui){
        parent = $(ui.item).parent().attr('id');
        id = $(ui.item).attr('id');
        cid = $(ui.item).attr('data-cid');
        type = $(ui.item).attr('data-type');
        weight = $(ui.item).parent().children().index($(ui.item));
        weights = $(this).sortable('toArray');
        width = 12;

        $.ajax({
          type: 'POST',
          url: Drupal.settings.basePath + 'dpages_box',
          data: {
            'item': {
              'id': id,
              'parent': parent,
              'type': type,
              'cid': cid,
              'weight': weight,
              'width': width
            },
            'weights': weights
          },
          success: function (msg) {
            console.log(msg.html)
            $(ui.item).replaceWith(msg.html);
          }
        });
      }
    });
    $('ul, li').disableSelection();

    /*
     function handleDragEvent(event, ui) {
      return;
    }*/

    function handleDropEvent(event, ui) {
      return;
      //console.log($(ui.draggable));
      id = $(this).attr('data-id');

      helper = $(ui.helper).html()
      $(ui.draggable).replaceWith(helper);
      box_id = $(ui.draggable).attr('data-id');
      //console.log($(this).find('li').index($(ui.draggable)));
    }
  });
})(jQuery);
