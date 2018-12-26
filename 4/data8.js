let data = {
  input: {
    type: null,
    title: null
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
    typeList() {
      let obj = {
        sort: [],
        map: {}
      };
      this.menu.forEach(({ type, title, link }, index) => {
        if (!obj.map[type]) {
          obj.sort.push(type);
          obj.map[type] = {
            sort: [],
            map: {}
          };
        }
        obj.map[type].sort.push(title);
        obj.map[type].map[title] = { index, link };
      });
      return obj;
    },
    titleList() {
      this.input.title = null;
      if (this.input.type) {
        return this.typeList.map[this.input.type];
      } else {
        return [];
      }
    },
    content() {
      if (this.input.title) {
        return this.titleList.map[this.input.title];
      } else {
        return null;
      }
    }
  }
});
