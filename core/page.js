import {getPost} from "../lib/calls.ts"

export async function getData(req) {
    const posts = await getPost(req)
    return posts
}