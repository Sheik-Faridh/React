const random = () => Math.random().toString(16).slice(-4)

export const uniqueId = prefix => `${prefix}-${random()}${random()}`

