import { db } from 'src/lib/db'

export const generatePrices = () => {
  return db.generatePrice.findMany()
}

export const generatePrice = ({ id }) => {
  return db.generatePrice.findUnique({
    where: { id },
  })
}

export const createGeneratePrice = ({ input }) => {
  return db.generatePrice.create({
    data: input,
  })
}

export const updateGeneratePrice = ({ id, input }) => {
  return db.generatePrice.update({
    data: input,
    where: { id },
  })
}

export const deleteGeneratePrice = ({ id }) => {
  return db.generatePrice.delete({
    where: { id },
  })
}
