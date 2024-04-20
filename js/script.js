let buttons = document.querySelectorAll('.seat-btn')


for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        seat()
        this.classList.remove('bg-gray-300');
        this.classList.add('bg-[#1DD100]');
        this.classList.add('text-white');

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
    })
}

function seat() {
    const hrLine = document.getElementById('hr-line')
    const seatInfo = document.getElementById('seat-info')
    const total = seatInfo.childElementCount + 1
    let totalSeatCount = document.getElementById('total-seat').textContent = total
    let taka = document.getElementById('taka').textContent = totalSeatCount * 550
    if(total !== 0){
        const hr = document.createElement('hr')
        hrLine.appendChild(hr)
        if(hrLine.childElementCount >= 3){
            hrLine.removeChild(hrLine.lastElementChild)
        }
    }
    return taka; 
}

function coupon(){
    const grandTaka = document.getElementById('grand-taka')
    const newCouponCode = 'NEW15'
    const coupleCouponCode = 'Couple 20'
    const value = document.getElementById('coupon-input').value

    if(value === newCouponCode){
       const fifteenPercent = (taka.innerText / 100) * 15
       grandTaka.innerText = taka.innerText - fifteenPercent
       console.log(fifteenPercent,'fif');
       
    }else if(value === coupleCouponCode){
       const twentyPercent = (taka.innerText / 100) * 20
       grandTaka.innerText = taka.innerText - twentyPercent
        console.log(twentyPercent,'twn');
    }
    // grandTaka.innerText = taka.innerText 
console.log(taka.innerText);

}

