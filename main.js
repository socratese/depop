const axios = require('axios')
const cheerio = require('cheerio')

let validITEMS = []


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
    "min":"0",
    "max":"170"
}

const url = `https://webapi.depop.com/api/v1/search/?what=${params.what}&country=${params.country}&offset_id=${params.offset_id}&limit=${params.limit}`

axios.get(url).then(response => {
    response.data.products.forEach(function(item){
        const ITEM_PRICE = (item.price.price_amount)
        if (ITEM_PRICE > priceFilter.min && ITEM_PRICE < priceFilter.max) {
            validITEMS.push(item)
            
            let product = {
                link: `https://www.depop.com/products/${item.slug}`,
                title: item.slug,
                time: Date.now(),
                price: item.price.price_amount + item.price.currency_symbol,
                status: item.status
            }
  
            console.log(product)
        }
    })
})