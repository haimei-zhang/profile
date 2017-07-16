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

  this.toggleImg = function() {
    $(".time-line-box-media__content img").on("click", function() {
      if ($(this).siblings().length > 0) {
        $(this).fadeOut(200, function() {
          if ($(this).next().length > 0) {
            $(this).next().fadeIn(200);
          } else {
            $(this).parents(".time-line-box-media__content").find("img").eq(0).fadeIn(200);
          }
        })
      }
    });
  }
};


var TIME_LINE_LAYOUT;

$(document).ready(function () {
  TIME_LINE_LAYOUT = new TimeLineLayout();
  TIME_LINE_LAYOUT.toggleYear();
  TIME_LINE_LAYOUT.toggleHeader();
  TIME_LINE_LAYOUT.toggleImg();
});