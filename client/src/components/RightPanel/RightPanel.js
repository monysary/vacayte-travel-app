import { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';

import auth from '../../utils/auth.js';

function RightPanel({ font, fontColor, tripData }) {

    function CustomizedAccordions() {
        const [expanded, setExpanded] = useState('');

        const handleChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

        return (
            <>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                    sx={{
                        boxShadow: 'none',
                        '&:before': {
                            display: 'none'
                        },
                    }}
                >
                    <AccordionSummary
                        sx={{
                            maxHeight: '48px',
                            '&.Mui-expanded': {
                                minHeight: '0px'
                            }
                        }}
                    >
                        <Grid container wrap='nowrap' justifyContent='space-between' alignItems='center'>
                            <Typography>Activity Category</Typography>
                            <ExpandMoreIcon
                                sx={{
                                    transform: expanded === 'panel1' ? 'rotate(180deg)' : 'none',
                                    color: fontColor.primary,
                                    transition: 'transform 0.2s ease-in-out'
                                }}
                            />
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: '0 16px',
                        }}
                    >
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </>
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
                            <CustomizedAccordions />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default RightPanel;