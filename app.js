const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

let title = document.getElementById('title');

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
      title.style.color = "#d3d3d3";
     
      document.querySelector('.nav li a').style.color = 'white';
      document.querySelector('button').style.background = 'white';

    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);