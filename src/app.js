/*
 * Every js file has its own scope (to avoid chaos).
 * So we need to import what we wanna use.
 */
import { square, add } from "./utils.js";
console.log(square(4));
console.log(add(3, 1));
