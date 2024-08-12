//@ts-check
/**
 * Nombre de usuario
 * @type {string}
 */

let userName = 'Martin';

/**
 * Edad del usuario
 * @type {number}
 */

let userAge = 28;

/**
 * Arreglo de edades de usuarios
 * @type {Array<Number>}
 */

const usersAge = [28, 29, 30];

/**
 * Arreglo de nombres de usuarios con sus edades y bools
 * @type {Array<(String | Number | Boolean)>}
 */
const mixedArray = [28, 'Martin', true];

/**
 * Objeto de usuario
 * @type {{id: number, name: string, age: number, isPro: boolean}}
 */

const user = {
    id: 1,
    name: 'Martin',
    age: 28,
    isPro: true
}

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {number} age
 * @property {boolean} isPro
 */
const user2 = {
    id: 2,
    name: 'Ezequiel',
    age: 28,
    isPro: true
}

/**
 * @type {User}
 */
const user3 = {
    id: 3,
    name: 'Lucas',
    age: 28,
    isPro: true
}