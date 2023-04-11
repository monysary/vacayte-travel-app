import {
    Box,
} from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../App.js'

function CreateItinerary({ font, fontColor, isDisplayed }) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: isDisplayed.createItinerary ? 'flex' : 'none',
                marginX: '40px',
                paddingBottom: '40px',
            }}>
                Hello
            </Box>
        </ThemeProvider>
    )
}

export default CreateItinerary;