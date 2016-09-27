var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var UserView = require("./user-view")


module.exports = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
    this.collection.each(this.addUser, this);
    return this;
  },
  addUser: function(user){
    var userView = new UserView({model: user});
    this.$el.append(userView.render().el);
  }
});