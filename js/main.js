//add an event listener to the button
document.querySelector("button").addEventListener("click", getYourDrink);

function getYourDrink() {
  const drink = document.querySelector("input").value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
  const container = document.querySelector(".grid-container");
  container.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        // console.log(data.drinks);
        data.drinks.forEach((element) => {
          // image.src = element.strDrinkThumb;
          // name.textContent = element.strDrink;
          // pha.textContent = element.strInstructions;

          //create new elements
          let newDiv = document.createElement("div");
          let newImg = document.createElement("img");
          let newP = document.createElement("P");
          let newH2 = document.createElement("h2");

          //set content to the newly created elements
          //create a new img

          newImg.src = element.strDrinkThumb;
          newImg.alt = element.strIngredient1;
          newP = element.strInstructions;
          newH2 = element.strDrink;

          //Neither of these techniques is working WHY?
          //   newDiv.classList.add("grid-item");
          //   newImg.src = element.classList.add("grid-item-image");
          //   newImg.alt = element.strIngredient1;
          //   newP = element.strInstructions.classList.add("grid-item-text");
          //   newH2 = element.strDrink.classList.add("grid-item-title");

          // add classes to the elements
          //   newDiv ? newDiv.classList.add("grid-item") : null;
          //   newImg ? newImg.classList.add("grid-item-image") : null;
          //   newP ? newP.classList.add("grid-item-text") : null;
          //   newH2 ? newH2.classList.add("grid-item-title") : null;

          //append the element to new div
          newDiv.append(newH2);
          newDiv.append(newImg);
          newDiv.append(newP);
          container.append(newDiv);
        });
      }
    })
    .catch((err) => console.log(err));
}
