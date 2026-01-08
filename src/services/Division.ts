import { getRandomInt } from './Util'
import _ from 'lodash'
import type { MathType } from '@/types/MathType.ts'

export function division(size: number, min: number, max: number): MathType[] {
  return _.map(_.range(size), () => div(min, max))
}

function div(lowerBound: number, upperBound: number): MathType {
  const secondNumber = getRandomInt(lowerBound, upperBound)
  const answer = getRandomInt(lowerBound, upperBound)
  const firstNumber = secondNumber * answer

  return {
    firstNumber,
    secondNumber,
    operator: '/',
    answer: answer,
  } as MathType
}
