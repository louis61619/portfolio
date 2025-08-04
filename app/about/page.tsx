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
            我是一名專注於網頁開發的工程師，熱衷於探索新技術並持續提升自己的能力。熟練掌握前端技術的同時，也對後端、雲服務、資料庫有一定了解，能夠獨立或與團隊合作開發高品質的 Web 應用。
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
