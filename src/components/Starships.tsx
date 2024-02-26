import { Card, CardContent, Typography } from '@mui/material'

interface StarshipCardProps {
    starship: StarshipsType
}
const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => {
    return (
        <Card  sx={{ maxWidth: 400, margin: 2 }} 
        >
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
                {starship.name}
            </Typography>
            <Typography variant='body1'>
                Model: {starship.model}
            </Typography>
            <Typography variant='body1' >
                Manufacturer: {starship.manufacturer}
            </Typography>
            <Typography variant='body1'>
                Cost In Credits: {starship.cost_in_credits}
            </Typography>
            <Typography variant='body1' >
                Length: {starship.length}
            </Typography>
            <Typography variant='body1'>
                Crew: {starship.crew}
            </Typography>
            <Typography variant='body1'>
                Passengers: {starship.passengers}
            </Typography>
            <Typography variant='body1' >
                Cargo Capacity: {starship.cargo_capacity}
            </Typography>
        </CardContent>
    </Card>
    )
}

export default StarshipCard