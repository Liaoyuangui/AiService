Page({
  data: {
    publishType:'show',
    publishText: '+',
    isShow:false,
    dtList:[{
      userImg:'../image/photo.jpg',
      userNickName:'测试用户',
      userInfoDate:'11:09 pm',
      userInfotype:'动态',
      dtText:'按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多',
      dtImage:[
        { Imageurl: 'http://222.85.150.179:17009/QueryChager/img/1.jpg' },
        { Imageurl: 'http://222.85.150.179:17009/QueryChager/img/2.jpg' },
        { Imageurl: '../image/3.jpg' },
        { Imageurl: '../image/4.jpg' },
        { Imageurl: '../image/5.jpg' },
        { Imageurl: '../image/6.jpg' },
        { Imageurl: '../image/7.jpg' },
        { Imageurl: '../image/8.jpg' },
        { Imageurl: '../image/9.jpg' },
      ]
    }],
    fwalList: [{
      userImg: '../image/photo.jpg',
      userNickName: '测试用户',
      userInfoDate: '11:09 pm',
      userInfotype: '服务案例',
      fwalTitle:'标题',
      fwalText: '按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多',
       fwalImage: [
         { Imageurl: 'http://222.85.150.179:17009/QueryChager/img/1.jpg' }
      ]
    }],
    qywtList: [{
      qytwTitle: '标题',
      userImg: '../image/photo.jpg',
      userNickName: '测试用户',
      userInfotype: '提问',
      userInfoDate: '11:09 pm'  
    }],
    answerList:[{
      userImg: '../image/photo.jpg',
      userNickName: '测试用户',
      userInfoDate: '11:09 pm',
      userInfotype: '回答',
      answerTitle: '标题',
      answerText: '按时大大大现在出新阿萨德哇所大多哇爱仕达多群多无群奥术大师大大爱仕达多群无无多',
      answerImage: [
        { Imageurl: 'http://222.85.150.179:17009/QueryChager/img/1.jpg' },
        { Imageurl: 'http://222.85.150.179:17009/QueryChager/img/2.jpg' },
        { Imageurl: '../image/3.jpg' },
        { Imageurl: '../image/4.jpg' },
        { Imageurl: '../image/5.jpg' },
        { Imageurl: '../image/6.jpg' },
        { Imageurl: '../image/7.jpg' },
        { Imageurl: '../image/8.jpg' },
        { Imageurl: '../image/9.jpg' },
      ]
    }],
  },
  //获取输入税号
  getTax:function(e){
    this.setData({
      cus_tax: e.detail.value
    })
  },
  //显示大图
  showBigPicture: function (event){
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接 
      urls: changeImgArray(imgList) // 需要预览的图片http链接列表
    })
  },
  //首页切换标签
  indexSwitchTab: function (event){
    var url = event.currentTarget.dataset.url;//获取data-url
    wx.reLaunch({
      url: url
    })
  },
  //查看动态详情
  jumpDtinfo:function(){
    wx.navigateTo({
      url: '../dynamicInfo/dynamicInfo'
    })
  },

  //查看服务案例与活动详情
  jumpfwalinfo:function(){
    wx.navigateTo({
      url: '../fwal/fwal'
    })
  },
  //查看企业问答详情
  jumpQandA: function () {
    wx.navigateTo({
      url: '../QandA/QandA'
    })
  },
  //发布动态
  jumpPublicDt:function(){
    this.showButtonPublish("hide");
    wx.navigateTo({
      url: '../publicDt/publicDt'
    })
  },
//发布提问
jumpPublicTw:function(){
  this.showButtonPublish("hide");
  wx.navigateTo({
    url: '../publicTw/publicTw'
  })
},
//发不动态和活动
publicAlAndHd:function(){
  this.showButtonPublish("hide");
  wx.navigateTo({
    url: '../publicAlAndHd/publicAlAndHd'
  })
},
  //发布
  showPublishBtn:function(res){
    var btntype = res.currentTarget.dataset.type;//获取data-list 
    this.showButtonPublish(btntype);
  },
  /*弹出按钮功能*/
  showButtonPublish: function (btntype){
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
  showDtBut: function (animation){
    animation.translate(-70,-55).step();
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
    }.bind(this),300)
  },
  showWdBut: function (animation) {
    setTimeout(function () {
      animation.translate(80, -55).step()
      this.setData({ animationWd: animation.export() })
    }.bind(this), 450)
  },
  //隐藏各种框
  hideDtBut: function (animation) {
    animation.translate(0,0).step();
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

/*将图片转换成数组*/
function changeImgArray(imgList) {
  var imgArray = [];
  for (var i=0;i< imgList.length;i++) {
    imgArray.push(imgList[i].Imageurl);
  }
  return imgArray;
}

