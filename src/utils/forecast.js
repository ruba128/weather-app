const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=173b845562fba4cfa8c739c32624c7f7&query='+latitude+','+longitude+'&units=f'
    request({url, json:true }, (error,{body})=>{
        if (error) {
            callback('unable to connect!',undefined)
            
        } else if (body.error) {
            callback('unable to find location!',undefined)
    
        }else {
            // console.log(body)
            callback(undefined,body.current.weather_descriptions[0]+'. it is currently '+ body.current.temperature+ ' degress outside but it feels like '+body.current.feelslike+'degrees. The humidity is '+body.current.humidity+'%.')
            // console.log( response.body.current)
        }
        
        
    })
}



module.exports=forecast