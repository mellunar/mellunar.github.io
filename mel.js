document.addEventListener("DOMContentLoaded", function() {
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
      document.getElementsByClassName("tbbg")[0].classList.toggle("darktbbg");
      document.getElementById("footer").classList.toggle("darkfooter");
      const welcome = document.getElementById("welcome")
      welcome != null ? welcome.classList.toggle("darkwelcome") : void(0);
      const portfolio = document.getElementById("portfolio");
      portfolio != null ? portfolio.classList.toggle("darkportsec") : void(0);
    }

    //nav selected
    let pgptf = document.getElementById("portfolio");
    let pgbio = document.getElementById("biografia");
    if (pgbio != null) {
      let libio = document.getElementById("li-bio")
      libio.innerHTML = "Biografia";
      libio.classList.toggle("green")
    }
    if (pgptf != null) {
      let liptf = document.getElementById("li-ptf")
      liptf.innerHTML = "Portfolio";
      liptf.classList.toggle("green")
    }
    else {
      void(0);
    }
});

class Topbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav id="topbar" class="tbbg">
    <div id="tbc">
        <div id="logo"><a href="https://mellunar.github.io/">[Melissa Fernandes]</a></div>
        <div id="mobmenu"><a href="javascript:void(0)" onclick="mobilemenu()" role="button"><i class="bi bi-list" onclick="openClose(this)"></i></a></div>
        <div id="topnav">
            <ul id="moblinks">
                <li id="li-ptf"><a href="https://mellunar.github.io/portfolio">Portfolio</a></li>
                <li id="li-bio"><a href="https://mellunar.github.io/biografia">Biografia</a></li>
            </ul>
        </div>
        <button id="daynight" onclick="dayNight(); toggleDark()"><i class="bi bi-moon-fill"></i></button>
    </div>        
</nav>
    `
  }
}

class Footer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer id="footer">
      <div id="ifooter">
          <div id="mel"><span id="flogo">[Melissa Fernandes]</span></div>
          <nav id="footer-links">
              <a href="mailto:melissafernandes93@yahoo.com.br"><i class="bi bi-at"></i></a>
              <a href="https://github.com/mellunar"><i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/melissa-fernandes-610033163/"><i class="bi bi-linkedin"></i></a>
          </nav>
      </div>
    </footer>
    `
  }
}

customElements.define('top-bar', Topbar);
customElements.define('pg-footer', Footer);
