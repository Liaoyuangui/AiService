// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ismenuHide:true,
    publishType: 'show',
    publishText: '+',
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animation = wx.createAnimation()
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
  //首页切换标签
  indexSwitchTab: function (event) {
    var url = event.currentTarget.dataset.url;//获取data-url
    wx.reLaunch({
      url: url
    })
  },
  //弹出服务查询输入
  showSelectQuery:function(e){
    this.setData({
      "isHide":false
    })
  },
    //点击打开左侧菜单栏
    showMenuList:function(e){
      if(this.data.ismenuHide){
        this.setData({
          "ismenuHide": false
        })
      }else{
        this.setData({
          "ismenuHide": true
        })
      }
     
  } ,
  //发布动态
  jumpPublicDt: function () {
    this.showButtonPublish("hide");
    wx.navigateTo({
      url: '../publicDt/publicDt'
    })
  },
  //发布提问
  jumpPublicTw: function () {
    this.showButtonPublish("hide");
    wx.navigateTo({
      url: '../publicTw/publicTw'
    })
  },
  //发不动态和活动
  publicAlAndHd: function () {
    this.showButtonPublish("hide");
    wx.navigateTo({
      url: '../publicAlAndHd/publicAlAndHd'
    })
  },
  //发布
  showPublishBtn: function (res) {
    var btntype = res.currentTarget.dataset.type;//获取data-list 
    this.showButtonPublish(btntype);
  },
  /*弹出按钮功能*/
  showButtonPublish: function (btntype) {
    var animation = wx.createAnimation();
    if (btntype == "show") {
      this.setData({
        publishText: '×',
        publishType: 'hide',
        isShow: true
      })
      this.showDtBut(animation);
      this.showHdBut(animation);
      this.showAlBut(animation);
      this.showWdBut(animation);
    } else {
      this.setData({
        publishText: '+',
        publishType: 'show',
        isShow: false
      })
      this.hideDtBut(animation);
      this.hideHdBut(animation);
      this.hideAlBut(animation);
      this.hideWdBut(animation);
    }
  },

  /*弹出各类型的框*/
  showDtBut: function (animation) {
    animation.translate(-70, -55).step();
    this.setData({ animationDT: animation.export() });
  },
  showHdBut: function (animation) {
    setTimeout(function () {
      animation.translate(-20, -55).step()
      this.setData({ animationHd: animation.export() })
    }.bind(this), 150)
  },
  showAlBut: function (animation) {
    setTimeout(function () {
      animation.translate(30, -55).step()
      this.setData({ animationAl: animation.export() })
    }.bind(this), 300)
  },
  showWdBut: function (animation) {
    setTimeout(function () {
      animation.translate(80, -55).step()
      this.setData({ animationWd: animation.export() })
    }.bind(this), 450)
  },
  //隐藏各种框
  hideDtBut: function (animation) {
    animation.translate(0, 0).step();
    this.setData({ animationDT: animation.export() });
  },
  hideHdBut: function (animation) {
    animation.translate(0, 0).step()
    this.setData({ animationHd: animation.export() });
  },
  hideAlBut: function (animation) {
    animation.translate(0, 0).step()
    this.setData({ animationAl: animation.export() })
  },
  hideWdBut: function (animation) {
    animation.translate(0, 0).step()
    this.setData({ animationWd: animation.export() });
  }
})