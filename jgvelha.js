var bolinha = "https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rose.png";
var x = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png";
var cont = 1;
var x1,x2,x3,x4,x5,x6,x7,x8,x9 = 0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9 = 0;
var msg1 = "Vencedor: jogador 1 (Símbolo O)!!"
var msg2 = "Vencedor: jogador 2 (Símbolo X)!!"
var parar = "nao";
function travar(){
    parar = "sim";
}
function img1(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d1").src = x;
            x1 = 1
        }else{
            document.getElementById("d1").src = bolinha;
            b1 = 1
        }
        document.getElementById("d1").className = "imagem10";
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        }  
        cont = cont+1;
    }
}
function img2(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d2").src = x;
            x2 = 1;
        }else{
            document.getElementById("d2").src = bolinha;
            b2 = 1;
        }
        document.getElementById("d2").className = "imagem20";
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img3(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d3").src = x;
            x3 = 1;
        }else{
            document.getElementById("d3").src = bolinha;
            b3 = 1;
        }
        document.getElementById("d3").className = "imagem30"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img4(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d4").src = x;
            x4 = 1;
        }else{
            document.getElementById("d4").src = bolinha;
            b4 = 1;
        }
        document.getElementById("d4").className = "imagem40"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img5(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d5").src = x;
            x5 = 1
        }else{
            document.getElementById("d5").src = bolinha;
            b5 = 1
        }
        document.getElementById("d5").className = "imagem50"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img6(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d6").src = x;
            x6 = 1
        }else{
            document.getElementById("d6").src = bolinha;
            b6 = 1
        }
        document.getElementById("d6").className = "imagem60"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img7(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d7").src = x;
            x7 = 1
        }else{
            document.getElementById("d7").src = bolinha;
            b7 = 1;
        }
        document.getElementById("d7").className = "imagem70"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function img8(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d8").src = x;
            x8 = 1;
        }else{
            document.getElementById("d8").src = bolinha;
            b8 = 1;
        }
        document.getElementById("d8").className = "imagem80"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
    
}
function img9(){
    if(parar=="nao"){
        if(cont%2==0){
            document.getElementById("d9").src = x;
            x9 = 1;
        }else{
            document.getElementById("d9").src = bolinha;
            b9 = 1;
        }
        document.getElementById("d9").className = "imagem90"
        if(cont%2==0){
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>1</strong>";
        }else{
            document.getElementById("mensagem").innerHTML = "Rodada - Jogador <strong>2</strong>";
        }
        if(cont>=5){  
            verificar();
        } 
        cont = cont+1;
    }
}
function verificar(){
    if(b1==1 && b2==1 && b3==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)";
        alert(msg1)
        travar();
    }if(b2==1 && b5==1 && b8==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b3==1 && b6==1 && b9==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b1==1 && b4==1 && b7==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b4==1 && b5==1 && b6==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b7==1 && b8==1 && b9==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b1==1 && b5==1 && b9==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }if(b3==1 && b5==1 && b7==1){
        document.getElementById("mensagem").innerHTML="Jogador 1 Ganhou!!! (Bolinha)"
        alert(msg1)
        travar();
    }
    if(x1==1 && x2==1 && x3==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x2==1 && x5==1 && x8==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x3==1 && x6==1 && x9==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x1==1 && x4==1 && x7==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x4==1 && x5==1 && x6==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x7==1 && x8==1 && x9==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x1==1 && x5==1 && x9==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        travar();
    }if(x3==1 && x5==1 && x7==1){
        document.getElementById("mensagem").innerHTML="Jogador 2 Ganhou!!! ( X )"
        alert(msg2)
        alert()
        travar();
    }
}