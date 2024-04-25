import {FeaturedProducts,FeaturedBlogs,Navb} from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import 'swiper/swiper-bundle.css';

export const metadata= async() => {
  return{  
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets",
  appleMobileWebAppTitle: 'Elite Treat For Pets',
  authors: [
    {
      name: "Elite Treat For Pets",
      url: "https://www.elitetreatforpets.com/",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Elite Treat For Pets",
    images: "https://www.elitetreatforpets.com/logoP.png"
  },
  openGraph: {
    type: "website",
    url: `https://www.elitetreatforpets.com/`,
    title: "Elite Treat For Pets",
    image: "https://www.elitetreatforpets.com/logoP.png",
    siteName: "Elite Treat For Pets",
    images: [
      {
        url: "https://www.elitetreatforpets.com/logoP.png",
      },
    ],
  },
  assets: "https://www.elitetreatforpets.com/logoP.png",
}
}

function Home() {
  return (
    <>
    <div>
      {/* Hero section */}
      <div className="h-max w-full lg:w-full bg-gradient-to-b from-orange-200 to-orange-400 pb-4">
      {/* <MainNavbar /> */}
      <Navb linkActive='1'/>
      <div className="flex flex-row flex-wrap w-full">
        <div className=" sm:mx-10 mx-2 sm:py-10 sm:my-8 lg:w-5/6">
          <h2 className="text-6xl mb-23 lg:w-4/6 w-full sm:mb-10 mb-5 text-amber-600 font-bold sm:text-7xl font-playfair_display leading-2xl sm:leading-7xl" >Buy for your <span className="text-amber-900">pet</span> whatever is needed</h2>
          <h3 className="lg:w-3/5 mt-2 sm:text-3xl text-xl sm:mb-6 mb-5 font-light text-amber-900 sm:leading-8xl leading-snug font-open_sans w-full" style={{
                fontFamily: 'open_sans'
          }}>
            Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all natural and made from Free-Range, Grass-Fed Beef to ensure a nutritious and flavorful snack for your pups
          </h3>
          <Link href='/products'>
            <button  className='rounded-full font-serif py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-64 w-full'>
              Browse All products
            </button>
          </Link>
        
        </div>
        {/* images */}
        <div>
          <div className="absolute bg-orange-400 lg:block hidden" style={{
              borderRadius: '50%',
              width: '28rem',
              height: '28rem',
              left: '56%',
              // bottom: '4rem',
              // marginLeft: '10rem'
          }}>
          <Image
              src='/bankt.png'
              alt="Bully Stick"
              width={300}
              height={320}
              style={{
                borderWidth: '2px'
              }}
              className="w-52 h-60 absolute bottom-52 rounded-xl left-5 border-orange-400"
            />
            <Image
              src='/hero-2.png'
              alt="Bully Stick"
              width={300}
              height={320}
              style={{
                borderWidth: '2px'
              }}
              className="bottom-0 absolute left-60 top-52  w-48 h-60 rounded border-orange-400"
            />
          </div>
        </div>
      </div>
      </div>
      {/* Hero section */}

      {/* FDA CERTIFIED */}
        {/* <div className="my-4 text-center mx-2 sm:mx-auto sm:w-6/12">
          <h3 className="text-2xl sm:text-4xl font-bold text-amber-700 font-playfair_display" >FDA-Approved for Your Peace of Mind</h3>
          <Image
            alt='FDA certified product'
            src='/fd.png'
            height={240}
            width={280}
            className="mx-auto"
          />
          <h4 className="text-amber-700 text-xl mx-auto sm:w-11/12" style={{
                fontFamily: 'open_sans'
          }}>Experience the Gold Standard of our bully sticks manufactured at US-FDA registered facility</h4>
          <h1 className="sm:w-3/4 w-full mt-4 mx-auto text-lg">Every pet owner wants the best for their furry friend, and that&apos;s why we leave no stone unturned when it comes to quality.
          Our bully sticks are not just any treats; they are a promise of safety and excellence</h1>
          <Link href='/blogs/65f813000f2c638239fa59ff' >
            <button  className='rounded-full font-serif py-2 mt-4 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 w-full' >
              Learn More
            </button>
          </Link>
        </div> */}
      {/* FDA CERTIFIED */}



      {/* Difference Section */}
      <div className="sm:mx-10 mx-2 my-2 sm:py-14 py-7 flex sm:flex-row sm:space-x-0 flex-col space-y-2">
        <div>
          <h1 className="text-3xl leading-10xl text-center sm:text-left  sm:leading-7xl sm:text-7xl mb-23 sm:w-11/12 w-full sm:mb-10 mb-5 text-amber-700 font-bold" style={{
            fontFamily: 'playfair_display'
          }}>What makes us different from others</h1>
          <p className="sm:w-5/6 w-full mt-2 text-center sm:text-left  sm:leading-8xl sm:text-8xl leading-snug text-xl mb-6 font-light text-slate-900">
            With a long-standing reputation for excellence, we&apos;ve established ourselves as the premier choice for discerning pet owners who demand nothing but the best for their furry companions
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="sm:flex sm:flex-row-reverse sm:space-y-2 align-middle mb-2 flex flex-col space-y-2 ">
            <div className="flex flex-col  align-middle">
              <Image 
                src='/awardRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                className="mx-auto"
              />
              <h2 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}
            >
              Before our bully sticks make it to your pet, they undergo meticulous testing protocols to ensure they meet our high standards for safety, taste, and overall quality. 
            </h2>
            </div>
            <div className="flex flex-col  align-middle justify-center">
              <Image
                alt='FDA certified product'
                src='/fd.png'
                height={170}
                width={170}
                className="mx-auto"
              />
              <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}>
              Every pet owner wants the best for their furry friend, and that&apos;s why we leave no stone unturned when it comes to quality.Our bully sticks are not just any treats; they are a promise of safety and excellence...
              <Link href='/blogs/65f813000f2c638239fa59ff' className="text-orange-500 font-bold">Learn more</Link>
            </h3>
            </div>
            <div className="flex flex-col justify-center align-middle sm:hidden">
              <Image 
                src='/testRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                className="mx-auto"
              />
              <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}>
              Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team, ensuring that each chew is of the highest quality for the happiness and well-being of your pets.
            </h3>
            </div>
          </div>
        <div >

          {/* <div className="hidden sm:flex flex-col sm:space-x-2 align-middle w-5/6 sm:ml-18 ml-0 justify-center">
                <Image 
                  src='/testRibbon.png'
                  alt="Quality product"
                  height={200}
                  width={100}
                  className="mx-auto"
                />
                <h3 className="w-3/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center mx-auto" style={{
                    // fontSize: '1rem',
                    lineHeight: '1.5rem',
                    marginLeft: '6rem',
              }}>
                Free from artificial additives and preservatives, our bully sticks stand out for their pure, natural goodness.
              </h3>
          </div> */}

          <div className="sm:flex sm:flex-row sm:space-y-2 mb-2 flex flex-col space-y-2 ">
            <div className="flex flex-col  align-middle">
            <Image 
                  src='/testRibbon.png'
                  alt="Quality product"
                  height={200}
                  width={100}
                  className="mx-auto"
            />
            
              <h2 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}
            >
                Free from artificial additives and preservatives, our bully sticks stand out for their pure, natural goodness.
            </h2>
            </div>
            <div className="flex flex-col  align-middle">
              <Image 
                src='/qualityRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                className="mx-auto"
              />
              <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}>
              We go above and beyond industry standards to ensure the health and safety of both pets and their owners, offering peace of mind with every purchase.
            </h3>
            </div>
            <div className="flex flex-col justify-center align-middle sm:hidden">
              <Image 
                src='/testRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                className="mx-auto"
              />
              <h3 className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
            }}>
              Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team, ensuring that each chew is of the highest quality for the happiness and well-being of your pets.
            </h3>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Difference Section */}

      <FeaturedProducts/>
      
      {/* Tips Section */}
      <div className="h-max sm:py-10 sm:px-9 py-5 px-2 md:px-16 w-full">
        <h3  className="text-center sm:text-4xl text-3xl mb-5 text-amber-700 font-bold" style={{fontFamily: "playfair_display"}}>Tips for Elite Treats Bully Sticks Production</h3>
        <h3  className="text-center text-xl font-light sm:w-2/4 w-full text-amber-700 mx-auto" style={{fontFamily: 'open_sans'}}>Pet treats packed with nutritious ingredients,vitamins and supplements to help dogs</h3>
      <FeaturedBlogs/>
      </div>
      {/* Tips Section */}


      {/* Contact Us section */}
      <div className="bg-gray-50 h-max lg:py-8 flex flex-col lg:flex-row lg:space-x-48 lg:pl-28 pl-2 py-4">
        <div className="sm:flex-col sm:space-y-4 space-y-2 mx-auto ">
          <div className="flex flex-row space-x-10">
          <Image
              src='/banktBs.png'
              alt="dog eating bully-stick"
              height={300}
              width={400}
              className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2 "
              style={{  borderRadius: '48%'}}
            />
            <div className="sm:p-14 p-6 bg-amber-500 text-3xl text-white" style={{
            fontFamily: 'playfair_display'
          }}>Elite</div>
          </div>
          <div className="flex flex-row space-x-4 ">
          <div className="sm:p-14 p-8 bg-amber-500 text-3xl text-white " style={{
            fontFamily: 'playfair_display'
          }}>Pets</div>
            <Image
              src='/bankt_bs.png'
              alt="dog eating bully-stick"
              height={100}
              width={200}
              className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2"
              style={{  borderRadius: '48%'}}
            />
          </div>
        </div>
        <div className="pb-10">
          <h3 className="text-4xl mb-23 sm:w-5/6 w-full mb-6  sm:text-9xl leading-tight sm:leading-7xl text-amber-700 font-bold" style={{
          fontFamily: 'playfair_display'
        }}>Best online pet product in your Area</h3>
          <h3 className="mt-2 mb-4 font-light text-xl sm:w-3/4 w-full sm:text-2xl " >Interested about us & and our products,we would like to hear more from you.</h3>
          <Link href='/contact'>
            <button  className='rounded-full py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 w-full' style={{fontFamily: "poppins"}}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      {/* Contact Us section */}
    </div>
    </>
  );
}



export default Home;
