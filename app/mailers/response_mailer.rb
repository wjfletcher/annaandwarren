class ResponseMailer < ApplicationMailer
  def response_email(date)
    @body=date
    mail(to: "annaandwarren@gmail.com", subject: "subject")
  end
end
