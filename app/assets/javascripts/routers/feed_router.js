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
    var feedEntries = new NR.Collections.Entries({ feedId: id });
   // feedEntries.fetch({
      //success: function () {
        var entryView = new NR.Views.EntriesIndexView({
          collection : NR.Store.Entries({ feedId: id });
        });
        that.$body.append(entryView.render().$el);
   //   }

 //   });



  }
});