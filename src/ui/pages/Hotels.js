// Core
import {useSelector} from 'react-redux';
// Parts
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Engine
import { selectorHotels } from '../../engine/core/hotels/selectors';


function Hotels(){
    const hotels = useSelector(selectorHotels.items);
    return (
            (<Container sx={{marginTop: 3, width: 1200, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {hotels.map((hotel) => (
                <Card key={hotel.id} sx={{ width: '320px', height: 210,  border: '1px solid', borderColor: 'primary.main', margin: 1, position: 'relative' }}>
                    <CardContent>
                        
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }} component={'h1'}>
                        {hotel.name}
                        </Typography>
                        
                        
                        <Typography sx={{fontSize: '16'}} component={'h4'}>
                        {hotel.address}
                        </Typography>

                        <br></br>

                        {
                            hotel.phone_number ?
                            <Typography component={'h6'} sx={{fontSize: '14px', fontWeight: 600}}>
                            +{hotel.phone_number}
                            </Typography> : 
                            ''
                        }

                        <Box sx={{position: 'absolute', bottom: 0, width: '294px'}}>
                            
                            <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                                <Typography variant="body2">
                                {hotel.city}
                                </Typography>

                                <Box sx={{display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{}} variant="h5" component="h5">
                                    {hotel.hotel_rating} 
                                    </Typography>
                                    <StarIcon sx={{color: 'primary.main', fontSize: '30px'}}/>
                                </Box>
                                

                            </Box>

                        </Box>

                        
                    </CardContent>
                </Card>
            ))}
            
        </Container>)
    )
}
export default Hotels