// Multilingual text content
const translations = {
  en: {
    greeting: "Hi, I'm Marco Allegretti",
    subtitle: "Web & Mobile Developer | Audio Programmer",
    description: "I design and build web, mobile, and desktop applications with a passion for audio technology. Always exploring new challenges and creative solutions.",
    discover: "Discover my projects",
    cvSection: {
      title: "Download My CV",
      description: "Thank you for visiting my portfolio! Download my CV to remember to contact me for future collaborations.",
      englishCV: "English CV (PDF)",
      italianCV: "Italian CV (PDF)"
    },
    contacts: [
      { label: "Email", link: "mailto:allegrettimarco.91@gmail.com" },
      { label: "GitHub", link: "https://github.com/marcoallegretti" },
      { label: "Fiverr", link: "https://www.fiverr.com/s/rEN5Wor" }
    ],
    projects: [
      {
        title: "Docu - Rich-Text Editor",
        description: "A multi-platform rich-text editor built with Flutter, available on web, mobile, and desktop.",
        image: "assets/images/docu.jpg",
        sourceCode: "https://github.com/marcoallegretti/docu-text-editor",
        link: "https://marcoallegretti.github.io/text_editor_pro/"
      },
      {
        title: "Artistry Pro - Digital Paint",
        description: "Multi-platform digital painting application built with Flutter, featuring advanced drawing tools.",
        image: "assets/images/artistry.jpg",
        sourceCode: "https://github.com/marcoallegretti/artistry_pro",
        link: "https://marcoallegretti.github.io/artistry_pro/"
      },
      {
        title: "Audio Plugins - 23DSP",
        description: "Professional audio plugins and tools for music production and sound design.",
        image: "assets/images/23dsp.jpg",
        sourceCode: "https://github.com/23DSP/Audio-Plugins",
        link: "https://23dsp.gumroad.com"
      }
    ],
    techStack: {
      audio: {
        title: "Audio",
        items: [
          { name: "FAUST", level: "Intermediate", iconClass: "fa-solid fa-wave-square" },
          { name: "HISE", level: "Intermediate", iconClass: "fa-solid fa-music" },
          { name: "C++ / JUCE", level: "Basic", levelIT: "Base", iconClass: "fa-solid fa-code" }
        ]
      },
      web: {
        title: "Web / Mobile",
        items: [
          { name: "Flutter", level: "Basic", levelIT: "Base", customSVG: "assets/icons/flutter.svg" },
          { name: "Firebase / Supabase", level: "Basic", levelIT: "Base", iconClass: "fa-solid fa-database" },
          { name: "HTML/CSS/JS", level: "Basic", levelIT: "Base", iconClass: "fa-brands fa-html5" }
        ]
      },
      os: {
        title: "Operating Systems",
        items: [
          { name: "Windows", level: "Daily user", iconClass: "fa-brands fa-windows" },
          { name: "Linux", level: "Intermediate", iconClass: "fa-brands fa-linux" },
          { name: "OS X", level: "Basic", levelIT: "Base", iconClass: "fa-brands fa-apple" }
        ]
      }
    },
    whatGrid: {
      looking: {
        title: "What I'm Looking For",
        items: [
          "Roles that encourage learning and growth in the IT field",
          "Dynamic environments where I can contribute to the development of digital solutions",
          "Opportunities to work on real-world projects with modern technologies and a collaborative approach"
        ]
      },
      offering: {
        title: "What I Offer",
        items: [
          "Cross-platform application development with a focus on performance and user experience",
          "Strong self-learning ability and adaptability to new technologies",
          "Experience in teamwork, time management, and project accountability",
          "Analytical mindset with a problem-solving orientation"
        ]
      }
    }
  },
  it: {
    greeting: "Ciao, sono Marco Allegretti",
    subtitle: "Sviluppatore Web & Mobile | Audio Programmer",
    description: "Progetto e sviluppo applicazioni web, mobile e desktop con passione per la tecnologia audio. Sempre alla ricerca di nuove sfide e soluzioni creative.",
    discover: "Scopri i miei progetti",
    cvSection: {
      title: "Scarica il mio CV",
      description: "Grazie per aver visitato il mio portfolio! Scarica il mio CV per ricordarti di contattarmi per future collaborazioni.",
      englishCV: "CV in Inglese (PDF)",
      italianCV: "CV in Italiano (PDF)"
    },
    contacts: [
      { label: "Email", link: "mailto:allegrettimarco.91@gmail.com" },
      { label: "GitHub", link: "https://github.com/marcoallegretti" },
      { label: "Fiverr", link: "https://www.fiverr.com/s/rEN5Wor" }
    ],
    projects: [
      {
        title: "Docu - Editor di Testo",
        description: "Un editor di testo multipiattaforma costruito con Flutter, disponibile su web, mobile e desktop.",
        image: "assets/images/docu.jpg",
        sourceCode: "https://github.com/marcoallegretti/docu-text-editor",
        link: "https://marcoallegretti.github.io/text_editor_pro/"
      },
      {
        title: "Artistry Pro - Pittura Digitale",
        description: "Applicazione di pittura digitale multipiattaforma costruita con Flutter, con strumenti di disegno avanzati.",
        image: "assets/images/artistry.jpg",
        sourceCode: "https://github.com/marcoallegretti/artistry_pro",
        link: "https://marcoallegretti.github.io/artistry_pro/"
      },
      {
        title: "Plugin Audio - 23DSP",
        description: "Plugin audio professionali e strumenti per la produzione musicale e il sound design.",
        image: "assets/images/23dsp.jpg",
        sourceCode: "https://github.com/23DSP/Audio-Plugins",
        link: "https://23dsp.gumroad.com"
      }
    ],
    techStack: {
      audio: {
        title: "Audio",
        items: [
          { name: "FAUST", level: "Intermedio" },
          { name: "HISE", level: "Intermedio" },
          { name: "C++ / JUCE", level: "Principiante" }
        ]
      },
      web: {
        title: "Web / Mobile",
        items: [
          { name: "Flutter", level: "Principiante" },
          { name: "Firebase / Supabase", level: "Principiante" },
          { name: "HTML/CSS/JS", level: "Intermedio" }
        ]
      },
      os: {
        title: "Sistemi Operativi",
        items: [
          { name: "Windows", level: "Uso quotidiano" },
          { name: "Linux", level: "Intermedio" },
          { name: "OS X", level: "Principiante" }
        ]
      }
    },
    whatGrid: {
      looking: {
        title: "Cosa Cerco",
        items: [
          "Ruoli che incoraggiano l'apprendimento e la crescita nel settore IT",
          "Ambienti dinamici dove posso contribuire allo sviluppo di soluzioni digitali",
          "Opportunità di lavorare su progetti reali con tecnologie moderne e un approccio collaborativo"
        ]
      },
      offering: {
        title: "Cosa Offro",
        items: [
          "Sviluppo di applicazioni cross-platform con focus su prestazioni ed esperienza utente",
          "Forte capacità di auto-apprendimento e adattabilità alle nuove tecnologie",
          "Esperienza nel lavoro di squadra, gestione del tempo e responsabilità di progetto",
          "Mentalità analitica orientata alla risoluzione dei problemi"
        ]
      }
    }
  }
};

