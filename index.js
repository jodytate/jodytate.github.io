var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    document.getElementById('github').innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'https://api.github.com/users/jodytate', true);
xhr.send(null);
