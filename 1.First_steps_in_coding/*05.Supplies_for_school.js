function calculate(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);
    let pricePens = 5.8
    let priceMarkers = 7.2
    let priceCleaner = 1.2
    let total = (pricePens * pens + priceMarkers * markers + priceCleaner * cleaner) * ((100 - discount)/100)
    console.log(total);
}

calculate(["2 ","3 ","4 ","25 "])
