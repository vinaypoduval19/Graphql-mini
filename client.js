const axios = require('axios');

async function greeting() {
    try {
        const res = await axios.post('http://localhost:9000',{
            query: `
                query {
                    users {
                        id
                        first_name
                        last_name
                    }
                }
            `
        },
        {
            headers: {
                "content-type": "application/json"
            }
        });
        const resBody = res.data;
        console.log(resBody);
    }
    catch(e) {
        console.log(e);
    }

    // const res = await axios.get('http://localhost:8000/users');
    // console.log((res.data[0]));
}

greeting();