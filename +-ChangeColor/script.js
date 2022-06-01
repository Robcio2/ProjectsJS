const Up = document.querySelector('.sizeUp')
const Down = document.querySelector('.sizeDown')
const Color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const plus = () => {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}
const minus = () => {
	if (fontSize <= 21) return
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	p.style.color = `rgb(${r},${g},${b})`
}

Up.addEventListener('click', plus)
Down.addEventListener('click', minus)
Color.addEventListener('click', colorChanger)
