var inicio = false

    var coresdarodada = [];
    var coresdarodada_jogador = [];


function inicio_jogo() {
    inicio = true;
    var vezjogador = false;
    var rodada_atual = 0;
    var cliques = 0;
    var rodadaa = 0;
    var i = 0
    rodada()

    // exibir cores anteriores


        function cores_historico(){

            
            var piscar = setInterval(function(){
            
                rodadaa++
            

                if (coresdarodada[i] == 0) {
                    setTimeout(function () {
                        document.getElementById("box1").classList.add("cor1-1")
                    }, 700);
                    setTimeout(function () {
                        document.getElementById("box1").classList.remove("cor1-1")
                    }, 1200);


                } else if (coresdarodada[i] == 1) {
                    setTimeout(function () {
                        document.getElementById("box2").classList.add("cor2-1")
                    }, 700);
                    setTimeout(function () {
                        document.getElementById("box2").classList.remove("cor2-1")
                    }, 1200);


                } else if (coresdarodada[i] == 2) {
                    setTimeout(function () {
                        document.getElementById("box3").classList.add("cor3-1")
                    }, 700);
                    setTimeout(function () {
                        document.getElementById("box3").classList.remove("cor3-1")
                    }, 1200);


                } else if (coresdarodada[i] == 3) {
                    setTimeout(function () {
                        document.getElementById("box4").classList.add("cor4-1")
                    }, 700);
                    setTimeout(function () {
                        document.getElementById("box4").classList.remove("cor4-1")
                    }, 1200);

                }

                if(rodadaa == rodada_atual){
                clearInterval(piscar)
                rodada()
                }else{
                    i++
                }
            }, 1800)




        }


    // RODADA


    function rodada() {
        var delay = setTimeout(function(){
        rodada_atual++

            var sorteio = Math.floor(Math.random() * 4)
            if (sorteio == 0) {
                setTimeout(function () {
                    document.getElementById("box1").classList.add("cor1-1")
                }, 700);
                setTimeout(function () {
                    document.getElementById("box1").classList.remove("cor1-1")
                }, 1200);


                coresdarodada.push(0)


            } else if (sorteio == 1) {
                setTimeout(function () {
                    document.getElementById("box2").classList.add("cor2-1")
                }, 700);
                setTimeout(function () {
                    document.getElementById("box2").classList.remove("cor2-1")
                }, 1200);

                coresdarodada.push(1)



            } else if (sorteio == 2) {
                setTimeout(function () {
                    document.getElementById("box3").classList.add("cor3-1")
                }, 700);
                setTimeout(function () {
                    document.getElementById("box3").classList.remove("cor3-1")
                }, 1200);

                coresdarodada.push(2)


            } else if (sorteio == 3) {
                setTimeout(function () {
                    document.getElementById("box4").classList.add("cor4-1")
                }, 700);
                setTimeout(function () {
                    document.getElementById("box4").classList.remove("cor4-1")
                }, 1200);
                coresdarodada.push(3)

            }

        vezjogador = true
        }, 1800)
    }

    //VEZ DO JOGADOR

    document.getElementById("box1").addEventListener("click", function () {

        if (vezjogador == true) {
            cliques++
            coresdarodada_jogador.push(0);

            if(cliques == rodada_atual){
                //parte que compara
                var comparacao = (coresdarodada, coresdarodada_jogador) => {
                    return coresdarodada.length === coresdarodada_jogador.length && coresdarodada.every((item, index) => item === coresdarodada_jogador[index])
                }

                if (comparacao(coresdarodada, coresdarodada_jogador) == true) {
                    alert("deu certo")
                    coresdarodada_jogador = []
                    cliques = 0
                    rodadaa= 0
                    i = 0
                    cores_historico()
                } else {
                    alert("Você errou, burro!")
                    coresdarodada = []
                    coresdarodada_jogador = []
                    vezjogador = false
                    inicio = false
                }
            }else{

            }



        } else {

        }
    })

    document.getElementById("box2").addEventListener("click", function () {

        if (vezjogador == true) {
            cliques++
            coresdarodada_jogador.push(1);



            if(cliques == rodada_atual){
                //parte que compara
                var comparacao = (coresdarodada, coresdarodada_jogador) => {
                    return coresdarodada.length === coresdarodada_jogador.length && coresdarodada.every((item, index) => item === coresdarodada_jogador[index])
                }

                if (comparacao(coresdarodada, coresdarodada_jogador) == true) {
                    alert("deu certo")
                    coresdarodada_jogador = []
                    cliques = 0
                    rodadaa=0
                    i = 0
                    cores_historico()
                } else {
                    alert("Você errou, burro!")
                    coresdarodada = []
                    coresdarodada_jogador = []
                    vezjogador = false
                    inicio = false
                }
            }else{

            }


        } else {

        }
    })

    document.getElementById("box3").addEventListener("click", function () {

        if (vezjogador == true) {
            cliques++
            coresdarodada_jogador.push(2);


            if(cliques == rodada_atual){
                //parte que compara
                var comparacao = (coresdarodada, coresdarodada_jogador) => {
                    return coresdarodada.length === coresdarodada_jogador.length && coresdarodada.every((item, index) => item === coresdarodada_jogador[index])
                }

                if (comparacao(coresdarodada, coresdarodada_jogador) == true) {
                    alert("deu certo")
                    coresdarodada_jogador = []
                    cliques = 0
                    rodadaa=0
                    i = 0
                   cores_historico()
                } else {
                    alert("Você errou, burro!")
                    coresdarodada = []
                    coresdarodada_jogador = []
                    vezjogador = false
                    inicio = false
                }

            }else{

            }

        } else {

        }
    })

    document.getElementById("box4").addEventListener("click", function () {

        if (vezjogador == true && inicio == true) {
            cliques++
            coresdarodada_jogador.push(3);


            if(cliques == rodada_atual){
                //parte que compara
                var comparacao = (coresdarodada, coresdarodada_jogador) => {
                    return coresdarodada.length === coresdarodada_jogador.length && coresdarodada.every((item, index) => item === coresdarodada_jogador[index])
                }

                if (comparacao(coresdarodada, coresdarodada_jogador) == true) {
                    alert("deu certo")
                    coresdarodada_jogador = []
                    cliques = 0
                    rodadaa=0
                    i = 0
                    cores_historico()
                } else {
                    alert("Você errou, burro!")
                    coresdarodada = []
                    coresdarodada_jogador = []
                    vezjogador = false
                    inicio = false
                    cliques = 0
                    rodadaa=0
                    i = 0
                }
            }else{

            }







        } else {
       
        }
    })

}
