/**
 * Created by Haimei on 10/07/2017.
 */
var TimeLineLayout = function () {

  "use strict";

  var _self = this;

  var _attrs = {
    dateYear: "[time-line__date__year]",
    title: "[time-line__title__text]",
    sectionBody: "[time-line__section__body]",
    boxContent: "[time-line-box__content]",
    timeLineSection: "[time-line__section]",
    timeLineBox: "[time-line-box]"
  };

  this.toggleYear = function () {
    $(_attrs.dateYear).on("click", function() {
      $(this).parents(_attrs.timeLineSection).find(_attrs.sectionBody).slideToggle(500);
    });
  };

  this.toggleHeader = function () {
    $(_attrs.title).on("click", function() {
      $(this).parents(_attrs.timeLineBox).find(_attrs.boxContent).slideToggle(500);
    });
  };
};


var TIME_LINE_LAYOUT;

$(document).ready(function () {
  TIME_LINE_LAYOUT = new TimeLineLayout();
  TIME_LINE_LAYOUT.toggleYear();
  TIME_LINE_LAYOUT.toggleHeader();
});