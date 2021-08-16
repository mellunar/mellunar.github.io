window.addEventListener("load", () => {
    function loop(){
        let dcron = document.getElementById("scronometro");
        let dverde = document.getElementById("sverde");
        let damarelo = document.getElementById("samarelo");
        let dvermelho = document.getElementById("svermelho");
        const ver = "#558B2F";
        const ama = "#FFAB00";
        const vmo = "#B71C1C";
        const off = "#111"

        function cor(ccr, cvd, cam, cvm){
            dcron.style.color = ccr;
            dverde.style.backgroundColor = cvd;
            damarelo.style.backgroundColor = cam;
            dvermelho.style.backgroundColor = cvm;
        }
        
        function verde(){
            let tempo = 15;
            setInterval(function(){
            if (tempo > -1){
                dcron.innerHTML = tempo;
                cor(ver, ver, off, off)
            }
            tempo--;
            },1000)
        }
        function amarelo(){   
            let tempo = 3;         
            setInterval(function(){
            if (tempo > -1){
                dcron.innerHTML = tempo;
                cor(ama, off, ama, off)
            }
            tempo--;
            },1000)
        }
        function vermelho(){ 
            let tempo = 15;         
            setInterval(function(){
            if (tempo > -1){
                dcron.innerHTML = tempo;
                cor(vmo, off, off, vmo)
            }
            tempo--;
            },1000)
        }        
        verde();
        setTimeout(amarelo, 16000);
        setTimeout(vermelho, 20000);
    }
    loop();
    setInterval(loop, 36000)
});