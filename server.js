import express from 'express';
import fs from 'fs';
import { populateData } from './data/populateData.js';
import { getAllMentors } from './api/completeList.js';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on: ' + port);

app.get('/', async function (req, res) {
    let data = await populateData('./data/mentor_data.json');
    data = JSON.parse(data);
    res.json({
        'total': data['mentor_data'].length,
        'result': data['mentor_data'],
    })
});

app.get('/refresh', async function (req, res) {
    let result = await getAllMentors();
    fs.writeFileSync("data/mentor_data.json", `{"mentor_data" : ${JSON.stringify(result)}}`);
    res.json({
        'message': 'Refresh successful',
        'total': result.length,
        'result': result,
    })
});

app.get('/getdata', async function (req, res) {
    let data = await populateData('./data/mentor_data.json');
    data = JSON.parse(data);
    let len = data['mentor_data'].length;

    let offset = req.query.offset ? parseInt(req.query.offset) : 10;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    data['mentor_data'] = data['mentor_data'].slice(offset, offset + limit);

    res.json({
        'message': `Data retrieved successfully. (Out of ${len - 1} indexed from 0.)`,
        'total': data['mentor_data'].length,
        'result': data['mentor_data'],
    })
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

