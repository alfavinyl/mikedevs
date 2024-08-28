const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

/*Query selector all permite crear un array */
botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        const botonApretado = boton.textContent; 
        /*Para que la pantalla vuelva a cero - importante el return */ 
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return
        }

        /*Para que la pantalla vuelva a cero - importante el return */ 
        if(boton.id === "borrar"){
            if(boton.id.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0"
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }          
            return;
        }
        /*funcionalidades */
        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error!"
            }            
            return;
        }

        /*el  boton apretado se refleja en la pantala*/ 
         if(pantalla.textContent === "0"  || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
       
    })
});