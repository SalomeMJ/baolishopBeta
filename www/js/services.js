angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '周边商圈',
    prodect:{
      kind:'全部分类'
    },prodects:{
      kinds:'默认排序'
    },
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