let currentLang = 'en';

// Create project cards
function createProjectCards() {
  const t = translations[currentLang];
  const projectCarousel = document.querySelector('.project-carousel');
  projectCarousel.innerHTML = '';
  
  t.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    // Create image placeholder if no image exists yet
    let imgSrc = project.image;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = project.title;
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/300x180?text=Project+Image';
    };
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const desc = document.createElement('p');
    desc.textContent = project.description;
    
    // Links container
    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';
    
    // Demo link
    const demoLink = document.createElement('a');
    demoLink.href = project.link;
    demoLink.className = 'neumorphic-btn project-btn';
    demoLink.target = '_blank';
    
    // Add appropriate icon and text based on link type
    const icon = document.createElement('i');
    icon.style.marginRight = '0.5em';
    
    // Check if link is to Gumroad store
    if (project.link.includes('gumroad.com')) {
      icon.className = 'fa-solid fa-cart-shopping'; // Shopping cart icon
      demoLink.appendChild(icon);
      demoLink.appendChild(document.createTextNode(currentLang === 'en' ? 'Live Store' : 'Negozio'));
    } else {
      icon.className = 'fa-solid fa-link'; // Link icon
      demoLink.appendChild(icon);
      demoLink.appendChild(document.createTextNode(currentLang === 'en' ? 'Live Demo' : 'Demo Live'));
    }
    
    // Source code link
    const sourceLink = document.createElement('a');
    sourceLink.href = project.sourceCode;
    sourceLink.className = 'neumorphic-btn project-btn';
    sourceLink.target = '_blank';
    
    // Add GitHub icon to source code button
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github';
    githubIcon.style.marginRight = '0.5em';
    
    sourceLink.appendChild(githubIcon);
    sourceLink.appendChild(document.createTextNode(currentLang === 'en' ? 'Source Code' : 'Codice Sorgente'));
    
    linksContainer.appendChild(demoLink);
    linksContainer.appendChild(sourceLink);
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(linksContainer);
    
    projectCarousel.appendChild(card);
  });
}

// Create tech stack
function createTechStack() {
  const t = translations[currentLang];
  const techStackDiv = document.querySelector('.tech-stack');
  techStackDiv.innerHTML = '';
  
  // Audio category
  const audioCategory = createTechCategory(t.techStack.audio);
  techStackDiv.appendChild(audioCategory);
  
  // Web/Mobile category
  const webCategory = createTechCategory(t.techStack.web);
  techStackDiv.appendChild(webCategory);
  
  // OS category
  const osCategory = createTechCategory(t.techStack.os);
  techStackDiv.appendChild(osCategory);
}

