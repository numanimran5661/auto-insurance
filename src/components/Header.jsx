import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <Stack direction='row' alignItems='start' justifyContent='space-between' pt={4} pb={1} px={3} sx={{ background: '#c5c5c9'}}>
      <Typography variant='h3' width='40%' fontWeight='bold' color='#5273F9'>Auto Insurance</Typography>
      <Box width='60%'>
        <SearchBar />
      </Box>
    </Stack>
  )
}

export default Header