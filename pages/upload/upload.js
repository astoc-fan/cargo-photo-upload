// pages/upload/upload.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fileList: [], // 预览图片用的数组
    imgUrls: [], // 上传图片用的数组
  },
  afterRead(event) {
    const {file} = event.detail; // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    this.setData({
      fileList: file
    })
    // this.uploadImg(file);
  },

  // 删除图片
  delete(event) {
    console.log(event)
    let imgDelIndex = event.detail.index
    let fileList = this.data.fileList
    fileList.splice(imgDelIndex, 1)
    console.log('删除图片的', fileList)
    this.setData({
      fileList
    })
    // this.uploadImg(fileList)
  },

  uploadImg:function() {
    var _this = this;
    var imgUrl = [];
    // 多张图片上传
    for (var i = 0; i < _this.file.length; i++) {
      wx.uploadFile({
        url:'https://www.astoc.tk:4431/mo/upload/upload.php', //写自己的路径
        filePath: _this.data.fileList[i].url,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          console.log(res)
          const { fileList = [] } = _this.data;
          fileList.push({ ...file, url: res.data });
          // _this.setData({ fileList });
        },
      })
    }
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

  }
})