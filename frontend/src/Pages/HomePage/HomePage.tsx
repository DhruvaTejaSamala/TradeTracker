import React from 'react'
import Hero from '../../Components/Hero/Hero'

interface Props {}

const HomePage = (props: Props) => {
  return (
    <section className="dark:bg-gray-900 flex flex-col mx-auto md:h-screen lg:py-0">
      <Hero />
    </section >
  )
}

export default HomePage