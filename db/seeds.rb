# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# sf
places = [
  "Thailand, United Kingdom, Germany, China",
  "Russia, Spain, Italy, Turkey",
  "Russia, United Kingdom, Italy, Turkey",
  "China, Spain, Italy, Turkey",
  "China, Germany, Italy, Turkey",
  "Russia, United Kingdom, Italy, Turkey",
  "China, Germany, Mexico, Turkey",
  "China, Spain, Mexico, Turkey",
  "Russia, United Kingdom, Germany, Spain"
]
languages = [
  "Mandarin, Arabic, French, Russian, English",
  "Arabic, Russian, English",
  "Spanish, Arabic, French, Russian, English",
  "English, Arabic, French, Russian, English",
  "German, French, Russian, English",
  "Portuguese, Arabic, French, Russian, English",
  "Russian, French, English",
  "French, Arabic, French, Russian, English",
  "Japanese, French, Russian, English"
]
ratings = [
  0,1,2,3,4,5
]


futon_images = [
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481673511/images_7_cc0vsq.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481673511/images_jmcexc.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481673511/images_3_cabpsg.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481673511/images_4_pvg6sx.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672216/LoftBig_np4cnd.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672206/images_3_uq6ptz.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672204/images_6_rr0jpw.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672219/tllon-rooms-grand-langham-club-room-1680-945_eyw72c.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672216/hotel-majestic-prague-double-room-03_andshs.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672206/rooms-03-1600x960_q6af3u.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672197/images_y52qez.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672216/tlbos-rooms-superior-king-1680-945_q79bk2.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672214/hotel-johann-strauss-triple-room_xynwuy.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672200/room_mcdr1n.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_92,w_80/v1481672196/images_4_pgpbkv.jpg"
]
futon_images_details = [
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481673511/images_7_cc0vsq.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481673511/images_jmcexc.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481673511/images_3_cabpsg.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481673511/images_4_pvg6sx.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672216/LoftBig_np4cnd.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672206/images_3_uq6ptz.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672204/images_6_rr0jpw.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672219/tllon-rooms-grand-langham-club-room-1680-945_eyw72c.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672216/hotel-majestic-prague-double-room-03_andshs.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672206/rooms-03-1600x960_q6af3u.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672197/images_y52qez.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672216/tlbos-rooms-superior-king-1680-945_q79bk2.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672214/hotel-johann-strauss-triple-room_xynwuy.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672200/room_mcdr1n.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_200,w_300/v1481672196/images_4_pgpbkv.jpg"
]

#14

User.create(username: "Guest",
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description: "CURRENT MISSION To travel the world and meet people, and seedifferent things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh,I believe everyone has just as much good in them as they do bad it justdepends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )


User.create(username: "Tyler",
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")


User.create(username: Faker::Internet.user_name,
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )


User.create(username: Faker::Internet.user_name,
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )



User.create(username: Faker::Internet.user_name,
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )


User.create(username: Faker::Internet.user_name,
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )


User.create(username: Faker::Internet.user_name,
password: "password1",
city: "San Francisco",
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",
places: places[Faker::Number.between(1,8)],
languages: languages[Faker::Number.between(1,8)],
email: Faker::Internet.email,
profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )


Futon.create(
address: "919 Clement St, San Francisco, CA 94118, USA",

rating: ratings[Faker::Number.between(1,5)],
city: "San Francisco",

lat: 37.782602,

lng: -122.468987,
description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",

user_id:1,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url: futon_images[Faker::Number.between(0,13)])



Futon.create(
address: "658 25th Ave, San Francisco, CA 94121, USA",

rating: ratings[Faker::Number.between(1,5)],
city: "San Francisco",

lat: 37.777175,

lng: -122.484436,
description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",

user_id:2,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])




Futon.create(
address: "3725 21st St, San Francisco, CA 94114, USA",
city: "San Francisco",

rating: ratings[Faker::Number.between(1,5)],

lat: 37.756005,

lng: -122.430878,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",

user_id:3,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])


