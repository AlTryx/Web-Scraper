const axios = require('axios');
const PORT = 8000
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://www.thegurdian.com/uk'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)    
        const articles = []
        
        $('.fc-item__title', html).each(function() {
            const title1 = $(this).text()
            const url1 = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })

        console.log(articles)
    }).catch(err => console.log(error))


app.listen(PORT, () => console.log (`server running on PORT ${PORT} `))

