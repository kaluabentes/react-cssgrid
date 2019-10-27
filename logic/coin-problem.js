const range = (number) => Array(number).fill(0).map((_, index) => index + 1)

const getEuros = (euro) => {
  if (euro < 2 && euro > 0) {
    return [1]
  }

  let outputArr = []
  const twoCoinCount = Math.trunc(euro / 2)

  for (i = 0; i < twoCoinCount; i++) {
    outputArr.push(2)
  }

  if ((euro / 2) % 2 !== 0) {
    outputArr.push(1)
  }

  return outputArr
}

const getCents = (cent) => {
  const sequenceTail = [
    [0.01],
    [0.02],
    [0.02, 0.01],
    [0.02, 0.02],
    [0.05],
    [0.05, 0.01],
    [0.05, 0.02],
    [0.05, 0.02, 0.1],
    [0.05, 0.04],
  ]

  const getRightNumber = (number) => String(number).split('')[1]

  const reduceCoinMap = (prev, curr) => {
    if (curr < 10) {
      return {
        ...prev,
        [curr]: sequenceTail[curr - 1]
      }
    }

    if (curr === 10) {
      return {
        ...prev,
        [curr]: [0.10],
      }
    }

    if (curr === 20) {
      return {
        ...prev,
        [curr]: [0.20],
      }
    }

    if (curr === 50) {
      return {
        ...prev,
        [curr]: [0.50],
      }
    }

    if (curr < 20 && curr > 10) {
      return {
        ...prev,
        [curr]: [0.10, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 30 && curr > 20) {
      return {
        ...prev,
        [curr]: [0.20, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 40 && curr > 30) {
      return {
        ...prev,
        [curr]: [0.30, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 50 && curr > 40) {
      return {
        ...prev,
        [curr]: [0.20, 0.20, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 60 && curr > 50) {
      return {
        ...prev,
        [curr]: [0.50, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 70 && curr > 60) {
      return {
        ...prev,
        [curr]: [0.50, 0.10, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 80 && curr > 70) {
      return {
        ...prev,
        [curr]: [0.50, 0.20, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 90 && curr > 80) {
      return {
        ...prev,
        [curr]: [0.50, 0.20, 0.10, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    if (curr < 100 && curr > 90) {
      return {
        ...prev,
        [curr]: [0.50, 0.20, 0.20, ...sequenceTail[getRightNumber(curr) - 1]]
      }
    }

    return prev
  }

  const coinMap = range(99).reduce(reduceCoinMap, {})

  return coinMap[cent]
}

const giveChange = (money) => {
  const chashier = [
    0.01, 
    0.02, 
    0.05, 
    0.10, 
    0.20, 
    0.50, 
    1, 
    2
  ]
  const change = []
  const euro = Math.trunc(money)
  const cent = money.split('.')[1]
  const euros = getEuros(euro)
  const cents = getCents(cent)

  return [...euros, ...cents]
}

console.log(giveChange(process.argv.slice(2)[0]))
