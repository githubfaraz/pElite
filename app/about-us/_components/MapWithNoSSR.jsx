import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/app/about-us/_components/AddressMap'), {
  ssr: false
});

export default function MapWithNoSSR() {
  return (
    <main>
     <DynamicMap />
    </main>
  )
}
