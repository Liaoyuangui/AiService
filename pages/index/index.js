Page({
  data: {
    dtList:{
      userImg:'../image/photo.jpg',
      userNickName:'测试用户',
      userInfoDate:'',
    }
  },
  //扫描二维码
  saomiao:function(){
    wx.scanCode({
      success: (res) => {
        wx.showToast({
          title: res,
        })
        console.log(res)
      }
    })
  },
  //获取输入税号
  getTax:function(e){
    this.setData({
      cus_tax: e.detail.value
    })
  },
  showBigPicture: function (event){
    var src = event.currentTarget.dataset.src;//获取data-src
    console.log(event);
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  //确认信息
  confirmInfo:function(){
    /*
    wx.navigateTo({
      url: '../inputInfo/inputInfo'
    })*/
  },
  onShareAppMessage: function (res) {
    res.from//转发事件来源。button：页面内转发按钮；menu：右上角转发菜单
    res.target//如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined
    return {
      title: '自定义转发标题',//转发标题,默认当前小程序名称
      path: '/pages/inputInfo/inputInfo',//转发路径, 默认当前页面 path, 必须是以 / 开头的完整路径
      
      success: function(res) { // 转发成功
        res.errMsg//shareAppMessage:ok 转发成功
        res.shareTickets//shareTicket 数组，每一项是一个 shareTicket ，对应一个转发对象
      },
      fai: function(res) { 
          res.errMsg//shareAppMessage:fail cancel   用户取消转发
          res.errMsg//shareAppMessage:fail (detail message) 转发失败，其中 detail message 为详细失败信息
    },
      complete: function(res) { // 转发结束
      }
  }
}
})

wx.showShareMenu({
  withShareTicket: true
})
//修改标题
wx.setNavigationBarTitle({
  title: '爱服务企业圈'
})



