
function myFunction() {
    var new_div_menu = document.createElement("div");
    new_div_menu.id = 'menu-rozwijane-id';
    new_div_menu.className = 'menu-rozwijane';
    new_div_menu.innerHTML = '<p>' + 'Menu generowane dynamicznie z zewnętrznego skryptu js' + '</p>' + '<br>';
for ( i=0; i<4; i++) {
 
    var p1 = document.createElement('p');
    new_div_menu.appendChild(p1);
 
    if(i == 0) {
    var a = document.createElement('a');
    a.href =  '/javascript/menu'; // Insted of calling setAttribute 
    a.innerHTML = "MENU ";// <a>INNER_TEXT</a>
    new_div_menu.appendChild(p1);
    new_div_menu.appendChild(a); // Append the link to the div
    
    }
    else if (i == 1) {
    var a = document.createElement('a');
    a.href =  'google.pl'; // Insted of calling setAttribute 
    a.innerHTML = "Link2 ";// <a>INNER_TEXT</a>
    new_div_menu.appendChild(p1);
    new_div_menu.appendChild(a); // Append the link to the div
    
    }
    else if (i == 2) {
    var a = document.createElement('a');
    a.href =  'google.pqql'; // Insted of calling setAttribute 
    a.innerHTML = "Link3 ";// <a>INNER_TEXT</a>
    new_div_menu.appendChild(p1);
    new_div_menu.appendChild(a); // Append the link to the div
    
    }
     else {
    var a = document.createElement('a');
    a.href =  'google.pwwwl'; // Insted of calling setAttribute 
    a.innerHTML = "Link4 ";// <a>INNER_TEXT</a>
    new_div_menu.appendChild(p1);
    new_div_menu.appendChild(a); // Append the link to the div
    
    }
 }
    document.getElementById('menu-top').appendChild(new_div_menu);
 
 
}
 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("menu-rozwijane-id").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("menu-rozwijane");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

