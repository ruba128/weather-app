const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=173b845562fba4cfa8c739c32624c7f7&query='+latitude+','+longitude+'&units=f'
    request({url, json:true }, (error,{body})=>{
        if (error) {
            callback('unable to connect!',undefined)
            
        } else if (body.error) {
            callback('unable to find location!',undefined)
    
        }else {
            callback(undefined,body.current.weather_descriptions[0]+'. its currently '+ body.current.temperature+ ' degress outside but it feels like '+body.current.feelslike)
            // console.log(response.body.current.weather_descriptions[0]+'. its currently '+ response.body.current.temperature+ ' degress outside but it feels like '+response.body.current.feelslike)
        }
        
        
    })
}


// const url='http://api.weatherstack.com/current?access_key=173b845562fba4cfa8c739c32624c7f7&query=42.3605,-71.0596&units=f'

// request({url:url, json:true }, (error,response)=>{
//     if (error) {
//         console.log('unable to connect!')
        
//     } else if (response.body.error) {
//         console.log('unable to find location!')

//     }else {
//         console.log(response.body.current.weather_descriptions[0]+'. its currently '+ response.body.current.temperature+ ' degress outside but it feels like '+response.body.current.feelslike)
//     }
  
    
// })

module.exports=forecast