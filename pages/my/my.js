// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    onclick: function () {
        wx.navigateTo({
            url: '../box/box',
        })
    },
    onboxfee: function () {
        wx.navigateTo({
            url: '../boxfee/boxfee',
        })
    },
    onabout: function () {
        wx.navigateTo({
            url: '../about/about',
        })
    },
    onbookclick: function () {
        wx.navigateTo({
            url: '../bookrecord/bookrecord',
        })
    },
    onbillclick: function () {
        wx.navigateTo({
            url: '../mybill/mybill',
        })
    },
    onboxclick: function () {
        wx.navigateTo({
            url: '../boxrecord/boxrecord',
        })
    },
    mapView: function () {
        const that = this;
        wx.chooseLocation({
            success: function (e) {
                console.log(e.name);
                that.setData({
                    names: e.name
                })
            },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})