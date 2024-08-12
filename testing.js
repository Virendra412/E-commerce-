import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts',
  params: {
    username_or_id_or_url: 'udaypratap9981'
  },
  headers: {
    'x-rapidapi-key': 'b72617a057msh708b3b706656633p12a943jsn1038838e3101',
    'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.items[1]);
} catch (error) {
	console.error(error);
}