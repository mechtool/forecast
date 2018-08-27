const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
// 6f0fd351626fa2fd2fb723be500cd35a service openweathermap.org/api_keys
// yandex '68caf8fa-efaa-4c36-8541-65f5543b2adc'

const apiKey = '6f0fd351626fa2fd2fb723be500cd35a';

app.use(cors({ origin: true }));
app.get('/apiKey', (request, response)=>{
	response.send({apiKey : apiKey});
});
exports.apiKey = functions.https.onRequest(app);
// });
