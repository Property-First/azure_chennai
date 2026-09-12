

    /* =========================
       MOBILE MENU
    ========================== */

    function toggleMenu() {

        const menu = document.getElementById("navMenu");

        menu.classList.toggle("show");

    }


    /* =========================
       SLIDER
    ========================== */

    const slides = [
        "./images/slider1.jpg",
        "./images/slider2.jpg"
    ];

    let currentSlide = 0;

    function changeSlide(index) {

        currentSlide = index;

        const hero = document.querySelector(".hero");

        hero.style.backgroundImage =
            "url('" + slides[index] + "')";

        document.querySelectorAll(".dot")
            .forEach((dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            });

    }


    /* =========================
       AUTO SLIDER
    ========================== */

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        changeSlide(currentSlide);

    }, 5000);


    /* =========================
       BROCHURE BUTTON
    ========================== */

    function openBrochure(event) {

        event.preventDefault();

        alert(
            "Thank you for your interest. Brochure download form will open here."
        );

    }


    /* =========================
       NAVIGATION ACTIVE STATE
    ========================== */

    document.querySelectorAll(".nav-item")
        .forEach(item => {

            item.addEventListener("click", function() {

                document.querySelectorAll(".nav-item")
                    .forEach(nav =>
                        nav.classList.remove("active")
                    );

                this.classList.add("active");

                // Close mobile menu
                document
                    .getElementById("navMenu")
                    .classList.remove("show");

            });

        });

/* =========================================
   PRICE BREAKUP POPUP
========================================= */

function showPriceBreakup(type) {

    document.getElementById("popupTitle").innerText =
        type + " - Price Breakup";

    document.getElementById("pricePopup")
        .classList.add("show");
}


function closePricePopup() {

    document.getElementById("pricePopup")
        .classList.remove("show");
}


function submitPriceForm(event) {

    event.preventDefault();

    alert(
        "Thank you! Our team will contact you shortly."
    );

    closePricePopup();

}


/* Close popup when clicking outside */

// document.getElementById("pricePopup")
//     .addEventListener("click", function(event) {

//         if (event.target === this) {
//             closePricePopup();
//         }

//     });


    /* =====================================
   VIEW MASTER / FLOOR PLAN
===================================== */

function viewPlan(type) {

    let image = "";

    if (type === "master") {
        image = "master-plan.jpg";
    }

    if (type === "floor1") {
        image = "floor-plan-1.jpg";
    }

    if (type === "floor2") {
        image = "floor-plan-2.jpg";
    }

    if (type === "floor3") {
        image = "floor-plan-3.jpg";
    }

    document.getElementById("viewerImage").src = image;

    document
        .getElementById("imageViewer")
        .classList.add("show");

}


function closeViewer() {

    document
        .getElementById("imageViewer")
        .classList.remove("show");

}


/* Close when clicking outside image */

// document
//     .getElementById("imageViewer")
//     .addEventListener("click", function(event) {

//         if (event.target === this) {
//             closeViewer();
//         }

//     });


/* ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeViewer();
    }

});


/* ==========================================
   GALLERY SCROLL
========================================== */

const galleryTrack =
  document.getElementById("galleryTrack");

const galleryNext =
  document.getElementById("galleryNext");

const galleryPrev =
  document.getElementById("galleryPrev");


function getScrollAmount() {

  const card =
    galleryTrack.querySelector(".gallery-card");

  if (!card) {
    return 350;
  }

  return card.offsetWidth + 23;
}


/* Next */

galleryNext.addEventListener("click", () => {

  galleryTrack.scrollBy({

    left: getScrollAmount(),

    behavior: "smooth"

  });

});


/* Previous */

galleryPrev.addEventListener("click", () => {

  galleryTrack.scrollBy({

    left: -getScrollAmount(),

    behavior: "smooth"

  });

});



/* ==========================================
   MOUSE WHEEL → HORIZONTAL SCROLL
========================================== */

galleryTrack.addEventListener(
  "wheel",
  function (event) {

    if (event.deltaY !== 0) {

      event.preventDefault();

      galleryTrack.scrollLeft +=
        event.deltaY;

    }

  },
  { passive: false }
);



/* ==========================================
   DOWNLOAD GALLERY
========================================== */

