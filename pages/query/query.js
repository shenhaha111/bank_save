// pages/query/query.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: "",
        focus: false,
        list: [{
            'id': "A",
            "number": "0001",
            "chain": "是",
            "time": "2021-12-3",
            "state": "是"
        }, {
            'id': "B",
            "number": "0002",
            "chain": "是",
            "time": "2021-12-3",
            "state": "是"
        }, ],
        list2: [{
            'id': "A",
            "number": "0001",
            "chain": "是",
            "time": "2021-12-3",
            "state": "是"
        }, {
            'id': "B",
            "number": "0002",
            "chain": "是",
            "time": "2021-12-3",
            "state": "是"
        }, ],
    },
    cancelHandler(e) {
        this.setData({
            focus: true
        });
    },
    query(e) {

        this.setData({
            inputValue: e.detail.value
        }) //首先回显输入的字符串
        //实现搜索的功能
        var list = this.data.list2; //先把第二条json存起来
        var list2 = []; //定义一个数组
        //循环去取数据
        for (var i = 0; i < list.length; i++) {
            var string = list[i].id;
            //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
            if (string.indexOf(e.detail.value) >= 0) {
                list2.push(list[i]);
            }
        }
        //到这里list2就已经是你查出的数据
        //如果输入的关键词为空就加载原来的全部数据，不是空就加载搜索到的数据
        if (e.detail.value == "") {
            //加载全部
            this.setData({
                list: list
            })
        } else {
            this.setData({
                list: list2
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