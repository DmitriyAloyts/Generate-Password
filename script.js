var clip = "";
var spstring = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var nmstring = "01233456789";
var lcstring = "abcdefghijklmnopqrstuvwxyz";
var ucstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset = "";
var plength;
var specchar;
var numchars;
var lcchars;
var ucchars;

plength = prompt("Please enter length of password between 8 and 128 characters");
if (isNaN(plength) || plength < 8 || plength > 128){
    plength = 8;
};

do {
    specchars = confirm("Would you like to use special characters?");
    numchars = confirm("Would you like to use numeric characters?");
    lcchars = confirm("Would you like to use lowercase characters?");
    ucchars = confirm("Would you like to use uppercase characters?");
}
while (specchars !== true && numchars !== true && lcchars !== true && ucchars !== true);
if (specchars){
    charset += spstring;
}
if (numchars){
    charset += nmstring;
}
if (lcchars){
    charset += lcstring;
}
if (ucchars){
    charset += ucstring;
}

function genpwFunction() {
    retVal = "";
    for (var i = 0, n = charset.length; i < plength; ++i) {
        dec = Math.random() * n;
        int = Math.floor(dec);
        retVal += charset.charAt(int);
    }
    document.getElementById("newpw").innerHTML = retVal;
    document.getElementById("coppw").disabled = false;

}

function coppwFunction() {
    /* Get the password field */
    clip = document.querySelector("#newpw");
    var range = document.createRange();  
    range.selectNode(clip);
    window.getSelection().addRange(range);

    try {  
        // Now that we've selected the anchor text, execute the copy command  
        var successful = document.execCommand('copy');  
        var msg = successful ? 'successful' : 'unsuccessful';  
        console.log('Copy password command was ' + msg);  
      } catch(err) {  
        console.log('Oops, unable to copy');  
      }  

    alert("Copied the password to clipboard: " + clip.textContent);
}

  document.getElementById("genpw").addEventListener("click", genpwFunction);
  document.getElementById("coppw").addEventListener("click", coppwFunction);