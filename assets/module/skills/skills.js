/**
 * Created by Haimei on 09/07/2017.
 */
var skills = {
  createCells: function() {
    var cellList = "";
    for (var i = 0; i < skillsData.length; i++) {
      cellList += '<div class="grid-layout__cell">'+
        '<div class="grid-layout__cell__content">'+
          '<div class="skill-cell skill-cell--image '+ skillsData[i].backgroundColor +'">'+
            '<img src="'+ skillsData[i].img +'"/>'+
            '<div class="skill-cell--image__text-box">'+
              '<div class="skill-cell-text-box">'+
                '<div class="skill-cell-text-box__container">'+
                  '<a href="'+ skillsData[i].href +'" target="_blank">'+
                   skillsData[i].text +
                  '</a>' +
                '</div>'+
               '</div>'+
             '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    }
    $("#cellList").html(cellList);
  },
  init: function () {
    this.createCells();
  }
};

$(document).ready(function () {
  skills.init();
});