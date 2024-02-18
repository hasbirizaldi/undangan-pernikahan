// Count Down
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 5, // required
  day: 14, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "Hari" },
    hours: { singular: "jam", plural: "Jam" },
    minutes: { singular: "menit", plural: "Menit" },
    seconds: { singular: "detik", plural: "Detik" },
  },
});

// Count Down End

// LightBox
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}
// Light box

// Nama Undangan
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector(".front .bg .content .kepada span.name");
const kpdContainer = document.querySelector(".front .bg .content .kepada p.yth span");

kpdContainer.innerText = `${pronoun}`.replace(/,$/, ",");
namaContainer.innerText = ` ${nama}`.replace(/,$/, ",");
// Nama Undangan End

// Submit RSVP
const scriptURL = "https://script.google.com/macros/s/AKfycbyL89jSF-DZ2zdaFSwv3kPmlNlmJPEol4Bnd6889wuFs3tw1B-_Lpe-AXn6F5c4okIbTg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi Kehadiran Berhasil Terkirim");
    });
  });
});
// Submit RSVP End

// Discus
/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
/*
  var disqus_config = function () {
  this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */
(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://undangan-pernikahan-5gbsljbfmq.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
// Discus End

// COPY TEXT
let bni = document.getElementById("noBNI").innerHTML;
const copyBNI = async () => {
  try {
    await navigator.clipboard.writeText(bni);
    alert("Content copied to clipboard");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};
let bca = document.getElementById("noBCA").innerHTML;
const copyBCA = async () => {
  try {
    await navigator.clipboard.writeText(bca);
    alert("Nomor Berhasil di Copy");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};
let alamat = document.getElementById("alamat").innerHTML;
const copyAlamat = async () => {
  try {
    await navigator.clipboard.writeText(alamat);
    alert("Alamat Berhasil di Copy");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};
// COPY TEXT END

// NAVBAR ACTIVE
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav a[href*=" + id + "]").classList.add("active");
    } else {
      document.querySelector(".nav a[href*=" + id + "]").classList.remove("active");
    }
  });
});
// NAVBAR ACTIVE END

// BTN HADIAH
const btnHadiah = document.querySelector("#btn-hadiah");
const hadiah = document.querySelector(".hadiah");

const kirimHadiah = () => {
  hadiah.classList.toggle("klik");
};

// BTN HADIAH END

// AUDIO
const rootElement = document.querySelector(":root");
const audionIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const front = document.querySelector("#front");
const song = document.querySelector("#song");
let isPlaying = false;

function disableScroll() {
  const scrollTop = window.pageYOfset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOfset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  audionIconWrapper.classList.add("active");
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  //localStorage.setItem("opened", "true");
  playAudio();
}

function playAudio() {
  song.volume = 0.9;
  audionIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}
audionIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("fa-music");
    audioIcon.classList.add("fa-pause");
  } else {
    song.play();
    audioIcon.classList.add("fa-music");
    audioIcon.classList.remove("fa-pause");
  }

  isPlaying = !isPlaying;
};
//if (!localStorage.getItem("opened")) {
//disableScroll();
//}
disableScroll();

// AUDIO END

const buka = document.querySelector(".buka-undangan");
const navbar = document.querySelector(".navbar");
buka.addEventListener("click", function () {
  navbar.classList.add("klik");
});
