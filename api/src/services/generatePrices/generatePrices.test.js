import {
  generatePrices,
  generatePrice,
  createGeneratePrice,
  updateGeneratePrice,
  deleteGeneratePrice,
} from './generatePrices'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('generatePrices', () => {
  scenario('returns all generatePrices', async (scenario) => {
    const result = await generatePrices()

    expect(result.length).toEqual(Object.keys(scenario.generatePrice).length)
  })

  scenario('returns a single generatePrice', async (scenario) => {
    const result = await generatePrice({ id: scenario.generatePrice.one.id })

    expect(result).toEqual(scenario.generatePrice.one)
  })

  scenario('creates a generatePrice', async () => {
    const result = await createGeneratePrice({
      input: { Activity: 'String', State: 'String', Acreage: 4446276 },
    })

    expect(result.Activity).toEqual('String')
    expect(result.State).toEqual('String')
    expect(result.Acreage).toEqual(4446276)
  })

  scenario('updates a generatePrice', async (scenario) => {
    const original = await generatePrice({
      id: scenario.generatePrice.one.id,
    })
    const result = await updateGeneratePrice({
      id: original.id,
      input: { Activity: 'String2' },
    })

    expect(result.Activity).toEqual('String2')
  })

  scenario('deletes a generatePrice', async (scenario) => {
    const original = await deleteGeneratePrice({
      id: scenario.generatePrice.one.id,
    })
    const result = await generatePrice({ id: original.id })

    expect(result).toEqual(null)
  })
})
