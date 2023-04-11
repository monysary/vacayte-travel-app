import {
    Box,
    Grid
} from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../App.js'

function CreateItinerary({ font, fontColor, isDisplayed, lazyStartDate, lazyEndDate }) {
    // Get range of dates based on start and end date
    const getDates = (startDate, endDate) => {
        const dates = [];
        let currentDate = startDate;
        const weekday = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]

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
            dates.push(`${currentDate}, ${weekday[new Date(currentDate).getDay()]}`)
            currentDate = getNextDay(currentDate)
        }

        return dates
    }

    const vacayteDates = getDates(lazyStartDate, lazyEndDate)

    function DateEntry({ date }) {
        return (
            <Grid item sx={{
                backgroundColor: '#F5F5F5',
                borderRadius: '20px',
                padding: '10px 20px',
            }}>
                {date}
            </Grid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                marginX: '40px',
                paddingBottom: '40px',
                display: isDisplayed.createItinerary ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '20px',
            }}>
                {vacayteDates.map((date) =>
                    <DateEntry
                        key={date}
                        date={date}
                    />
                )}
            </Box>
        </ThemeProvider>
    )
}

export default CreateItinerary;