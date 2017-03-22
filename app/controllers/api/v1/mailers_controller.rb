class Api::V1::MailersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    date = params[:response][:date]
    binding.pry
    # subject=params[:subject]
    # user = params[:email]
    ResponseMailer.response_email(date).deliver
  end
end
