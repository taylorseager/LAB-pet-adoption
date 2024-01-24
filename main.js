const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/3661266/pexels-photo-3661266.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/8014541/pexels-photo-8014541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/8014538/pexels-photo-8014538.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes & recognizes dialogue from The Simpsons.",
      type: "dog",
      imageUrl: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/8014532/pexels-photo-8014532.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Doesn't freak out if you haven’t seen his favorite movie.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwGwIErzVUkwWTvmFk-SDnNx6C_ToSTN_uQ&usqp=CAU"
    },
    {
      id: 18,
      name: "Robert",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/8014529/pexels-photo-8014529.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGleB02t0afnjy7FARPVC1Ul3Irlhc54mlw&usqp=CAU"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40jZ6IAbkX037GvvquJWn5eL8tJKi2xhmYQ&usqp=CAU"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/8014530/pexels-photo-8014530.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wdrC9Q0o76VesYLcnRNkXt7icXseJYb6rw&usqp=CAU"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOvYQny0BfNUTNHE4t-TSlim1DvlbArnwqQ&usqp=CAU"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Does not love Oscar Wilde.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://images.pexels.com/photos/2564846/pexels-photo-2564846.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const cardsOnDom = (pets) => {
    let domString = "";
    for (const pet of pets) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title petName">${pet.name}</h5>
      <img src="${pet.imageUrl}" class="card-img-top" alt="Pet Image">
        <p class="card-text color">${pet.color}</p>
        <p class="card-text specialSkill">${pet.specialSkill}</p>
        <p class="card-text petType">${pet.type}</p>
        <button class="delete" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`;
  }
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  renderToDom("#pets", domString);
};

cardsOnDom(pets);

const showAllButton = document.querySelector("#all-btn");
const showCats = document.querySelector("#cat-btn");
const showDogs = document.querySelector("#dog-btn");
const showDinos = document.querySelector("#dino-btn");
const submit = document.querySelector("#submit-btn");

showAllButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

// another way to create a filter:
// // const filter = (type) => {
// //   const typeArray = [];
// for (const pet of pets) {
// //   if (pet.typeOfPet === type) {
// //     typeArray.push(pet);
// //   }
// // }
// return typeArray;
// };

showCats.addEventListener('click', (e) => {
  if (e.target.id.includes("cat")) {
    const filterCats = pets.filter((pet) => pet.type === "cat")
    cardsOnDom(filterCats);
  }
}) 

showDogs.addEventListener('click', (e) => {
  if (e.target.id.includes("dog")) {
    const filterDogs = pets.filter((pet) => pet.type === "dog")
    cardsOnDom(filterDogs);
  }
}) 

showDinos.addEventListener('click', (e) => {
  if (e.target.id.includes("dino")) {
    const filterDinos = pets.filter((pet) => pet.type === "dino")
    cardsOnDom(filterDinos);
  }
}) 


const form = document.querySelector("form");

const newPet = (e) => {
  e.preventDefault()

  const createNewPet = {
    id: pets.length +1,
    name: document.querySelector("#name").value,
    type: document.querySelector("#type").value,
    specialSkill: document.querySelector("#specialSkill").value,
    color: document.querySelector("#color").value,
    imageUrl: document.querySelector("#url").value,
  }

  pets.push(createNewPet);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener("submit", newPet);

const deletePet = document.querySelector("#pets");

deletePet.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex((e) => e.id === Number(id));
    pets.splice(index, 1);
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
};

startApp();
