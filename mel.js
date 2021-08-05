window.addEventListener("load", function(){
    window.mobilemenu = function mobilemenu() {
      let o = document.getElementById("moblinks");
      o.style.display === "flex" ? o.style.display = "none" : o.style.display = "flex"
    }
    window.openClose = function openClose(x) {
      x.classList.toggle("bi-x");
    }
    window.dayNight = function dayNight() {
      let d = document.getElementById("daynight");
      d.innerHTML === `<i class="bi bi-moon-fill"></i>` ? d.innerHTML = `<i class="bi bi-sun-fill"></i>` : d.innerHTML = `<i class="bi bi-moon-fill"></i>`
    }
    window.toggleDark = function toggleDark() {
      document.body.classList.toggle("darkbody");
      document.getElementById("header").classList.toggle("darkheader");
      document.getElementById("welcome").classList.toggle("darkwelcome");
      document.getElementsByClassName("tbbg")[0].classList.toggle("darktbbg");
      document.getElementById("footer").classList.toggle("darkfooter");
    }
});