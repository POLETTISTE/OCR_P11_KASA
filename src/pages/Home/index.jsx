import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'
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
              <Thumb
                key={index}
                className="logement-infos-home"
                id={appartement.id}
                texte={appartement.title}
                image={appartement.cover}
              />
            )
          })}
      </div>
    </Fragment>
  )
}

export default Home
