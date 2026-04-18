import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';

export default function InfoBox({info}) {
    let IMAGE_URL = "https://images.unsplash.com/photo-1719958805412-046289afa93e?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL = "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?a=1&b=1&s=612x612&w=0&k=20&c=pOpURENydDZZMKvr5BXEs2d-xv8_TaOu7TQ7M85jweo=";
    let COLD_URL = "https://images.unsplash.com/photo-1611810798133-33a924d91c58?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1634750016464-46f186b23443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyJTIwaW1nfGVufDB8fDB8fHww";
    
    
    return (
        <div className='InfoBox'>
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={info.humidity > 80 ? 
                        RAIN_URL : 
                        info.temp > 15 ? HOT_URL : 
                        COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? 
                        <ThunderstormRoundedIcon/> : 
                        info.temp > 15 ? <WbSunnySharpIcon/> : 
                        <AcUnitRoundedIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Pressure = {info.pressure}</p>
                    <p>The weather can be describe <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}