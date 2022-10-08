import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'
import dataLogement from '../../data/data.json'
import React, { useEffect, useState } from 'react'

function Home() {
  const [appartements, setAppartements] = useState()

  const getApiData = async () => {
    await fetch({ dataLogement })
      .then((res) => res.json())
      .then((data) => setAppartements(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div>
      <div>
        {appartements &&
          appartements.map((appartement) => {
            // console.log(appartement)
            return <div>{appartement.cover}</div>
          })}
      </div>

      <div>
        <Banner text="Chez vous, partout et ailleurs" bg="banner-home" />

        <div className="thumb-gallery">
          <Thumb text={'texte de la photo'} />
          <Thumb text={'texte de la photo'} />
          <Thumb text={'texte de la photo'} />
        </div>

        <div className="accueil"></div>
      </div>
    </div>
  )
}

export default Home
