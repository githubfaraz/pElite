import {CompanySlider,CompanyCard} from '@/app/about/_components'
import MapWithNoSSR from '@/app/about/_components/MapWithNoSSR'
import {Navb} from '@/app/components'
import Image from 'next/image'

const page = () => {
  const companies = [
    {
      id: 1,
      name: 'KSK international',
      logo: 'https://via.placeholder.com/150',
      description: 'A leading supplier of high quality home and office furniture in USA we are a pioneer in the industry offering the market greater choice ,innovative and ergonomic designs as well as environmentally friendly furniture.'
    },
    {
      id: 2,
      name: 'Medlink World LLC',
      logo: 'https://via.placeholder.com/150',
      description: 'A healthcare and CRO consulting firm which champions itself in clinical data generation for medical devices that needs FDA registration.'
    },
    {
      id: 3,
      name: 'Medlink LLC USA',
      logo: 'https://via.placeholder.com/150',
      description: 'A multinational healthcare consultancy firm dedicated to the management of profitable health services through the use of innovative human and technological resources'
    },
    {
      id: 4,
      name: 'Just ASK LLC',
      logo: 'https://via.placeholder.com/150',
      description: 'A consulting services in health foods and Aviation. We provide Aircraft sales, services and spares across manufacturers.'
    },
    {
      id: 5,
      name: 'Mysha Khan LLC',
      logo: 'https://via.placeholder.com/150',
      description: 'A company dedicated to residential purchase and management of rental properties.'
    },
    {
      id: 6,
      name: 'Zeake Khan LLC',
      logo: 'https://via.placeholder.com/150',
      description: 'A company completely dedicated to purchase and management of commercial Real Estate in NY tri state area.'
    },
    {
      id: 7,
      name: 'Sierra Global Health LLC',
      logo: 'https://via.placeholder.com/150',
      description: 'A company dedicated to production of CDMO, in generic pharma space.'
    }
    
  ];
  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/Team.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover filter brightness-50'
          style={{ zIndex: 1}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0 w-full'>
          <Navb linkActive='2'/>
        </div>
        <h1 className='absolute top-1/4 lg:left-96 md:left-40 left-0 lg:ml-36 ml-20 mt-12 sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          About Us
        </h1>
      </div>

      <div className='sm:mx-10 mx-5 my-5 sm:my-10 flex md:flex-wrap lg:flex-nowrap md:align-middle md:justify-center md:space-y-5 lg:space-y-0 sm:flex-row sm:space-x-12 flex-col space-x-2'>
          <div className='flex sm:flex-row flex-col sm:space-x-4 space-y-2 sm:w-3/6 w-40 align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg mx-auto sm:mx-0'>
            <Image
              src='/chemical-free.png'
              height={200}
              width={100}
              alt='chemical-free-bully-stick'
              className='bg-orange-500 rounded-2xl sm:h-28 sm:w-28 h-12 w-12 mx-auto'
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
                className='bg-orange-600 rounded-2xl py-3 px-3 sm:h-28 sm:w-28 w-12 mx-auto'
              />
              <h2 className='mt-2 font-extralight text-center sm:text-left '>Our bully sticks epitomize the natural essence upheld by our dedicated team. </h2>
            </div>
            <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-4 sm:w-3/6 w-40  align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg'>
              <Image
                src='/test-tube.png'
                height={10}
                width={80}
                alt='chemical-free-bully-stick'
                className='bg-orange-500 rounded-2xl py-3 px-3 sm:h-28 sm:w-28 w-12 mx-auto'
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

      <div className='flex flex-row space-x-16 mx-10'>
        <div className='w-1/2'>
          <h2 className='font-extrabold text-2xl font-sans text-orange-400'>ABOUT THE COMPANY</h2>
          <p>At the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticks At the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticks</p>
        </div>

        <div className='flex flex-col space-y-6 w-1/2'>
          <div>
            <Image alt='bully-stick1' src='/AboutUs3.png' className='h-80 rounded-lg' width={800} height={200}/>
          </div>
          <div className=' flex flex-row space-x-2'>
            <Image alt='bully-stick1' src='/odor.jpg' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
          </div>
        </div>
      </div>

      <div className='flex flex-row space-x-16 mx-10 mt-16'>
      <div className='flex flex-col w-1/2 space-y-6'>
          <div>
            <Image alt='bully-stick1' src='/AboutUs3.png' className='h-80 rounded-lg' width={800} height={200}/>
          </div>
          <div className='flex flex-row space-x-2'>
            <Image alt='bully-stick1' src='/odor.jpg' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
            <Image alt='bully-stick1' src='/hero-2.png' className='rounded h-40' width={200} height={200}/>
          </div>
        </div>

        <div className='w-1/2'>
          <h2 className='font-extrabold text-2xl font-sans text-orange-400'>ABOUT THE COMPANY</h2>
          <p>At the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticks At the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticksAt the core of the green forest lives ZEMY GROUP GLOBAL LTD responsible in running the production of Bully sticks</p>
        </div>

       
      </div>

      

      {/* <div className='sm:my-16 relative inline-block lg:ml-96 ml-9 my-8'>
        <Image 
          src='/AboutUs2.png'
          alt='bully-sticks'
          width={500}
          height={400}
          className='rounded-xl sm:w-4/5 sm:h-5/6  w-3/5 h-4/6 md:h-3/6 md:w-3/5 lg:w-3/5 lg:h-4/6'
          style={{zIndex: 1}}
          />
          <Image 
            src='/AboutUs3.png'
            alt='bully-sticks'
            width={400}
            height={400}
            className='absolute sm:top-16 top-10 left-32 lg:left-96 md:left-48 ml-0 mt-0 mx-auto rounded-2xl border-4 sm:border-8 stroke-white border-white sm:w-3/5 sm:h-4/6 w-2/5 h-3/6'
          />
      </div> */}

      <h3 className='text-center my-4 text-orange-500 font-bold text-2xl'>Our Companies</h3>
      <div className='mx-10'>
        <div style={{ borderWidth: '1px' }} className="text-center sm:w-2/5 border-gray-300  rounded-md py-2 px-2 mx-auto my-5">
                  <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-full"  style={{fontFamily: 'robot'}}>ZEMY Group LLC</h4>
                  <h4 className="mt-6 text-center text-xl text-gray-800 font-light w-full "  style={{fontFamily: 'inter'}}>ZEMY Group LLC is a holding company with its headquarters in NY. It has many subsidiaries which encompasses many market segments including healthcare, daily commodities, pet food, generic drugs, medical diagnostics, real estate, hospital management consultancy</h4>
                  <a href='https://www.zemy-group.com' target="_blank" rel="noopener noreferrer">
                    <button  className='rounded-full py-1 px-8 my-4 sm:mr-9 sm:px-6 border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52'>
                      Visit Our Website
                    </button>
                  </a>
        </div>
          {/* <CompanySlider /> */}
          <div className="sm:hidden block">
            <CompanySlider data={companies} />
          </div>
          {/* <CompanySlider /> */}
          <div className='hidden sm:block'>
            <CompanyCard data={companies}/>
          </div>
      </div>

      <div className='mx-auto py-4'>
        <MapWithNoSSR />
      </div>
      <br />
      <br />
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
