{/* 
This website is being developed by the -
================================================================
THE RD GROUP OF INDUSTRIES.

DEVELOPER - ADARSH PANDIT
DESIGNER - ADARSH PANDIT
================================================================
*/}


import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "i8rpoiwu",
    dataset: "production",
    useCdn: false,
    apiVersion: '2024-11-13'
})