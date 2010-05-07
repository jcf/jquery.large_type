(function($) {
  $.large_type = function(text) {
    if (typeof(text) != 'string') {
      return true;
    }

    function set_size_and_position() {
      var win = $(window);

      var divisor = text.length * 7;
      var width_scale = (win.width() - win.width() * 0.10) / divisor;
      var height_scale = (win.height() - win.height() * 0.10) / divisor;

      //font_size = (width_scale < height_scale ? width_scale : height_scale) * 100 + '%';
      font_size = width_scale * 100 + '%';
      $large_text.css('font-size', font_size);

      var radius = $large_text.outerWidth() * 0.02;

      $large_text.css({
        'padding': radius,
        '-moz-border-radius': radius,
        '-webkit-border-radius': radius,
        'border-radius': radius,
        'text-shadow': '#000 2px 2px ' + parseFloat($large_text.css('font-size')) * 0.01 + 'px'
      });
      $large_text.css({
        'left': (win.width() - $large_text.outerWidth()) / 2,
        'top': win.height() / 2 - $large_text.outerHeight() / 2
      });
    }

    function remove_large_text() {
      $(document).unbind('click.large_type keyup.large_type');
      $(window).unbind('resize.large_type');
      $large_text.fadeOut('fast', function() { $(this).remove(); });
    }

    $('#large_type').remove();

    $large_text = $('<span>', {'id': 'large_type', 'class': 'large_type'});
    $large_text.hide();
    $large_text.text(text).appendTo('body');

    set_size_and_position();

    $large_text.fadeIn('fast');

    $(document).bind('click.large_type keyup.large_type', remove_large_text);
    $(window).bind('resize.large_type', set_size_and_position);

    return true;
  };
})(jQuery);
