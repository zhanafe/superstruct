import { struct } from '../../..'

export const Struct = struct('number?')

export const data = 'invalid'

export const error = {
  type: 'number | undefined',
  value: 'invalid',
  path: [],
}
