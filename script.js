const creationCard1 = document.getElementById('creationCard1');
const creationCard2 = document.getElementById('creationCard2');
const creationCard3 = document.getElementById('creationCard3');
const creationCard4 = document.getElementById('creationCard4');
const creationCard5 = document.getElementById('creationCard5');
const creationCard6 = document.getElementById('creationCard6');

const modalContainer1 = document.getElementById('modalContainer1');
const modalContainer2 = document.getElementById('modalContainer2');
const modalContainer3 = document.getElementById('modalContainer3');
const modalContainer4 = document.getElementById('modalContainer4');
const modalContainer5 = document.getElementById('modalContainer5');
const modalContainer6 = document.getElementById('modalContainer6');

creationCard1.addEventListener('click', () => {
	modalContainer1.classList.add('show');
});

modalContainer1.addEventListener('click', () => {
	modalContainer1.classList.remove('show');
});

creationCard2.addEventListener('click', () => {
	modalContainer2.classList.add('show');
});

modalContainer2.addEventListener('click', () => {
	modalContainer2.classList.remove('show');
});

creationCard3.addEventListener('click', () => {
	modalContainer3.classList.add('show');
});

modalContainer3.addEventListener('click', () => {
	modalContainer3.classList.remove('show');
});

creationCard4.addEventListener('click', () => {
	modalContainer4.classList.add('show');
});

modalContainer4.addEventListener('click', () => {
	modalContainer4.classList.remove('show');
});

creationCard5.addEventListener('click', () => {
	modalContainer5.classList.add('show');
});

modalContainer5.addEventListener('click', () => {
	modalContainer5.classList.remove('show');
});

creationCard6.addEventListener('click', () => {
	modalContainer6.classList.add('show');
});

modalContainer6.addEventListener('click', () => {
	modalContainer6.classList.remove('show');
});