import Head from 'next/head'
import Image from 'next/image'

import {CrouselPage ,SectionPage ,ListPage ,MainSideBar , SectionOne, SectionTwo } from '../components/Common/MainPage/index'

export default function Home() {
  return (
    <>
    <CrouselPage/>
    <SectionPage />
    <SectionOne />
    <SectionTwo />
    <ListPage />
    </>
  )
}
