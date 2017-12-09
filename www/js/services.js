angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '周边商圈',
    kind:'全部分类',
    kinds:'默认排序',
    face: ''
  }, {
    id: 1,
    name: '周边工作室',
    face: '返回'
  }, {
    id: 2,
    name: '黑白榜',
    face: ''
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    // adr: function () {
    //   return $http.get('http://localhost/angular/baolishop/edit-user.php').then(function (res) {
    //     console.log(res);
    //
    //   })
    // }

  };


})
  .factory('Chates',function () {
    var shop = [{
      id: 0,
      name: '青川足道',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 1,
      name: '中国移动营业厅',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 2,
      name: '交通银行',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 3,
      name: '美丽庄园',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 4,
      name: '保利时代',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 5,
      name: '良品铺子',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 6,
      name: '悦动建生',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }];
    return {
      otall: function() {
        return shop;
      }

    };
  })
  .factory('Chatess',function () {
    var shops = [{
      id: 0,
      name: 'dasdasdsa',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 1,
      name: 'fasfasd',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 2,
      name: 'fasfasf',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }, {
      id: 3,
      name: 'fasfas',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 4,
      name: 'afasf',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 5,
      name: 'afsafa',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    },{
      id: 6,
      name: 'afasf',
      lastText: '✨✨✨✨✨',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      price: '人均:',
      money :'￥3元'
    }];
    return {
      othall: function() {
        return shops;
      }

    };
  })
  .factory('NextChates',function () {
    var shopes = [{
      id: 0,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    }, {
      id: 1,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    }, {
      id: 2,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    }, {
      id: 3,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    },{
      id: 4,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    },{
      id: 5,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    },{
      id: 6,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注',
      hef:'健康咨询'
    }];
    return {
      othalls: function() {
        return shopes;
      }

    };
  })
  .factory('SecondChates',function () {
    var shopes1 = [{
      id: 0,
      name: '就不告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    }, {
      id: 1,
      name: '就不告jgh诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    }, {
      id: 2,
      name: '就不告jgh诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    }, {
      id: 3,
      name: '就不jhgjgh告诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    },{
      id: 4,
      name: '就不告jghjhg诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    },{
      id: 5,
      name: '就不告jghj诉你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    },{
      id: 6,
      name: '就不告诉jgjh你',
      num:'粉丝',
      fans: '3',
      say: '妈妈说请先生不如于先生',
      face: 'img/person.png',
      att :'关注'
    }];
    return {
      othalls1: function() {
        return shopes1;
      }

    };
  })

  .factory('Goods', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var goods=[{
    id:1,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:0
  },{
    id:2,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  },{
    id:3,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  },{
    id:4,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  },{
    id:5,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  },{
    id:6,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  },{
    id:7,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元',
    sale:'12',
    count:'0'
  }];
    return {
      all: function() {
        return goods;
      }
    };
  })




.factory('Eval',function () {
  var them=[{
    img:'img/person.png',
    name:'Mr.Sun',
    time:'1小时前',
    car:'求2栋地下室的空车位',
    good:'img/good.png',
    msg:'img/mes.png',
    gad:'求车位'
  },{
    img:'img/person.png',
    name:'Mr.Sun',
    time:'1小时前',
    car:'求2栋地下室的空车位',
    good:'img/good.png',
    msg:'img/mes.png',
    gad:'求车位'
  },{
    img:'img/person.png',
    name:'Mr.Sun',
    time:'1小时前',
    car:'求2栋地下室的空车位',
    good:'img/good.png',
    msg:'img/mes.png',
    gad:'求车位'
  }]
  return {
    othalls2: function() {
      return them;
    }
  };
})
  .factory('Says',function () {
    var sayData=[{
      id:'1',
      goodName:'Tonge1',
      dates:'2016-12-28 09:20:22',
      quality:'服务质量',
      sudo:'响应速度',
      message:'电脑椅子不错'

    },{
      id:'2',
      goodName:'Tonge2',
      dates:'2016-12-28 09:20:22',
      quality:'服务质量',
      sudo:'响应速度',
      message:'111'
    },{
      id:'3',
      goodName:'Tonge3',
      dates:'2016-12-28 09:20:22',
      quality:'服务质量',
      sudo:'响应速度',
      message:'222'
    }]
    return {
      all: function() {
        return sayData;
      }
    };
  })
  // .factory('Codes', function() {
  //   // Might use a resource here that returns a JSON array
  //
  //   // Some fake testing data
  //   var code=[{
  //     id:1,
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     count:0
  //   },{
  //     id:2,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   },{
  //     id:3,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   },{
  //     id:4,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   },{
  //     id:5,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   },{
  //     id:6,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   },{
  //     id:7,
  //     img:'img/s1.jpg',
  //     title:'安力狮ANNEX指纹锁密码锁',
  //     price:'1988元',
  //     sale:'12',
  //     count:'0'
  //   }];
  //   return {
  //     all: function() {
  //       return goods;
  //     },
  //     remove: function(good) {
  //       goods.splice(goods.indexOf(good), 1);
  //     },
  //     get: function(goodId) {
  //       for (var i = 0; i < goods.length; i++) {
  //         if (goods[i].id === parseInt(goodId)) {
  //           return goods[i];
  //         }
  //       }
  //       return null;
  //     }
  //   };
  // })
