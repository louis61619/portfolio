import { Card } from '@/components/card';
import Header from '@/components/header'
import React from 'react';

type Project = React.ComponentProps<typeof Card>

const projects: Project[] = [
  {
    // 記得封裝一下，未來可以結合 chatgpt
    title: 'low code engine',
    description: '簡易的拖拉生成頁面框架',
    labels: ['Low code', 'React', 'Typescript'],
    demoLink: 'https://louis61619.github.io/low-code-engine',
    sourceLink: 'https://github.com/louis61619/low-code-engine',
    src: '/image/low-code-engine.png'
  },
  // {
  //   // 封裝一下
  //   title: 'flex drag',
  //   description: '使用 react-dnd 製作的簡單拖拉組件，主要是為了在 flex 布局中實現拖拉',
  //   labels: ['React', 'React-dnd', 'Flex box'],
  //   sourceLink: 'https://github.com/louis61619/react-dnd-test.git',
  //   src: '/image/low-code-engine.png'
  // },
  {
    title: 'markdown resume',
    description: '使用 markdown 語法製作簡歷，整合 google drive api 進行儲存並能發布預覽',
    labels: ['Markdown', 'JavaScript', 'Editor'],
    demoLink: 'https://simple-resume-wine.vercel.app',
    sourceLink: 'https://github.com/louis61619/simple-resume.git',
    src: '/image/markdown-resume.png'
  },
  {
    title: 'vue3 monorepo template',
    description: 'vue3 多項目集成模板，使用 lerna 進行管理',
    labels: ['Vue3', 'Monorepo', 'Typescript', 'Lerna'],
    sourceLink: 'https://github.com/louis61619/vue3-monorepo-template.git',
    src: '/image/vue3-monorepo-template.png'
  },
  {
    title: 'base ui',
    description: '使用 storybook 展示製作的 ui 組件庫，發布到 npm 上並能夠在其他專案中使用',
    labels: ['React', 'Storybook', 'UI library', 'Typescript'],
    sourceLink: 'https://github.com/louis61619/base-ui',
    demoLink: 'https://louis61619.github.io/base-ui',
    src: '/image/base-ui.png'
  },
  {
    title: '學習筆記',
    description: '這是一份有關於前端程式基礎的學習筆記，使用 Vuepress 搭建',
    labels: ['JavaScript', 'Frontend', 'Vuepress'],
    demoLink: 'https://louis61619.github.io/js-novel',
    sourceLink: 'https://github.com/louis61619/js-novel',
    src: '/image/js-novel.png'
  },
  {
    // 可以把 images 全部壓縮一遍，啟動略慢
    title: '旅遊官網',
    description: '第一份 css 練習作品，具有 rwd 功能並嵌入大量動畫效果的純樣板網站',
    labels: ['CSS', 'Animation', 'RWD'],
    demoLink: 'https://louis61619.github.io/travel-web-template',
    sourceLink: 'https://github.com/louis61619/travel-web-template.git',
    src: '/image/travel-web-template.png'
  },
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
