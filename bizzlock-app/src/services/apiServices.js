import axios from 'axios';


const API_BASE_URL = 'https://kgsearch.googleapis.com/v1/entities:search?key=AIzaSyB8WigLf8eLlQAQyN9D_0O2Qzndr22_vCA&types=organization&limit=1&indent=true&query='; // query = selectedCompany ¿? 

function getAPIcompanies(userQuery) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${userQuery}`);
      resolve(response.data);
      } catch (err) {
        reject('Error fetching');
      }
    })
}

export { getAPIcompanies }
