import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'
import LogementLocalisation from '../../components/LogementLocalisation'
import dataLogement from '../../data/data.json'
import React, { Fragment, useEffect, useState } from 'react'

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
              <div className="logement">
                <Thumb
                  key={index}
                  className="home-gallerie-thumb"
                  texte={appartement.title}
                  image={appartement.cover}
                />
                <LogementLocalisation
                  localisation={appartement.location}
                  className="logement-localisation"
                />
              </div>
            )
          })}
      </div>
    </Fragment>
  )
}

export default Home
