AOS.init({
    easing: 'ease',
    duration: 1000,
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ){
        document.getElementById('navba').style.backgroundColor = '#171717'
    } else {
        document.getElementById('navba').style.backgroundColor = 'transparent'
    }
}

const closeNav= document.querySelectorAll('.close-nav')

closeNav.forEach((e) => {
    e.addEventListener('click', function closeNav() {
        document.getElementById('check').checked = false
    })
})


const hotelContainer = document.getElementById('hotel-container') 
const cruiseContainer = document.getElementById('cruise-container') 
const flightContainer = document.getElementById('flight-container') 
const hotelBtn =  document.getElementById('hotel-btn')
const cruiseBtn =  document.getElementById('cruise-btn')
const flightBtn = document.getElementById('flight-btn')

const btn = cruiseBtn.addEventListener('click', function changeToCruise(){
    hotelContainer.style.display ='none'
    flightContainer.style.display ='none'
    cruiseContainer.style.display= 'block'
    cruiseBtn.style.borderBottom ="2px solid #171717"
    hotelBtn.style.borderBottom ="none"
    flightBtn.style.borderBottom ="none"
})

const btn2 = hotelBtn.addEventListener('click', function changeToHotel(){
    hotelContainer.style.display= 'block'
    cruiseContainer.style.display ='none'
    flightContainer.style.display ='none'
    hotelBtn.style.borderBottom ="2px solid #171717"
    cruiseBtn.style.borderBottom ="none"
    flightBtn.style.borderBottom ="none"
})

const btn3 = flightBtn.addEventListener('click', function changeToFlight(){
    flightContainer.style.display= 'block'
    cruiseContainer.style.display ='none'
    hotelContainer.style.display ='none'
    flightBtn.style.borderBottom ="2px solid #171717"
    cruiseBtn.style.borderBottom ="none"
    hotelBtn.style.borderBottom ="none"
})

