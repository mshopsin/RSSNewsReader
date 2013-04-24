class FeedsController < ApplicationController
  respond_to :json

  def index
    @feeds = Feed.all
    respond_to do |format|
      format.html
      format.json { render json: @feeds.to_json }
    end
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.fetchEntries
    respond_to do |format|
      format.json { render json: @feed.to_json(include: :entries) }
    end
  end

  def create
    @feed = Feed.new(params[:feed])
    if @feed.save
      render :json => @feed
    else
      render :json => @feed.errors, :status => 422
    end
  end

  def destroy
  end
end
