
import { valorCarta, pedirCarta, crearCartaHtml  } from "./";


/**turno de la computadora
 * 
 * @param {number} puntosMinimos puntosMinimos para que el jugador gane
 * @param {HTMLElement}puntosHTML elemento Html para mostrar los puntos
 * @param {HTMLElement}puntosHTML elemento Html para mostrar las cartas
 * @param {Array<string>} deck deck de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {

    if (!puntosMinimos) throw new Error("puntosMinimos son necesarios");
    if (!puntosHTML) throw new Error("puntosHTML es necesario");
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora    = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append(imgCarta)
        
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}