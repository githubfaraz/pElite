export default function robots(){
    return{
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin','/privacy']
            }
        ],
        sitemap: 'https://www.elitetreatforpets.com/sitemap.xml'
    }
}