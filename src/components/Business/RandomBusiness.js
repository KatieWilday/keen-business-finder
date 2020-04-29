export const getRandom = items => {
    let randomBusiness = items[Math.floor(Math.random()*items.length)];

    return randomBusiness

}
