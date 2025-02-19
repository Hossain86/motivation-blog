import axios from 'axios';

const API_KEY = '1348d56ff4msh121918499651f72p142501jsn788d74792d54';
const API_HOST = 'real-time-news-data.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const getTechNews = async () => {
  try {
    const response = await apiClient.get('/topic-news-by-section', {
      params: {
        topic: 'TECHNOLOGY',
        section: 'CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE',
        limit: '10',
        country: 'US',
        lang: 'en',
      },
    });

    console.log("API Response:", response.data); // Log response
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
