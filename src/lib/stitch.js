import { Stitch } from 'mongodb-stitch-browser-sdk'

const APP_ID = 'jackstitch-nugdw'

let stitchClient = Stitch.initializeDefaultAppClient(APP_ID)

export { stitchClient }
