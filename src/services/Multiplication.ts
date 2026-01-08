import { getRandomInt } from './Util'
import _ from 'lodash'
import type { MathType } from '@/types/MathType.ts'

export function multiplication(size: number, min: number, max: number): MathType[] {
  return _.map(_.range(size), () => mul(min, max))
}

function mul(lowerBound: number, upperBound: number): MathType {
  let firstNumber = getRandomInt(lowerBound, upperBound)
  let secondNumber = getRandomInt(lowerBound, upperBound)
  if (firstNumber < secondNumber) {
    //swap
    const temp = firstNumber
    firstNumber = secondNumber
    secondNumber = temp
  }
  return {
    firstNumber,
    secondNumber,
    operator: '*',
    answer: firstNumber * secondNumber,
  } as MathType
}
