function greening(input) {
    let totalArea = Number(input[0])
    let priceSquareMeter = 7.61;
    let price = totalArea * priceSquareMeter;
    let discount = price * 0.18;    // .toFixed(2)
    let total = price - discount;   // .toFixed(2)
    console.log(`The final price is: ${total} lv.\nThe discount is: ${discount} lv.`)
}

greening(["550"])
