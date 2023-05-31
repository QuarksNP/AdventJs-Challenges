function distributeGifts(packOfGifts, reindeers) {

    const weight = (elements) => {

        let maxWeight = 0

        elements.map(elem => maxWeight += elem.length)

        return maxWeight
    }

    const maxDelivery = Math.floor(weight(reindeers) * 2 / weight(packOfGifts)) 

    return maxDelivery

  }

  console.log(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))