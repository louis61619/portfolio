import { Card } from '@/components/card';
import Header from '@/components/header'
import React from 'react';

type Project = React.ComponentProps<typeof Card>

const projects: Project[] = [
  {
    title: '學習筆記',
    description: '這是一份有關於前端程式基礎的學習筆記',
    labels: ['JavaScript', 'Web'],
    demoLink: 'https://louis61619.github.io/js-novel',
    src: '/image/js-novel.png'
  }
]

export default function Home() {

  return (
    <div>
      <Header />
      <div className='px-6 sm:px-12 py-6'>
        <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {
            projects.map((project, index) => {
              return (
                <Card key={index} {...project} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
