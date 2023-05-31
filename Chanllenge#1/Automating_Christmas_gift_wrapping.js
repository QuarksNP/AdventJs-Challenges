function wrapping(gifts) {
    
    const asterisk = '*';
    let container = '';
    let giftWrapped = [];
    
    gifts.map(g => {
    container = asterisk.repeat(g.length + 2);
    giftWrapped.push(`${container}\n*${g}*\n${container}`)
    
})  
    return giftWrapped
}
