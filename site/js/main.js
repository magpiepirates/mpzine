/*
const scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
)
*/
const mainPage = document.getElementById('mainpage')
const pages = {
	north: document.querySelector('#top .page2'),
	northwest: document.querySelector('#top .page1'),
	northeast: document.querySelector('#top .page3'),
	south: document.querySelector('#bottom .page2'),
	southwest: document.querySelector('#bottom .page1'),
	southeast: document.querySelector('#bottom .page3'),
	main: document.querySelector('#middle .page2'),
	east: document.querySelector('#middle .page3'),
	west: document.querySelector('#middle .page1')
}

history.scrollRestoration = 'manual'
mainPage.scrollIntoView()

//document.documentElement.scrollLeft = 800

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseMoveHandler = function (e) {
	const dx = e.clientX - pos.x
	const dy = e.clientY - pos.y
	document.documentElement.scrollTop = pos.top - dy
	document.documentElement.scrollLeft = pos.left - dx
}

const mouseDownHandler = function (e) {
	pos = {
		left: document.documentElement.scrollLeft,
		top: document.documentElement.scrollTop,
		x: e.clientX,
		y: e.clientY,
	};
	document.addEventListener('mousemove', mouseMoveHandler)
	document.addEventListener('mouseup', mouseUpHandler)
	document.documentElement.style.cursor = 'grabbing'
	document.documentElement.style.userSelect = 'none'
}

const mouseUpHandler = function () {
	document.removeEventListener('mousemove', mouseMoveHandler)
	document.removeEventListener('mouseup', mouseUpHandler)
	document.documentElement.style.cursor = 'grab'
	document.documentElement.style.removeProperty('user-select')
}

const windowResizeHandler = () => {
	console.log(window.innerWidth, window.innerHeight)
}

document.addEventListener('mousedown', mouseDownHandler)
window.addEventListener('resize' , windowResizeHandler)

const changePage = (pageName) => {
	pages[pageName].scrollIntoView()
}