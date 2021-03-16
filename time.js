function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  }
  
  function display(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
       e.style.display = 'block';
  
  }
  function hide(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
  
  }
  
  function change(id)
  {
    var e=document.getElementById(id).value;
    document.getElementById("linkup").href=e;
    document.getElementById("linkup").innerText=e;
  }
  
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML =
      h + ":" + m + ":" + s;
      document.getElementById('txt1').innerHTML =
      h + ":" + m + ":" + s;
      document.getElementById('txt2').innerHTML =
      h + ":" + m + ":" + s;
      document.getElementById('txt3').innerHTML =
      h + ":" + m + ":" + s;
      document.getElementById('txt4').innerHTML =
      h + ":" + m + ":" + s;
      document.getElementById('txt5').innerHTML =
      h + ":" + m + ":" + s;
  
      var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }