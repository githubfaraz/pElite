export default function robots(){
    return{
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin','/privacy']
            }
        ]
        // sitemap: 'https://elitetreatforpets.com/sitemap.xml'
    }
}