Futon.create(
address: "Moraga Steps, San Francisco, CA 94122, USA",
city: "San Francisco",

rating: ratings[Faker::Number.between(1,5)],

lat: 37.756277,

lng: -122.472763,
description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",

user_id:4,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])


Futon.create(
address: "135-149 Cargo Way, San Francisco, CA 94124 USA",
city: "San Francisco",

rating: ratings[Faker::Number.between(1,5)],

lat: 37.744332,

lng: -122.383843,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",

user_id:5,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])



Futon.create(
address: "527 Athens St, San Francisco, CA 94112 USA",
city: "San Francisco",

rating: ratings[Faker::Number.between(1,5)],

lat: 37.719623,

lng: -122.429848,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",

user_id:6,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])



Futon.create(
address: "1706 Waller St, San Francisco, CA 94117 USA",
city: "San Francisco",

rating: ratings[Faker::Number.between(1,5)],

lat: 37.76849,

lng: -122.451821,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",

user_id:7,

futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])

#San Diego






User.create(
    username: Faker::Internet.user_name,
    password: "password1",
    city: "San Diego",
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    description:"I'm sorry I can't give in this time couch because I'm traveling for one year😁 I'm Miguel Angel but my friends call me Mike, I like to share experiences, explore new cultures and learn languages, my passion is abstract mathematics in particular combinatorial gemoetria well as cryptography. Why I’m on Couchsurfing I wanna share someone experiences and open my mind with people from other parts of the world who talk to me about their culture and traditions beside learning new languages. Interests Love every day that passes my day after day and be a better person, fight to achieve what I want.",
    places: places[Faker::Number.between(1,8)],
    languages: languages[Faker::Number.between(1,8)],
    email: Faker::Internet.email,
    profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "San Diego",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",
 places: places[Faker::Number.between(1,8)],
 languages: languages[Faker::Number.between(1,8)],
 email: Faker::Internet.email,
 profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )

Futon.create(
address: "6954 Long Lake Ct, Lemon Grove, CA 91945, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.733458,
lng: -117.047962,
description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",
user_id:8,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url: futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "2502 San Diego Ave, San Diego, CA 92110, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.753095,
lng: -117.194904,
description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",
user_id:9,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "Archie Moore Memorial Fwy, San Diego, CA 92113, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.702262,
lng: -117.120747,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:10,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "796 Madison Ave, Chula Vista, CA 91910, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.620176,
lng: -117.087788,
description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",
user_id:11,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "1971 Wildbrook Pl, Chula Vista, CA 91913, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.650245,
lng: -116.980671,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",
user_id:12,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "Woden St, National City, CA 91950, USA",

rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat:32.679147,
lng: -117.118,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:13,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "Filipino American Hwy, San Diego, CA 92139, USA",
rating: ratings[Faker::Number.between(1,5)],
city: "San Diego",
lat: 32.682615,
lng: -117.028736,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",
user_id:14,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])

#New York
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"I'm sorry I can't give in this time couch because I'm traveling for one year😁 I'm Miguel Angel but my friends call me Mike, I like to share experiences, explore new cultures and learn languages, my passion is abstract mathematics in particular combinatorial gemoetria well as cryptography. Why I’m on Couchsurfing I wanna share someone experiences and open my mind with people from other parts of the world who talk to me about their culture and traditions beside learning new languages. Interests Love every day that passes my day after day and be a better person, fight to achieve what I want.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "New York",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",
 places: places[Faker::Number.between(1,8)],
 languages: languages[Faker::Number.between(1,8)],
 email: Faker::Internet.email,
 profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )


