console.log('this is client side java script')



const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#mess-1')
const messageTwo = document.querySelector('#mess-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent= 'loading...'
    messageTwo.textContent= ''


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            messageOne.textContent= data.error
            messageTwo.textContent= ''

            // console.log(data.error)
            
        } else {
            messageOne.textContent=data.location
            messageTwo.textContent= data.forecast
            
        }
        


    })

})


})

