var app = getApp();
Page({
  data: {
    open: false,
    mark: 0,
    newmark: 0,
    istoright: true,
    note: ""

  },
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
}) ;
    }
  },
  tap_start: function (e) {
    // touchstart事件
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },
  tap_drag: function (e) {
    // touchmove事件

    /*
     * 手指从左向右移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    this.data.newmark = e.touches[0].pageX;
    if (this.data.mark < this.data.newmark) {
      this.istoright = true;
    }
    /*
     * 手指从右向左移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    if (this.data.mark + 100> this.data.newmark) {
      this.istoright = false;
    }
    this.data.mark = this.data.newmark;

  },
  tap_end: function (e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    if (this.istoright) {
      this.setData({
        open: true
      });
    } else {
      this.setData({
        open: false
      });
    }
  },
  onToexTap:function(event){
    wx.navigateTo({
      url: 'toex/toex?bookid='+event.currentTarget.dataset.bookid,
    })
  },
  onShow: function(){
    var collection = app.globalData.my_.userCollection;
    var book_message_array = app.globalData.book_message_array;
    var collection_array = [];
    for (var i = 0; i < collection.length; i++) {
      for (var j = 0; j < book_message_array.length; j++) {
        if (collection[i] == book_message_array[j].bookID) {
          collection_array[i] = book_message_array[j];
        }
      }
    }
    var all_user = app.globalData.user_array;
    var user = [];
    for (var x = 0; x < collection.length; x++) {
      var bookid = collection[x];
      user[x] = "";
      for (var i = 0; i < all_user.length; i++) {
        for (var j = 0; j < all_user[i].userShelf.length; j++) {
          if (bookid == all_user[i].userShelf[j].bookId) {
            user[x] = {
              userid: all_user[i].userId,
              userimage: all_user[i].userImage,
              username: all_user[i].userName,
              want: all_user[i].userShelf[j].want
            }
          }
        }
      }
    }
    var note = [];
    for (var i = 0; i < user.length; i++) {
      if(user[i].userid){
        note[i] = {
          bookName: collection_array[i].bookName,
          bookImage: collection_array[i].bookImage,
          bookId: collection_array[i].bookID,
          bookAuthor: collection_array[i].bookAuthor,
          userid: user[i].userid,
          userimage: user[i].userimage,
          username: user[i].username,
          want: user[i].want,
          onmycollection: 'true'
        }
      }else{
        note[i] = {
          bookName: collection_array[i].bookName,
          bookImage: collection_array[i].bookImage,
          bookId: collection_array[i].bookID,
          bookAuthor: collection_array[i].bookAuthor,
          onmycollection: 'true'
        }
      }      
    }    
    this.setData({
      note: note
    })
    app.globalData.note = note;
  }
})