Futon.create(
address: "178 Mulberry St, New York, NY 10012, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.720617,
lng: -73.996662,
description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",
user_id:15,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url: futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "389 West St, New York, NY 10014, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.733106 ,
lng: -74.010395,
description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",
user_id:16,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780291/tmg-article_tall_ws6rcn.jpg")
Futon.create(
address: "6311 Hudson Ave, West New York, NJ 07093, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.790316 ,
lng: -74.010395,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:17,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/555f26ca_original_f0yu0a.webp")
Futon.create(
address: "609 Walton Ave, Bronx, NY 10451, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.820461 ,
lng: -73.927998,
description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",
user_id:18,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780308/1-screen-shot-2016-07-10-at-11-42-33-am_crnta3.png")
Futon.create(
address: "40-42 57th Ave, Maspeth, NY 11378, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.727903 ,
lng: -73.926624,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",
user_id:19,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780287/download_gapork.jpg")
Futon.create(
address: "268 Ocean Ave, Jersey City, NJ 07305, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.696674 ,
lng: -74.088673,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:20,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780290/cayo-espanto-belize-outside-bed_frzmb1.jpg")
Futon.create(
address: "20 Ridge Loop, Staten Island, NY 10304, USA",
city: "New York",
rating: ratings[Faker::Number.between(1,5)],
lat: 40.599773 ,
lng: -74.099659,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",
user_id:21,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/2052641043_5489fbdc48_z_n3hiuw.jpg" )

#Seattle

User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"I'm sorry I can't give in this time couch because I'm traveling for one year😁 I'm Miguel Angel but my friends call me Mike, I like to share experiences, explore new cultures and learn languages, my passion is abstract mathematics in particular combinatorial gemoetria well as cryptography. Why I’m on Couchsurfing I wanna share someone experiences and open my mind with people from other parts of the world who talk to me about their culture and traditions beside learning new languages. Interests Love every day that passes my day after day and be a better person, fight to achieve what I want.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",
  city: "Seattle",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",

 places: places[Faker::Number.between(1,8)],
 languages: languages[Faker::Number.between(1,8)],
 email: Faker::Internet.email,
 profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )

Futon.create(
address: "611 Maynard Ave S, Seattle, WA 98104, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.597227,
lng: -122.32546,
description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",
user_id:22,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url: futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "Incentives By Design, 1920 Occidental Ave S, Seattle, WA 98134, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.584492,
lng: -122.333013,
description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",
user_id:23,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "2149-2199 S College St, Seattle, WA 98144, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.582871,
lng: -122.30486,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:24,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "3224 4th Ave S, Seattle, WA 98134, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.574765,
lng: -122.328893,
description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",
user_id:25,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "4023 39th Ave S, Seattle, WA 98118, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.567122,
lng: -122.2842613,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",
user_id:26,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "853 83rd Ave NE, Medina, WA 98039, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.618754,
lng: -122.228642,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:27,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "4207 4th Ave NE, Seattle, WA 98105, USA",
city: "Seattle",
rating: ratings[Faker::Number.between(1,5)],
lat: 47.657988,
lng: -122.324524,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",
user_id:28,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)] )


# Los Angeles


User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"I'm sorry I can't give in this time couch because I'm traveling for one year😁 I'm Miguel Angel but my friends call me Mike, I like to share experiences, explore new cultures and learn languages, my passion is abstract mathematics in particular combinatorial gemoetria well as cryptography. Why I’m on Couchsurfing I wanna share someone experiences and open my mind with people from other parts of the world who talk to me about their culture and traditions beside learning new languages. Interests Love every day that passes my day after day and be a better person, fight to achieve what I want.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Los Angeles",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",

 places: places[Faker::Number.between(1,8)],
 languages: languages[Faker::Number.between(1,8)],
 email: Faker::Internet.email,
 profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )

Futon.create(
address: "3003 Leonis Blvd, Vernon, CA 90058, USA",city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 34.000304,
lng: -118.214951,
description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",
user_id:29,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url: futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "1205 W Chapman Ave, Fullerton, CA 92833, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 34.032176,
lng: -117.944412,
description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",
user_id:30,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "2016 W Adams Blvd, Los Angeles, CA 90018, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat:  33.873836,
lng: -118.309708,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:31,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "5524 W 98th St, Los Angeles, CA 90045, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 33.947917,
lng: -118.161392,
description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",
user_id:32,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "7128 Nada St, Downey, CA 90242, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 33.941081,
lng: -118.161392,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",
user_id:33,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "4024 Honeysuckle Ln, Whittier, CA 90604, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 33.929688,
lng: -118.035049,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:34,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "5171-5181 E Burnett St, Long Beach, CA 90815, USA", city: "Los Angeles",
rating: ratings[Faker::Number.between(1,5)],
lat: 33.800832,
lng: -118.132553,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",
user_id:35,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)] )

