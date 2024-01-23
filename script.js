/******************************** LOAD SKILLS *******************************/
const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "React",
  "Spring Boot",
  "SQL",
  "MongoDB",
  "HTML",
  "CSS",
  "Git",
];

const skillsContainer = document.querySelectorAll(".skills");

const loadSkills = (container, arr) => {
  let skillsText = "";
  arr.forEach((item) => {
    skillsText += `<p class="skill">${item}<span class="divider">|</span></p>`;
  });

  const lastSeparatorIndex = skillsText.lastIndexOf(
    '<span class="divider">|</span>'
  );
  if (lastSeparatorIndex !== -1) {
    skillsText = skillsText.slice(0, lastSeparatorIndex);
  }
  skillsText = skillsText.slice(0, lastSeparatorIndex);
  container.innerHTML = skillsText;
};

skillsContainer.forEach((container) => loadSkills(container, skills));

/******************************* EMAIL TOOLTIP *********************************/
const email_buttons = document.querySelectorAll(".email");
const tooltips = document.querySelectorAll(".tooltiptext");

email_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText("sue.su.0526@gmail.com");

    tooltips.forEach((tooltip) => {
      tooltip.innerHTML = "Copied: " + "sue.su.0526@gmail.com";
    });
  });

  button.addEventListener("mouseout", () => {
    tooltips.forEach((tooltip) => {
      tooltip.innerHTML = "Click to copy Email";
    });
  });
});

/****************************** LOAD PROJECTS *********************************/
const projectsContainer = document.querySelector(".projects-list");

projects.reverse().forEach((project) => {
  if (project.id === 1) return;
  projectsContainer.innerHTML += `
                <li class="li-item-container project" data-screenshot=${
                  project.screenshot
                } data-id=${project.id}>
                  <div li-title-container>
                    <a class="li-title" href=${
                      project.github
                    } target="_blank"><span class="right-arrow">➤</span> ${
    project.name
  }</a>
                    <span class="in-progress">${project.inProgress}</span>
                    <a href="${project.demo}" target="_blank" class="demo ${
    project.demo === "" ? "hide" : ""
  }">(Demo)</a>
                  </div>
                  <p class="li-desc project-tech-stack">${project.techStack}</p>
                </li>
                `;
});

const jsGames = projects[projects.length - 1];
projectsContainer.innerHTML += `
<li class="li-item-container project" data-screenshot=${jsGames.screenshot} data-id=${jsGames.id}>
  <div li-title-container>
    <p class="li-title"><span class="right-arrow">➤</span> ${jsGames.name}</p>
    <span class="in-progress">${jsGames.inProgress}</span>
  </div>
  <div class="li-desc">
    <span class="li-desc">Tetris(</span>
    <a href="https://famous-queijadas-e79014.netlify.app/" class="li-desc js-game-link" target="_blank">Demo</a>,
    <a href="https://github.com/ssu526/game_tetris" class="li-desc js-game-link" target="_blank">Code</a>)&nbsp;|&nbsp;

    <span class="li-desc">Sudoku(</span>
    <a href="https://teal-halva-68bb0a.netlify.app/" class="li-desc js-game-link" target="_blank">Demo</a>,
    <a href="https://github.com/ssu526/game_sudoku" class="li-desc js-game-link" target="_blank">Code</a>)&nbsp;|&nbsp;

    <span class="li-desc">2048(</span>
    <a href="https://celadon-rabanadas-57983d.netlify.app/" class="li-desc js-game-link" target="_blank">Demo</a>,
    <a href="https://github.com/ssu526/game_2048" class="li-desc js-game-link" target="_blank">Code</a>)
  </div>
</li>
`;

/******************************* LOAD LEARN & CODE *****************************/
const learningContainer = document.querySelector(".learning-list");

learnings.reverse().forEach((l) => {
  learningContainer.innerHTML += `
                <li class="li-item-container learning"
                  <div li-title-container>
                    <a class="li-title" href=${l.github} target="_blank">${l.title} <span class="in-progress">${l.inProgress}</span></a>
                  </div>
                  <p class="li-desc project-tech-stack">${l.desc}</p>
                </li>
                `;
});

/***************************** UPDATE SCREENSHOT **********************************/
const projectItems = document.querySelectorAll(".project");
const screenShotContainer = document.querySelector(".screenshot-container");
const screenShotImage = document.querySelector(".screenshot");
const projectDec = document.querySelector(".project-desc");

projectItems.forEach((project) => {
  project.addEventListener("mouseenter", function () {
    const projectSrc = project.getAttribute("data-screenshot");
    screenShotImage.src = "./images/screenshots/" + projectSrc;
    const projectId = project.getAttribute("data-id");
    projectDec.textContent = projects.filter((p) => p.id == projectId)[0].desc;
  });

  project.addEventListener("mouseleave", function () {
    screenShotImage.src = "./images/screenshots/screenshot-placeholder.PNG";
    projectDec.textContent = "";
  });
});

// /******************************** SCROLL EVENT HANDLER ***************************/
// const content = document.getElementsByClassName("content-container")[0];
// const introContainer = document.getElementsByClassName("intro-container")[0];

// if (content && introContainer) {
//   window.addEventListener("scroll", function () {
//     let scrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (scrollTop === 0) {
//       introContainer.classList.remove("hidden");
//     } else {
//       introContainer.classList.add("hidden");
//     }
//   });
// }
