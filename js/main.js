/* custom js file made by JeanDoe */

let textIn = document.querySelector('#textin');
let textOut = document.querySelector('#textout');
let copyBtn = document.querySelector('.copy_btn');
let pasteBtn = document.querySelector('.paste_btn');
let message = document.querySelector('.message');

copyBtn.addEventListener('click', () => {
	console.log('clicked');
	pasteBtn.classList.remove('active');
	textIn.select();
//	document.execCommand('copy');
	navigator.clipboard.writeText(textIn.value);
	copyBtn.classList.add('active');
	message.classList.add('active');
	message.innerText = 'Text is copied, now click on Paste button!';
});

pasteBtn.addEventListener('click', () => {
	console.log('clicked');
	copyBtn.classList.remove('active');
	textOut.select();
	document.execCommand('paste');
	navigator.clipboard.readText().then(cliptext => (textOut.innerText = cliptext));
	pasteBtn.classList.add('active');
	message.classList.add('active');
	message.innerText = 'Text is pasted, Thank\'s!';
});

/* show or Hide user Guide Message box */

const userGuide = document.querySelector('.view'),
	  text = document.querySelector('.text'),
	  closeContent = document.querySelector('.close');

if(userGuide){
	userGuide.addEventListener('click', () =>{
		text.classList.add('active');
		closeContent.classList.add('active');
	});
}

if(closeContent){
	closeContent.addEventListener('click', () =>{
		text.classList.remove('active');
		closeContent.classList.remove('active');
	});
}