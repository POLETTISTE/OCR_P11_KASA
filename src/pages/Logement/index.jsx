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
import { Link } from 'react-router-dom'
import { clearConfigCache } from 'prettier'

const Logement = () => {
  const [appartements, setAppartements] = useState()
  const urlcourante = document.location.pathname

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
      <div className="logement-gallerie">
        {appartements &&
          //filtrer par pathname
          appartements
            .filter((appartement) => urlcourante.includes(appartement.id))
            .map((appartement, index) => {
              return (
                <Fragment key={index}>
                  <Thumb
                    className="logement-infos-home"
                    // texte={appartement.title}
                    image={appartement.pictures[0]}
                    id={appartement.id}
                  />

                  <p>{appartement.title}</p>
                  <div className="logement-infos">
                    <LogementLocalisation localisation={appartement.location} />
                    <div className="logement-tags">
                      {appartements &&
                        appartement.tags.map((item, index) => {
                          return <LogementTags key={index} tag={item} />
                        })}
                    </div>
                  </div>
                  <div className="logement-proprietaire-rating">
                    <LogementEtoiles etoiles={appartement.rating} />
                    <div className="logement-proprietaire-infos">
                      <LogementProprietaire nomPrenom={appartement.host.name} />
                      <LogementAvatar avatar={appartement.host.picture} />
                    </div>
                  </div>
                  <div className="dropdowns">
                    <Dropdown
                      titre="Description"
                      texte={appartement.description}
                    />

                    <Dropdown
                      titre="Équipements"
                      texte={appartement.equipments.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    />
                  </div>
                </Fragment>
              )
            })}
      </div>
    </div>
  )
}

export default Logement
