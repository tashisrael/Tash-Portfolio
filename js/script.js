const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');
let modalState = 'closed';
const workSection = document.getElementById('works');

const arrayOfProjects = [
  {
    image: './img/project1.PNG',
    title: 'Global Summit Website',
    tech: ['html', 'css', 'Javascript'],
    description:
      'This is a Capstone Project template for an BMW CC Global Summit built with HTML, CSS, and JavaScript.',
    live: 'https://tashisrael.github.io/Capstone1/',
    github: 'https://github.com/tashisrael/Capstone1/',
  },
  {
    image: './img/project2.PNG',
    title: 'Awesome Books',
    tech: ['html', 'css', 'Javascript'],
    description:
      'This is a simple website(Desktop version) that displays a list of books and allows you to add and remove books from that list',
    live: 'https://tashisrael.github.io/awesome-books/',
    github: 'https://github.com/tashisrael/awesome-books',
  },
  {
    image: './img/project3.PNG',
    title: 'To Do List Project',
    tech: ['html', 'css', 'JavaScript', 'webpack'],
    description:
      'This is a website(Desktop version) used to create a list of To Do tasks. This simple web page is built using webpack and served by a webpack dev server',
    live: 'https://tashisrael.github.io/To-Do-List/dist/',
    github: 'https://github.com/tashisrael/To-Do-List',
  },
  {
    image: './img/project4.PNG',
    title: 'Savings Tracker App',
    tech: ['Java', 'Android', 'XML', 'SQLlite', 'Firebase'],
    description:
      'This is an android app that helps you track your savings built for BeMW company.',
    live: 'https://play.google.com/store/apps/details?id=com.bemoneywiser.telekako&hl=en&gl=US',
    github: 'https://github.com/tashisrael/',
  },
  {
    image: './img/project5.PNG',
    title: 'LeaderBoard Website',
    tech: ['Webpack', 'css', 'Javascript', 'html', 'Jest'],
    description:
      'This is a website(Desktop version) for tracking Leaderbaord scores from an API built using webpack and served by a webpack dev server. Click the refresh button after adding a score',
    live: 'https://tashisrael.github.io/LeaderBoard/dist/',
    github: 'https://github.com/tashisrael/LeaderBoard',
  },
  {
    image: './img/project6.PNG',
    title: 'API-basedWebApp For Pokemons',
    tech: ['html', 'css', 'Javascript', 'webpack', 'Jest'],
    description:
      'This app shows 20 Pokemon characters that are fetch from the Pokeapi. You can interact with each one, giving them a like or adding a comment.The moment you press the comment button, a pop-up window will show up with more details about the Pokemon and will also show the comments left for it.',
    live: 'https://gandradep.github.io/API-basedWebApp/dist/',
    github: 'https://github.com/gandradep/API-basedWebApp',
  },
  {
    image: './img/project7.PNG',
    title: 'React TO-DO List App',
    tech: ['html', 'css', 'Javascript', 'React'],
    description:
      'This is a todo-list application built with react(Desktop version). This project proves my ability to write clean Javascript code using best practices and making the UI interactive and fun to use. This application gives users the functionality to create, read, update and delete todo tasks. Tasks can also be marked as completed, and completed tasks can be cleared at a go from the list.',
    live: '',
    github: 'https://github.com/tashisrael/React-To-Do-App',
  },
  {
    image: './img/project8.PNG',
    title: 'Calculator App',
    tech: ['html', 'css', 'Javascript', 'React'],
    description:
      '"Math magicians" is a website(Desktop version) for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    live: 'https://calculator-app-by-tash.netlify.app/',
    github: 'https://github.com/tashisrael/Math-Magicians',
  },
];

function createProjectCards() {
  for (let x = 0; x < arrayOfProjects.length; x += 1) {
    workSection.innerHTML += `<div class="card border">
    <img src="${arrayOfProjects[x].image}" alt="${arrayOfProjects[x].title}" />
    <div class="project-name">
      <h4>${arrayOfProjects[x].title}</h4>
    </div>
    <ul class="tech-group">
    ${arrayOfProjects[x].tech
    .map((tech) => `<li class="tech">${tech}</li>`)
    .join(' ')}
    </ul>
    <button class="btn grow" onclick="toggleModal(${x})" type="button">See Project</button>
  </div>`;
  }
}

createProjectCards();

const modalTech = document.getElementById('modal-tech');

function toggleModal(position = null) {
  if (modalState === 'closed') {
    document.getElementById('modal-title').innerHTML = arrayOfProjects[position].title;
    document.getElementById('modal-img').src = arrayOfProjects[position].image;

    /* eslint-disable no-return-assign */
    const seeLiveButton = document.getElementById('live');
    seeLiveButton.addEventListener('click', () => window.location.href = arrayOfProjects[position].live);

    const seeSourceCode = document.getElementById('github');
    seeSourceCode.addEventListener('click', () => window.location.href = arrayOfProjects[position].github);

    for (let i = 0; i < arrayOfProjects[position].tech.length; i += 1) {
      modalTech.innerHTML += `<li class="tech">${arrayOfProjects[position].tech[i]}</li>`;
    }

    document.getElementById('modal-desc').innerHTML = arrayOfProjects[position].description;
    document.querySelector('.projectDetailsModal').style.display = 'block';
    modalState = 'open';
  } else {
    document.querySelector('.projectDetailsModal').style.display = 'none';
    modalTech.innerHTML = '';
    modalState = 'closed';
  }
}

document
  .querySelector('.close-modal-button')
  .addEventListener('click', () => toggleModal());

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  main.style.filter = 'blur(8px)';
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'flex';
  main.style.filter = 'blur(0px)';
}

mobileItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);
