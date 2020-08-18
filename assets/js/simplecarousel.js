 var intervalo = 7000;
         function slide1(){
            document.getElementById("carrossel-1").checked = true;
            setTimeout("slide2()", intervalo);
        }
            function slide2(){
            document.getElementById("carrossel-2").checked = true;
            setTimeout("slide3()", intervalo);
        }
        function slide3(){
            document.getElementById("carrossel-3").checked = true;
            setTimeout("slide1()", intervalo);
        }
       