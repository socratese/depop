const axios = require('axios')
const cheerio = require('cheerio')

let validITEMS = []


let account = {
    "USERNAME":"joesephh",
    "PASSWORD":"test"
}

const params = {
    "what":"yeezy",
    "country":"gb",
    "offset_id":"MnwyNHwxNjEyMjY4NjU1",
    "limit":"10"
}

const Filter = {
    "min":"10",
    "max":"400",
    "condition":"new"
}

const url = `https://webapi.depop.com/api/v1/search/?what=${params.what}&country=${params.country}&offset_id=${params.offset_id}&limit=${params.limit}`

axios.get(url).then(response => {
    response.data.products.forEach(function(item){
        const ITEM_PRICE = (item.price.price_amount)
        if (ITEM_PRICE > Filter.min && ITEM_PRICE < Filter.max) {
            
            
            let product = {
                msg: 'NEW ITEM ADDED TO CART',
                link: `https://www.depop.com/products/${item.slug}`,
                title: item.slug,
                time: Date.now(),
                price: item.price.price_amount + item.price.currency_symbol,
                status: item.status
            }
  
            validITEMS.push(product)
            console.log(validITEMS)
        }
    })
})