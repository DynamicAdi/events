{/* 
This website is being developed by the -
================================================================
THE RD GROUP OF INDUSTRIES.

DEVELOPER - ADARSH PANDIT
DESIGNER - ADARSH PANDIT
================================================================
*/}


import { groq } from "next-sanity";
import { client } from "./client" // initalizes the client


export const getPost = async (action:string, cat?:string, slug?:string) => {
    let query:any;
    const posts = await client.fetch(groq`${query}`)
    return posts;
}
