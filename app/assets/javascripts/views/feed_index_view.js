NR.Views.FeedIndexView = Backbone.View.extend({

  initialize: function() {
    var that = this;

    var renderCallBack = that.render.bind(that);
    that.collection.on("add", renderCallBack);
    that.collection.on("change", renderCallBack);
    that.collection.on("remove", renderCallBack);

  },

  render: function() {
    var that = this;
    var renderedContent = JST["feeds/index"]({ feeds: that.collection });

    that.$el.html(renderedContent);
    return that;
  }
});