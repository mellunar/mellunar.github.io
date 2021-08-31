const lhtml = `<i class="fab fa-html5"></i>`,
lcss = `<i class="fab fa-css3-alt"></i>`,
ljs = `<i class="fab fa-js-square"></i>`;

let mainportfolio = [
    {titulo: "Fox Hub",
     desc: "Modelo idealizado em uma rede de canais de televisão como ABC, CBS, Globo (Globoplay), etc.",
     langs: lhtml+lcss+ljs,
     link: "https://mellunar.netlify.app/foxhub/",
     img: "https://bn02pap001files.storage.live.com/y4mCJW3BLr_oemHtidZCZbvksY1oCRznBAxW_eFotBnOKX7TowkylvSHmcq6xH_FH5HNapl46U_R5aIkTKJBJKmi3ygblt8kH9D-mTMRSU-Ao7Mf777G75DKEKTRZD7rjOg1GE7H9mWZ6_6I03PxiTk8dIyXe2ogCDP5pQ-LirVBqHNfBmbz9NZwYxN4TZQed1h?width=667&height=1000&cropmode=none"
    },
    {titulo: "Melunar",
     desc: "Melunar é um modelo criado para ser como uma lojinha esotérica virtual, mantendo uma estética de bruxa moderna.",
     langs: lhtml+lcss+ljs,
     link: "https://mellunar.netlify.app/mellunar/",
     img: "https://bn02pap001files.storage.live.com/y4mqGz1yr0tLiejbJul2r4d1_vo9WS062tzPt_2GMdyakh23TanZWqJph-SGIZXVE12rn_Y6Dny4uqIN5VSnDrw-VNZEfSvt1D3CVeB1kEchHZ1mJZkInJc4R7TD9qZK3bEItco1HNeE0qjwQAxGr5vfuDp5TWfGMfsxDW9pEOkDcEulSVh2FMMeB--e1fBYohP?width=667&height=1000&cropmode=none"
    },
    {titulo: "Contolandia",
     desc: "Contolandia é um modelo que foi desenvolvido pensado nos sites que são como uma rede social de escrita, onde as pessoas publicam seus livros, contos e etc.",
     langs: lhtml+lcss+ljs,
     link: "https://mellunar.netlify.app/contolandia/",
     img: "https://bn02pap001files.storage.live.com/y4mQtgZpyBTzpomzQQZatEBwbPAuoc2t3Iqs2Kcc0F2kbU4NZoJaI8_UnRLBMnscJqSJUJ4alTAsawfWtlw9bKidVq29Tkm7AStDE23jNjWGSliULab_OJEmBR2lKZ_rhIXSPPDGVCp3BsSxXmWtrcvR8eRb1EJA80tyD1UDRdoJmEnkb8xMdkh5xc8p-gI7QZm?width=667&height=1000&cropmode=none"
    }
];

let frenme = [
    {titulo: "Blogr",
     desc: "",
     langs: lhtml+lcss+ljs,
     link: "https://mellunar.netlify.app/blogr/",
     img: "https://bn02pap001files.storage.live.com/y4miwI5a63Z_FV-dfphGRNhOvk1HxHWwEhJk9B6AwgtGoyJIwbCQO-wxitF2JSN9pVAH9GAAes_vz9eLo2tw7Ug6bft0z--_7-bsutNaIEB8O-c1-0W5EbYB-tV2yfp_1PfUA_dZm-JRprb0XDaHye4CkWd-THaFzQ59ZCoLC6509m04ftBvSp_VGi6Ws8QXh4H?width=667&height=1000&cropmode=none"
    }
]

document.addEventListener("DOMContentLoaded", function() {
    let wrapper = document.querySelectorAll(".galcont");

    function createItem(ccon,carr,cind){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("portitem");
        node.innerHTML = `
        <img src="${carr[cind].img}">
            <div class="portbox">
                <div class="porttxt">
                    <h3>${carr[cind].titulo}</h3>
                    <div class="plico txthvrln">${carr[cind].langs}</div>
                    <div class="txthvrln pconly">${carr[cind].desc}</div>
                </div>
            </div>
            <a href="${carr[cind].link}" class="linkboxfill"></a>`
        wrapper[ccon].appendChild(node);
    };

    mainportfolio.forEach((e,i)=>{createItem(0,mainportfolio,i)});
    frenme.forEach((e,i)=>{createItem(1,frenme,i)});

    function createSwiperGal(container){
        new Swiper(container, {
            centerInsufficientSlides: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 14,
            navigation: {
                nextEl: ".ctrbtnr",
                prevEl: ".ctrbtnl",
                disabledClass: "hidden"
            },
            breakpoints: {
                600: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1280: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                },
                /*1600: {
                    slidesPerView: 5,
                    slidesPerGroup: 5
                }*/
            },
            pagination: {
                el: ".pagination",
                type: "bullets",
                bulletClass: "pagdot",
                bulletActiveClass: "pdatv",
                clickable: true,
                hideOnClick: false
            }
        });
    };

    createSwiperGal("#mainptf");
    createSwiperGal("#frenme");
});