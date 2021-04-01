import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
            'Bearer TjNWsVepop58S3nl-KEoxJeTZVZ2h0IejpIyjxz2UNYVf-osLh-NcX5xv9CxZ5eLagosp6Dz7ncipDRu6Ydl0-iXQkqm3S9jyQiFEeRRyRRT76keP7_F-6HGiLZhYHYx'
    }
});


