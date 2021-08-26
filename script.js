var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var input = document.getElementById("search").value;

  fetch(`https://api.github.com/orgs/${input}/repos`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((obj) => {
        var div = $('<div>', {
          "class": "bucket"
        });
        var span = $('<span>', {
          "Repo:": obj.name,
          "Description:": obj.description,
          "URL:": obj.html_url
        });
        div.append(span).appendTo(".result");
      });
    });
});
