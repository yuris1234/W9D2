const dogs = 
{
  "Corgi":"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogsLink = [];
  for(key in dogs) {
    const a = document.createElement("a");
    a.href = dogs[key];
    a.innerHTML = key;
    const li = document.createElement("li");
    li.className = "dog-link";
    li.append(a);
    dogsLink.push(li);
  }
  return dogsLink;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach((el) => {
    ul.appendChild(el);
  });
}

attachDogLinks();