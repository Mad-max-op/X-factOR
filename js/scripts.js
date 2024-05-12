
window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});







function encryptPassword(password) {
    var binaryPassword = '';
    for (var i = 0; i < password.length; i++) {
        binaryPassword += password.charCodeAt(i).toString(2);
    }

    var encryptedPassword = '';
    for (var j = 0; j < binaryPassword.length; j++) {
        encryptedPassword += String.fromCharCode(parseInt(binaryPassword.charAt(j)) + 1);
    }

    encryptedPassword = btoa(encryptedPassword);

    return encryptedPassword;
}





function encrypt(message, passphrase) {
    return CryptoJS.AES.encrypt(message, passphrase).toString();
  }

  function decrypt(ciphertext, passphrase) {
    var bytes  = CryptoJS.AES.decrypt(ciphertext, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
  }



  var passphrase = encryptPassword("xfactor");


  const file = "U2FsdGVkX1/UTwuZXKAVxI5YTh6pCgsZIJLEuxH7f4fAVdJO7s9qfyEswG4apkkJ";


function check(){

    
let entered = document.getElementById("key").value.toLowerCase();


    fetch(decrypt(file, passphrase)+".json")
    .then(response => response.json())
    .then(data => {
      var passwords = data.passwords;
      var hacker = data.hackerrank;
      var found = false;
      for (var i = 0; i < passwords.length; i++) {
        if (entered === decrypt(passwords[i],passphrase)) {
            alert(decrypt(hacker[i],passphrase))
          found = true;
          break;
        }

      }
      // if (found) {
      //   alert("Here you go !!")
      // } else {
      //   console.log("Error: Password not found.");
      // }
    })
    .catch(error => console.error('Error fetching passwords:', error));
}



























function show(){
    var signupElement = document.getElementById("signup")

      signupElement.style.display = "block";


}



function handleKeyPress(event) {
  if (event.keyCode === 13) { // Check if Enter key is pressed
      event.preventDefault(); // Prevent the default action (form submission)
      document.getElementById("submitButton").click(); // Trigger click event of the button
  }
}






