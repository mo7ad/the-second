//start my objects
let tasks = [
  {
    caption: "Coding",
    description: "Learn Front End enjoy Learn Front End enjoy Learn Front End enjoy",
    level: "&#9888; priority level:",
    picture: "media/cod.jfif",
    priority: 0
  },
  {
    caption: "Go For a Walk",
    description:
      "One of the simplest and most fun things on weekends is going out for a walk.",
    level: "&#9888; priority level:",
    picture: "media/walk.jfif",
    priority: 0
  },
  {
    caption: "Go For a Run",
    description:
      "Once again, running will not require spending any money, only your energies.",
    level: "&#9888; priority level:",
    picture: "media/run.jfif",
    priority: 0
  },
  {
    caption: "Go Swimming",
    description:
      "Swimming is good for your health and keeps you fit. If you fall in love with it.",
    level: "&#9888; priority level:",
    picture: "media/swi.jfif",
    priority: 0
  },
  {
    caption: "Dance",
    description:
      "Resolve to have extreme fun this weekend with dancing.",
    level: "&#9888; priority level:",
    picture: "media/dance.jfif",
    priority: 0
  },
  {
    caption: "Community Sports",
    description:
      "If you are looking for fun stuff to do this weekend.",
    level: "&#9888; priority level:",
    picture: "media/sport.jfif",
    priority: 0
  },
  {
    caption: "Head to the Playground",
    description:
      "There is no age discrimination at a playground. ",
    level: "&#9888; priority level:",
    picture: "media/checklisti2.png",
    priority: 0
  },
  {
    caption: "Car Boot Sales",
    description:
      "Plan a car boot sale yourself or visit your neighbor who ",
    level: "&#9888; priority level:",
    picture: "media/car.jfif",
    priority: 0,
  },
  {
    caption: "Visit Friends",
    description: "that maybe make u happy  ",
    level: "&#9888; priority level:",
    picture: "media/R.jfif",
    priority: 0
  },
];

// start  the task list///////////////////////////////////////////////
for (let task of tasks) {
  document.getElementById("result").innerHTML += `
        <div>
          <div class="card" style="width: 18rem;">
            <p>task &#10003; &#8286; <p>
            <img src="${task.picture}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${task.caption}</h5>
              <hr>
              <div>
                <p class="myPriority ">&#9888; priority Level: ${task.priority}</p>
              </div>
              <p> dateline: 27.01.2023</p>
              <p class="card-text">${task.description}</p>
              <a class="btn btn-danger btn btn-outline-success">delete</a>
              <a class="btn btn-primary myBtn">priority Level</a>
            </div>
          </div>
          </div>
        `;
}


// btn btn-outline-success/////////DELETE BTN///////////////////////
const delButtons = document.getElementsByClassName("btn btn-outline-success");
for (let i = 0; i < delButtons.length; i++) {
  delButtons[i].addEventListener("click", function () {
    const card = this.closest(".card");
    card.style.display = "none";
  });
}


//   change the color with//////////////////////////////////// 
function importantColor(myPriority, priority) {
  if (priority >= 0 && priority <= 1) {
    myPriority.classList.remove("bg-danger");
    myPriority.classList.add("bg-success");
  }
  if (priority >= 2 && priority <= 3) {
    myPriority.classList.remove("bg-success");
    myPriority.classList.add("bg-warning");
  }
  if (priority >= 4 && priority <= 5) {
    myPriority.classList.remove("bg-warning");
    myPriority.classList.add("bg-danger");
  }
}

// myPriority btn /////////////////////////////////////////

let btn = document.getElementsByClassName("myBtn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (tasks[i].priority < 5) {
      tasks[i].priority++;

      importantColor(document.getElementsByClassName("myPriority")[i], tasks[i].priority);
    }

    document.getElementsByClassName("myPriority")[i].innerHTML = ("&#9888; priority Level: ") + tasks[i].priority;
  });
}



//   sort button //////////////////////////////////////

function sortList() {
  const list = document.getElementById("result");
  const cards = list.getElementsByClassName("card");
  const sortedCards = Array.from(cards).sort((a, b) => {
    const indexA = Array.prototype.indexOf.call(cards, a);
    const indexB = Array.prototype.indexOf.call(cards, b);
    return tasks[indexB].priority - tasks[indexA].priority;
  });
  for (let i = 0; i < sortedCards.length; i++) {
    list.appendChild(sortedCards[i]);
  }
}

document.getElementById("sortButton").addEventListener("click", sortList);



