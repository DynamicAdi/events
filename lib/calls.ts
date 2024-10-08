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
import { about, blogCard, contactInfo, fullBlog, fullPageAbout, pastProjects, services } from "./query";

export const getPost = async (action:string, slug?:string, type?: string) => {
    let query:any;
    if (action === 'about') {
        query = about;
    }
    if (action === 'aboutpage') {
        query = fullPageAbout;
    }
    if (action === 'connect') {
        query = contactInfo;
    }
    if (action === "projects") {
        query = pastProjects;
    }
    if (action === "fullProjects") {
        query = groq`*[_type == "${type}" && slug.current == "${slug}"]`;
    }
    if (action === "blogcard") {
        query = blogCard
    }
    if (action === "fullBlog") {
        query = fullBlog
    }
    if (action === "services") {
        query = services    
    }
    const posts = await client.fetch(groq`${query}`)
    return posts;
}

