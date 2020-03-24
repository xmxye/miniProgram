// components/navBar/NavBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[],
      observer:function(value){

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {   
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleitemClick(e){
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
    }
  }
})
