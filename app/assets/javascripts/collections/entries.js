NR.Collections.Entries = Backbone.Collection.extend({
  initialize: function(options) {
    this.feedId = options.feedId;
  },

  model: NR.Models.Entry,

  url: function() {
    return "/feeds/" + this.feedId + "/entries";
  }
});