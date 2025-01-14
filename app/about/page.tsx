import Header from '@/components/header'
import Link from 'next/link';
import LinkedIn from '@/public/linkedIn.svg'
import Github from '@/public/github.svg'

export default function Home() {

  return (
    <div>
      <Header />
      <article className='px-6 sm:px-12 py-6'>
        <div className='mb-6'>
          <p className='font-light'>
            Hi, I'm Louis. I'm a software engineer
          </p>
        </div>
        <ul className='flex flex-row flex-wrap '>
          <li className='flex flex-row items-center last:mr-0 mr-4 mb-2'>
            <Link href='/' target='_blank' className='transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 '>
              <LinkedIn className='h-6 w-6' />
            </Link>
          </li>
          <li className='flex flex-row items-center last:mr-0 mr-4 mb-2'>
            <Link href='https://github.com/louis61619' target='_blank' className='transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 '>
              <Github className='h-6 w-6'  />
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
