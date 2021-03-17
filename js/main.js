function btnTop() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
}

const change = (src) => {
  document.getElementById("main").src = src;
};

function goL() {
  var a = document.getElementById("goLink");
  a.href = "http://www.mywebsite.com";
}

function changeText3() {
  document.getElementById("likes").innerHTML = "42,301 likes";
  document.getElementById("goLink").innerHTML =
    "<a href='https://mooninterior.netlify.app/'>Go 👉 Interior design agency web & mobile application 🪜 </a><br>";
  document.getElementById("caption").innerHTML =
    "The website was designed for a specific interior design agency is called 'Moon'<br>" +
    "The agency give some informations about their own company " +
    "and present their real projects to client for proving the agency's abilities, styles, and professional skills.";
}
function changeText4() {
  document.getElementById("likes").innerHTML = "77,202 likes";
  document.getElementById("goLink").innerHTML =
    "<a href='https://venezia.netlify.app/'>Go 👉 Venezia travel agency web & mobile application🪜 </a><br>";
  document.getElementById("caption").innerHTML =
    "Welcome to Venezia!! The most beautiful city, Venezia<br>" +
    "The applications give a huge of informations and tips to client who is ready to go to travel.";
}

function changeText5() {
  document.getElementById("likes").innerHTML = "80,589 likes";
  document.getElementById("goLink").innerHTML =
    "<a href='https://abcartmuseum.netlify.app/'>Go 👉 Art museum web & mobile application:) 🎨</a><br>";
  document.getElementById("caption").innerHTML =
    "The web and mobile application were designed with javascript, HTML, and CSS.<br>" +
    "It has various special functions related with an exhibition of vincent willem Van gogh.<br>" +
    "Users also can book or get some useful informations to visit this exhibition by using the application.";
}
