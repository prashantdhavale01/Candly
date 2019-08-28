var Menu = [{
    "id": 1,
    "name": "Home",
    "level": 0,
    "parentID": 0,
    "hasChild":1,
    "hasChildLongMenu":0,
    "href": "#",
    "liClass": "has-submenu"
  },
  {
    "id": 2,
    "name": "Pages",
    "level": 0,
    "parentID": 0,
    "hasChild": 1,
    "hasChildLongMenu":1,
    "href": "#",
    "liClass": "has-submenu"
  }, {
    "id": 3,
    "name": "Elements",
    "level": 0,
    "parentID": 0,
    "hasChild": 1,
    "hasChildLongMenu":1,
    "href": "#",
    "liClass": "has-submenu"
  }, {
    "id": 4,
    "name": "Work",
    "level": 0,
    "parentID": 0,
    "hasChild": 1,
    "hasChildLongMenu":0,
    "href": "#",
    "liClass": "has-submenu"
  }, {
    "id": 5,
    "name": "Blog",
    "level": 0,
    "parentID": 0,
    "hasChild": 1,
    "hasChildLongMenu":0,
    "href": "#",
    "liClass": "has-submenu"
  }, {
    "id": 6,
    "name": "Shop",
    "level": 0,
    "parentID": 0,
    "hasChild": 1,
    "hasChildLongMenu":0,
    "href": "#",
    "liClass": "has-submenu"
  },
  {
    "id": 7,
    "name": "Home Classic",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "#",
    "liClass": ""
  },
  {
    "id": 8,
    "name": "Home Corporate",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "index-corporate.html",
    "liClass": ""
  },
  {
    "id": 9,
    "name": "Home Agency",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "index-agency.html",
    "liClass": ""
  },
  {
    "id": 10,
    "name": "Home Portfolio",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "index-portfolio.html",
    "liClass": ""
  },
  {
    "id": 11,
    "name": "Home Landing",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "index-landing.html",
    "liClass": ""
  },
  {
    "id": 12,
    "name": "Home Countdown",
    "level": 1,
    "parentID": 1,
    "hasChild": 0,
    "href": "index-countdown.html",
    "liClass": ""
  }, 
];

var app = angular.module("homePage", []);
app.controller("menuControl", function ($scope) {
  $scope.menu = Menu;
});