// pages/boxfee/boxfee.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['三个月', '半年', '一年'],
        array1: ['中国农业银行高新区支行', '中国农业银行蜀山区支行', '中国农业银行瑶海区支行'],
        index: 0,
        index1: 0,
        location: '安徽省合肥市高新区创新置地中心',
        date: '2018-10-01',
        time: '12:00',
        dateTimeArray: null,
        dateTime: null,
        dateTimeArray1: null,
        dateTime1: null,
        startYear: 2000,
        endYear: 2050,
        checked: false
    },
    changeDate(e) {
        this.setData({
            date: e.detail.value
        });
    },
    changeTime(e) {
        this.setData({
            time: e.detail.value
        });
    },
    changeDateTime(e) {
        this.setData({
            dateTime: e.detail.value
        });
    },
    changeDateTime1(e) {
        this.setData({
            dateTime1: e.detail.value
        });
    },
    changeDateTimeColumn(e) {
        var arr = this.data.dateTime,
            dateArr = this.data.dateTimeArray;

        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

        this.setData({
            dateTimeArray: dateArr,
            dateTime: arr
        });
    },
    changeDateTimeColumn1(e) {
        var arr = this.data.dateTime1,
            dateArr = this.data.dateTimeArray1;

        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

        this.setData({
            dateTimeArray1: dateArr,
            dateTime1: arr
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取完整的年月日 时分秒，以及默认显示的数组
        var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        // 精确到分的处理，将数组的秒去掉
        var lastArray = obj1.dateTimeArray.pop();
        var lastTime = obj1.dateTime.pop();

        this.setData({
            dateTime: obj.dateTime,
            dateTimeArray: obj.dateTimeArray,
            dateTimeArray1: obj1.dateTimeArray,
            dateTime1: obj1.dateTime
        });
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChange1: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index1: e.detail.value
        })
    },
    mapView: function () {
        wx.chooseLocation({
            success: function (e) {
                console.log(e.name);
                location: e.name
                // this.setData({

                // })
            },
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