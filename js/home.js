// get the address of what site this code is running from
let currentAddress = window.location.href;
// get the URL
let currentURL = new URL(window.location.href);
// HTTP GET method
var searchParams = new URLSearchParams(currentURL.search);
// get name from searchParams
let username = searchParams.get("username");
// create id's for html
document.getElementById("userName").innerHTML = username ;
document.getElementById("userNameMenu").innerHTML = username ;

document.cookie= username;