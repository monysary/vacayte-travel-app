import {
    Box,
} from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../App.js'

function CreateItinerary({ font, fontColor, isDisplayed, lazyStartDate, lazyEndDate }) {
    const getDates = (startDate, endDate) => {
        const dates = [];
        let currentDate = startDate

        const getNextDay = (currentDate) => {
            const convertedDate = new Date(currentDate)
            const date = convertedDate.setDate(convertedDate.getDate() + 1)
            return new Date(date).toLocaleDateString('en-us', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
            })
        }

        for (let i = new Date(startDate); i <= new Date(endDate); i.setDate(i.getDate() + 1)) {
            dates.push(currentDate)
            currentDate = getNextDay(currentDate)
        }

        return dates
    }

    console.log(getDates(lazyStartDate, lazyEndDate))

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: isDisplayed.createItinerary ? 'flex' : 'none',
                marginX: '40px',
                paddingBottom: '40px',
            }}>
                {lazyStartDate} - {lazyEndDate}
            </Box>
        </ThemeProvider>
    )
}

export default CreateItinerary;