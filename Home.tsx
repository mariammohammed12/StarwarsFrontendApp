import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Searchbar from '../components/SearchBar';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (searchValue: string) => {
        if (searchValue === 'films' || searchValue === 'starships' || searchValue === 'vehicles') {
            navigate(`/result/${searchValue}`);
        } else {
            alert('Wrong value inputted. Please search for starships, films, or vehicles');
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{  backgroundColor: '#1D1D20', borderBottom: 'solid 2px #FDED0D' }}>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#FFFFFF', fontSize: '30px' }}
                    >
                        STARWARS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 6, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography variant='h3' sx={{ color: '#FFFFFF' }}>Starwars Universe</Typography>
                <Typography variant='body1' sx={{ color: '#FFFFFF' }}> This app is used to search for all things Star Wars related, the search could be used to find Films, Starships, and Vehicles.</Typography>
                <Searchbar onSearch={handleSearch} />
                <img src='/assets/starwarsicons.png' alt='Star Wars' style={{  display: 'block', margin: 'auto', width: '40%',height: '30%' }} />

            </Box>
        </Box>
    )
}

export default Home;
