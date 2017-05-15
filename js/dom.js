   function agregarPosteo(){
    var contenedor = document.getElementById("contenedor-posteos");
    var nombreFF = document.getElementById("nombre").value;
    var contenidoFF = document.getElementById("cajaposteos").value;
    var nuevoPost = document.createElement("div");
    var contenedorNombre = document.createElement("strong");
    var contenedorPost = document.createElement("p");
    var separacion = document.createElement("hr");
    var parrafCorazon = document.createElement("p");
    var i = document.createElement("i");
    parrafCorazon.appendChild(i);
    parrafCorazon.setAttribute("class", "corazon");
    i.setAttribute("class", "fa-fa-heart");
    i.setAttribute("arial-hidden", "true");
    var nodoNombre = document.createTextNode(nombreFF + "escribio: ")
    var nodoPosteo = document.createTextNode(contenidoFF);
    contenedorNombre.appendChild(nodoNombre);
    contenedorPost.appendChild(nodoPosteo);
    nuevoPost.appendChild(contenedorNombre);
    nuevoPost.appendChild(contenedorPost);
    nuevoPost.appendChild(parrafCorazon);
    nuevoPost.appendChild(separacion);
    i.addEventListener("click", function(){
        i.classList.toggle("rojo");
    });
    nuevoPost.setAttribute("class", "posteo");
    contenedorPost.appendChild(nuevoPost);
    document.getElementById("nombre").value = "";
    document.getElementById("cajaposteos").value = "";
    var elem_p = document.createElement('p');
    var elem_em = document.createElement('em');
    var elem_strong = document.createElement('strong');
    var txt_01 = document.createTextNode('Éste es un párrafo con una palabra ');
    var txt_02 = document.createTextNode('enfatizada');
    var txt_03 = document.createTextNode(' y otras aún ');
    var txt_04 = document.createTextNode('más enfatizadas');
    var txt_05 = document.createTextNode('.');
    contenedor.appendChild(elem_p)
    elem_em.appendChild(txt_02);
    elem_strong.appendChild(txt_04);
    elem_p.appendChild(txt_01);
    elem_p.appendChild(elem_em);
    elem_p.appendChild(txt_03);
    elem_p.appendChild(elem_strong);
    elem_p.appendChild(txt_05);
   }
    