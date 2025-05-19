import { createCard } from './view/component/card.js';
import { MenuView } from './view/view.js';

const app = document.getElementById('app');
const nav = document.getElementById('nav');

const routes = {
  '/': {
    linkLabel: 'intro',
    content: `<h1>ADALICIOUS</h1>`
  },

  '/orders': {
    linkLabel: 'order',
    content: `I am in about page`
  },

  '/kitchen': {
    linkLabel: 'kitchen',
    content: "i am in friends page"
  }
};



const renderNavLinks = () => {
  const navFragment = document.createDocumentFragment();
  
  Object.keys(routes).forEach(route => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement('a');
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = 'nav-link';
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

const registerNavLinks= () => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    const { href } = e.target;
    navigate(e);
  });
};

const renderContent = route => app.innerHTML = routes[route].content;

const navigate = e => {
  const route = e.target.pathname;

  history.pushState({}, "", route);
  renderContent(route);
}

const registerBrowserBackAndForth = () => {
  window.onpopstate = function (e) {
    const route = location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = location.pathname;
  renderContent(route);
};

const main = async () => {
  if (window.location.pathname == '/') {
    return;
  } else if (window.location.pathname == '/orders') {
    console.log('displaying menu view');
    
    await MenuView.displayMenus();
  }
}

(async function bootup() {
  renderNavLinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
  await main();
})();