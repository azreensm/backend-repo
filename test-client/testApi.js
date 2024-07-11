// testApi.js
const axios = require('axios');
const getIdToken = require('./getIdToken');

const testApi = async () => {
  const email = 'test@example.com'; // Your test user's email
  const password = 'pass123';   // Your test user's password

  try {
    const idToken = await getIdToken(email, password);

    console.log({idToken});

    // Test fetching user data
    const fetchResponse = await axios.get('http://localhost:3000/fetch-user-data', {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    });
    console.log('Fetch User Data:', fetchResponse.data);

    // Test updating user data (replace USER_ID with the actual user ID and provide update data)
    const updateResponse = await axios.put('http://localhost:3000/update-user-data/pgjSf7nQ2P7sBLOSXDP3', {
      name: 'Updated Name Test'
    }, {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    });
    console.log('Update User Data:', updateResponse.data);

  } catch (error) {
    console.error('Error making authenticated request:', error.response ? error.response.data : error.message);
  }
};

// testApi();

module.exports = testApi;
