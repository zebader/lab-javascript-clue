//Characters
var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist"
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}
var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}
var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}
var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}
// Weapons
var rope = {
name: "rope",
weight: 10
}
var knife = {
name: "knife",
weight: 8
}
var candlestick = {
name: "candlestick",
weight: 2
}
var dumbbell = {
name: "dumbbell",
weight: 30
}
var poison = {
name: "poison",
weight: 2
}
var axe = {
name: "axe",
weight: 15
}
var bat = {
name: "bat",
weight: 13
}
var trophy = {
name: "trophy",
weight: 25
}
var pistol = {
name: "pistol",
weight: 20
}
// Rooms
var dinningroom = {
name: "Dinning Room"}
var conservatory = {
name: "Conservatory"}
var kitchen = {
name: "Kitchen"}
var study = {
name: "Study"}
var library = {
name: "Library"}
var billiardroom = {
name: "Billiard Room"}
var lounge = {
name: "Lounge"}
var ballroom = {
name: "Ballroom"}
var hall = {
name: "Hall"}
var spa = {
name: "Spa"}
var livingroom = {
name: "Living Room"}
var observatory = {
name: "Observatory"}
var theater = {
name: "Theater"}
var guesthouse = {
name: "Guest House"}
var patio = {
name: "Patio"}

// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [dinningroom,conservatory,kitchen,study,library,billiardroom,lounge,ballroom,hall,spa,livingroom,observatory,theater,guesthouse,patio];

// Weapons Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

function randomSelector(card){
  var randomselect = Math.floor(Math.random() * card.length);
  return card[randomselect]
}

function pickMistery(){
  var char = randomSelector(charactersArray);
  var room = randomSelector(roomsArray);
  var weapon = randomSelector(weaponsArray);
  var misteryEnvelope = [char,weapon,room];
  return misteryEnvelope;
}
var mistery = pickMistery();

function revealMistery(mistery){
  var killer = mistery[0].first_name + " " + mistery[0].last_name + " " + "killed Mr.Boddy using the "+ mistery[1].name + " in the "+ mistery[2].name+"!!!!";
  return killer;
}

revealMistery(pickMistery());

/*==============Is this worng?

var revealMistery = (misteryEnvelope) => {
  var killer = mistery[0].first_name + " " + mistery[0].last_name + " " + "killed Mr.Boddy using the "+ mistery[1].name + "in the "+ mistery[2].name+"!!!!";
  return killer;

}*/