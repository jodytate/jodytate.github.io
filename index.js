var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var repos = JSON.parse(xhr.response);
    document.getElementById('count').innerHTML = repos.length;
    repos.forEach(function(item){
      var url = item.html_url;

      var link =
        '<li><i class="fa-li fa fa-angle-right"></i>' + 
          '<a href="' + url + '">' + url + '</a></li>';

      var element = document.getElementById('container');
      element.insertAdjacentHTML('beforeend', link);
    });
  }
};
xhr.open('GET', 'https://api.github.com/users/jodytate/repos?per_page=1000', true, 2);
xhr.send(null);
