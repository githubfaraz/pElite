import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/components/AddressMap'), {
  ssr: false
});

export default function MapWithNoSSR() {
  return (
    <main>
     <DynamicMap />
    </main>
  )
}
