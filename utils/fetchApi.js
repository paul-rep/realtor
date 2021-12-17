import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
     'x-rapidapi-host': 'bayut.p.rapidapi.com',
     'x-rapidapi-key': '50588c2f16msh89cb977ee55f57bp1a29c4jsn3d022adeb618'
   },
  });
    
  return data;
}