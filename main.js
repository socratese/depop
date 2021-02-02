const axios = require('axios')
const cheerio = require('cheerio')




let account = {
    "USERNAME":"joesephh",
    "PASSWORD":"test"
}

const params = {
    "what":"nike offwhite",
    "country":"gb",
    "offset_id":"MnwyNHwxNjEyMjY4NjU1",
    "limit":"3"
}

const priceFilter = {
    "min":"25",
    "max":"170"
}

const url = `https://webapi.depop.com/api/v1/search/?what=${params.what}&country=${params.country}&offset_id=${params.offset_id}&limit=${params.limit}`

axios.get(url).then(response => {
    response.data.products.forEach(function(item){
        console.log(item.id)
    })
})