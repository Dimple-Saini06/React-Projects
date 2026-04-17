import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}) {
    let IMAGE_URL = "https://images.unsplash.com/photo-1719958805412-046289afa93e?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='InfoBox'>
            <h1>
                Weather Info
            </h1>
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMAGE_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
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