export const getExchangeRateData = () => ({
  exchangeRates: {
    eur: {
      usd: 1.18,
      uah: 32.27,
      gbr: 0.85
    }
  }
})

export interface ExchangeRateDTO {
  exchangeRates: {
    eur: {
      usd: number,
      uah: number,
      gbr: number
    }
  }
}
