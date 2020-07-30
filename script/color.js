class Color{
    constructor(){


        var myInterval = setInterval(() => {
            this.setColors();
        },200);
}

setColors(){


        // ----------------------------
        this.color1 = document.getElementById("IdColorButton1");
        this.color1.addEventListener("click", ()=>{
            this.selectColor("color1")
        });

        this.color2 = document.getElementById("IdColorButton2");
        this.color2.addEventListener("click", ()=>{
            this.selectColor("color2")
        });

        this.color3 = document.getElementById("IdColorButton3");
        this.color3.addEventListener("click", ()=>{
            this.selectColor("color3")
        });

        this.color4 = document.getElementById("IdColorButton4");
        this.color4.addEventListener("click", ()=>{
            this.selectColor("color4")
        });

        this.color5 = document.getElementById("IdColorButton5");
        this.color5.addEventListener("click", ()=>{
            this.selectColor("color5")
        });

        this.color6 = document.getElementById("IdColorButton6");
        this.color6.addEventListener("click", ()=>{
            this.selectColor("color6")
        });

        this.color7 = document.getElementById("IdColorButton7");
        this.color7.addEventListener("click", ()=>{
            this.selectColor("color7")
        });

        this.color8 = document.getElementById("IdColorButton8");
        this.color8.addEventListener("click", ()=>{
            this.selectColor("color8")
        });
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "darkblue";
            document.getElementById("IdMainPlayer").style.background = "lightslategrey";
               }
               this.selectColor(localStorage.getItem("COLOR"));
    }
  selectColor(color){
    if(color == "color1"){
        document.body.style.background = "antiquewhite";
        document.getElementById("IdMainPlayer").style.background = " rgb(14, 33, 2)";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background = "antiquewhite";
        }

    }
    else if(color == "color2"){
        document.body.style.backgroundImage= "linear-gradient(to top , red,rgb(243, 200, 11))";
        document.getElementById("IdMainPlayer").style.background = " linear-gradient(to left , red,rgb(243, 200, 11))";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background = "linear-gradient(to top , red,rgb(243, 200, 11))";

        }
    }
    else if(color == "color3"){
        document.body.style.backgroundImage= "linear-gradient(to right, darkgreen, yellow)";
        document.getElementById("IdMainPlayer").style.background = "darkgreen";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background = "linear-gradient(to right, darkgreen, yellow)";

        }
    }
    else if(color == "color4"){
        document.body.style.background = "darkblue";
        document.getElementById("IdMainPlayer").style.background = "lightslategrey";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background = "darkblue";

        }
    }
    else if(color == "color5"){
        document.body.style.background = "linear-gradient(to left , rgb(148, 3, 124),rgb(247, 170, 217))";
        document.getElementById("IdMainPlayer").style.background = " darkred";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background ="linear-gradient(to left , rgb(148, 3, 124),rgb(247, 170, 217))";

        }
    }
    else if(color == "color6"){
        document.body.style.backgroundImage = "linear-gradient(to left , red, yellow, blue)";
        document.getElementById("IdMainPlayer").style.background = "linear-gradient(to left top , orange, yellow, red)";
        if(screen.width < 620){
            document.getElementById("IdMainPlayer").style.background = "linear-gradient(to left , red, yellow, blue)";

        }
    }
    else if(color == "color7"){
        document.body.style.backgroundImage = "repeating-linear-gradient(230deg,orange,yellow 30%,green 50%)";
        document.getElementById("IdMainPlayer").style.background = " radial-gradient(circle, orange, yellow, green)";
        if(screen.width < 620){
                        document.getElementById("IdMainPlayer").style.background = "repeating-linear-gradient(230deg,orange,yellow 30%,green 50%)";
        }
    }
    else if(color == "color8"){
        document.body.style.backgroundImage = "radial-gradient(red 5%, yellow 25%, DodgerBlue 60%)";
        document.getElementById("IdMainPlayer").style.background = " rgb(3, 9, 92)";
        if(screen.width < 620){
                        document.getElementById("IdMainPlayer").style.background ="radial-gradient(red 5%, yellow 25%, DodgerBlue 60%)";
        }
    }
    localStorage.setItem("COLOR",color);

            // ----------------------------



}


}

onload = new Color();