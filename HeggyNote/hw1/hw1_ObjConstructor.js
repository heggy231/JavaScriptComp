// Object constructor and prototyping
// When you need an object that you can instantiate multiple times, the object constructor and prototyping are the answer. An object constructor is just like any other function, but when naming the function you actually give the function the name of the object in which you are creating it. In this case, that object name is Gallery. However, because you want to have the ability to create multiple instances of the gallery object, I named it GalleryObj for this example.

// The object constructor begins to differentiate itself when you start adding properties and methods to it. I personally don't add methods to my constructors because it is arguably bad form, but it is possible to do so. When adding a property or method to an object constructor, you use this keyword before the property or method names to assign them to the object itself.

// Great read for creating constructor and prototype
// https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

// Defining properties in an object constructor

function GalleryObj() {
  this.Images = ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'];
  this.CurrentIndex = 0;
  this._loopInterval = setInterval(this.Next, 2500);
  this.Next = function() {
    if(this.CurrentIndex < (this.Images.length - 1)) {
      this.CurrentIndex++;
    } else {
      this.CurrentIndex = 0;
    }
    this.Display();
  };
  this.Prev = function () {
    if(this.CurrentIndex > 0) {
      this.CurrentIndex--;
    } else {
      this.CurrentIndex = (this.Images.length - 1);
    }
    this.Display();
  };
  this.Display = function () {
    var photoGallery = document.getElementById('photo-gallery');
    var currentImage = this.Images[this.CurrentIndex];
  };
}