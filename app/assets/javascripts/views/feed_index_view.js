NR.Views.FeedIndexView = Backbone.View.extend({

  initialize: function() {
    var that = this;

  },

  render: function() {
    var that = this;
    var renderedContent = JST["feeds/index"]({ feeds: that.collection });

    that.$el.html(renderedContent);
    return that;
  }
});