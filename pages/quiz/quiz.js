// pages/publicDt/publicDt.js
var amapFile = require('../libs/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'publishImages': '',
    'address': '正在定位..',
    'LocalImageList': []
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
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        that.showPosition(longitude, latitude);
      },
      fail(res) {
        that.setData({
          "address": "定位失败，请用户授权"
        })
      }
    })
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
  //选择上传图片
  selectImage: function (e) {
    var that = this;
    var LocalImageList = this.data.LocalImageList;
    var size = 9 - e.currentTarget.dataset.imageslength;
    wx.chooseImage({
      count: size,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        // tempFilePath可以作为img标签的src属性显示图片
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (LocalImageList.length >= 9) {
            that.setData({
              LocalImageList: LocalImageList
            });
            return false;
          } else {
            LocalImageList.push(tempFilePaths[i]);
          }
        }
        that.setData({
          'publishImages': LocalImageList
        })
      }
    })
  },
  //删除上传图片
  deleteLocalImageList: function (e) {
    var LocalImageList = this.data.LocalImageList;
    var index = e.currentTarget.dataset.index;
    LocalImageList.splice(index, 1);
    this.setData({
      LocalImageList: LocalImageList,
      publishImages: LocalImageList
    });
  },
  showPosition: function (longitude, latitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: "87a425ae40728e809fd1b29354d0a276" });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        that.setData({
          "address": data[0].regeocodeData.formatted_address
        })

      },
      fail: function (info) { }
    });
  }
})