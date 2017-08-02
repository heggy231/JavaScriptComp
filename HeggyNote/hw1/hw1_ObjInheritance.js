// Defining properties in an object constructor

function GalleryObj() {
  this.Images = ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'];
  this.CurrentIndex = 0;
  // ****How does this make sense? other difference is that the interval for auto-advancing the gallery photos is now defined per instance rather than within the object definition. This lets you control the interval for each gallery instance separately.
  this._loopInterval = setInterval(this.Next, 2500);
  // this.Next = function() {
  //   if(Gallery.CurrentIndex < (Gallery.Images.length - 1)) {
  //     Gallery.CurrentIndex++;
  //   } else {
  //     Gallery.CurrentIndex = 0;
  //   }
  //   Gallery.Display();
  // };
  // this.Prev = function () {
  //   if(Gallery.CurrentIndex > 0) {
  //     Gallery.CurrentIndex--;
  //   } else {
  //     Gallery.CurrentIndex = (Gallery.Images.length - 1);
  //   }
  //   Gallery.Display();
  // };
  // this.prototype.Display = function () {
  //     var photoGallery = document.getElementById('photo-gallery');
  //     var currentImage = Gallery.Images[Gallery.CurrentIndex];
  //     photoGallery.src = "img/" + currentImage;
  //   };
}



GalleryObj.prototype.Next = function() {
  if(Gallery.CurrentIndex < (Gallery.Images.length - 1)) {
    Gallery.CurrentIndex++;
  } else {
    Gallery.CurrentIndex = 0;
  }
  Gallery.Display();
};

GalleryObj.prototype.Prev = function () {
  if(Gallery.CurrentIndex > 0) {
    Gallery.CurrentIndex--;
  } else {
    Gallery.CurrentIndex = (Gallery.Images.length - 1);
  }
  Gallery.Display();
};
GalleryObj.prototype.Display = function () {
    var photoGallery = document.getElementById('photo-gallery');
    var currentImage = Gallery.Images[Gallery.CurrentIndex];
    photoGallery.src = "img/" + currentImage;
};


// create instance of custom GalleryObj
let Gallery = class GalleryObj();

window.onload = function () {
  // setInterval is window obj native method
  let index = Gallery.Images.GetIndex('owl.jpeg');
  alert('Index: ' + index);
};
