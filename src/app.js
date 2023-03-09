/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let posession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let posessionIndx = Math.floor(Math.random() * posession.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    posession[posessionIndx] +
    " " +
    where[whereIndx]
  );
};

window.onload = function() {
  //write your code here
  let l = generateExcuse();
  console.log(l);
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
