/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominion = [".com", ".org", ".gov"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dominion.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + dominion[l]);
          newArr.push(pronoun[i] + adj[j] + noun[k] + dominion[l]);
        }
      }
    }
  }
};
let newArr = [];

console.log(newArr);
