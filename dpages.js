(function ($) {
  Drupal.behaviors.dpages = {
     attach: function(context, settings){
      $('ul.blocks').find('div').draggable({
        connectToSortable: ".column",
        revert: 'invalid',
        helper: 'clone'
      });


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
          var parent = $(ui.item).parent().attr('id'),
              id = $(ui.item).attr('id'),
              cid = $(ui.item).attr('data-cid'),
              type = $(ui.item).attr('data-type'),
              weight = $(ui.item).parent().children().index($(ui.item)),
              width = 12;

          weights = [];
          $(ui.item).parent().children().each(function(){
            weights.push($(this).attr('id'));
          });

          $.ajax({
            type: 'POST',
            url: Drupal.settings.basePath + 'dpages_box',
            data: {
              'item': {
                'id': id,
                'parent': parent,
                'type': type,
                'cid': cid,
                'weight': weight
                //'width': width
              },
              'weights': weights
            },
            error: function(msg, status, error){
              //console.log('error');
            },
            success: function (msg) {
              //console.log(msg.html);
              $(ui.item).replaceWith(msg.html);
            }
          });
        }
      });

      $('ul, li').disableSelection();

      //Limit resizing
      $('.column').resizable({
        grid: [20],
        handles: 'e',
        stop: function(event, ui){
          var old_class,
            new_class,
            classes = $(this).attr('class');

          cur_span = spanWidth(classes);
          old_class = 'span' + cur_span;

          right_el = $(this).siblings('.column').first();

          idx = $(this).parent().children('.column').index($(this));
          console.log($(this).parent().children('.column').eq(idx+1));

          right_span = spanWidth(right_el.attr('class'));
          max_span = cur_span + right_span - 1;

          //Count closest widths
          percent = 100 * ui.size.width / ui.originalSize.width;
          cur_span = parseInt(cur_span * percent / 100, 10);

          if(cur_span >= 1 && cur_span <= max_span){
            new_class = 'span' + cur_span;
            right_class = 'span' + (max_span - cur_span + 1);

            $(this).removeClass(old_class)
              .addClass(new_class);

            $(right_el).removeClass('span' + right_span)
              .addClass(right_class);
          }
          $(this).removeAttr('style');
          //Resize other columns in the row
        }
      });

      function spanWidth(classes){
        re = new RegExp("span([0-9]{1})"),
        matches = re.exec(classes);
        width = parseInt(matches[1], 10);

        return width;
      }
    }
  };
})(jQuery);
