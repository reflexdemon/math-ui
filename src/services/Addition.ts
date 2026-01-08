import { getRandomInt } from './Util'
import _ from 'lodash'
import type { MathType } from '@/types/MathType.ts'

export function addition(size: number, min: number, max: number): MathType[] {
  return _.map(_.range(size), () => add(min, max))
}

function add(lowerBound: number, upperBound: number): MathType {
  const firstNumber = getRandomInt(lowerBound, upperBound)
  const secondNumber = getRandomInt(lowerBound, upperBound)
  return {
    firstNumber,
    secondNumber,
    operator: '+',
    answer: firstNumber + secondNumber,
  } as MathType
}
