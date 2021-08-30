const dmmoon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>
`;
const dmsun = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
`;
const mbhamb = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`
;
const mbx = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`;
const html = document.querySelector("html");
const currentTheme = localStorage.getItem('theme');

customElements.define('top-bar', class Topbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="topbar">
            <div id="tbc">
                <button id="mobmenu" hidden>${mbhamb}</button>
                <div id="logo"><a href="https://mellunar.github.io/">[Melissa Fernandes]</a></div>
                <ul id="topnav" data-menu="closed">
                        <li id="li-ptf"><a href="https://mellunar.github.io/portfolio">Portfolio</a></li>
                        <li id="li-gist"><a href="https://mellunar.github.io/gists">Gists</a></li>
                        <li id="li-bio"><a href="https://mellunar.github.io/biografia">Biografia</a></li>
                </ul>           
                <button id="dmswitcher" aria-hidden="true">${dmmoon}</button>
            </div>        
        </nav>
        <div id="menuopened" hidden></div>
        `
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const dmswitcher = document.getElementById("dmswitcher");
    const mobmenu = document.getElementById("mobmenu");
    const topnav = document.getElementById("topnav");
    const pgptf = document.getElementById("portfolio");
    const pgist = document.getElementById("gists");
    const pgbio = document.getElementById("biografia");
    const liptf = document.getElementById("li-ptf");
    const ligist = document.getElementById("li-gist");
    const libio = document.getElementById("li-bio");

    dmswitcher.onclick = function (){
        if (html.dataset.theme == "light"){
            dmswitcher.innerHTML = dmsun;
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            dmswitcher.innerHTML = dmmoon;
            html.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }
    
    if (currentTheme === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches && currentTheme !== "light") {
        dmswitcher.innerHTML = dmsun;
        html.setAttribute("data-theme", "dark");
    }

    if (pgptf != null) {
        liptf.innerHTML = "Portfolio";
        liptf.classList.toggle("green")
    }
    if (pgist != null) {
        ligist.innerHTML = "Gists";
        ligist.classList.toggle("green")
    }
    if (pgbio != null) {
        libio.innerHTML = "Biografia";
        libio.classList.toggle("green")
    }
    else {
        void(0);
    }
    
    function closemenu() {
        mobmenu.innerHTML = mbhamb;
        topnav.setAttribute("data-menu", "closed");
        document.body.style.overflow = '';
        menuopened.hidden = true
    }
    mobmenu.onclick = function () {
        if (topnav.dataset.menu == "closed") {
            mobmenu.innerHTML = mbx;
            topnav.setAttribute("data-menu", "opened");
            document.body.style.overflow = 'hidden';
            menuopened.hidden = false
        }
        else {
            closemenu()
        }
    }
    menuopened.onclick = function () {closemenu()};
    window.onresize = function() {if(window.innerWidth > 1023){closemenu()}};
});

customElements.define('pg-footer', class Footer extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
      <footer id="footer">
        <div id="ifooter">
            <div>[Melissa Fernandes]</div>
            <nav id="footer-links">
                <a href="mailto:melissafernandes93@yahoo.com.br"><i class="bi bi-at"></i></a>
                <a href="https://github.com/mellunar"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/melissa-fernandes-610033163/"><i class="bi bi-linkedin"></i></a>
            </nav>
        </div>
      </footer>
      `
    }
});