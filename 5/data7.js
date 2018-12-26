let data = {
  input: {
    type: "All",
    title: ""
  },
  menu: [
    {
      type: "常常喝",
      title: "50嵐",
      link: "javascript:;",
      src: "https://trade.1111.com.tw/Include/getPhoto.ashx?vNo=247760&vType=1"
    },
    {
      type: "偶爾喝",
      title: "珍煮丹",
      link: "javascript:;",
      src: "http://www.jenjudan.com/image/_imagecache/009.jpg"
    },
    {
      type: "偶爾喝",
      title: "大苑子",
      link: "javascript:;",
      src:
        "https://yt3.ggpht.com/a-/AN66SAz9YEeFWifY8f3uZ6k60SAlhg-B7APEjnImLA=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      type: "一直喝",
      title: "coco都可",
      link: "javascript:;",
      src: "http://510.54vip.com.tw/upload/store3/user1/product/m1409637850.jpg"
    },
    {
      type: "常常喝",
      title: "茶湯會",
      link: "javascript:;",
      src:
        "https://files.parklane.com.tw/wp-content/uploads/2018/01/17142701/B1f_TEA_LOGO.jpg"
    },
    {
      type: "不會喝",
      title: "好茶 Good Tea",
      link: "javascript:;",
      src: "https://pic.pimg.tw/ainycka0815/1512041915-3133307121.jpg"
    }
  ]
};
let vm = new Vue({
  el: "#app",
  data: data,
  computed: {
    typeMenu() {
      if (this.input.type !== "All") {
        return this.menu.filter(item => {
          return item.type === this.input.type;
        });
      } else {
        return this.menu;
      }
    },
    titleMenu() {
      if (this.input.title) {
        return this.typeMenu.filter(item => {
          let content = item.title.toLowerCase();
          let key = this.input.title.toLowerCase();
          return content.indexOf(key) != -1;
        });
      } else {
        return this.typeMenu;
      }
    }
  }
});
