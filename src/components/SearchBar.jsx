import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';

const SearchBar = () => {
    return (
        <Stack mb={4}>
            <form className='input-group'>
                <input type="text" style={{ outline: 'none', borderRight: '1px solid black'}} className='border-0 px-5 py-3 w-25 shadow' placeholder="Search..."/>
                    <select className='border-0 px-5 py-3 w-25 shadow' style={{ outline: 'none', appearance: 'none'}}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                    </select>
                    <button type="button" className='border-0 px-2 bg-danger shadow'><SearchIcon sx={{color: 'white', fontSize: '40px'}}/></button>
            </form>
        </Stack>
    )
}

export default SearchBar