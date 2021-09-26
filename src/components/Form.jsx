import React from 'react'
import { useEffect,useState  } from 'react'
import {Box, TextField, Button,makeStyles} from '@material-ui/core'
import { getData } from '../service/api'
import Information from './Information'


const useStyles = makeStyles({
    container:{
        padding:10,
        background: '#445A6F'
    },input:{
        color: '#fff',
        marginRight: 15
    },
    button:{
        width: 150,
        height: 40,
        background: '#e67e22',
        color:'#fff',
        marginTop: 5
    }
})

const Form = () => {
    const classes = useStyles();
    const [data,getWeatherdata] = useState()
    const [city,setCity] = useState('mumbai')
    const [country,setCountry] = useState('IN')
    const [click,handleClick] = useState(false)

    useEffect(() => {
         const getWeather = async()=>{
        city && await getData(city,country).then(response=>{
            getWeatherdata(response.data)
            console.log(response.data)
        
        })
    }
    
    getWeather() 
    handleClick(false)  
    },[click])

    const handleCityChange = (value)=>{
        setCity(value)
    }

    const handleCountryChange  = (value)=>{
        setCountry(value)
    }


    return (
        <React.Fragment>
            <Box classsName={classes.container}>
                <TextField 
                InputProps={{className: classes.input}}
                onChange={(e)=> handleCityChange(e.target.value)}
                label= 'city'
                className = {classes.input}/>

                <TextField 
                InputProps={{className: classes.input}}
                onChange = {(e)=>handleCountryChange(e.target.value)}
                label = 'country'
                className={classes.input}
                />

                <Button
                variant = 'contained'
                onClick={()=>handleClick(true)}
                className={classes.button}>
                    Get Weather</Button>
            </Box>
            <Information data={data}/>
        </React.Fragment>
    )
}

export default Form



