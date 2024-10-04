let body = document.querySelector('body')
body.style.background = "pink"
body.style.color = "red"
body.style.height = "100vh"
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
let ism = prompt('Ismingizni kiriting: ')


let title = document.createElement('h1')

title.textContent = ism 

title.style.textAlign = 'center'
title.style.fontSize = "50px"
body.append(title)