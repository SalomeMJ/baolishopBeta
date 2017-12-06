angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  },{
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
    price:'1988元/把',
    sale:'12'
  },{
    id:2,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  },{
    id:3,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  },{
    id:4,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  },{
    id:5,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  },{
    id:6,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  },{
    id:7,
    img:'img/s1.jpg',
    title:'安力狮ANNEX指纹锁密码锁',
    price:'1988元/把',
    sale:'12'
  }



  ];
  return {
    all: function() {
      return goods;
    },
    remove: function(good) {
      goods.splice(goods.indexOf(good), 1);
    },
    get: function(goodId) {
      for (var i = 0; i < goods.length; i++) {
        if (goods[i].id === parseInt(goodId)) {
          return goods[i];
        }
      }
      return null;
    }
  };
});
