// pages/rent/rent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onadd: function () {
        wx.navigateTo({
            url: '../addperson/addperson',
        })
    },
    checkboxChange: function () {
        var that = this;
        console.log('checkbox发生change事件，携带value值为：', that.data.checked)
        this.setData({
            checked: !that.data.checked
        })

    },
    formSubmit: function () {
        const checked = this.data.checked
        if (checked == false) { //必须加上false判断
            wx.showModal({
                icon: 'none',
                title: '请先阅读相关说明',
            })
            return;
        }
        wx.showModal({
            icon: 'none',
            title: '您已确认',
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