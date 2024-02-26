import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';


const SortBy: React.FC<any> = ({ handleChange }: { handleChange: any }) => {

    return (
        <Box marginTop='30px' marginBottom='30px' sx={{ border: '#fff' }}>
            <FormControl sx={{ width: '30%', border: '#fff' }}>
                <InputLabel variant='standard' id='sort-by-label' sx={{ color: '#ffffff', border: '#fff' }}>Sort By</InputLabel>
                <Select
                    labelId='sort-by-label'
                    id='sort-by'
                    label='Sort By'
                    fullWidth={true}
                    onChange={handleChange}
                    sx={{ color: '#ffffff', border: '#fff' }}
                >
                    <MenuItem value='title'>Title</MenuItem>
                    <MenuItem value='name'>Name</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortBy;

