// pages/GBDT/GBDT.js
var util = require('../../util/util.js');
var app = getApp();
Page({

  onLoad: function (options) {

  },
  //数据预处理
  formsubmit(e) {
    util.reqFunc('*******',
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName,
      }, "A1", function (res) {
        app.globalData.output_fileName1 = res.data.data.file_name;
      })
  },
  //特征提取
  formsubmit(e) {
    util.reqFunc('***********',
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.output_fileName1
      }, "A1", function (res) {
        app.globalData.output_fileName2 = res.data.data.file_name;
      })
  },
  //故障检测
  formsubmit(e) {
    util.reqFunc("*********  ",
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.output_fileName,
      }, 'A2', function (res) {
        app.globalData.resultArray = [res.data.data.label];
        console.log(app.globalData.resultArray);
      })
  },

  data: {
    resultArray: app.globalData.resultArray
  },
  returnTap() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
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