const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

//auto slide
const autoSlide = () => {
  //slideshow interval for 5sec (5000 millisecs)
  intervalId = setInterval(() => slideImage(++imageIndex), 5000);
};
autoSlide();

const slideImage = () => {
  imageIndex =
    imageIndex === images.length
      ? 0
      : imageIndex < 0
      ? images.length - 1
      : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);

  // Calculate the updated image index based on the button clicked
  if (e.target.id === "next") {
    imageIndex++;
  } else {
    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = images.length - 1;
    }
  }

  slideImage();

  autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

// Mouseover event listener to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// Mouseleave event listener to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
