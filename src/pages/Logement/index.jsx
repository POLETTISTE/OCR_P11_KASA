// import LogementImage from '../../components/LogementImage'
// import LogementNom from '../../components/LogementNom'
import LogementLocalisation from '../../components/LogementLocalisation'
import LogementTags from '../../components/LogementTags'
import LogementProprietaire from '../../components/LogementProprietaire'
import LogementAvatar from '../../components/LogementAvatar'
import LogementEtoiles from '../../components/LogementEtoiles'
import Dropdown from '../../components/Dropdown'
import Thumb from '../../components/Thumb'
import dataLogement from '../../data/data.json'
import React, { Fragment, useEffect, useState } from 'react'

const Logement = () => {
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
    <div>
      <div className="home-gallerie">
        {appartements &&
          appartements.map((appartement, index) => {
            return (
              <Fragment key={index}>
                <Thumb
                  className="logement-infos-home"
                  texte={appartement.title}
                  image={appartement.pictures[0]}
                />
                <div className="logement-infos">
                  <LogementLocalisation localisation={appartement.location} />
                  {appartements &&
                    appartement.tags.map((item, index) => {
                      return <LogementTags tag={item} />
                    })}
                </div>
                <div className="proprietaire-rating">
                  <LogementEtoiles etoiles={appartement.rating} />
                  <div className="proprietaire-infos">
                    <LogementProprietaire nom={appartement.host.name} />
                    <LogementAvatar avatar={appartement.host.picture} />
                  </div>
                </div>
                <div className="dropdowns">
                  <Dropdown
                    titre="description"
                    texte={appartement.description}
                  />
                  <Dropdown titre="équipements" texte="a renseigner" />
                </div>
              </Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default Logement
