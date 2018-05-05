//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

var postdata = require("data/books_data.js");

App({
    globalData: {
      havedBook_message_array: postdata.postlist.havedBook_message_array,
      user_array: postdata.postlist.user_array,
      book_message_array: postdata.postlist.book_message_array,
      my_: postdata.postlist.my_,

      u_array: {}
    },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
})