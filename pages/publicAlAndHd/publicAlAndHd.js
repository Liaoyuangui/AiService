// pages/publicAlAndHd/publicAlAndHd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'点击设置标题',
    textList: [{ text:'点击输入内容',imgUrl:''}]
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
  //跳转到文字输入页面
  jumpInputText: function (e) {
    var dataType = e.currentTarget.dataset.type;
    if (dataType=='title'){
      wx.navigateTo({
        url: '../inputText/inputText?type=' + dataType
      })
    }else{
      var num = e.currentTarget.dataset.num;
      wx.navigateTo({
        url: '../inputText/inputText?type=' + dataType + '&num='+num
      })
    }
    
  },
  //从第一项开始增加内容
  addFirst:function(){
    var textList =  this.data.textList;
    textList.unshift({ text: '点击输入内容' });
    this.setData({ 'textList': textList});
  },
  //从最后一项开始增加内容
  addLast:function(){
    var textList = this.data.textList;
    textList.push({ text: '点击输入内容' });
    this.setData({ 'textList': textList });
  },
  //上传图片
  addImage:function(e){
    var that =this;
    var num = e.currentTarget.dataset.num;
    var textList = that.data.textList;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        textList[num].imgUrl = tempFilePaths;
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          'textList': textList
        })
      }
    })
  },
  //删除元素
  removeItem:function(e){
    var that = this;
    var num = e.currentTarget.dataset.num;
    var textList = that.data.textList;
    if (textList.length>1){
      textList.splice(num, 1);
      that.setData({
        'textList': textList
      })
    }else{

    }
    
  },
  //选择多个上传图片
  selectImage: function (e) {
    var that = this;
    var textList = that.data.textList;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        // tempFilePath可以作为img标签的src属性显示图片
        for (var i = 0; i < tempFilePaths.length; i++) {
          var text = { text: '点击输入内容', imgUrl: tempFilePaths[i] }
          textList.push(text)
        }
        that.setData({
          'textList': textList
        })
      }
    })
  },
})