import {CompanySlider,CompanyCard} from '@/app/about/_components'
import MapWithNoSSR from '@/app/about/_components/MapWithNoSSR'
import {Navb} from '@/app/components'
import Image from 'next/image'
import { TfiCheckBox } from "react-icons/tfi";
import { IoMail } from "react-icons/io5";

const page = () => {
  const companies = [
    // {
    //   id: 1,
    //   name: 'KSK international',
    //   logo: '/ksk-1.svg',
    //   description: 'A leading supplier of high quality home and office furniture in USA.'
    // },
    {
      id: 2,
      name: 'Medlink World LLC',
      logo: '/med-link.png',
      description: 'A healthcare and CRO consulting firm which champions itself in clinical data generation for medical devices that needs FDA registration.'
    },
    {
      id: 3,
      name: 'Medlink LLC USA',
      logo: '/med-link.png',
      description: 'A multinational healthcare consultancy firm dedicated to the management of profitable health services through the use of innovative human and technological resources'
    },
    {
      id: 4,
      name: 'Just ASK LLC',
      logo: '/just-ask.svg',
      description: 'A consulting services in health foods and Aviation. We provide Aircraft sales, services and spares across manufacturers.'
    },
    {
      id: 5,
      name: 'Mysha Khan LLC',
      logo: '/mysha-khan.svg',
      description: 'A company dedicated to residential purchase and management of rental properties.'
    },
    {
      id: 6,
      name: 'Zeake Khan LLC',
      logo: '/zeake-khan.svg',
      description: 'A company completely dedicated to purchase and management of commercial Real Estate in NY tri state area.'
    },
    {
      id: 7,
      name: 'Sierra Global Health LLC',
      logo: '/sierra.svg',
      description: 'A company dedicated to production of CDMO, in generic pharma space.'
    }
    
  ];
  return (
    <div>
      <div className='relative inline-block'>
        <Image
          src='/Team.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover filter brightness-50 sm:h-80 h-96'
          style={{ zIndex: 1}}
        />

        <div class="absolute inset-0 bg-amber-900 bg-opacity-50">
          <div className='absolute top-0 left-0 ml-0 mt-0 w-full '>
            <Navb linkActive='2'/>
          </div>
          <div className='absolute sm:top-1/4  left-0  mt-12 text-center sm:mx-10 mx-5 text-orange-400'>
          <h1 className='sm:text-6xl text-4xl mt-8 sm:mt-0 font-semibold font-oswald' style={{color:  '#ffaf58'}}>
            About Us
          </h1>
          <h2 className='text-burgundy' style={{color:  '#ffaf58'}}>Established in 2021,</h2>
          <h2 className='text-sm' style={{color:  '#ffaf58'}}>
          Elite Treat for Pets has been a major player in the manufacturing of bully sticks, supplying high-quality, generic dog treats to private markets, governmental institutions, local and international NGOs, and exporting to regional markets for the past two years. The company boasts one of the largest and most modern FDA-compliant manufacturing facilities in the region, complete with a quality assurance infrastructure, and has adequate capacity for common dosage forms to satisfy the current and future needs of its clientele.          </h2>
        </div> 
        </div>
      </div>

      <div className='sm:mx-20  mx-5 my-5 sm:my-10 flex md:flex-wrap lg:flex-nowrap md:align-middle md:justify-center md:space-y-5 lg:space-y-0 sm:flex-row sm:space-x-12 flex-col space-x-2'>
          <div className='flex sm:flex-row flex-col sm:space-x-4 space-y-2 sm:w-3/6 w-40 align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg mx-auto sm:mx-0'>
            <Image
              src='/chemical-free.png'
              height={100}
              width={100}
              alt='chemical-free-bully-stick'
              className='bg-orange-500 rounded-2xl sm:h-24 sm:w-24 h-12 w-12 mx-auto'
            />
            <h2 className='mt-2 font-extralight text-center sm:text-left'>Made from 100% all-natural from Grass-fed Beef</h2>
          </div>

          <div className='flex flex-row space-x-3 sm:space-x-8 mt-6 sm:mt-0'>
            <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-4 sm:w-3/6 w-40 align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg'>
              <Image
                src='/molecular.png'
                height={50}
                width={100}
                alt='chemical-free-bully-stick'
                className='bg-orange-600 rounded-2xl py-3 px-3 sm:h-24 sm:w-24 w-12 mx-auto'
              />
              <h2 className='mt-2 font-extralight text-center sm:text-left '>Our bully sticks epitomize the natural essence upheld by our dedicated team. </h2>
            </div>
            <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-4 sm:w-3/6 w-40  align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg'>
              <Image
                src='/test-tube.png'
                height={10}
                width={80}
                alt='chemical-free-bully-stick'
                className='bg-orange-500 rounded-2xl py-3 px-3 sm:h-24 sm:w-24 w-12 mx-auto'
              />
              <h2 className='mt-2 font-extralight text-center sm:text-left' >Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team</h2>
            </div>
          </div>
      </div>

      {/* <div className='sm:mx-10 sm:my-10 my-5 mx-5 flex flex-col sm:flex-row sm:space-x-5 space-y-2'>
        <h1 className="sm:text-6xl text-4xl mb-23 leading-snug sm:leading-9xl sm:w-3/5 w-full text-left mb-10 text-orange-400 font-extrabold" style={{
              fontFamily: 'playfair_display'
            }}>We stand by the <span className='text-orange-600'>quality</span> of our bully sticks! Your <span className='text-orange-600 font-extrabold'>happiness</span> is our priority.</h1>
        <h2 className='sm:w-2/5 sm:mt-6 mt-3 sm:text-2xl text-xl font-extralight' >
          Welcome to Elite Treat For Pets, where our passion for pets and commitment to excellence converge. At the core of our mission is the belief that our pets deserve the utmost care,
          reflected in our premium Pets Bully Sticks.
        </h2>
        <h2 className='sm:w-2/5 sm:text-2xl text-xl sm:mt-6 mt-3 font-extralight' >
          As devoted pet enthusiasts, we recognize the joy our furry friends bring, driving us to reciprocate that love with a treat distinguished by its exceptional quality, taste, and nutritional value.
        </h2>
      </div> */}

      <div className='flex flex-col-reverse lg:flex-row md:mx-16  lg:space-x-16 mx-5 lg:mx-20'>
        <div className='lg:w-1/2 w-full'>
          <h2 className='font-extrabold text-3xl sm:text-5xl text-orange-600 font-oswald'>Crafting The Ultimate Chew And Unleashing Quality: Our Story</h2>
          <h3>At ZEMY Group Global, your premier source for all-natural, high-quality bully sticks, proudly crafted in the heart of Nairobi, Kenya. Our mission is to provide pet owners with a healthy and satisfying treat for their faithful companions, while also supporting local communities and sustainable practices.</h3>
          <h3 className='mt-2'>Nestled amidst Nairobi&apos;s vibrant landscapes, ZEMY Group Global LTD. was born from a passion for pets and a commitment to ecological stewardship. Our journey began with a simple goal: to produce the finest bully sticks that not only cater to the wellbeing of dogs around the world but also promote the prosperity of local herders and farmers</h3>
          <div className='mt-2 mx-auto font-extrabold'>
            <div className='flex flex-row align-middle space-x-4'>
              <TfiCheckBox className='font-extrabold'/>
              <h2>
                FDA Certified Products
              </h2>
            </div>
            <div className='flex flex-row align-middle space-x-4 mt-1'>
              <TfiCheckBox />
              <h2>
                Natural processed Bully Sticks
              </h2>
            </div>
            <div className='flex flex-row align-middle space-x-4 mt-1'>
              <TfiCheckBox />
              <h2>
                Treated,Tested and Approved Bully Sticks
              </h2>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-6 lg:w-1/2 w-full'>
          <div>
            <Image alt='bully-stick1' src='/AboutUs3.png' className='w-full  rounded-lg' width={3200} height={2400}/>
          </div>
          {/* <div className=' flex flex-row space-x-2'>
            <Image alt='bully-stick1' src='/odor.jpg' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
          </div> */}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:space-x-16 md:mx-16 lg:mx-20 mx-5 mt-5'>
      <div className='flex flex-col lg:w-1/2 w-full space-y-6'>
          <div>
            <Image alt='bully-stick1' src='/aboutUs-21.jpg' className='w-full rounded-lg' width={800} height={200}/>
          </div>
        </div>

        <div className='lg:w-1/2 flex flex-col w-full justify-between'>
          <div>
            <h2 className='font-extrabold text-2xl text-orange-600 font-oswald'>WE PROVIDE HIGH QUALITY BULLY STICKS</h2>
            <h3> At ZEMY Group Global LTD, we source only the finest beef from trusted Kenyan herders who share our vision for animal welfare and environmental sustainability. Our bully sticks are carefully crafted from 100% free-range, grass-fed cattle, ensuring each chew is as rich in nutrients as it is in flavor.</h3>
          </div>
          <button  className='rounded-2xl py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-64 w-full' style={{fontFamily: "poppins"}}>
              Explore Our Bully Sticks
          </button>
        </div>
      </div>


      <div className='flex lg:flex-row flex-col md:mx-16 lg:space-x-48 mt-10 lg:mx-20 mx-5'>
        <div className='flex lg:flex-row flex-col  lg:w-1/3 space-x-11'>
          <div>
            <h3 className='text-3xl font-extrabold text-amber-600' >History</h3>
            <h2 className='lg:w-44'>Est. 2021 in Kenya, we started with a plan and idea of providing better Dog Treat.</h2>
          </div>
          <Image
            src='/roadmap.svg'
            width={300}
            height={300}
            alt='roadmap-1'
            className='hidden lg:block mx-auto text-center'
          />
          <Image 
            src='/rm.svg'
            width={300}
            height={300}
            alt='roadmap'
            className='block lg:hidden h-24 w-24 mx-auto text-center'
          />
        </div>

        <div className='flex lg:flex-row flex-col  lg:w-1/3 space-x-11'>
          <div>
            <h2 className='text-3xl font-extrabold text-amber-600'>Present</h2>
            <h2 className='lg:w-44 '>Today, we are one of the leading Bully Stick Treat and our products are available in most of the countries in United States Of America.</h2>
          </div>
          <Image
            src='/roadmap.svg'
            width={300}
            height={300}
            alt='roadmap-1'
            className='hidden lg:block'
          />
          <Image 
            src='/rm.svg'
            width={300}
            height={300}
            alt='roadmap'
            className='block lg:hidden h-24 w-24'
          />
        </div>

        <div className='flex lg:flex-row flex-col  lg:w-1/3 space-x-11'>
          <div>
            <h2 className='text-3xl font-extrabold text-amber-600'>Future</h2>
            <h2 className='lg:w-44'>Affordability, Availability and Accessibility are core values we will drive to new emerging markets in United States of America.</h2>
          </div>
          <Image
            src='/roadmap.svg'
            width={300}
            height={300}
            alt='roadmap-1'
            className='hidden lg:block'
          />
          <Image 
            src='/rm.svg'
            width={300}
            height={300}
            alt='roadmap'
            className='block lg:hidden h-24 w-24'
          />
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>

      

      <div className='bg-slate-50'>
        <div className='lg:mx-20 md:mx-16 mx-5 flex flex-col-reverse lg:flex-row mt-10 lg:space-x-16 lg:py-8'>
          <div className='lg:w-1/2 w-full'>
            <Image
            src='/Plogo.png'
            alt="comfy sloth"
            className="w-16 h-16 lg:w-36  mt-1 lg:h-36"
            height={800}
            width={1000}
            />
            <div className=''>
              <h2>Our production team consists of skilled artisans who bring the spirit of Nairobi to each handcrafted bully stick. With meticulous attention to safety and detail, they are the backbone of our operation, ensuring every product meets our superior standards.</h2>
              <h2 className='mt-2'>The quality control squad vigilantly monitors each stage of the manufacturing process. From strict hygiene protocols to rigorous testing, they ensure that only the best bully sticks make it to your home, safeguarding your pet&apos;s health and your peace of mind.</h2>
            </div>
            <div>
        
            </div>
          </div>
          <div className='lw-full'>
            <Image
              src='/aboutUs-2.jpg'
              height={1200}
              width={1200}
              alt='meeting'
              className='w-full lg:h-96 h-full'
            />
          </div>
        </div>
      </div>
      


      <div className=''>
        <h3 className='text-center mt-10 text-orange-500 font-bold text-2xl'>Our Companies</h3>
        <div className='lg:mx-10 mx-5'>
          <div style={{ borderWidth: '1px' }} className="text-center lg:w-2/5 border-gray-100  rounded-md py-2 px-2 mx-auto my-5">
                    <h3 className="mt-6 text-center text-xl text-amber-700 font-bold w-full"  style={{fontFamily: 'robot'}}>ZEMY Group LLC</h3>
                    <Image
                      alt='main-company'
                      height={100}
                      width={100}
                      src='/zemy.svg'
                      className='mx-auto my-10'
                    />
                    <h3 className="mt-6 text-center text-xl text-gray-800 font-light w-full">ZEMY Group LLC is a holding company with its headquarters in NY. It has many subsidiaries which encompasses many market segments including healthcare, daily commodities, pet food, generic drugs, medical diagnostics, real estate, hospital management consultancy</h3>
                    <a href='https://www.zemy-group.com' target="_blank" rel="noopener noreferrer">
                      <button  className='rounded-full py-1 px-8 my-4 lg:mr-9 lg:px-6 border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg lg:w-52'>
                        Visit Our Website
                      </button>
                    </a>
          </div>
            {/* <CompanySlider /> */}
            <div className="lg:hidden block">
              <CompanySlider data={companies} />
            </div>
            {/* <CompanySlider /> */}
            <div className='hidden lg:block '>
              <CompanyCard data={companies}/>
            </div>
        </div>
      </div>

      <div className='mx-auto bg-gradient-to-r from-orange-400 to-orange-200 sm:py-32 py-20 w-11/12 rounded-2xl mt-10'>
        <div className='sm:mx-20 text-center flex flex-col space-y-4'>
          <h2 className='font-extrabold text-3xl text-orange-600'>Stay Connected with Elite Treat For Pets</h2>
          <h3 className='sm:w-3/4 mx-auto text-amber-800'>Sign up for our newsletter to stay informed about the latest news,updates, and exclusive offers from Elite Treat For pets.By subscribing,you&apos;ll receive regular emails featuring project highlights,industry insights, and tips for your construction projects</h3>
          <form className='flex sm:flex-row flex-col space-y-2 sm:space-y-0 w-full justify-center'>
          <div className="relative">
            <input type="text" className='border p-3 pl-10 rounded-sm sm:w-full w-10/12 mx-5 sm:mx-0' placeholder='Enter Email'/>
            {/* <svg className="absolute left-3 top-3 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 11.56l-4.24-4.25m0 0l-4.24 4.25m4.24-4.25v11.25" />
            </svg> */}
            <IoMail className="absolute left-6 sm:left-3 top-3 h-6 w-6 text-orange-600"/>
          </div>
            <button className='py-2 px-4  text-white bg-orange-600 rounded mx-5 sm:mx-0'>Subscribe</button>
          </form>
        </div>
      </div>

      {/* <div className='mx-auto py-4'>
        <MapWithNoSSR />
      </div> */}

      <div className='bg-slate-50'>
        <div className='lg:mx-20 mx-3 flex flex-col lg:flex-row lg:mt-10 mt-5 md:mx-16 lg:py-10 space-y-4 lg:space-y-0 lg:space-x-16 '>
        <div className='lg:w-1/2 w-full h-3/4'>
            <Image
              src='/aboutUs-1.jpg'
              height={1200}
              width={1200}
              alt='meeting'
              className='w-full h-80'
            />
          </div>
          <div className='lg:w-1/2 w-full'>
            <h3 className='text-3xl font-semibold font-oswald text-orange-600'>Corporation Strategy</h3>
            <div className=''>
              <h2 className='0'>Bully sticks are more than just treats; they&apos;re a cornerstone of your dog&apos;s health. Chewing is a natural behavior that helps your dog relieve anxiety, boredom, and also assists in keeping their teeth clean. Our bully sticks provide a safe and digestible option that far surpasses rawhides or artificial chew toys, helping to minimize plaque and reduce the risk of gum disease.</h2>
              <h3 className='mt-2 '>The love for pets goes hand-in-hand with the love for our planet at Elite Treat For Pets. We understand our responsibility towards the environment and strive to minimize our ecological footprint. Our packaging is eco-friendly and biodegradable, ensuring that we remain kind to the earth while serving the needs of your furry family member.</h3>
              {/* <p className='mt-2 '>The quality control squad vigilantly monitors each stage of the manufacturing process. From strict hygiene protocols to rigorous testing, they ensure that only the best bully sticks make it to your home, safeguarding your pet&apos;s health and your peace of mind.</p> */}
            </div>
            <div>
        
            </div>
          </div>
        
        </div>
      </div>
      {/* <br /> */}
      {/* <br /> */}
      <hr />
    </div>
  )
}


export async function generateMetadata(){
  return {
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets | About Us",
  appleMobileWebAppTitle: 'Elite Treat For Pets | About Us',
  description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
  openGraph: {
    title: "Elite Treat For Pets | About Us",
    description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "https://www.elitetreatforpets.com/logoP.png",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `https://www.elitetreatforpets.com/`,
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Treat For Pets | About Us",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
}
}


export default page
