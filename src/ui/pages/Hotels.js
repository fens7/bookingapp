// Core
import {useSelector} from 'react-redux';
// Parts
import Container from '@mui/material/Container';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// Engine
import { selectorHotels } from '../../engine/core/hotels/selectors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Hotels(){
    const hotels = useSelector(selectorHotels.items);
    return (
        <Container sx={{width: 1200, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {hotels.map((hotel) => (
                <Card key={hotel.id} sx={{ width: '30%', height: 190,  border: '1px solid', borderColor: 'primary.main', margin: 1, position: 'relative' }}>
                    <CardContent sx={{}}>
                        
                        <Typography sx={{ fontSize: 22 }} component={'h1'}>
                        {hotel.name}
                        </Typography>
                        
                        
                        <Typography>
                        {hotel.address}
                        </Typography>

                        <Box sx={{position: 'absolute', bottom: 0, width: '100%'}}>
                            
                            <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography variant="body2">
                                {hotel.city}
                                </Typography>

                                <Typography sx={{display: 'flex', alignItems: 'center', }} variant="h5" component="h5">
                                {hotel.hotel_rating} 
                                <StarBorderIcon sx={{color: 'primary.main', fontSize: '30px'}}/>
                                </Typography>
                            </Box>

                        </Box>

                        
                    </CardContent>
                </Card>
            ))}
            
        </Container>
    )
}
export default Hotels