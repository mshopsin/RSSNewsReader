NR.Collections.FeedEntries = Backbone.Collection.extend({
  model: NR.Models.Entry,

  initialize: function(models, options) {
    this.feed = options.feed;
  },

  url: function() {
    return "/feeds/" + this.feed.id + "/entries";
  }

});