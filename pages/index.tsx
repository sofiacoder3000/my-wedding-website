import type { NextPage } from 'next'
import Head from 'next/head'
import CoverPrincipal from '../components/cover-principal'
import CoverSocialMedia from '../components/cover-social-media'
import CardPersonChat from '../components/card-person-chat'
import CardRegular from '../components/card-regular'
import CardRegular2 from '../components/card-regular2'
import CardWithModal from '../components/card-with-modal'
import TimerCountDown from '../components/timer-count-down'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-gray-900 dark:bg-gray-800 dark:text-white">
      <Head>
        <title>Kevin y Jakeline | Nuestra Boda</title>
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
        <section className="flex w-full items-center justify-around bg-orange-50 py-6 px-2 xxs:px-10 sm:px-20 md:px-50 dark:bg-gray-900 dark:text-white"> 
          <TimerCountDown />
        </section>
        <section className="xs:flex w-full items-center justify-around py-6 dark:bg-gray-800 dark:text-white"> 
          <div className="xs:flex w-full items-center justify-around max-w-5xl">
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
          </div>
        </section>
        <section className="xs:flex w-full items-center justify-around py-6 dark:bg-gray-800 dark:text-white"> 
          <div className="xs:flex w-full items-center justify-around max-w-5xl">
            <CardRegular 
              icon=""            
              title="Ceremonia" 
              description="La ceremonia será el sábado 3 de Diciembre del 2022 a las 11:00am  en Jr. Tarapacá 627, 10001 Huánuco-Perú."
              url="https://goo.gl/maps/omZU1npVg8t6qsRa6"
              textbuttom="VER MAPA"
            />               
            <CardRegular 
              icon=""
              title="Fiesta" 
              description="La fiesta será el sábado 3 de Diciembre del 2022 a las 12:00am  en Jr. Tarapacá 627, 10001 Huánuco-Perú."
              url="https://goo.gl/maps/omZU1npVg8t6qsRa6"
              textbuttom="VER MAPA"
            />
          </div>
        </section>
        <section className="md:flex w-full items-center justify-around bg-orange-50 py-6 dark:bg-gray-900 dark:border-gray-800">
          <div className="xs:flex w-full items-center justify-around max-w-5xl">
            <CardRegular2 
              title="¿Canciones que no pueden faltar?" 
              description="Puedes recomendar canciones o artistas que no pueden faltar en la boda"
              url="https://chat.whatsapp.com/Jn9HGhN1eo6GCcKM0v575J"
              textbuttom="SUGERIR MÚSICA"
            />
          </div>
        </section>        
        <section className="md:flex w-full items-center justify-around py-6 "> 
          <div className="xs:flex w-full items-center justify-around max-w-5xl">
            <CardWithModal 
              title="Regalo" 
              titleModal="Nuestras cuentas 😇"
              description="Si quieres, puedes hacernos un regalo para nuestra boda o luna de miel."
              textbuttom="VER DATOS"
              items={[
                {id:1, title:"Plin", lines:["986896116"], image:"https://d3167i30r8muxf.cloudfront.net/plin-logo.png"},
                {id:2, title:"Yape", lines:["986896116", "978113924"], image:"https://d3167i30r8muxf.cloudfront.net/yape-app-logo.png"}
              ]}
            /> 
          </div>
        </section>
        <section className="relative flex w-full items-center justify-around py-6 bg-cover-novios bg-cover bg-center">
          <div className="absolute h-full w-full bg-white dark:bg-zinc-800 opacity-75 dat z-0"></div>
          <CoverSocialMedia
            icon=""
            urlSocialMedia="https://www.instagram.com/explore/tags/kevinysofia/"
            title="#KevinYSofia"
            description="Usa nuestro hashtag en instagram para subir tus fotos y videos"
            textbuttom="Ver en instagram"
          />
        </section>
        <section className="flex w-full items-center justify-around bg-orange-50 py-6 dark:bg-gray-900 dark:border-gray-800"> 
          <div className="w-full rounded-lg px-6 py-4">
            <div className="flex flex-col items-center py-10 font-ebgaramond text-3xl sm:text-4xl md:text-5xl italic text-yellow-500 dark:text-yellow-500">
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

      <footer className="flex h-14 w-full items-center justify-center border-t text-sm">
        <a
          className="flex items-center justify-center gap-2"
          href="#"
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