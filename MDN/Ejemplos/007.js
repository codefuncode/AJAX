  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php', userName);
  };

  function makeRequest(url, userName) {

      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('POST', url);
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.send('userName=' + encodeURIComponent(userName));
  }