// pages/box/box.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    choose1BoxBtnClick: function (e) {
        wx.clearStorage(),
            this.setData({
                choose1: true,
                choose2: false,
                option: 1
            })
    },
    choose2BoxBtnClick: function (e) {
        this.setData({
            choose1: false,
            choose2: true
        })
    },
    onadd: function () {
        wx.navigateTo({
            url: '../add/add',
        })
    },
    onedit: function () {
        wx.navigateTo({
            url: '../edit/edit',
        })
    },
    onmanagement: function () {
        wx.navigateTo({
            url: '../management/management',
        })
    },
    onrent: function () {
        wx.navigateTo({
            url: '../rent/rent',
        })
    },
    onbook: function () {
        wx.navigateTo({
            url: '../openbox/openbox',
        })
    },
    onrequst: function () {
        wx.navigateTo({
            url: '../changebox/changebox',
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