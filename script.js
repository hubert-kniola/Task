var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var input = document.getElementById("search").value;

  fetch(`https://api.github.com/orgs/${input}/repos`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = "";
      data.forEach((obj) => {
        var div = $('<div>', {
          "class": "bucket",
          "id": obj.id,
        });
        var repo = $('<div>', {
          "text": `Repo: ${obj.name}`
        })
        var desc = $('<div>', {
          "text": `Description: ${obj.description}`,
        });
        var urltext = $('<span>', {
          "text": "URL: ",
        })
        var url = $('<a>', {
          "text": obj.html_url,
          "href": obj.html_url
        })
        div.append(repo).appendTo(".result");
        div.append(desc).appendTo(".result");
        div.append(urltext).append(url).appendTo(".result");

        $( `#${obj.id}` ).click(function() {
          isOpened = true
          $("#popup-normalurl").text(` ${obj.html_url}`)
          $("#popup-sshurl").text(` ${obj.ssh_url}`)
          $("#popup-httpsurl").text(` ${obj.git_url}`)
          $("#popup-stars").text(`Stars: ${obj.stargazers_count}`)
          $("#popup-size").text(`Size: ${obj.size}`)
          $('.popup-container').show();
        });
      });
    })
    .catch((err) => {
      console.log(err)
      var span = $('<span>', {
        "text": "Organization not found.",
        "id": "error-span"
      })
      span.appendTo(".result")
    })
});

$('.popup-close').click(function(){
  $('.popup-container').hide();
});
