function loginWithGitHub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=3305d39b63fabd95cfe2&scope=user';
    }
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if(error === 'access_denied') {
    window.location.href = 'loginfinalizado.html';
    }

    // Get the modal
var modal = document.getElementById("aboutModal");

// Get the button that opens the modal
var btn = document.getElementById("aboutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    //3305d39b63fabd95cfe2