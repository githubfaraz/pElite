import {MetadataRoute} from "next";

export default async function sitemap(){
    const response = await fetch("https://pets-elite-b.fly.dev/api/blogs")
    const blogs = await response.json();
    
    const blogEntries = blogs.map(({_id})=>({
        url: `https://pets-elite-b.fly.dev/api/blogs/${_id}`,
        // lastModified: new Date(post.updatedAt)
        // changeFrequency:,
        // priority:
    }))


    return [
        {
            url: `https://www.elitetreatforpets.com/`,
            lastModified: new Date()
        },
        ...blogEntries
    ]
}