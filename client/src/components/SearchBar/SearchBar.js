import {
    Box,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('Search activities');
    }

    return (
        <Box component='form' onSubmit={handleFormSubmit}>
            <TextField
                fullWidth
                placeholder='Search activities...'
                sx={{
                    borderRadius: '24px',
                    backgroundColor: '#F5F5F5',
                    opacity: '0.4'
                }}
                InputProps={{
                    startAdornment: <SearchIcon />,
                    style: {
                        borderRadius: '24px'
                    }
                }}
                inputProps={{
                    style: {
                        padding: '10px',
                        borderRadius: '24px'
                    }
                }}
            />
        </Box>
    )
}

export default SearchBar;