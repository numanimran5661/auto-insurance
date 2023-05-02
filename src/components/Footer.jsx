import { Box, Link, Stack, Typography } from '@mui/material'
import { CopyrightOutlined } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-around' position='fixed' bottom='0' sx={{ background: '#5273F9', m: 0, width: '100%', color: '#fff', p: 2}}>
            <Box>
                <Stack direction='row'>
                    <CopyrightOutlined fontSize='12px'/>
                    <Typography variant='body2' sx={{marginLeft: '2px', fontSize: '12px'}}>
                        2023
                    </Typography>
                    <Typography variant='body2' ml={2} fontSize='12px'>Auto Insurance - All Rights Reserved</Typography>
                </Stack>
            </Box>
            <Box>
                <Stack direction='row'>
                    <Link color='#fff' sx={{ textDecoration: 'none', fontSize: '12px'}}>Privacy Policy</Link>
                    <Link color='#fff' sx={{ textDecoration: 'none', fontSize: '12px', ml: '10px'}}>Cookies Policy</Link>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Footer