#Paris


User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"I'm sorry I can't give in this time couch because I'm traveling for one year😁 I'm Miguel Angel but my friends call me Mike, I like to share experiences, explore new cultures and learn languages, my passion is abstract mathematics in particular combinatorial gemoetria well as cryptography. Why I’m on Couchsurfing I wanna share someone experiences and open my mind with people from other parts of the world who talk to me about their culture and traditions beside learning new languages. Interests Love every day that passes my day after day and be a better person, fight to achieve what I want.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473292366/profile_yozbyk.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"***If you send a couch request, please at least read the section :) Thanks******Si envías solicitud de alojamiento, por favor al menos lee la sección. Gracias*** Life is more fun if you share it. Apart from traveling, I'm also keen to discover what my city has to offer! This is a huge city, so there's a lot to do and see. Sometimes I can host, sometimes I can't, but it will be always nice to hang out with other surfers.  I'm always glad to help someone else. So, if there's something I can help you with, don't hesitate to contact me. --- Además de viajar, me gusta conocer cada rincón de la ciudad, uno nunca sabe qué sorpresa se puede encontrar por ahí. A veces puedo hospedar, a veces no, pero definitivamente me apunto para salir con surfers que anden de paseo por la ciudad. Y si hay algo en que te pueda ayudar, házmelo saber, siempre es agradable ayudar a otras personas.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION study, study and more study! ABOUT ME I'm a common guy from Kathmandu. I'm the same guy in the above picture. You can notice visible hair-loss thing in progress and sometimes I could be too lazy to shave for a long time ;) I'm a student and a learner for the whole life. I do some this and that to make my living. I can't put many good adjectives to describe me, that'd be rude I think. It's up to people to decide and figure out what kind of person I am. PHILOSOPHY Open mind and open heart opens doors to enlightenment. I believe every god is good and every good deed is blessed by god! I am born Hindu. I like Buddha's teachings. I help others in whatever ways I can. I believe we should all help those who need the most. I believe in open-source philosophy and I can imagine how beautiful the world would have been, if everyone had access to good education. I love to share with the world all the information, knowledge and experiences that I have.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(
  username: Faker::Internet.user_name,
  password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"Globe-trotter, Dreamer, Part Time Wanderer, Nomad, Trekkie, Nature Lover, living for the Moment and Full time ⌚ friend!! I am a normal, professional, clean, serious,funny, outlandish, almost native Nepali. This is a fully open home and a shared sleeping space. What else would you like to know...? Ask away, I am an open book.....I do this to meet fascinating, swashbuckling strangers who want to share stories, perspectives, new ideas... and Tea or coffee ! If you're just looking for a free place to stay and aren't in this to get to know amazing and adventurous people, look elsewhere or get an Airbnb. Since I live in a very small apartment, I can only host one person at a time. I also require that surfers have references. love the idea of a multicultural exposure to the outside world. I love sharing my experiences and hosting whenever possible everyone traveling my city." ,
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(
  username: Faker::Internet.user_name, password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"CURRENT MISSION To travel the world and meet people, and see different things ABOUT ME Friendly, Easy going, Social. PHILOSOPHY Ahhhh, I believe everyone has just as much good in them as they do bad it just depends what you bring out in the people your around. I enjoy talking about questions like this sometimes.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(
  username: Faker::Internet.user_name, password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i have been travelling and living around the world since 2 weeks after my 18th birthday in 2003. i have spent 4 summers in the usa at camp canadensis running the rock climbing programme. i spent 2 winters in london working as a barman and a bouncer, saw the sites, drank the drinks. i was a church local and she bu regular.  i am headed to canada with a group of mates to work the winter season in banff then hopefully trek some of the appalachian trail next year and then go to thailand and explore for a couple of months.",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(
  username: Faker::Internet.user_name, password: "password1",city: "Paris",
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  description:"i'm a calm and open boy who loves the idea of visiting his country which happens to be europe now... i want to meet young and nice people to make friendship with this cool exchange concept. i want to go across europe and enjoy its curiosity of nature ... also i'm willing to help and meet everyone who is concerned by our planet, our societys, and all of them political stakes ... but also all of the other joyfull, playfull, interesting and sportive people there is ... PHILOSOPHY help others is the finest way to help yourself",
  places: places[Faker::Number.between(1,8)],
  languages: languages[Faker::Number.between(1,8)],
  email: Faker::Internet.email,
  profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )
