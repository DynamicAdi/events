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
import { about } from "./query";

export const getPost = async (action:string, slug?:string) => {
    let query:any;
    if (action === 'about') {
        query = about;
    }
    const posts = await client.fetch(groq`${query}`)
    return posts;
}

