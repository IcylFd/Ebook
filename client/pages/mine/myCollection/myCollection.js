var app = getApp()
Page({
  data: {
    open: false,
    mark: 0,
    newmark: 0,
    istoright: true,
    note: [
      {
        name: '大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼',
        heart_num: '1',
        title: '撒哈拉的故事',
        url: '../../img/books/book1.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '2',
        title: '偷影子的人',
        url: '../../img/books/book2.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '3',
        title: '白夜行',
        url: '../../img/books/book3.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        title: '老人与海',
        url: '../../img/books/book4.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        title: '数学之美',
        url: '../../img/books/book5.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '6',
        title: '白夜行',
        url: '../../img/books/book3.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../img/books/book1.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '8',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../img/books/book2.jpg',
        avatar: '../../img/icon/icon-1.jpg'
      }
    ]
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
      url: 'toex/toex',
    })
  },
  to_toex: function(e){
    wx.navigateTo({
      url: 'toex/toex',
    })
  }
})
