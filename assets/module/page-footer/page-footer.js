var pageFooter = {
  init: function () {
    $("[current-year]").html(new Date().getFullYear());
  }
};

jQuery(document).ready(function () {
  pageFooter.init();
});