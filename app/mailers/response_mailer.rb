class ResponseMailer < ApplicationMailer
  def response_email(name, beers, songname, songartist)
    @name = name
    @beers = beers
    @songname = songname
    @songartist = songartist
    mail(from: "anna@warren.party", to: "annaandwarren@gmail.com", subject: "Beer and song requests")
  end
end
