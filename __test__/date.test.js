
import { numberOfDays } from '../src/client/js/date'
describe('Testing date function', () => {

 test('Check the number of Days between two date', () => {
  expect(numberOfDays('2023-03-29', '2020-04-7')).toBe(5)
 })

 let today = '2020-02-15'
 test('Check numberOfDays from today to next date', () => {
  expect(numberOfDays(today, '2023-03-29')).toBe(34)
 })

})