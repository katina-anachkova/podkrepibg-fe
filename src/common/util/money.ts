import { i18n } from 'next-i18next'

/**
 * Format money amounts
 *
 * @param number number
 * @param currency string
 * @param divisionFactor number @default 100
 * @returns string
 */
export const money = (number: number, currency = 'BGN', divisionFactor = 100) => {
  return new Intl.NumberFormat(i18n?.language || 'bg-BG', { style: 'currency', currency }).format(
    number / divisionFactor,
  )
}

export const moneyPublic = (number: number, currency = 'BGN', divisionFactor = 100) => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(number / divisionFactor)

  if (currency === 'EUR') {
    return `€${amount}`
  }
  if (currency === 'USD') {
    return `$${amount}`
  }
  return `${amount} лв.`
}

/**
 * Used for formatting a number into internal Money value
 *
 * @param number number
 * @param currency string
 * @param divisionFactor number @default 100
 * @returns number
 */

export const toMoney = (number: number, currency = 'BGN', divisionFactor = 100): number => {
  return number * divisionFactor
}

/**
 * Used for formatting Money to a number for display
 *
 * @param number number
 * @param currency string
 * @param divisionFactor number @default 100
 * @returns number
 */
export const fromMoney = (number: number, currency = 'BGN', divisionFactor = 100): number => {
  return number / divisionFactor
}
