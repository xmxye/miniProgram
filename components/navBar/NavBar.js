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
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleitemClick(e){
      const {titles} = this.properties;
      const {index} = e.currentTarget.dataset;
      titles.forEach((x,i)=>{
         index==i ? x.isActive=true : x.isActive = false
      })
      this.setData({
        titles
      })
      // 向父组件传递index
      this.triggerEvent('itemChange',{index})
    }
  }
})
