import {
    Box,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ font, fontColor }) {
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
                    backgroundColor: `${fontColor.white}`,
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