// Creating a custom object using the Object function
var Gallery = new Object();

window.onload = function () {
  Gallery.Images = ['babyMeekats.jpg', 'minx.jpg', 'owl.jpg'];
  Gallery.CurrentIndex = 0;
  Gallery._loopInterval = setInterval(Galley.Next, 2500);
};

Gallery.Next = function() {
  // sets base as last ith position of img
  if(Gallery.CurrentIndex < (Gallery.Images.length-1)) {
    // go to the next ith position of img
    Gallery.CurrentIndex++;
  // if you are at the last img 
  } else {
    // reset the CurrentIndex
    Gallery.CurrentIndex = 0;
  }
  // show img
  Gallery.Display();
};

// functionality for previous button
Gallery.Prev = function () {
  // if img is on anything otherthan starting ith
  if(Gallery.CurrentIndex > 0) {
    // move to one less index position
    Gallery.CurrentIndex--;
    // if you are on first img then go to last img
  } else {
    Gallery.CurrentIndex = (Gallery.Images.length - 1);
  }
  Gallery.Display();
}
