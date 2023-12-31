import React from 'react'
import Layout from '~/components/Layout'
import { api } from '~/utils/api'
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Favourites() {
  const {data:posts}=(api.favourit.getLike.useQuery() || null)
  const {data:session}= useSession()
  return (
    <>
     <Head>
        <title>Избранное</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout >
    
      <div className='mx-auto rounded flex flex-col justify-center  p-5 gap-5 max-w-[1180px]'>
      <p className='font-basic text-2xl'>Избранное</p>
      {session && posts?.length==0 &&
        <div>
          <div className='flex justify-center items-center shadow-xl h-[400px]'>
            <p className='text-xl font-basic'>В списке не обнаружено товаров.</p>
            <Link className='p-3 px-6 bg-red-600 text-white' href="/catalog">Перейти в каталог</Link>
          </div>


        </div>
}       
{!session && (
  <div>
    
    <div className='flex justify-center flex-col gap-5 items-center shadow-xl h-[400px]'>
      <p className='text-xl font-basic'>Для доступа к избранным товарам необходимо <Link className='bg-red-600 p-3 rounded-xl text-white' href='/login'>авторизоваться.</Link>  </p>
      <p className='text-xl font-basic'>Если у вас нет аккаунта вы можете <Link className='bg-red-600 p-3 rounded-xl text-white' href='registration'>зарегестрироваться</Link></p>
      
    </div>


  </div>
)}
        
        
        {posts?.map((item)=>(
          <div className='min-h-[270px] w-full grid p-5 shadow-xl rounded-xl  border-solid border-base border' key={item.postsID}>
            <div className='flex items-center gap-10 justify-between'>
              <img src={item.posts.imgs[0]?.altTitle} className='w-[150px] '/>
              <div className=' max-w-[500px]'>
                <p className="text-2xl">{item.posts.title}</p>
                <p className="text-lg">{item.posts.property}</p>
              </div>              
              <p>{item.posts.price} Р</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
    </>
  )
}

