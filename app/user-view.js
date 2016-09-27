var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<%= name %>"),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});