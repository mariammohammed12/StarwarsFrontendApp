import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SortBy from '../components/SortBy';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilmData from '../components/data.json';
import StarshipsData from '../components/data.json';
import VehiclesData from '../components/data.json';
import { Button } from '@mui/material';
import Films from '../components/Films';
import Vehicles from '../components/Vehicles';
import Starships from '../components/Starships';

const Result = () => {

    const { searchValue } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [films, setFilms] = useState<FilmType[]>([]);
    const [starships, setStarships] = useState<StarshipsType[]>([]);
    const [vehicles, setVehicles] = useState<VehiclesType[]>([]);

    useEffect(() => {
        if (searchValue !== 'starships' && searchValue !== 'films' && searchValue !== 'vehicles') {
            alert('Wrong value inputed. Either search for starships, films or vehicles');
            return;
        }


        if (searchValue.toLowerCase() === 'films') {
            const allFilms = FilmData.films as FilmType[];
            setFilms(allFilms);
            setIsLoading(false);
            return;
        }

        if (searchValue.toLowerCase() === 'starships') {
            const allStarships = StarshipsData.starships as unknown as StarshipsType[];
            setStarships(allStarships);
            setIsLoading(false);
            return;
        }

        if (searchValue.toLowerCase() === 'vehicles') {
            const allVehicles = VehiclesData.vehicles as unknown as VehiclesType[];
            setVehicles(allVehicles);
            setIsLoading(false);
        }
    }, [searchValue]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (searchValue === 'films') {
            const sortedData = [...films].sort((a, b) => a.title.localeCompare(b.title));
            setFilms(sortedData);
            return;
        }
        if (searchValue === 'starships') {
            const sortedData = [...starships].sort((a, b) => a.name.localeCompare(b.name));
            setStarships(sortedData);
            return;
        }


        if (searchValue === 'vehicles') {
            const sortedData = [...vehicles].sort((a, b) => a.name.localeCompare(b.name));
            setVehicles(sortedData);
        }
    }

    return (
        <Box sx={{ p: 8 }}>
            <Typography sx={{ color: '#ffffff', fontSize: '30px', my: 4 }} >Search Results</Typography>
            <Link to='/'>
                <Button sx={{ border: 'solid 2px #FDED0D', borderRadius: '10px', px: 4, py: 1, color: '#ffffff',  }}>
                    Back to Home
                </Button>
            </Link>

            {
                (starships.length > 0 || films.length > 0 || vehicles.length > 0) && <SortBy handleChange={handleSelectChange} />
            }

            <div className='card-container'>
            {films.length > 0 && films.map((film, i) => (
                    <Films film={film} key={i} />
                ))}
                {starships.length > 0 && starships.map((starship, i) => (
                    <Starships starship={starship} key={i} />
                ))}
                {vehicles.length > 0 && vehicles.map((vehicle, i) => (
                    <Vehicles key={i} vehicle={vehicle} />
                ))}
               
            </div>
        </Box>
    )
}

export default Result;