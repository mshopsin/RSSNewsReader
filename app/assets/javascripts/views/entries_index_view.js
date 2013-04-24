NR.Views.EntriesIndexView = Backbone.View.extend({

  initialize: function() {
    var that = this;
  },

  render: function() {
    var that = this;
    var renderedContent = JST["entries/index"]({ entries: that.collection });

    that.$el.html(renderedContent);
    return that;
  }

});