class EntriesController < ApplicationController
  respond_to :json
  def show
    @entry = Entry.find(params[:id])
    respond_to do |format|
      format.json { render :json => @entry }
    end
  end
end
