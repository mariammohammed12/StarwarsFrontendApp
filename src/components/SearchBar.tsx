import React, { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import { Search, StyledInputBase } from './StyledComponent';
import SearchIcon from '@mui/icons-material/Search';

import { Box } from '@mui/material';

interface SearchBarProps {
    onSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = () => {
        if (searchValue !== 'starships' && searchValue !== 'films' && searchValue !== 'vehicles') {
            alert('Invalid input please search for films, starships, or vehicles.');
            return;
        }

        onSearch(searchValue.toLowerCase());
        setSearchValue('');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Search>
                <SearchIcon sx={{ height: '90%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SearchIcon />
                </SearchIcon>
                <StyledInputBase
                    placeholder='Enter films, starships, or vehicles'
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange} 
                    sx={{ color: '#FFFFFF' }}
                />
            </Search>
            <Button variant='contained' sx={{
                backgroundColor: '#FDED0D', color: '#1D1D20', '&:hover, &.Mui-focusVisible': {
                    backgroundColor: '#FDF149',
                    color: '#1D1D20'
                }
            }} onClick={handleSearch}>Search</Button>
        </Box>
    );
}

export default SearchBar;


