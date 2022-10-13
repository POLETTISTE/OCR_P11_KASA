import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'
import dataLogement from '../../data/data.json'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [appartements, setAppartements] = useState()

  const getApiData =
    // async
    () => {
      // await fetch(dataLogement)
      // .then((response) => response.json())
      // .then((data) => setAppartements(data))
      // .catch((err) => console.log(err))
      setAppartements(dataLogement)
    }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <Fragment>
      <Banner text="Chez vous, partout et ailleurs" bg="banner-home" />
      <div className="home-gallerie">
        {appartements &&
          appartements.map((appartement, index) => {
            return (
              <Link to={`/Logement/${appartement.id}`} key={index}>
                <Thumb
                  className="logement-infos-home"
                  texte={appartement.title}
                  image={appartement.cover}
                />
              </Link>
            )
          })}
      </div>
    </Fragment>
  )
}

export default Home
