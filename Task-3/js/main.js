const bodyDiv = document.getElementById('container');

for (i=1; i<6; i++){
    const div = document.createElement('div')
    div.textContent = `Element ${i}`
    div.classList = 'element'
    bodyDiv.append(div)
};