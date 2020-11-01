const path= require('path')
const express = require('express')
const hbs = require('hbs')
const geocode= require('./utils/geocode')
const forecast= require('./utils/forecast')

const app = express()
//define paths for express config
const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')

//set up handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        name:'RUBA MUTASIM'
    })

  
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT ME!',
        name:'RUBA MUTASIM'
    })

  
})


app.get('/help',(req,res)=>{
    res.render('help',{
        message:'your help messages',
        title:'HELP!',
        name:'RUBA MUTASIM'
        
    })

  
})

app.get('/weather',(req,res)=>{
    if (!req.query.address) {
        return  res.send({
            error:'you must provide an address'
         })
         
     }


     else {   
        geocode(req.query.address,(error,{latitude,longitude,location}={})=> {
            if (error) {
                return res.send({error})
                
            }
            forecast(latitude,longitude, (error, forecastData) => {
                if (error) {
                    return res.send({error})
                    
                }
                res.send({
                    forecast:forecastData,
                    location,
                    address: req.query.address

                })
            })   
        })
    
    
    
    }
    
    
    
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'RUBA MUTASIM',
        message:'help article not found'
    })
    
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'RUBA MUTASIM',
        message:'page not found'
    })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})

