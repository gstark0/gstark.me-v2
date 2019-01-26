
document.addEventListener("DOMContentLoaded", function(e) {
	document.body.className = '';
});

// TypeWriter effect
const oneElement = document.querySelector('#role')
ityped.init(oneElement, { showCursor: true, strings: ['Developer', 'Programmer', 'Film editor', 'Car enthusiast'] });