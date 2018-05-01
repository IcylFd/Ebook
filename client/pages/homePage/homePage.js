// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    swiper_type: true,
    bottom_border_left: "bottom_border_left",
    bottom_border_right: "bottom_border_right",
    rank_list_array : [
      {
        rankImage: "http://img.zcool.cn/community/016b3756ea1b1a32f875520fc0224b.jpg@900w_1l_2o_100sh.jpg",
        Lv: 24
      },{
        rankImage: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg",
        Lv: 24
      },{
        rankImage: "http://img.zcool.cn/community/016fdd5819a73fa84a0e282be9a3a1.jpg",
        Lv: 24
      },{
        rankImage: "http://img.zcool.cn/community/01a1b75819a73fa84a0e282bc24651.jpg",
        Lv: 24
      },{
        rankImage: "http://img0w.pconline.com.cn/pconline/1403/29/spcgroup/width_640,,qua_30/4523636_04.jpg",
        Lv: 24
      },{
        rankImage: "http://www.touxiang.cn/uploads/20131012/12-054249_479.jpg",
        Lv: 24
      },{
        rankImage: "http://www.qqzhi.com/uploadpic/2015-01-14/204348907.jpg",
        Lv: 24
      },{   
        rankImage: "http://pic.58pic.com/58pic/16/83/97/18258PIC9Jv_1024.jpg",
        Lv: 24
      },{
        rankImage: "http://img03.tooopen.com/uploadfile/Downs/images/2012/2/24/sy_20120224133241944132.jpg",
        Lv: 24
      }
    ],
    array : [{
      bookName: "了比起的盖茨比",
      bookImage: "http://p5.qhimg.com/t01cb6ab8b8a8ea0609.jpg",
      bookIntroduce: "《了不起的盖茨比》是美国作家弗·司各特·菲茨杰拉德创作的一部以以20世纪20年代的纽约市及长岛为背景的中篇小说，出版于1925年。《了不起的盖茨比》是美国作家弗·司各特·菲茨杰拉德创作的一部以以20世纪20年代的纽约市及长岛为背景的中篇小说，出版于1925年。",
      button_like: "../../images/like.png",
      like: false
    },
    {
      bookName: "泰坦尼克号",
      bookImage: "http://ent.southcn.com/8/images/attachement/jpg/site4/20120406/40/12979295661820977888.jpg",
      bookIntroduce: "《泰坦尼克号》是美国二十世纪福斯电影公司、派拉蒙影业公司出品爱情片，由詹姆斯·卡梅隆执导，莱昂纳多·迪卡普里奥、凯特·温斯莱特领衔主演。影片以1912年泰坦尼克号邮轮在其处女启航时触礁冰山而沉没的事件为背景，讲述了处于不同阶层的两个人穷画家杰克和贵族女露丝抛弃世俗的偏见坠入爱河，最终杰克把生命的机会让给了露丝的感人故事。该片于1997年12月19日在美国上映，1998年4月3日在中国在内地上映，2012年4月10日以3D版在中国内地重映。",
      button_like: "../../images/like.png",
      like: false
    },
    {
      bookName: "肖申克的救赎",
      bookImage: "http://news.youth.cn/jsxw/201612/W020161201735193768507.jpg",
      bookIntroduce: "《肖申克的救赎》（The Shawshank Redemption）取自斯蒂芬·金《不同的季节》中收录的《丽塔·海华丝及萧山克监狱的救赎》而改编成的《肖申克的救赎》剧本，并由弗兰克·达拉邦特执导，蒂姆·罗宾斯、摩根·弗里曼等主演。影片中涵盖全片的主题是“希望”，全片透过监狱这一强制剥夺自由、高度强调纪律的特殊背景来展现作为个体的人对“时间流逝、环境改造”的恐惧。影片的结局有《基督山伯爵》式的复仇宣泄。",
      button_like: "../../images/like.png",
      like: false
    }
    ],
    back_array: [
      {
        src: "../../images/back_1.jpg"
      },{
        src: "../../images/back_2.jpg"
      },{
        src: "../../images/back_3.jpg"
      }
    ]
  },
  toOthers_detail:function(e){
    wx.navigateTo({
      url: './others_detail/others_detail',
    })
  },
  // 添加收藏
  clickLike: function (event){
    var index = event.currentTarget.dataset.index;
    var key_like = "array[" + index + "].like";
    var key_button_like = "array[" + index + "].button_like";
    if (event.currentTarget.dataset.src == "../../images/like.png"){
      this.setData({
        [key_like]: true,
        [key_button_like]: "../../images/like1.png"
      })
    }else{
      this.setData({
        [key_like]: false,
        [key_button_like]: "../../images/like.png"
      })
    }
  },
  // 轮播图滑动
  bindchange: function (e){
    this.setData({
      index: e.detail.current
    })
  },
  // 滑块点击显示书籍详情
  swiper_navigate: function(e){
    var like = e.currentTarget.dataset.like;
    var that = this;
    wx.navigateTo({
      url: './homePage_swiper_detail/homePage_swiper_detail'
    })
  },
  //点击切换轮播图展示的类别
  choose_swiper1: function(e){
    this.setData({
      swiper_type: true
    })   
  },
  choose_swiper2: function(e){
    this.setData({
      swiper_type: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})