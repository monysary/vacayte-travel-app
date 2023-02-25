import { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';

import auth from '../../utils/auth.js';

function RightPanel({ font, fontColor, saveActivityState }) {
    
    function CustomizedAccordions({ activityName, activitySaved }) {
        console.log(activitySaved);
        const [expanded, setExpanded] = useState('');

        const handleChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

        return (
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0px' } }}>
                <AccordionSummary
                    sx={{ maxHeight: '48px', '&.Mui-expanded': { minHeight: '0px' } }} >
                    <Grid container wrap='nowrap' justifyContent='space-between' alignItems='center'>
                        <Typography fontSize='20px' fontFamily={font} color={fontColor.primary}>
                            {activityName}
                        </Typography>
                        <ExpandMoreIcon sx={{
                            transform: expanded === 'panel1' ? 'rotate(180deg)' : 'none',
                            color: fontColor.primary,
                            transition: 'transform 0.2s ease-in-out'
                        }} />
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0 16px', }} >
                    {activitySaved.map((activity) => {
                        return (
                            <Grid key={activity.businessID} container wrap='nowrap' justifyContent='space-between'>
                                <Grid item>
                                    <Link
                                        fontSize='16px'
                                        fontFamily={font}
                                        color={fontColor.link}
                                        underline='hover'
                                        sx={{ '&:hover': { cursor: 'pointer' } }}
                                        onClick={() => window.open(`${activity.businessURL}`, '_blank')}
                                    >
                                        {activity.businessName}
                                    </Link>
                                    <Typography
                                        fontSize='12px'
                                        fontFamily={font}
                                        color={fontColor.grey}
                                    >{activity.businessCategory}</Typography>
                                </Grid>
                                <Typography
                                    fontSize='16px'
                                    fontFamily={font}
                                >{activity.businessRating}★</Typography>
                            </Grid>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction='column'
                wrap='nowrap'
                alignItems='center'
                py='30px'
                gap='30px'
                height='100vh'
                overflow='auto'
            >
                <Grid item height='60px'>
                    <Grid container height='100%' alignItems='center'>
                        <Button variant='outlined' onClick={() => auth.logout()}>
                            Logout
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container p='20px 0px' gap='20px'>
                        <Grid item px='30px'>
                            <Typography variant='h6' fontFamily={font} fontSize='18px'>
                                SAVED ACTIVITIES
                            </Typography>
                        </Grid>
                        <Grid item mx='30px' height='2px' width='100%' sx={{ backgroundColor: '#DFDFDF' }} />
                        <Grid item xs={12}>
                            {saveActivityState.map((activity) =>
                                <CustomizedAccordions
                                    key={activity.name}
                                    activityName={activity.name}
                                    activitySaved={activity.saved}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default RightPanel;