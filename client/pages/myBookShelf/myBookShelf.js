// pages/myBookShelf/myBookShelf.js
Page({
  data:{
    books_key:[]
  },
  onLoad: function(options){
    var myBooksList=[
      {
        title:'add',
        img:''
      },
      {
        title:'白夜行',
        img:'../img/books/book3.jpg'
      },
      {
        title: '数学之美',
        img: '../img/books/book5.jpg'
      },
      {
        title: '撒哈拉的故事',
        img: '../img/books/book1.jpg'
      }, 
      {
        title: '偷影子的人',
        img: '../img/books/book2.jpg'
      },
      {
        title: '老人与海',
        img: '../img/books/book4.jpg'
      },
      {
        title: '老人与海',
        img: '../img/books/book4.jpg'
      },
      {
        title: '撒哈拉的故事',
        img: '../img/books/book1.jpg'
      },
      {
        title: '数学之美',
        img: '../img/books/book5.jpg'
      },
      {
        title: '偷影子的人',
        img: '../img/books/book2.jpg'
      }
    ]

    this.setData({
      books_key:myBooksList
    });
  },
  Count:function(event){
    console.log(index);
  },
  onBookTap:function(event){
    wx.navigateTo({
      url: 'myBookDetails/myBookDetails'
    })
  },
  scanCode :function(event){
    wx.scanCode({
      success: (res) => {
        console.log(res.result);
      }
    })
  }
  
})