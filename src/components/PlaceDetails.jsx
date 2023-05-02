import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'google-maps-react';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';

function PlaceDetails(props) {
    const [place, setPlace] = useState(null);
    const [location, setLocation] = useState('');
    useEffect(() => {
        const request = {
            placeId: props.placeId,
            // fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours', 'website','reviews'],
            key: process.env.REACT_APP_API_KEY,
        };

        const service = new window.google.maps.places.PlacesService(document.createElement('div'));

        service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log(place.geometry.location);
                setPlace(place);
                setLocation(place.geometry.location);
                console.log(place);
            }
        });
    }, []);

    return (
        <>
            <Stack direction='row' justifyContent='flex-end' my={3} mx={0} sx={{ width: '70%' }}>
                <div style={{ width: "45%" }} className='place-details__box'>
                    {place && (
                        <div>
                            <Typography variant='h4' mb={1} fontWeight='bold'>{place.name}</Typography>
                            <Typography variant='h5' mb={1} fontWeight='light'>{place.formatted_address}</Typography>
                            <Button>
                                <Stack direction='row' justifyContent='center' alignItems='center' color='#F32013' sx={{ border: '2px solid #F32013', padding: '10px 15px', borderRadius: '50px' }}>
                                    <PhoneInTalkOutlinedIcon />
                                    <Typography ml='5px' fontWeight='bold' fontSize='18px'>{place.formatted_phone_number}</Typography>
                                </Stack>
                            </Button>
                            {place.opening_hours && (
                                <div>
                                    <h3>Opening Hours:</h3>
                                    <ul style={{ listStyle: 'none' }}>
                                        {place.opening_hours.weekday_text.map((day, index) => (
                                            <li key={index} style={{ color: '#989898', borderTop: '1px solid #A0A0A0', padding: '10px 0', fontSize: '18px' }}>{day}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {/* <p><b>Rating: {place.rating}</b></p>
                        <h2>Reviews</h2>
                        {place.reviews && place.reviews.map(review => (
                            <div key={review.author_name}>
                                <h3>{review.author_name}</h3>
                                <p>{review.text}</p>
                            </div>
                        ))}
                        {place.website && (
                            <div>
                                <h3>Website</h3>
                                <a href={place.website} target="_blank" rel="noreferrer">{place.website}</a>
                            </div>
                        )} */}
                        </div>
                    )}
                </div>
                <Stack direction='row' sx={{ width: "45%", marginLeft: '4rem' }} className='map-container'>
                    <Map google={window.google} style={{ width: '1100px', height: '650px' }} zoom={14} center={location || { lat: 37.7749, lng: -122.4194 }}>
                        {location && <Marker position={location} />}
                    </Map>
                </Stack>
            </Stack>
            <Stack mt={9}>
                <Stack direction='row' alignItems='center' justifyContent='space-around' py={7} mx='auto' sx={{ width: '90%', borderTop: '2px solid #c0c0c0' }}>
                    <Box>
                        <Typography variant='h4' mb={2} fontWeight='bold'>Description</Typography>
                        <Typography variant='body1' fontWeight='light' fontSize='18px'>
                            Auto insurance basically provides financial benefits against physical damage of vehicle and also covers bodily injuries. In the highly populated countries like Pakistan traffic accidents are part of daily routine. So that’s why car insurance become necessary for everyone. In this hustle and bustle situation to deal with such conditions every driver who is on road need motor insurance for the coverage of his vehicle damage and personal accidents.
                        </Typography>
                    </Box>
                    <Box>
                        <img src={place?.photos ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${place.geometry.location.lat()},${place.geometry.location.lng()}&key=${process.env.REACT_APP_API_KEY}` : ''} style={{ width: '200px', marginLeft: '90px' }} alt="icon" />
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}

export default PlaceDetails;
