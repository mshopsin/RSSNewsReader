NR.Routers.FeedRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "feeds/new" : "newFeed",
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

  newFeed: function() {
    var that = this;

    var newFeedView = new NR.Views.NewFeedView({
      collection: NR.Store.Feeds,
      model: new NR.Models.Feed()
    });
    that.$body.html(newFeedView.render().$el);
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