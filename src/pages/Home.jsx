import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row title="Up Coming" fetchURL={requests.requestsUpComing} />
        <Row title="Popular" fetchURL={requests.requestsPopular} />
        <Row title="Trending" fetchURL={requests.requestsTrending} />
        <Row title="Top Rated" fetchURL={requests.requestsTopRated} />
        <Row title="Horror" fetchURL={requests.requestsHorror} />
    </>
  )
}

export default Home