// const downloadGalleryBtn =
//   document.getElementById(
//     "downloadGalleryBtn"
//   );


// downloadGalleryBtn.addEventListener(
//   "click",
//   function () {

    

//     const galleryUrl =
//       "files/godrej-whitefield-gallery.pdf";

//     const link =
//       document.createElement("a");

//     link.href = galleryUrl;

//     link.download =
//       "Godrej-Whitefield-Villas-Gallery.pdf";

//     document.body.appendChild(link);

//     link.click();

//     link.remove();

//   }
// );



/* ==========================================
   GET DIRECTIONS
========================================== */

// const directionsBtn =
//   document.getElementById(
//     "directionsBtn"
//   );


// directionsBtn.addEventListener(
//   "click",
//   function () {

//     /*
//       Replace coordinates with
//       your exact project location.
//     */

//     const latitude = 12.9698;

//     const longitude = 77.7500;


//     const googleMapsUrl =
//       `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;


//     window.open(
//       googleMapsUrl,
//       "_blank"
//     );

//   }
// );





/* =================================
   VIRTUAL TOUR
================================= */

function openVirtualTour() {

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("virtualTourVideo");

    // Replace this with your YouTube video ID
    const videoId = "YOUR_VIDEO_ID";

    video.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0";

    popup.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeVirtualTour() {

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("virtualTourVideo");

    video.src = "";

    popup.classList.remove("show");

    document.body.style.overflow = "";
}


/* Close by clicking outside video */

// document
//     .getElementById("videoPopup")
//     .addEventListener("click", function(event) {

//         if (event.target === this) {
//             closeVirtualTour();
//         }

//     });


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeVirtualTour();
    }

});



/* ==========================================
   AMENITIES SLIDER
========================================== */

const amenitiesTrack =
  document.getElementById("amenitiesTrack");

const amenitiesNext =
  document.getElementById("amenitiesNext");

const amenitiesPrev =
  document.getElementById("amenitiesPrev");


function getAmenityScrollAmount() {

  const card =
    amenitiesTrack.querySelector(
      ".amenity-card"
    );

  if (!card) {
    return 350;
  }


  const gap = 16;

  return card.offsetWidth + gap;
}



/* ==========================================
   NEXT
========================================== */

// amenitiesNext.addEventListener(
//   "click",
//   function () {

//     amenitiesTrack.scrollBy({

//       left: getAmenityScrollAmount(),

//       behavior: "smooth"

//     });

//   }
// );



/* ==========================================
   PREVIOUS
========================================== */

// amenitiesPrev.addEventListener(
//   "click",
//   function () {

//     amenitiesTrack.scrollBy({

//       left: -getAmenityScrollAmount(),

//       behavior: "smooth"

//     });

//   }
// );



/* ==========================================
   MOUSE WHEEL
========================================== */

amenitiesTrack.addEventListener(
  "wheel",
  function (event) {

    if (window.innerWidth <= 650) {

      if (event.deltaY !== 0) {

        event.preventDefault();

        amenitiesTrack.scrollLeft +=
          event.deltaY;

      }

    }

  },
  {
    passive: false
  }
);



/* ==========================================
   DOWNLOAD AMENITIES
========================================== */

// const downloadAmenitiesBtn =
//   document.getElementById(
//     "downloadAmenitiesBtn"
//   );


// downloadAmenitiesBtn.addEventListener(
//   "click",
//   function () {

//     const file =
//       "files/godrej-whitefield-amenities.pdf";


//     const link =
//       document.createElement("a");


//     link.href = file;

//     link.download =
//       "Godrej-Whitefield-Villas-Amenities.pdf";


//     document.body.appendChild(link);

//     link.click();

//     link.remove();

//   }
// );


const modal = document.getElementById("enquiryModal");

const closeButton = document.getElementById("modalClose");

const form = document.getElementById("enquiryForm");


// Select ALL buttons having .open-form
const openButtons = document.querySelectorAll(".open-form");
// console.log(form)

// Open modal
openButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// Auto open after 5 seconds
window.addEventListener("load", function() {

    setTimeout(function() {

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    }, 15000);

});


// Close modal
closeButton.addEventListener("click", function() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});


// Close when clicking outside modal
modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// Close with ESC
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// Form submit