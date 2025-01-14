import Image from "next/image";
import Link from "next/link";
import React from "react";
import Github from '@/public/github.svg'
import Demo from '@/public/demo.svg'

const LinkButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300">
        {children}
      </Link>
  )
}

export const Card: React.FC<{ title: string; description: string; labels: string[]; demoLink?: string; sourceLink?: string; src: string }> = ({ demoLink, sourceLink, labels = [], description, title, src }) => {
  return (
    <div className="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="transition duration-200 ease-in-out transform h-48 bg-cover bg-gray-200 overflow-hidden block">
        <Image src={src} alt="" fill />
      </div>
      <div className="p-6" style={{ flex: '1 1 0%' }}>
        <div className="mb-3">
          <h3 className="text-xl">{title}</h3>
        </div>
        <div className="mb-3 font-light">
          <p>{description}</p>
        </div>
        <div>
          <div>
            <ul className="flex flex-row flex-wrap">
              {
                labels.map((label, index) => {
                  return (
                    <li key={index} className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                      <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">{label}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex flex-row items-center">
          {
            demoLink ? (
              <LinkButton href={demoLink}>
                  <Demo />
                  <span className="w-2"></span>Demo
              </LinkButton>
            ) : null
          }
          {
            sourceLink ? (
              <LinkButton href={sourceLink}>
                  <Github />
                  <span className="w-2"></span>Source Code
              </LinkButton>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}
