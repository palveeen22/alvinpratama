import React from 'react'

export const AboutPage = () => {
  return (
    <section>
      <article
        className='flex flex-col gap-4'
      >
        <h1 className='text-5xl dark:text-foreground/100 font-bold text-pretty'>
          About
        </h1>
        <p className='text-xl break-words dark:text-foreground/80 text-pretty'>
          ....
        </p>
      </article>
    </section>
  )
};