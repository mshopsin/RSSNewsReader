NR.Routers.FeedRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "feeds/:id/entries": "showEntries"
  },

  initialize: function($sidebar, $body) {
    this.$sidebar = $sidebar;
    this.$body = $body;
  },

  index: function() {
    var that = this;
    that.$body.empty();

  },

  showEntries: function(id) {
    console.log(id);
    var that = this;
    var feed = NR.Store.Feeds.get(id);
    //.where([{ feed_id: id }])

    var entries = feed.get("entries");

    var entryView = new NR.Views.EntriesIndexView({
     collection : entries
    });

    that.$body.html(entryView.render().$el);




  }
});