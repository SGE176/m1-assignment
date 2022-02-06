
var photos = [];
var fileNames = [];
var imageList = [];
var captionTexts = [
  "Kongci",
  "Nezha under the bed",
  "Nezha under the table",
  "Kongci under the bed",
  "Nezha at the door",
  "Kongci on the cat tree",
  "Kongci at the door",
  "Good Brothers 1",
  "Good Brothers 2",
  "BoBo in scraf",
];
var descTexts = [
  "Kongci is sitting in the room",
  "Nezha is sitting behind Kongci",
  "Nezha is sitting under the table",
  "Kongci is sitting under the bed",
  "Nezha is coming",
  "Kongci is sitting on his cat tree",
  "Kongci is watching",
  "Kongci&Nezha are sitting together",
  "Kongci&Nezha are hiding together",
  "Bobo got wrapped up with the scarf",
];
var image;
var caption;
var openList = "<li id='photo'>";
var closeList = "</li>";
var openCaptionTag = "<span id='catcaptions'>";
var closeCaptionTag = "</span>";
var openDescTag = "<button id='desc' onClick = 'displayInfo(";
var openDescTagclose = ")'>"
var closeDescTag = "</button>";
var openText = "<div id='text'>";
var closeText = "</div>";
var infoText = [
    "Little Kongci enjoys sitting on bedroom ground, where he can always sleep on for a whole day long.",
    "Big Nezha is a little shy, and he stays under the bed to react quickly to whatever going to happen.",
    "As a three years old cat, Nezha is at his most energetic age. Only after chasing would he stays quietly under the table.",
    "Kongci is younger and thinner. No matter how much can food he eat, he still can't grow as strong as Nezha.",
    "Nezha is watching us to see if there's any threaten here. Obviously the room behind can be best shelter for him if danger is near.",
    "It's Christmas, and Kongci gets his Christmas gift from Santa which is a large cat tree that he could sleep on.",
    "Kongci is watching at you!! Give him some treats or he would leave.",
    "Same time, same pose, Kongci and Nezha are looking at the camera to remember their first Christmas together!",
    "Same time, same pose, Kongci and Nezha are hiding under the table after moving to a new apartment.",
    "After playing in Kongci's place for a whole day, Bobo got wrapped up in a scarf and went back to his home."];

var closeButton = ["Click to Close"]

//Create a loop to create  images starting with index of 0
for (var i = 0; i < 10; i++) {
  fileNames.push("Cat-" + (i + 1)); //Create image file name and store in the array
  photos.push("<img class='lightbox-toggle' src='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into image element and store in an array
  image =
    openList +
    photos[i] +
    openCaptionTag +
    captionTexts[i] +
    closeCaptionTag +
    openDescTag +
    i+
    openDescTagclose+
    openText +
    descTexts[i] +
    closeText +
    closeDescTag +
    closeList; //Assemble image element from array with list elements and store in a variable
  imageList.push(image); //Store(push) the assemble list codes into an array
}
//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join(" ");

//Set up the infoBox
function displayInfo(i){
    document.getElementById("infoBox").style.visibility = 'visible';
    document.getElementById("title").innerHTML = captionTexts[i];
    document.getElementById("info").innerHTML = infoText[i];
    document.getElementById("closeText").innerHTML = closeButton;
}

var closeText = document.getElementById("closeTexts");
closeText.addEventListener("click",hideInfo);
function hideInfo(){
    document.getElementById("infoBox").style.visibility = 'hidden';
}

$(document).ready(function(){
    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        var img = $(this).clone();
        $(this).css("cursor","pointer");
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();
        $('.box').append(img);

        })


    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
        $('.box').contents().remove("img");
    });

});