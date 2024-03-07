import {MetadataRoute} from "next";

export default async function sitemap(){
    const response = await fetch("https://pets-elite-b.fly.dev/api/blogs")
    const blogs = await response.json();
    
    const blogEntries = blogs.map(({title})=>({
        url: `https://pets-elite-b.fly.dev/api/blogs/${title}`,
        // lastModified: new Date(post.updatedAt)
        // changeFrequency:,
        // priority:
    }))


    return [
        {
            url: `www.elitetreatforpets.com/about`,
            lastModified: new Date()
        },
        ...blogEntries
    ]
}