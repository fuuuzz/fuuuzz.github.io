const showProjectsButton = document.getElementById("show-projects");
const hideProjectsButton = document.getElementById("hide-projects");
const showExperienceButton = document.getElementById("show-experience");
const hideExperienceButton = document.getElementById("hide-experience");

const projects = document.querySelectorAll(".project");
const experiences = document.querySelectorAll(".experience");

const handleShowProjectsClick = () => {
  showProjectsButton.classList.add("hidden");
  hideProjectsButton.classList.remove("hidden");

  projects.forEach((project) => {
    project.classList.remove("hidden");
  });
};

const handleHideProjectsClick = () => {
  hideProjectsButton.classList.add("hidden");
  showProjectsButton.classList.remove("hidden");

  projects.forEach((project, index) => {
    if (index > 5) {
      project.classList.add("hidden");
    }
  });
};

const handleShowExperienceClick = () => {
  showExperienceButton.classList.add("hidden");
  hideExperienceButton.classList.remove("hidden");

  experiences.forEach((experience) => {
    experience.classList.remove("hidden");
  });
};

const handleHideExperienceClick = () => {
  hideExperienceButton.classList.add("hidden");
  showExperienceButton.classList.remove("hidden");

  experiences.forEach((experience, index) => {
    if (index > 2) {
      experience.classList.add("hidden");
    }
  });
};