Futon.create(
  address: "15 Avenue de la Porte de Choisy, 75013 Paris, France",city: "Paris",
  rating: ratings[Faker::Number.between(1,5)],
  lat: 48.818349 ,
  lng: 2.364996,
  description:"The location leaves a lot to be desired, unless you happen to be a freelance exotic dancer. Nestled in a district of sex shops and strip clubs, the area attracts the sort of people that you would cross the street to avoid. Next, you enter the lift – I have seen suicide attempts that adhere to more health and safety measures. Seriously – take the stairs... The 'continental' breakfast was cheap packaged bread, cheap salami, and plastic – wrapped cheese. I didn't try it – I value my life. I can only imagine how it tasted...",
  user_id:36,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
  futon_img_url: futon_images[Faker::Number.between(0,13)])
Futon.create(
  address: "222 Quai Marcel Dassault, 92150 Suresnes, France", city: "Paris",
  rating: ratings[Faker::Number.between(1,5)],
  lat: 48.861282,
  lng: 2.226294,
  description:"How can a place so awful be a part of such a beautiful city? As soon as we pulled up outside and looked at the dirty, holey curtains hanging like rags behind the stinking glass of the rotting windows we should have turned and run. The room was tiny and stank, as did the rest of the building. It was a combination of cats, mould, rot, damp, the local petting farm and a pair of Zoo Keepers' wellies. We went out early and stayed out as late as we could manage. Next morning we were up and out, didn't have breakfast as we saw the state of the kitchen when we parked the car around the back in 'Steptoes' yard! Which was not only full of junk but also half the cat population of Oxford, who incidentally, made themselves very at home by laying all over my car.",
  user_id:37,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
  futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
  address: "15 Rue des Myosotis, 93110 Rosny-sous-Bois, France", city: "Paris",
  rating: ratings[Faker::Number.between(1,5)],
  lat: 48.878896,
  lng: 2.470739,
  description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
  user_id:38,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
  futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
  address: "13 Rue Saint-Sulpice, 75006 Paris, France", city: "Paris",
  rating: ratings[Faker::Number.between(1,5)],
  lat: 48.851343,
  lng: 2.33753,
  description:"We had a community bathroom at the end of the hall where we discovered a condom on the sink. The room maid stole my friend’s prescription pills out of his suitcase while we were on the beach. We heard our neighbors blasting techno music until 6 in the morning and I did not trust the community shower to my bare feet. Do not stay here under any circumstances. Please.",
  user_id:39,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
  futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "46-48 Rue du Couëdic, 75014 Paris, France", city: "Paris",
rating: ratings[Faker::Number.between(1,5)],
lat: 48.830102,
lng: 2.330664,
description:"This joint is Nasty and the staff is RUDE to a fault. They are well over priced for the Slum that it is. My employer booked the room as lodging for myself. They have huge problems with the Fire Alarm system as it goes off for almost any reason or time of night. Further they have long-term renters that are on the Sexual Registry as offenders. Also some mentally ill woman walks around the hall ways screaming and rambling at any time of the night. I would not ever stay there again. I almost quit my job as my employer would not rebook me into a cleaner hotel. I did inform my boss that I would resign if he insisted that I stay there again.",
user_id:40,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "2-6 Avenue Lucien Français, 94400 Vitry-sur-Seine, France", city: "Paris",
rating: ratings[Faker::Number.between(1,5)],
lat: 48.785333,
lng:2.388342,
description:"Very friendly service, continental breakfast was excellent (JUICEBOXES!) and the room was great. Very clean and the haunted sink and screaming toilet gave the bathroom personality! Not sarcasm, I had a very enjoyable experience",
user_id:41,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])
Futon.create(
address: "8 Sentier des Torques, 92290 Châtenay-Malabry, France", city: "Paris",
rating: ratings[Faker::Number.between(1,5)],
lat:  48.772664,
lng:  2.281912,
description:"The most disgusting and creepy place imaginable. Only place that had vacancies. Transvestite prostitute in lobby being paid by a man, dirty sheets, porn on the TV. weird screams in the morning, possible blood drips on plastic mattress covering. This was the most frightening experience, seriously debated sleeping in Central Park instead. This was worse than anything I’ve ever seen on television! Feared for my life!",
user_id:42,
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
futon_img_url:futon_images[Faker::Number.between(0,13)])





