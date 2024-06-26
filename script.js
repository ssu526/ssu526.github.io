/******************************* EMAIL TOOLTIP *********************************/
const email_buttons = document.querySelectorAll(".email");
const tooltips = document.querySelectorAll(".tooltiptext");
const SCREENSHOTS_FOLDER = "./images/screenshots/";
const THUMBNAILS_FOLDER = "./images/thumbnails/";
const btn_close = document.querySelector("#close");
const modal = document.querySelector("#modal");
const screenshots_container = document.querySelector("#screenshots-container");

email_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText("sue.su.0526@gmail.com");

    tooltips.forEach((tooltip) => {
      tooltip.innerHTML = "Copied: " + "sue.su.0526@gmail.com";
    });
  });

  button.addEventListener("mouseout", () => {
    tooltips.forEach((tooltip) => {
      tooltip.innerHTML = "Copy Email";
    });
  });
});

/****************************** LOAD PROJECTS *********************************/
const projectsContainer = document.querySelector(".projects-container");

projects.reverse().forEach((project) => {
  projectsContainer.innerHTML += `
    <div class="project-container">
      <img class="project-img" data-id=${project.id} src="${THUMBNAILS_FOLDER}${
    project.thumbnail
  }" alt=${project.name} onclick="openModal(${project.id})"/>
      <div class="project-detail">
        <p class="project-name">${project.name}</p>
        <p class="project-tech-stack">${project.techStack}</p>
        <p class="project-desc">${project.desc}</p>
      </div>
      <div class="project-links-container">
        <a class="project-link ${
          project.github === "" ? "hide" : ""
        }" target="_blank" href=${project.github}>Github</a>
        <a class="project-link ${
          project.demo === "" ? "hide" : ""
        }" target="_blank" href=${project.demo}>Demo</a>
      </div>
    </div>
  `;
});

// JS projects
projectsContainer.innerHTML += `
    <div class="project-container">
      <img class="project-img" data-id="0" src="${THUMBNAILS_FOLDER}js-games.PNG" alt="JavaScript games" onclick="openModal(0)"/>
      <div class="project-detail">
        <p class="project-name">Games built with vanilla JavaScript, HTML, CSS</p>
        <div class="js-games-container">
          <div class="js-game">
            <p class="js-game-name">Tetris</p>
            <div class="js-game-links-container">
              <a class="project-link" target="_blank" href="https://github.com/ssu526/game_tetris">Github</a>
              <a class="project-link" target="_blank" href="https://famous-queijadas-e79014.netlify.app/">Demo</a>
            </div>
          </div>

          <div class="js-game">
            <p class="js-game-name">2048</p>
            <div class="js-game-links-container">
              <a class="project-link" target="_blank" href="https://github.com/ssu526/game_2048">Github</a>
              <a class="project-link" target="_blank" href="https://celadon-rabanadas-57983d.netlify.app/">Demo</a>
            </div>
          </div>

          <div class="js-game">
            <p class="js-game-name">Sudoku</p>
            <div class="js-game-links-container">
              <a class="project-link" target="_blank" href="https://github.com/ssu526/game_sudoku">Github</a>
              <a class="project-link" target="_blank" href="https://teal-halva-68bb0a.netlify.app/">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

/******************************* LOAD LEARN & CODE *****************************/
const learningContainer = document.querySelector(".learnings-container");

learnings.reverse().forEach((l) => {
  learningContainer.innerHTML += `
    <div class="learning-container">
      <div class="learning-info">
        <p class="learning-title">${l.title}</p>
        <div class="link-container">
          <a class="project-link" target="_blank" href=${l.github}>Github</a></div>
      </div>
      <p class="learning-desc">${l.desc}</p>
    </div>
  `;
});

/************************************** EVENT HANDLERS ***********************************/
const openModal = (projectId) => {
  let projectName;
  let screenshots;

  if (projectId === 0) {
    projectName = "JavaScript games";
    screenshots = js_games_screenshots;
  } else {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;
    projectName = project.name;
    screenshots = project.screenshots;
  }

  modal.style.display = "block";

  screenshots.forEach((screenshot) => {
    screenshots_container.innerHTML += `<img src="${SCREENSHOTS_FOLDER}${screenshot}" alt="${projectName} screenshot/">`;
  });
};

btn_close.addEventListener("click", () => {
  modal.style.display = "none";
  screenshots_container.innerHTML = "";
});
