const { outpuTypes } = require('./outpuTypes')
const { inpuTypes } = require('./inpuTypes')

let typeDefs: String = outpuTypes.concat(inpuTypes)
export { typeDefs };