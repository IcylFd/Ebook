// pages/exBook/exBook_detail/exBook_detail.js
var postdata = require("../../../data/books_data.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articalsArray: [
      {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }, {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }, {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }
    ]
  },
  toUser: function(e){
    var userId = this.data.user.userid;
    var user_array = app.globalData.user_array;
    for(var i=0;i<user_array.length;i++){
      if(userId == user_array[i].userId){
        app.globalData.u_array = user_array[i];
        break;
      }
    }
    wx.navigateTo({
      url: '../../homePage/others_detail/others_detail',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var book_message = {
      bookId: options.bookid,
      bookName: options.bookname,
      bookAuthor: options.bookauthor,
      bookImage: options.bookimage,
      onmycollection: options.onmycollection
    }
    this.setData({
      book_message: book_message
    })
    var all_user = app.globalData.user_array;
    var user;
    for(var i=0;i<all_user.length;i++){
      for(var j=0;j<all_user[i].userShelf.length;j++){
        if (options.bookid == all_user[i].userShelf[j].bookId){
          user = {
            userid: all_user[i].userId,
            userimage: all_user[i].userImage,
            username: all_user[i].userName,
            want: all_user[i].userShelf[j].want
          }
          break;
        }
      }
    }
    this.setData({
      user: user
    })
    app.globalData.user = user;
    app.globalData.book = book_message;
    
  },
  onShow: function(e){
    var my_ = app.globalData.my_;
    var flag = 0;
    var book_message = this.data.book_message;
    for (var i = 0; i < my_.userCollection.length; i++) {
      if (book_message.bookId == my_.userCollection[i]) {
        flag = 1;
        book_message.onmycollection = "true";
      }
    }
    if(flag ==0){
      book_message.onmycollection = "false";
    }
    this.setData({
      book_message: book_message
    })
    console.log(book_message);
  },
  clickLike: function(e){
    var my_ = app.globalData.my_;
    var book_message = this.data.book_message;
    if(book_message.onmycollection == "true"){
      for(var i=0;i<my_.userCollection.length;i++){
        if (book_message.bookId == my_.userCollection[i]){
          my_.userCollection.splice(i,1);
          book_message.onmycollection = "false";
        }
      }
    }else{
      my_.userCollection[my_.userCollection.length] = book_message.bookId;
      book_message.onmycollection = "true";
    }
    this.setData({
      book_message: book_message
    })
    app.globalData.my_ = my_;
  },
  onToexTap: function (event) {
    wx.navigateTo({
      url: '../toex/toex',
    })
  },
  
})