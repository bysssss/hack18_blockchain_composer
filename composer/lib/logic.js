/**
 * auctionCow
 * @param {com.skp.hack.Auction} auction
 * @transaction
 */
async function auctionCow(param) {
 param.cow.broker = param.broker;
 let assetRegistry = await getAssetRegistry('com.skp.hack.Cow');
 await assetRegistry.update(param.cow);
}

/**
 * tradeBeef
 * @param {com.skp.hack.Trade} trade
 * @transaction
 */
async function tradeBeef(param) {
 param.beef.restaurant = param.restaurant;
 let assetRegistry = await getAssetRegistry('com.skp.hack.Beef');
 await assetRegistry.update(param.beef);
}

