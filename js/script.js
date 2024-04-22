let buttons = document.querySelectorAll('.seat-btn')
let grandTaka = document.getElementById('grand-taka')
const nextBtn = document.getElementById('next-btn')
let totalSeatCountStr = document.getElementById('total-seat').innerText
const totalSeatCountNum = Number(totalSeatCountStr)
const couponBtn = document.getElementById('coupon-btn')
const inputValue = document.getElementById('coupon-input')
const newCouponCode = 'NEW15'
const coupleCouponCode = 'Couple 20'

inputValue.addEventListener('input', function(event) {
    const txt = event.target.value
    if (txt === newCouponCode || txt === coupleCouponCode) {
        couponBtn.disabled = false
        couponBtn.classList.remove('bg-[#1cd100a8]')
        couponBtn.classList.add('bg-[#1DD100]')
    }else{
        couponBtn.disabled = true
        couponBtn.classList.remove('bg-[#1DD100]')
        couponBtn.classList.add('bg-[#1cd100a8]')
    }
    return txt
})







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
    const passengerName = document.getElementById('name-input').value
    const passengerNumber = document.getElementById('number-input').value
    const hrLine = document.getElementById('hr-line')
    const seatInfo = document.getElementById('seat-info')
    const total = seatInfo.childElementCount + 1
    let totalSeatCount = document.getElementById('total-seat').textContent = total
    let taka = document.getElementById('taka').textContent = totalSeatCount * 550
    grandTaka.textContent = taka
    if (total !== 0) {
        const hr = document.createElement('hr')
        hrLine.appendChild(hr)
        if (hrLine.childElementCount >= 3) {
            hrLine.removeChild(hrLine.lastElementChild)
        }
    }

    if (totalSeatCount !== 0 && passengerName !== '' && passengerNumber !== '') {
        nextBtn.disabled = false
        nextBtn.classList.remove('bg-[#1cd100a8]')
        nextBtn.classList.add('bg-[#1DD100]')
    } else if (passengerName === '') {
        nextBtn.disabled = true
        nextBtn.classList.remove('bg-[#1DD100]')
        nextBtn.classList.add('bg-[#1cd100a8]')
    } else if (passengerNumber === '') {
        nextBtn.disabled = true
        nextBtn.classList.remove('bg-[#1DD100]')
        nextBtn.classList.add('bg-[#1cd100a8]')
    }
    return taka;
}

function coupon() {
    const couponInputTxt = couponBtn.parentElement.firstElementChild.value
    grandTaka.textContent = taka.innerText

    if (couponInputTxt === newCouponCode) {
        const fifteenPercent = (taka.innerText / 100) * 15
        grandTaka.textContent = taka.innerText - fifteenPercent
        console.log(fifteenPercent, 'fif');

    } else if (couponInputTxt === coupleCouponCode) {
        const twentyPercent = (taka.innerText / 100) * 20
        grandTaka.textContent = taka.innerText - twentyPercent
        console.log(twentyPercent, 'twn');
    }
    
}
