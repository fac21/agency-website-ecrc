const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
      document.getElementById('title').style.color = "#d3d3d3";
      document.querySelector('.nav li a').style.color = 'white';
      document.querySelector('button').style.background = 'white';
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);