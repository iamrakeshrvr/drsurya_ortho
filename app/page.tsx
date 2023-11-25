import About from '@/components/About'
import CardBox from '@/components/CardBox'
import Hero from '@/components/Hero'
import Milestone from '@/components/Milestone'
import Image from 'next/image'
import Letters from '@/components/Letters'
import Contactme from '@/components/Contactme'
import ExpandableBox from '@/components/ExpandableBox'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <About /> 

      <CardBox />

      <Milestone />

      <Letters />

      

      <div className="flex flex-col justify-center items-center mt-8 rounded-md transition-transform duration-500 transform translate-y-0 hover:translate-y-[-10px]" style={{ backgroundColor: 'black' }}>
        <p className='text-6xl font-bold mb-8'>
        <span style={{ color: 'white' }}>Consulting</span>
        <span style={{ color: 'grey' }}> Hospitals</span>
        </p>
        <div className='flex space-x-4'>
          <ExpandableBox title="Batlagundu" content="Dr.Suriya clinic, Batlagundu" />
          <ExpandableBox title="Kallupatty" content="Dr.Suriya clinic, Kallupatty" />
          <ExpandableBox title="Thummalapatty" content="Dr.Suriya clinic, Thummalapatty" />
        </div>  
      </div>
      
      <Contactme />
    </main>
  )
}
