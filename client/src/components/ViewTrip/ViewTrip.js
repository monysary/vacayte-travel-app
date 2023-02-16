import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

function ViewTrip({ font, fontColor, isDisplayed, setIsDisplayed }) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                marginX: '40px',
                display: isDisplayed.viewTrip ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Grid item
                    sx={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: '20px',
                        padding: '10px 20px'
                    }}
                >
                    <Typography component="h2" variant="h5" fontFamily={font}>
                        Trip Information
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: '20px',
                        padding: '10px 20px'
                    }}
                >
                    <Typography component="h2" variant="h5" fontFamily={font}>
                        Trip Information
                    </Typography>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default ViewTrip;