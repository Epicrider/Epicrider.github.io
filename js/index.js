var aboutMeButtonArtist = document.getElementById("ArtistButton");
var aboutMeButtonProgramming = document.getElementById("ProgrammingButton");
var aboutMeButtonDesign = document.getElementById("DesignButton");

var aboutMeDescription = document.getElementById("aboutMeDescriptionText");
var aboutMeImage = document.getElementById("");

var switchCraft = function(newDescription) { aboutMeDescription.innerHTML = newDescription;};

aboutMeButtonArtist.addEventListener("click", function () {
  switchCraft("<br>hello1");
});
aboutMeButtonProgramming.addEventListener("click", function () {
  switchCraft("<br>Programming is my bread and butter.");
});
aboutMeButtonDesign.addEventListener("click", function () {
  switchCraft("<br>hello3");
});

