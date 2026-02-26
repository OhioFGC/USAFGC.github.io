document.getElementById('section-select').addEventListener('change', function() {
    const selectedValue = this.value;
    console.log(this.value)
    
    if (selectedValue) {
        document.getElementById(selectedValue).scrollIntoView({ behavior: 'smooth' });
    }
});

// Copyright year: automatically updates as year changes
const currentYear = new Date().getFullYear()
const copyright = document.getElementById('copyright')

copyright.textContent = currentYear;

// Back to top button
const backToTopBtn = document.getElementById('back-to-top')

const scrollToTop = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block'
  } 
  
  else {
    backToTopBtn.style.display = 'none'
  }
}

const toTopFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0

  if (window.location.hash) {
    history.replaceState('', document.title, window.location.pathname)
  }
}

backToTopBtn.addEventListener('click', () => toTopFunction())

window.onscroll = () => scrollToTop()