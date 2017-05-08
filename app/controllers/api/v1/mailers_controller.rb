class Api::V1::MailersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    name = params[:response][:name]
    beers = params[:response][:beers]
    songname = params[:response][:songname]
    songartist = params[:response][:songartist]
    # subject=params[:subject]
    # user = params[:email]
    ResponseMailer.response_email(name, beers, songname, songartist).deliver
  end
end
