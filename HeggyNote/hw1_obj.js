// Class 4: Introduction to Objects (user-defined) 
// Please submit your answers to the following questions in a document with the name of the document as >> studentName + class number + "Assignment.":

 

// Exercise 8: Objects

// Create a gallery of the pictures that were created using the object literal notation in the class with

// 1. Constructor notation
// 2. Prototype notation.
// 3. Refactor the code to add inheritance using.
//   1. Object.create()
//   2. ES6 Classes.
 

// Example gallery using the object literal notation:

var Gallery = {
Images: ['istockphoto_14149033.jpg', 'istockphoto_14232771.jpg', 'istockphoto_14667148.jpg'],
CurrentIndex: 0,
Next: function()
{
if(Gallery.CurrentIndex < (Gallery.Images.length-1))
  {
  Gallery.CurrentIndex++;
  } else
{
Gallery.CurrentIndex = 0;
}
Gallery.Display();
},
Prev: function()
{
if(Gallery.CurrentIndex > 0)
{
Gallery.CurrentIndex--;
}
else
{
Gallery.CurrentIndex = (Gallery.Images.length-1);
}
Gallery.Display();
},
Display: function()
{
var photoGallery = document.getElementById('photo-gallery');
var currentImage = Gallery.Images[Gallery.CurrentIndex];
photoGallery.src = "../assets/img/"+ currentImage;
}
};
window.onload = function()
{
var _loopInterval = setInterval(Gallery.Next, 2500);
};


// one path to implement prototype

function gallery() {

}

// everything added to prototype function
gallery.prototype