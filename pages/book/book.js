// pages/book/book.js
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "/";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dateArrs: [],
        isTodayWeek: false,
        todayIndex: -1,
        dd: '',
        chooseDate: '',
        classArr: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;

        const nowDate = getNowFormatDate();
        console.log(nowDate);
        this.setData({
            year: year,
            month: month,
            isToday: '' + year + month + now.getDate(),
            chooseDate: nowDate
        })
        this.dateInit();
    },
    onbtnclick: function () {
        wx.showModal({
            title: '预约成功',
            icon: '../../img/book.png'
        })
    },
    dateInit: function () {
        var that = this;
        //全部时间的月份都是按0~11基准，显示月份才+1
        let dateArr = []; //需要遍历的日历数组数据
        let arrLen = 0; //dateArr的数组长度
        let now = new Date();
        let year = now.getFullYear();
        let nextYear = 0;
        let month = now.getMonth(); //没有+1方便后面计算当月总天数
        let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
        let startWeek = new Date(year + '/' + (month + 1) + '/' + 1).getDay(); //目标月1号对应的周
        let dayNums = new Date(year, nextMonth, 0).getDate(); //获取目标月有多少天
        let obj = {};
        let num = 0;

        if (month + 1 > 11) {
            nextYear = year + 1;
            dayNums = new Date(nextYear, nextMonth, 0).getDate();
        }
        arrLen = startWeek + dayNums;
        for (let i = 0; i < arrLen; i++) {
            if (i >= startWeek) {
                num = i - startWeek + 1;
                obj = {
                    isToday: '' + year + (month + 1) + num,
                    dateNum: num,
                    weight: 5
                }
            } else {
                obj = {};
            }
            dateArr[i] = obj;
        }
        // 截取从今天开始的7天预约时间
        var newDateArr = [];
        for (var i = 0; i < dateArr.length; i++) {
            if (dateArr[i].isToday !== undefined) {
                if (that.data.isToday === dateArr[i].isToday) {
                    var days = new Date().getDay(); //获取今天日期
                    newDateArr = dateArr.slice(i, i + 7);

                    // 向日期数组中填充星期数
                    for (let j = 0; j < newDateArr.length; j++) {
                        newDateArr[j].weekday = swfunc(days);
                        ++days;
                        if (days > 6) {
                            days = 0
                        }
                    }
                    console.log(newDateArr)
                    // 当获取天数小于一周时，补足一周
                    if (newDateArr.length < 7) {
                        const dateL = newDateArr.length;
                        const extrLength = 7 - dateL;

                        // 构造日期对象并加入数组（对象简化）
                        // 5 5 
                        for (let i = 0; i < extrLength; i++) {
                            console.log(newDateArr);
                            let weekMark = swfunc(newDateArr[newDateArr.length - 1].weekday)
                            console.log(weekMark);
                            // 日期数字格式调整
                            if (weekMark > 5) {
                                weekMark = -1;
                            }
                            let obj = {
                                dateNum: i + 1,
                                weekday: swfunc(weekMark + 1)
                            }
                            newDateArr.push(obj);
                        }
                    }
                    this.setData({
                        dateArrs: dateArr.slice(i, i + 7),
                        dd: newDateArr[0].dateNum
                    })
                    break;
                }
            }
        }

        function swfunc(key) {
            switch (key) {
                case 1:
                    key = '周一';
                    break;
                case '周一':
                    key = 1;
                    break;
                case 2:
                    key = '周二';
                    break;
                case '周二':
                    key = 2;
                    break;
                case 3:
                    key = '周三';
                    break;
                case '周三':
                    key = 3;
                    break;
                case 4:
                    key = '周四';
                    break;
                case '周四':
                    key = 4;
                    break;
                case 5:
                    key = '周五';
                    break;
                case '周五':
                    key = 5;
                    break;
                case 6:
                    key = '周六';
                    break;
                case '周六':
                    key = 6;
                    break;
                case 0:
                    key = '周日';
                    break;
                case '周日':
                    key = 0;
                    break;
            }
            return key;
        }
        this.setData({
            dateArrs: newDateArr
        })
        let nowDate = new Date();
        let nowYear = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth() + 1;
        let nowWeek = nowDate.getDay();
        let getYear = nowYear;
        let getMonth = nowMonth;
        if (nowYear == getYear && nowMonth == getMonth) {
            this.setData({
                isTodayWeek: true,
                todayIndex: nowWeek
            })
        } else {
            this.setData({
                isTodayWeek: false,
                todayIndex: -1
            })
        }
    },
    chooseDate: function (e) {
        const that = this;
        const date = e.currentTarget.dataset.datenum;
        let month = e.currentTarget.dataset.month;
        let year = e.currentTarget.dataset.year;
        const isAdd = e.currentTarget.dataset.weight;
        console.log(isAdd);
        if (isAdd === undefined) {
            if (month == 12) {
                month = 1;
                year = year + 1;
            } else {
                month = month + 1;
            }
        }
        const chooseDate = year + '-' + month + '-' + date;
        that.setData({
            dd: e.currentTarget.dataset.datenum,
            chooseDate: chooseDate
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