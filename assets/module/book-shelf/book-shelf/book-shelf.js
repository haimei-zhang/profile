/**
 * Created by Haimei on 08/07/2017.
 */
var book = {
  toProgress: function (currentProgress, maxProgress) {
    var content = '<ul class="progress__list">';
    for (var j = 0; j < currentProgress; j++) {
      content += '<li class="progress__item progress__item--is-finished"></li> ';
    }
    for (var k = currentProgress; k < maxProgress; k++) {
      content += '<li class="progress__item"></li> ';
    }
    content += '</ul>';
    return content;
  },
  toBook: function (item, index, maxProgress) {
    return '<div class="book-details is-hidden" data__book-details__book-id="' + (index + 1) + '">' +
      ' <div class="book-details__content">' +
      '   <a href="' + item.href + '" target="_blank"><img src="' + item.img + '" alt="book-cover"></a>' +
      '   <div class="book-details__content__footer">' +
      '     <div class="progress">' +
      '       <h3>Progress ' + item.progress + ' / ' + maxProgress + '</h3>' + this.toProgress(item.progress, maxProgress) +
      '     </div>' +
      '   </div>' +
      ' </div>' +
      '</div>';
  }
};

var bookshelf = {
  showBookList: function () {
    var bookshelfList = '';
    for (var i = 0; i < bookshelfData.books.length; i++) {
      bookshelfList += '<div data__book-case__book-id="' + (i + 1) + '" class="book-case-box__content__book bg-bluegrey">' + bookshelfData.books[i].name + '</div>';
    }
    $("#book-case-list").html(bookshelfList);
  },
  showBookDetailsList: function () {
    var bookDetailsList = '';
    var bookshelfDetails = bookshelfData.books;
    for (var i = 0; i < bookshelfDetails.length; i++) {
      bookDetailsList += book.toBook(bookshelfDetails[i], i, bookshelfData.maxProgress);
    }
    $("#book-details").html(bookDetailsList);
  },
  showBookDetails: function () {
    // hover book details
    $("#book-case-list").on("mouseover", ".book-case-box__content__book", function () {
      $(".book-details").addClass("is-hidden");
      var bookId = $(this).attr("data__book-case__book-id");
      $("#book-details").find("div[data__book-details__book-id=" + bookId + "]").removeClass("is-hidden");
    });
  },
  init: function () {
    this.showBookList();
    this.showBookDetailsList();
    this.showBookDetails();
    $("div[data__book-case__book-id='1']").trigger("mouseover");
  }
};

$(document).ready(function () {
  bookshelf.init();
});