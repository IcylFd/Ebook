// pages/myBookShelf/AddMyBook/AddMyBook.js
var app = getApp();
Page({
  data: {
    addingBook: {
      bookName: "aaa",
      bookImage: "aaaaa",
      bookAuthor: "aaaa",
      bookSummary: "aaaaa",
      bookClass: "aaaa",
      bookIsbn: "88888",
      bookID: "99",
      bookEdition: "aaaa",
      onMyCollection: false
    },
    want: ""
  },
  want_f: function(e){
    this.setData({
      want: e.detail.value
    })
  },
  onLoad: function (options) {
    var addingBook_ = app.globalData.addingBook;
    this.setData({
      addingBook_: addingBook_
    })
  },
  submit: function(e){
    var my_ = app.globalData.my_;
    var addingBook_ = app.globalData.addingBook;
    var addingBook = this.data.addingBook;
    var book_message_array = app.globalData.book_message_array;
    addingBook.bookName = addingBook_.title;
    addingBook.bookImage = addingBook_.pic;
    addingBook.bookAuthor = addingBook_.author;
    addingBook.bookSummary = addingBook_.summary;
    addingBook.bookClass = addingBook_.keyword;
    addingBook.bookIsbn = addingBook_.isbn;
    addingBook.bookEdition = addingBook_.edition;
    addingBook.bookID = app.globalData.addingBook_Id;
    // var bookId
    // var flag = 1;
    // var flag_state = true;
    // while (flag_state) {
    //   bookId = Math.random() * 100;
    //   bookId = Math.floor(bookId).toString();
    //   for (var i = 0; i < book_message_array.length; i++) {
    //     if (bookId == book_message_array[i].bookID) {
    //       flag = 0;
    //       break;
    //     }
    //   }
    //   if (flag == 1) {
    //     flag_state = false;
    //   }
    // }
    // addingBook.bookID = bookId;
    // for (var i = 0; i < my_.userShelf.length; i++) {
    //   if (addingBook.bookID == my_.userShelf[i].bookId) {
    //     wx.showModal({
    //       content: '同一本书不能重复上架',
    //       showCancel: false,
    //       confirmColor: "#95add0",
    //       success: function(){
    //         wx.navigateBack({
              
    //         })
    //       }
    //     })
    //   }
    // }
    app.globalData.book_message_array[app.globalData.book_message_array.length] = addingBook;
    app.globalData.havedBook_message_array[app.globalData.havedBook_message_array.length]=addingBook;
    this.setData({
      addingBook: addingBook
    })
    var addingShelf = {
      bookId: this.data.addingBook.bookID,
      want: this.data.want
    }
    my_.userShelf[my_.userShelf.length] = addingShelf;
    app.globalData.my_ = my_;
    wx.request({
      url: 'https://2tmftt32.qcloud.la/Book/sjbook',
      data: {
        isbn: this.data.addingBook.bookIsbn,
        wantbook: this.data.want,
        book_id: this.data.addingBook.bookID
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    wx.showToast({
      title: '上架成功',
      success: function(){
        wx.navigateBack({
          
        })
      }
    })
  }






  // onTapCover: function (event) {
  //   wx.chooseImage({
  //     count: 1,
  //     success: function (res) {
  //       var coverImgPath = res.tempFilePaths
  //     }
  //   })
  // },
  // onTapBack: function (event) {
  //   wx.chooseImage({
  //     count: 1,
  //     success: function (res) {
  //       var backImgPath = res.tempFilePaths
  //     }
  //   })
  // }
  
})