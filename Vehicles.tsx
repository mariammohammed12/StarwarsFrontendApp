import { Card, CardContent, Typography } from '@mui/material'

interface VehicleCardProps {
    vehicle: VehiclesType
}
const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}

        >
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {vehicle.name}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Model: {vehicle.model}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Manufacturer: {vehicle.manufacturer}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Cost In Credits: {vehicle.cost_in_credits}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Length: {vehicle.length}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Crew: {vehicle.crew}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Passengers: {vehicle.passengers}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                    Cargo Capacity: {vehicle.cargo_capacity}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VehicleCard