$(document).ready(function () {
  // Menambahkan efek scroll halus
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      ); // Waktu dalam milidetik (1 detik)
    }
  });
});
