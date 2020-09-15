import client from './client'

const speedtests = () => client.get('/speedtests')

export {speedtests}