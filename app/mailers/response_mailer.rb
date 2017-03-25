class ResponseMailer < ApplicationMailer
  def response_email(name, beers, songs)
    @name = name
    @beers = beers
    @songs = songs
    mail(from: "anna@warren.party", to: "annaandwarren@gmail.com", subject: "Beer and song requests")
  end
end
