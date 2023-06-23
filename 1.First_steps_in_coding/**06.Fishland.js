function prices(input) {
    let priceSkumriaKg = Number(input[0]);
    let priceCacaKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let pricePalamudKg = 1.6 * priceSkumriaKg
    let priceSafridKg = 1.8 * priceCacaKg
    let priceMidiKg = 7.5

    let total = pricePalamudKg * palamudKg + priceSafridKg * safridKg + priceMidiKg * midiKg

    console.log(total.toFixed(2))
}   

prices(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"])
