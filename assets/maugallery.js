if ($(this).hasClass('active-tag')) {
  return;
}
$('.active.active-tag').removeClass('active active-tag');
$(this).addClass('active-tag active');

var tag = $(this).data('images-toggle');

$('.gallery-item').each(function () {
  $(this).parents('.item-column').hide();
  if (tag === 'all') {
    $(this).parents('.item-column').show(300);
  } else if ($(this).data('gallery-tag') === tag) {
    $(this).parents('.item-column').show(300);
  }
});
