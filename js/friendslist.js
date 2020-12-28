function postChat() {
	// create a P tag to become the post
	let userPost = document.createElement( "P" );
	// Get the "userInput" from the form 
	let userContent = document.getElementById( "userInput" ).value;

	//set the userInput as content
	let userText = document.createTextNode( userContent );
	
	// add that text to the P tag
	userPost.appendChild( userText );
	// give the P tag a class 
	userPost.classList.add( "userPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild(userPost);
	

	// you can call a function with a timer
	// this calls the function after 4 sec.
	setTimeout( botAnswer, 2000 );
	// this calls the function every 4 sec.
	//setInterval(botAnswer, 4000);
}

function botAnswer() {
	
	// create a P tag to become the post
	let botPost = document.createElement( "P" );
	
	let aArray = ["Hej Marcus" , "Bara bra. Hur är det själv?" , "Trevlig att höra :)" , "Ett kilo mjöl"];

	let randomNumber = Math.floor(Math.random() * aArray.length)
	
	//but now we use the data instead
	let botContent = aArray[randomNumber];
	
	
	//set the text as content
	let botText = document.createTextNode( botContent );
	// add that text to the P tag
	botPost.appendChild( botText );
	// give the P tag a class for the bot
	botPost.classList.add( "botPost" );
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( botPost );

}

