import React, { useEffect } from 'react'
import Logo404 from "../img/404.svg"
import Layout from '~/components/Layout'
import Image from "next/image";
import { useRouter } from 'next/dist/client/components/navigation';
import Head from 'next/head';
export default function Custom404() {
  
 

  const router = useRouter()
  {setTimeout(()=>router.push("../"),3000)}
  return (<>
    <Head>
        <title>Ошибка 404</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout className='mx-auto max-w-[1180px] grid justify-center text-center'>
      <Image alt='404' src={Logo404} className='max-h-[400px]'/>
      <p className='font-basic mt-5'>Такой страницы не существует, вернитесь на главную страницу</p>
      <p></p>

    </Layout>
    
    </>)
}