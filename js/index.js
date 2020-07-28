var aboutMeButtonArtist = document.getElementById("ArtistButton");
var aboutMeButtonProgramming = document.getElementById("ProgrammingButton");
var aboutMeButtonDesign = document.getElementById("DesignButton");

var aboutMeDescription = document.getElementById("aboutMeDescriptionText");
var aboutMeImage = document.getElementById("aboutMeImage");

var switchCraft = function(newDescription, imageSource) { aboutMeDescription.innerHTML = newDescription; aboutMeImage.src = imageSource};

aboutMeButtonArtist.addEventListener("click", function () {
  switchCraft("<br>I use a variety of mediums to convey a message, whether it be through video games, sketches, and paintings.<br>"
              + "While I am able to draw landscapes and still objects, my specialty is drawing people from life and characters.<br>"
              + "I find myself using an envrionment or a mood of a reference to allow me flow and create a piece that captures a feeling.<br><br>"
              + "Some mediums I typically use include: <br>"
              + " - Sketching with pencil on paper<br>"
              + " - Digital Art with Procreate (with an Ipad Pro) or a Photoshop like program (with a drawing tablet)<br>"
              + " - Use of Ink Brush Pens to create sytlized pieces<br>"
              + "- Painting with watercolors<br><br>"
              + "As every artist, I am always practicing and learning to perfect my craft as much as possible. Gesture Drawing and drawig references<br>"
              + "is daily practice to me. At the moment, I am practicing my skills in digital art to be able to be used in a professional level.<br>"
              + "To learn more about what projects and practical work I have done, check the My Work section below!",
              "img/Art1.gif");
});
aboutMeButtonProgramming.addEventListener("click", function () {
  switchCraft("<br>I am currently a Computer Science Student at the University of California at Irvine, planning to graduate by my third year in the class of 2022.<br>"
               + "However my studies in programming didn't start at college as I started programming as soon as I started highschool, starting projects,<br>"
               + "attending numerous hackathons, finding and leading a game dev club, and being code lead on an FRC Robotics Team.<br><br>"
               + "My Knowledge of programming include: <br> - Strong knowledge of C# in hand with Game Development in Unity <br> - C++ and its practical use in Robotics <br>"
               + " - Knowledge of the Java Programming Language <br> - Knowledge of Python <br> - Basic Knowledge of Web Dev Including HTML, CSS, Javascript, and Flask <br>"
               + " - Ability to learn programming languages relatively quickly for practical use <br>"
               + " - The ability to use Version Control such as Git <br> - Ability to plan out code that must be done in a team"
               + "<br><br> I am always looking for new things to learn. At the moment I am dabbling in Machine Learning and learning how to utilize graphic interfaces<br>"
               + "such as OpenGL."
               + "<br>To learn more about what projects and practical work I have done, check the My Work section below!",
               "img/Coding1.gif");
});
aboutMeButtonDesign.addEventListener("click", function () {
  switchCraft("<br>Coming Soon!");
});

