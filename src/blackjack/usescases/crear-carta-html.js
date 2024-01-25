


/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} img de retorno    
 */
export const crearCartaHtml = (carta) =>{

    if (!carta) throw new Error("La carta es obligatoria")

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    // divCartasComputadora.append( imgCarta );

    return imgCarta;
}