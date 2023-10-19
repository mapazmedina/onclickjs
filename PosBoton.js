function printMousePos(event) {
            const X = event.clientX;
            const Y = event.clientY;
            const RadioCont = 35;
            const RadioBoton = 19;
            ax=365; ay=230; 
            bx=220; by=230; 
            cx=433; cy=197; 
            dx=470; dy=160; 
            ex=433; ey=128; 
            fx=400; fy=163;
            gx=330; gy=155; 
            hx=253; hy=155; 
            ix=150; iy=190;
            jx=186; jy=160; 
            kx=150; ky=125; 
            lx=115; ly=160;
            if(X<ax+RadioCont & X>ax-rRadioCont & Y<ay+RadioCont & Y>ay-RadioCont){
			    alert("palanca derecha");
            }
            else if(X<bx+RadioCont & X>bx-RadioCont & Y<by+RadioCont & Y>by-RadioCont){
                alert("palanca izquierda");
            }
            else if(X<cx+RadioBoton & X>cx-RadioBoton & Y<cy+RadioBoton & Y>cy-RadioBoton){
                alert("boton verde");
            }
            else if(X<dx+RadioBoton & X>dx-RadioBoton& Y<dy+RadioBoton & Y>dy-RadioBoton){
                alert("boton rojo");
            }
            else if(X<ex+RadioBoton & X>ex-RadioBoton & Y<ey+RadioBoton & Y>ey-RadioBoton){
                alert("boton amarillo");
            }
            else if(X<fx+RadioBoton & X>fx-RadioBoton & Y<fy+RadioBoton & Y>fy-RadioBoton){
                alert("boton azul");
            }
            else if(X<gx+RadioBoton & X>gx-RadioBoton & Y<gy+RadioBoton & Y>gy-RadioBoton){
                alert("boton start");
            }
            else if(X<hx+RadioBoton & X>hx-RadioBoton & Y<hy+RadioBoton & Y>hy-RadioBoton){
                alert("boton select");
            }
            else if(X<ix+RadioBoton & X>ix-RadioBoton & Y<iy+RadioBoton & Y>iy-RadioBoton){
                alert("boton de abajo");
            }
            else if(X<jx+RadioBoton & X>jx-RadioBoton & Y<jy+RadioBoton & Y>jy-RadioBoton){
                alert("boton Derecho");
            }
            else if(X<kx+RadioBoton & X>kx-RadioBoton & Y<ky+RadioBoton & Y>ky-RadioBoton){
                alert("boton de arriba");
            }
            else if(X<lx+RadioBoton & X>lx-RadioBoton & Y<ly+RadioBoton & Y>ly-RadioBoton){
                alert("boton izquierdo");
            }
        }

        document.addEventListener("click", printMousePos);