import type { NextPage } from 'next'
import Head from 'next/head'
import CoverPrincipal from '../components/cover-principal'
import CardPersonChat from '../components/card-person-chat'
import CardRegular from '../components/card-regular'
import CardRegular2 from '../components/card-regular2'
import TimerCountDown from '../components/timer-count-down'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <section className="relative flex w-full items-center justify-around py-6 bg-cover-novios bg-cover bg-center">
          <div className="absolute h-full w-full bg-zinc-800 opacity-60 z-0"></div>
          <CoverPrincipal
            messagetop="¡NOS CASAMOS!"
            title="Kevin y Sofía"
            messagebuttom="SÁBADO 03 DE DICIEMBRE"
          />
        </section>
        <section className="flex w-full items-center justify-around bg-orange-50 py-6"> 
          <TimerCountDown />
        </section>
        <section className="md:flex w-full items-center justify-around py-6"> 
          <CardPersonChat 
            fullname="Kevin Montes" 
            subtitle="Novio" 
            picture="https://d3167i30r8muxf.cloudfront.net/carlitos_kevin.jpg" 
            url="https://wa.link/3kd77p"
          />               
          <CardPersonChat 
            fullname= "Sofia Campos" 
            subtitle="Novia" 
            picture="https://d3167i30r8muxf.cloudfront.net/girl.jpg"
            url="https://wa.link/9jco3t"
          />
        </section>
        <section className="md:flex w-full items-center justify-around py-6"> 
          <CardRegular 
            title="Ceremonia" 
            description="La ceremonia será el sábado 3 de Diciembre del 2022 a las 11:00am  en Jr. Tarapacá 627, 10001 Huánuco-Perú."
            url="https://goo.gl/maps/omZU1npVg8t6qsRa6"
            textbuttom="VER MAPA"
          />               
          <CardRegular 
            title="Fiesta" 
            description="La fiesta será el sábado 3 de Diciembre del 2022 a las 12:00am  en Jr. Tarapacá 627, 10001 Huánuco-Perú."
            url="https://goo.gl/maps/omZU1npVg8t6qsRa6"
            textbuttom="VER MAPA"
          />  
        </section>
        <section className="md:flex w-full items-center justify-around bg-orange-50 py-6">
          <CardRegular2 
            title="¿Canciones que no pueden faltar?" 
            description="Puedes recomendar canciones o artistas que no pueden faltar en la boda"
            url="https://chat.whatsapp.com/Jn9HGhN1eo6GCcKM0v575J"
            textbuttom="SUGERIR MÚSICA"
          />  
        </section>        
        <section className="md:flex w-full items-center justify-around py-6"> 
          <CardRegular 
            title="Regalo" 
            description="Si quieres, puedes hacernos un regalo para nuestra boda o luna de miel. Hace clic para ver nuestros datos bancarios y hacer una transferencia o un depósito. Si prefieres tambièn tenemos Plin y Yape."
            url="https://goo.gl/maps/omZU1npVg8t6qsRa6"
            textbuttom="VER DATOS"
          /> 
        </section>
        <section className="flex w-full items-center justify-around bg-orange-50 py-6"> 
          <div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-700 px-6 py-4">
            <div className="flex flex-col items-center py-10 font-ebgaramond text-2xl sm:text-4xl md:text-5xl italic">
                Los esperamos!
            </div>
          </div>
        </section>
        <section className="md:flex w-full items-center justify-around py-6"> 
          <CardPersonChat 
            fullname="Diana Campos" 
            subtitle="Wedding Planner" 
            picture="https://d3167i30r8muxf.cloudfront.net/Diana-Campos.jpg" 
            url="https://wa.link/l2uigi"
          />
        </section>
        
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TerraSofi
        </a>
      </footer>
    </div>
  )
}

export default Home
