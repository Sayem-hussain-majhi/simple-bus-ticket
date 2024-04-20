let buttons = document.querySelectorAll('.seat-btn')

for(let i = 0; i <= buttons.length; i ++){
    buttons[i].addEventListener('click', function(){
       
        this.classList.add('bg-green-400');
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const txt1 = td2.textContent = 'Economy'
        const txt2 = td3.textContent = '550'

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        const textNode = document.createTextNode(this.innerText)
        document.getElementById("seat-info").appendChild(tr);
        
        
        td1.appendChild(textNode)
        td2.appendChild(txt1)
        td3.appendChild(txt2)
        console.log(tr, textNode); 
        
    })
}