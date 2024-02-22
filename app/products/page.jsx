// 'use client'
import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Nav from '@/components/Nav'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import useNavigationContext from '@/context/navigation_context';
import SearchInput from '@/components/SearchInput'
import checkbox from '@/components/checkbox'
import RadioExample from '@/components/checkbox'
import Navb from '@/components/Navb'
import ProductOverViewSection from '@/components/ProductOverViewSection'
// import ProductService from '@/services/ProductService'
import { InferGetStaticPropsType } from 'next';
import ProductFilters from '@/components/ProductFilters/ProductFilters'


async function getData() {
    const res = await fetch('https://pets-elite-b.fly.dev/api/bully-sticks')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Page  ()  {

    const data = await getData();
    

    // start search
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState(furnitureData);
  
    // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const value = event.target.value;
    //   setSearchTerm(value);
    //   const filteredResults = furnitureData.filter(furniture =>
    //     furniture.name.toLowerCase().includes(value.toLowerCase())
    //   );
    //   setSearchResults(filteredResults);
    // };

    // end search


    // const [filterTags, setFilterTags] = useState<string[]>([]);

    // const filteredDATA = DATA.filter((node) =>
    //   filterTags.length > 0
    //     ? filterTags.every((filterTag) =>
    //         node.tags.map((tag) => tag.slug).includes(filterTag)
    //       )
    //     : DATA
    // );


    // useEffect(() => {
    //     let filteredResults = users.filter((user) => {
    //       const isAgeMatch = !filters.age || user.age === filters.age;
    //       const isLengthMatch = !filters.length || user.length === filters.length;
    //       const isWeightMatch = !filters.weight || user.weight === filters.weight;
    //       return isAgeMatch && isLengthMatch && isWeightMatch;
    //     });
    
    //     if (searchTerm) {
    //       filteredResults = filteredResults.filter((user) =>
    //         data.name.toLowerCase().includes(searchTerm.toLowerCase())
    //       );
    //     }
    
    //     setFilteredUsers(filteredResults);
    //   }, [filters, searchTerm, users]);


    //   const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //       setFilterTags([...filterTags, event.target.value]);
    //     } else {
    //       setFilterTags(
    //         filterTags.filter((filterTag) => filterTag !== event.target.value)
    //       );
    //     }
    //   };

    return (
    <div>
        <div className='w-full' style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/hero-2.png'
          alt='dog-chewing-bully-stick'
          height={100}
          width={1500}
          className='object-cover h-96 filter brightness-50'
          style={{ zIndex: 1, height: '30rem'}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0'>
          {/* <MainNavbar /> */}
          <Navb linkActive='3' />
        </div>
        <div className='absolute sm:top-1/4 top-40 sm:left-96 left-14 sm:ml-24 text-center sm:mt-12  sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Products
        </div>
    </div>
    
        <div className='flex sm:flex-row sm:space-x-4 flex-col space-y-3'>
            <ProductFilters/>
        </div>
        <br />
        <hr />
        <Footer />
    </div>
  )
}


