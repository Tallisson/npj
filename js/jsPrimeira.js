/**
 * Created by Leo Maciel on 11/10/2016.
 */
var posicaoX = function () {
 var x = event.clientX;
    var y = event.clientY;
    if(x>=0 && y>0){
        x=(((x-(x*2))/10)-15)/4;
        y = (((y - (y * 2)) / 10)-10)/2;

    }
    console.log(x+"px" +y);
    return x+"px "+ y+"px";
}

var me = function () {
    document.getElementById("corpo").onmousemove =function () {
      document.getElementById("topo").style.backgroundPosition = posicaoX() ;
        console.log("as")
    }

}




