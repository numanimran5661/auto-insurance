import React from "react";
import { Link, useParams } from "react-router-dom";
import { City, State } from 'country-state-city';
import { Box, Button, Stack, Typography } from '@mui/material'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
const Cities = () => {
    let { stateCode } = useParams();
    const { name: StateName } = State.getStateByCodeAndCountry(stateCode, 'US');
    const cities = City.getCitiesOfState('US', stateCode);
    return (<>
        <div>
            <Box sx={{ boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)', margin: 'auto' }} p={3} maxWidth='500px'>
                <Stack direction='column'>
                    <Typography variant='h4' fontWeight='bold' textAlign='center' pb={3}>{StateName} Auto Insurance Quote</Typography>
                    <Typography variant='body1' color='#585858' fontWeight='light' textAlign='center' pb={2}>Compare Progressive, Allstate, Liberty Mutual and Nationwide(+ other top companies) to find the best and cheapest car insurance in Alabama.</Typography>
                    <Stack direction='row' position='relative' alignItems='stretch' justifyContent='center' pb={3}>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder='Zip Code'
                            sx={{ borderRadius: '5px', height: '60px', border: '2px solid #5273F9' }}
                            startAdornment={
                                <InputAdornment position="start" sx={{ ml: '5px' }}>
                                    <LocationOnIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position='end'>
                                    <Button variant="contained" sx={{ background: '#5273F9', height: '60px' }}>Get Quotes</Button>
                                </InputAdornment>
                            }
                        />
                        {/* <TextField
                        label=""
                        type="text"
                        autoComplete=""
                        sx={{ borderRadius: '5px', border: '2px solid #5273F9' }}
                    /> */}
                        {/* <Button variant="contained" sx={{ background: '#5273F9', height: '60px', position: 'absolute', right: '20%' }}>Get Quotes</Button> */}
                    </Stack>
                    <Stack direction='row' color='#585858'>
                        <VerifiedUserOutlinedIcon />
                        <Typography ml='6px'>No junk mail. No span calls. Free quotes</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
        <h1>{StateName}, Cities</h1>
        <div>
            <div className="grid-2">
                {cities.map((i, index) =>
                (<div key={index}>
                    <Link to={`/${i.stateCode}/${i.name}`} state={{ latitude: +i.latitude, longitude: +i.longitude }} className="box">{i.name}</Link>
                </div>)
                )}
            </div>
        </div>

    </>);
}

export default Cities;