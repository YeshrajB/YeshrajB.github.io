const sections = document.getElementsByClassName('sections')
const themeButton = document.getElementById('theme-button')
const typingWords = ['Software engineer', 'Computer enthusiast', 'Developer']

for (let index = 0; index < sections.length; index++) {
    const section = sections[index]
    section.addEventListener('click', (event) => {
      const currentlyActiveSection = document.getElementsByClassName('active-section')
      currentlyActiveSection[0].classList.remove('active-section')
      section.classList.add('active-section')
      const sectionId = section.getAttribute('data-section-id')
      document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
}

themeButton?.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].classList.toggle('light-theme')
})

consoleTypingEffect(typingWords);

function consoleTypingEffect(words) {
  let visible = true;
  let console = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById('typing-text')
  let colors = ['tomato','lightblue', 'purple']
  target.style.color = colors[0]
  window.setInterval(() => {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(() => {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target?.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(() => {
    if (visible === true) {
      console.className = 'console-underscore hidden'
      visible = false;
    } else {
      console.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}
