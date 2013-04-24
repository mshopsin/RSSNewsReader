window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($sidebar, $body, feedsData, entriesData) {

    NR.Store.Feeds = new NR.Collections.Feeds(feedsData);
    NR.Store.Entries = new NR.Collections.Entries(entriesData);

    this.installSidebar($sidebar);

    new NR.Routers.FeedRouter($sidebar, $body);
    Backbone.history.start();
  },

  installSidebar: function($sidebar) {

    var feedsIndexView = new NR.Views.FeedIndexView({
     collection: NR.Store.Feeds
    });

    $sidebar.html(feedsIndexView.render().$el);
  }
};