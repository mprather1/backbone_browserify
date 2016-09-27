var $ = require('jquery');
var domready = require('domready');

var User = require("./app-model")
var Users = require("./app-collection")
var UserView = require("./user-view")
var UsersView = require("./users-view")


 domready(function(){
   var user = new User({name: 'mike'});
   var user2 = new User({name: 'killbill'});
    var users = new Users([user, user2]);
    var usersView = new UsersView({collection: users});
    $('body').html(usersView.render().el);
 }) 
    


