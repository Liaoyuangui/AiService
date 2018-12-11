// pages/dynamicInfo/dynamicInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    focus: false,
    disable: false,
    dtList: [{
      userImg: '../image/photo.jpg',
      userNickName: '测试用户',
      userInfoDate: '11:09 pm',
      userInfotype: '动态',
      dtText: '按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多',
      dtImage: [
        { dtImageurl: '../image/1.jpg' },
        { dtImageurl: '../image/2.jpg' },
        { dtImageurl: '../image/3.jpg' },
        { dtImageurl: '../image/4.jpg' },
        { dtImageurl: '../image/5.jpg' },
        { dtImageurl: '../image/6.jpg' },
        { dtImageurl: '../image/7.jpg' },
        { dtImageurl: '../image/8.jpg' },
        { dtImageurl: '../image/9.jpg' },
      ]
    }],
    fwalList: [{
      userImg: '../image/photo.jpg',
      userNickName: '测试用户',
      userInfoDate: '11:09 pm',
      userInfotype: '动态',
      dtText: '按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多',
      dtImage: [
        { dtImageurl: '../image/1.jpg' },
        { dtImageurl: '../image/2.jpg' },
        { dtImageurl: '../image/3.jpg' },
        { dtImageurl: '../image/4.jpg' },
        { dtImageurl: '../image/5.jpg' },
        { dtImageurl: '../image/6.jpg' },
        { dtImageurl: '../image/7.jpg' },
        { dtImageurl: '../image/8.jpg' },
        { dtImageurl: '../image/9.jpg' },
      ]
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

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
  
  },
  showBigPicture: function (event) {
    // var src = event.currentTarget.dataset.src;//获取data-src
    // var imgList = event.currentTarget.dataset.list;//获取data-list
    // console.log(imgList);
    // //图片预览
    // wx.previewImage({
    //   current: src, // 当前显示图片的http链接
    //   urls: imgList // 需要预览的图片http链接列表
    // })
    var current = event.target.dataset.src; //预览图片 
    wx.previewImage({ current: current, urls: this.data.product.photoUrls, });
  },
  write: function (res){
    console.log("123");
    var btntype = res.currentTarget.dataset.type;
    console.log(btntype);
    if (btntype == "show") {
      this.setData({
        isShow: true,
        focus: true
      })
  
    } else {
      this.setData({
        isShow: false,
        focus: false
      })
    }
  }
})