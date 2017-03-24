class ResponseMailer < ApplicationMailer
  def response_email(name, beers, songs)
    @name = name
    @beers = beers
    @songs = songs
    mail(to: "annaandwarren@gmail.com", subject: "Beer and song requests")
  end
end
