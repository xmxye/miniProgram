// pages/profile/profile.js
Page({
  data: {
      titles:[
        {
          "title":"首页",
          "isActive":true,
          "id":0
        },{
          "title":"原创",
          "isActive":false,
          "id":1
        },{
          "title":"分类",
          "isActive":false,
          "id":2
        },{
          "title":"关于",
          "isActive":false,
          "id":3
        }
      ]
  },
  itemChange(e){
    const {index} = e.detail;
    const {titles} = this.data;
    titles.forEach((x,i)=>{
      index == i ? x.isActive = true : x.isActive = false
    })
    this.setData({
      titles
    })
  }
})