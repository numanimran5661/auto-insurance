import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import React from 'react'

const ZipCode = () => {
    return (
        <Box sx={{ boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)', margin: 'auto' }} p={3} maxWidth='500px'>
            <Stack direction='column'>
                <Typography variant='h4' fontWeight='bold' textAlign='center' pb={3}>Auto Insurance Quote</Typography>
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
    )
}

export default ZipCode