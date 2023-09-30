var logancopy = [
    "If a dog and cat had a baby together that grew up and worked a desk job he'd be a Cog in the machine",
    "I'm still upset that Tie Domi didn't name his child Tyson",
    "A tagline for a car company that prides itself on its morals and ethics: Take the High Road",
    "Logan Broger is \"amazing\" and a \"wonderful boy\" according to Logan's mom. Felinamiss",
    "You know the Grammys are a joke when Future doesn't win Best Everything",
    "If you were a member of the Bloods and became paralyzed do you then become a member of the Crips?",
    "Curling is the best sport named after something you do to your hair",
    "You say potatoe, I say starchy carbs",
    "If you work for an ad agency and getting paid for it aren't you the one who is being influenced by advertising?",
    "Are there Out-of-Stock photos? Gafuffle",
    "I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness",
    "Most streets are two-way streets...why does that make love so special?",
    "A tagline for an airline: Take the High Road",
    "Rumour has it targeted online advertising was developed because the internet was upset that you could read it but it couldn't read you. Trepidelicious",
    "This is a true fact: I never had a fear of heights until I fell off a roof",
    "A tagline for a special highway that is easy to navigate while under the influence of drugs: Take the High Road",
    "I'm the only person in the world with my name",
    "We need more werkin and less twerkin if you ask me. Balooby",
    "If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it",
    "I'm in a band that does Metallica covers with our private parts - it's called Myphallica. Petrovache",
    "Smiling could easily be misinterpreted for showing your teeth to someone because they said something that made you happy",
    "We say we are walking the dog, but the dog always leads",
    "Tim Horton was a hockey player but is the name of a coffee chain, which means my dream of a goat sanctuary being my legacy is not unrealistic",
    "I started a sensory deprivation chamber business - it involves really dark curtains, ear plugs, and a sleeping mask",
    "Do we make money or does money make us? Chezwich",
    "Pantone is a colour but also the singular version of pants",
    "Logan Ipsum will loop at some point",
    "Thank you for using my words in your work",
    "You should \"listen to my mixtape\" (check out the rest of my portfolio)",
    "I have never known a Jack that was in good enough shape to name bodybuilding after him",
    "Twitter is the rice of social media",
    "INjuries always keep you OUT of things. Visticula",
    "For the name of an act as serious as killing someone, assassination literally translates to buttbuttination",
    "Why don't we call glasses duocles",
    "If you wake up with a giant zit, you are really facing your fears when you look in the mirror",
    "Cemeteries are just garbage dumps filled with humans",
    "I have a moral code, but I haven't figured out how to read it yet",
    "I bet most serial killers play the drums",
    "To Catch A Predator would have been a great name for a Steve Irwin show. Mintslavicia",
    "If the word kerning is kerned poorly, it kind of looks like learning - which is appropriate because both are important",
    "North America should be called Russia since people are always moving so fast. Gralitica",
    "I don't need a big house, just a two-floor condo - you could say I have lofty expectations",
    //You can add more sentences here
];

$(document).ready(function() {
initbutton();
});

function initbutton(){
$('#generate').on('click', function(){
cleardisplay();
speak();
});
}

function cleardisplay(){
$('#display').empty();
}

function speak(){
var num = parseInt($('#num').val());
var typ = $('#typ').val();
if(typ === 'w'){
createwords(num);
}
else if(typ ==='s'){
createsentences(num);
}
else{/*If drop down fails default to paragraphs*/
createparagraphs(num);
}
}
function createsentences(n){
for(var i = 0; i <= (n - 1); i++){
var r = Math.floor(Math.random() * logancopy.length);
var sent = '<p>' + logancopy[r] + '</p>';
$('#display').append(sent);
}
}

function createparagraphs(n){
for(var i = 0; i <= (n - 1); i++){
var para = '<p>';
for(var j = 0; j <= 4; j++){
var r = Math.floor(Math.random() * logancopy.length);
para = para + logancopy[r] + '. ';
}
para = para + '</p>';
$('#display').append(para);
}
}

function createwords(n){

var combinedwords = '<p>';

for(var i = 0; i <= (n - 1); i++){
var a = Math.floor(Math.random() * logancopy.length);
var splitsent = logancopy[a].split(' ');
var b = Math.floor(Math.random() * splitsent.length);
combinedwords = combinedwords + splitsent[b] + ' ';
}
$('#display').append(combinedwords + '</p>');
}



