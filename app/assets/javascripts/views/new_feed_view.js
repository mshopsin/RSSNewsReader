NR.Views.NewFeedView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "click button.cancel": "cancel"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["feeds/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function() {
    var that = this;

    that.model.set({
      title: that.$("input[name=feed\\[title\\]]").val(),
      link: that.$("input[name=feed\\[link\\]]").val()
    });

    that.collection.add(that.model);
    that.model.save();
    Backbone.history.navigate("#/");
  },

  cancel: function() {
    Backbone.history.navigate("#/");
  }

});