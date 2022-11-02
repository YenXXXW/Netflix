import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import { axiosActionMovies, axiosComedyMovies, axiosDocumentaries, axiosHorrorMovies, axiosnetflixOriginals, axiosRomanceMovies, axiosTopRated, axiosTrending } from '../apl/movieApi'
import axios from 'axios'
import { Movie } from '../typings'
import { Banner } from '../components/banner'
import { Row } from '../components/row'

interface Props {
  netflixOriginals : Movie[],
  TrendingNow: Movie[]
  TopRated: Movie[]
  ActionMovies: Movie[]
  ComedyMovies: Movie[]
  HorrorMovies: Movie[]
  RomanceMovies: Movie[]
  Documentaries: Movie[]
}

const Home= ({netflixOriginals ,
              ActionMovies,
              ComedyMovies,
              Documentaries,
              HorrorMovies,
              RomanceMovies,
              TopRated,
              TrendingNow,} : Props) => {
  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
      <Head>
        <title>Netflix - Home</title>
      </Head>
      <Header />
      <main className='pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals}/>
        <section className='md:space-y-24'>
          <Row title="Trending Now" movies={TrendingNow} />
          <Row title="Top Rated" movies={TopRated} />
          <Row title="Action Thrillers" movies={ActionMovies} />
          
          <Row title="Comedies" movies={ComedyMovies} />
          <Row title="Horror" movies={HorrorMovies} />
          <Row title="Romance" movies={RomanceMovies} />
          <Row title="Documentaries" movies={Documentaries} />
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps : GetServerSideProps =async ()=>{
  const [
    netflixOriginals,
    Trending ,
    TopRated ,
    ActionMovies ,
    ComedyMovies ,
    HorrorMovies , 
    RomanceMovies ,
    Documentaries ,
   ]= await Promise.all([
    axios.get(axiosnetflixOriginals),
    axios.get(axiosTrending),
    axios.get(axiosTopRated),
    axios.get(axiosActionMovies),
    axios.get(axiosComedyMovies),
    axios.get(axiosHorrorMovies),
    axios.get(axiosRomanceMovies),
    axios.get(axiosDocumentaries)
])

  return {
    props :{
      netflixOriginals : netflixOriginals.data.results,
      TrendingNow :Trending.data.results,
      TopRated : TopRated.data.results,
      ActionMovies : ActionMovies.data.results,
      ComedyMovies : ComedyMovies.data.results,
      HorrorMovies : HorrorMovies.data.results ,
      RomanceMovies : RomanceMovies.data.results ,
      Documentaries : Documentaries.data.results      
    }
  }

}