function createTechCategory(category) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'tech-category fade-in';
  
  const title = document.createElement('h3');
  title.textContent = category.title;
  categoryDiv.appendChild(title);
  
  const itemsDiv = document.createElement('div');
  itemsDiv.className = 'tech-items';
  
  category.items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'tech-item';
    
    const name = document.createElement('h4');
    if (item.customSVG) {
      fetch(item.customSVG + '?v=' + Date.now())
        .then(response => response.text())
        .then(svg => {
          const span = document.createElement('span');
          span.className = 'tech-icon';
          span.style.display = 'inline-block';
          span.style.marginRight = '0.5em';
          span.innerHTML = svg;
          name.insertBefore(span, name.firstChild);
        });
    } else if (item.iconClass) {
      const icon = document.createElement('i');
      icon.className = item.iconClass + ' tech-icon';
      icon.style.marginRight = '0.5em';
      name.appendChild(icon);
    }
    name.appendChild(document.createTextNode(item.name));
    
    const level = document.createElement('p');
    if (item.link) {
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.level;
      link.target = '_blank';
      level.appendChild(link);
    } else {
      level.textContent = item.level;
    }
    
    itemDiv.appendChild(name);
    itemDiv.appendChild(level);
    itemsDiv.appendChild(itemDiv);
  });
  
  categoryDiv.appendChild(itemsDiv);
  return categoryDiv;
}

// Create what grid
function createWhatGrid() {
  const t = translations[currentLang];
  const whatGridDiv = document.querySelector('.what-grid');
  whatGridDiv.innerHTML = '';
  
  // Looking for column
  const lookingDiv = document.createElement('div');
  lookingDiv.className = 'what-column fade-in';
  
  const lookingTitle = document.createElement('h3');
  lookingTitle.textContent = t.whatGrid.looking.title;
  
  const lookingList = document.createElement('ul');
  t.whatGrid.looking.items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lookingList.appendChild(li);
  });
  
  lookingDiv.appendChild(lookingTitle);
  lookingDiv.appendChild(lookingList);
  
  // Offering column
  const offeringDiv = document.createElement('div');
  offeringDiv.className = 'what-column fade-in';
  
  const offeringTitle = document.createElement('h3');
  offeringTitle.textContent = t.whatGrid.offering.title;
  
  const offeringList = document.createElement('ul');
  t.whatGrid.offering.items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    offeringList.appendChild(li);
  });
  
  offeringDiv.appendChild(offeringTitle);
  offeringDiv.appendChild(offeringList);
  
  whatGridDiv.appendChild(lookingDiv);
  whatGridDiv.appendChild(offeringDiv);
}

// Create contacts
function createContacts() {
  const t = translations[currentLang];
  const contactsDiv = document.querySelector('.contacts-content');
  contactsDiv.innerHTML = '';
  
  t.contacts.forEach(c => {
    const btn = document.createElement('a');
    btn.className = 'neumorphic-btn fade-in';
    btn.href = c.link;
    
    // Only add the label text, no emoji
    btn.textContent = c.label;
    
    btn.target = '_blank';
    contactsDiv.appendChild(btn);
  });
}

// Create language switcher
function createLanguageSwitcher() {
  const body = document.body;
  
  // Check if language switcher already exists
  if (document.querySelector('.lang-switcher')) {
    return;
  }
  
  const langSwitcher = document.createElement('div');
  langSwitcher.className = 'lang-switcher';
  
  const enBtn = document.createElement('button');
  enBtn.className = 'lang-btn ' + (currentLang === 'en' ? 'active' : '');
  enBtn.textContent = 'EN';
  enBtn.onclick = function() {
    setLanguage('en');
  };
  
  const itBtn = document.createElement('button');
  itBtn.className = 'lang-btn ' + (currentLang === 'it' ? 'active' : '');
  itBtn.textContent = 'IT';
  itBtn.onclick = function() {
    setLanguage('it');
  };
  
  langSwitcher.appendChild(enBtn);
  langSwitcher.appendChild(itBtn);
  body.appendChild(langSwitcher);
}

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Update language buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === lang.toUpperCase()) {
      btn.classList.add('active');
    }
  });
  
  // Update presentation section
  document.getElementById('greeting').textContent = t.greeting;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('description').textContent = t.description;
  document.getElementById('discover-btn').textContent = t.discover;
  
  // Update projects
  createProjectCards();
  
  // Update tech stack
  createTechStack();
  
  // Update what grid
  createWhatGrid();
  
  // Update contacts
  createContacts();
  
  // Update CV section
  document.getElementById('cv-title').textContent = t.cvSection.title;
  document.getElementById('cv-description').textContent = t.cvSection.description;
  document.getElementById('english-cv').textContent = t.cvSection.englishCV;
  document.getElementById('italian-cv').textContent = t.cvSection.italianCV;
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  // Create language switcher
  createLanguageSwitcher();
  
  // Initialize language
  setLanguage(currentLang);
  
  // fullPage.js init
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['presentation', 'projects', 'tech', 'contacts', 'cv'],
    slidesNavigation: true,
    controlArrows: true,
    licenseKey: 'gplv3-license',
    scrollOverflow: true,
    afterLoad: function(origin, destination, direction) {
      // Add fade-in animation to the active section
      const section = destination.item;
      const elements = section.querySelectorAll('.fade-in');
      elements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
    }
  });
  
  // Button to navigate to projects section
  document.getElementById('discover-btn').onclick = function() {
    fullpage_api.moveTo('projects');
  };
});
