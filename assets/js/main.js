$(document).on('turbolinks:load', function() {
  $('span.copy-right-year').html(new Date().getFullYear());
})
