const axios = require('axios');

async function greeting() {
    try {
        const res = await axios.get('http://localhost:8000/users');
        const resBody = res.data;
        console.log(resBody);
    }
    catch(e) {
        console.log(e);
    }
}

greeting();