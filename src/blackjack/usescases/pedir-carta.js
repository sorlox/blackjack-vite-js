import { crearDeck } from "./crear-deck";

// import { tipos } from "./src/blackjack/index.js";
// import { especiales } from "./crear-deck";
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// let deck = []

/**
 * Esta Funcion me permite tomar una carta
 * @param {Array<string>} deck  es un arr de string
 * @returns retorna carta
 */
export const pedirCarta = (deck) => {

    // deck = crearDeck(tipos, especiales);

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
