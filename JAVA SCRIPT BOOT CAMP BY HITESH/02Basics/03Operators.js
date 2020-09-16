// a + ((b * c) / d) * e

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log('Discount percentage is : ' + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage);

var result = listingPrice > sellingPrice;

console.log(typeof result);