futon_pic_array =[
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780292/futon_i8kscr.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780291/tmg-article_tall_ws6rcn.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/555f26ca_original_f0yu0a.webp",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780308/1-screen-shot-2016-07-10-at-11-42-33-am_crnta3.png",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780287/download_gapork.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780290/cayo-espanto-belize-outside-bed_frzmb1.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/2052641043_5489fbdc48_z_n3hiuw.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473366504/loplmavkx9xmzf6iloea.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473391039/images_u0tjqm.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473391039/img_9312_yx5l99.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473391035/black-futons-for-sale_rcim7k.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473391033/futons1_wmumyu.jpg",
  "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473391032/images_1_wsv5jx.jpg"

]


50.times do |i|
  User.create({

      username: Faker::Internet.user_name,

    firstname: Faker::Name.first_name,

    lastname: Faker::Name.last_name,
    password: "password",

    profile_img_url: Faker::Avatar.image,

    description: Faker::Lorem.paragraph,

    email: Faker::Internet.email
  })
  Futon.create({

    address: Faker::Address.street_address,
    city: Faker::Address.city,

    lat: Faker::Address.latitude,

    lng: Faker::Address.longitude,

    description: Faker::ChuckNorris.fact,

    user_id: (i + 7 * 6),
    rating: ratings[Faker::Number.between(1,5)],
futon_img_details:futon_images_details[Faker::Number.between(0,13)],
    futon_img_url:futon_images[Faker::Number.between(0,13)]
  })

end




#
#   create_table "bookings", force: :cascade do |t|
#     t.integer  "guest_id",   null: false
#     t.integer  "host_id",    null: false
#     t.datetime "start_date", null: false
#     t.datetime "end_date",   null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end
#
#   create_table "futons", force: :cascade do |t|
#     t.string   "address",       null: false
#     t.float    "lat",           null: false
#     t.float    "lng",           null: false
#     t.text     "description",   null: false
#     t.integer  "user_id",       null: false
#     t.datetime "created_at",    null: false
#     t.datetime "updated_at",    null: false
#     t.string   "futon_img_url"
#   end
#
#   create_table "hosts", force: :cascade do |t|
#     t.float    "lat",         null: false
#     t.float    "lng",         null: false
#     t.text     "description", null: false
#     t.string   "firstname",   null: false
#     t.string   "lastname",    null: false
#     t.string   "email",       null: false
#     t.string   "image_url"
#     t.datetime "created_at",  null: false
#     t.datetime "updated_at",  null: false
#   end
#
#   create_table "references", force: :cascade do |t|
#     t.integer  "user_id",     null: false
#     t.integer  "host_id",     null: false
#     t.text     "description", null: false
#     t.integer  "rating",      null: false
#     t.datetime "created_at",  null: false
#     t.datetime "updated_at",  null: false
#   end
#
#   create_table "users", force: :cascade do |t|
#     t.string   "firstname",       null: false
#     t.string   "lastname",        null: false
#     t.string   "password_digest", null: false
#     t.string   "session_token",   null: false
#     t.string   "email",           null: false
#     t.string   "profile_img_url"
#     t.datetime "created_at",      null: false
#     t.datetime "updated_at",      null: false
#     t.string   "username"
#   end
#
# end
