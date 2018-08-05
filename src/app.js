/*
 * Every js file has its own scope (to avoid chaos).
 * So we need to import what we wanna use.
 */
import myOwnSubtract, { square, add } from "./utils.js";

console.log(square(4));
console.log(add(3, 1));

/*
 * Because subtract is exported as default, we can just import it
 * with a different dedicated name.
 */
console.log(myOwnSubtract(11, 8));
