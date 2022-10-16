// import LogementImage from '../../components/LogementImage'
// import LogementNom from '../../components/LogementNom'
import Error from '../Error'
import LogementLocalisation from '../../components/LogementLocalisation'
import LogementTags from '../../components/LogementTags'
import LogementProprietaire from '../../components/LogementProprietaire'
import LogementAvatar from '../../components/LogementAvatar'
import LogementEtoiles from '../../components/LogementEtoiles'
import Dropdown from '../../components/Dropdown'
import Caroussel from '../../components/Caroussel'
import dataLogement from '../../data/data.json'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Logement = () => {
  const [appartements, setAppartements] = useState()
  // const [isValid, setIsValid] = useState(false)
  let { id } = useParams()

  const verifyIfIsValid = id.match(/^[a-z0-9]{8}$/i) !== null

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

  if (!verifyIfIsValid) {
    return <Error />
  }

  return (
    <div>
      <div className="logement-gallerie">
        {appartements &&
          //filtrer par pathname
          appartements
            .filter((appartement) => id.includes(appartement.id))
            .map((appartement, index) => {
              return (
                <Fragment key={`${index}-${appartement.id}`}>
                  <div className="logement-infos-home ">
                    <Caroussel images={appartement.pictures} />
                  </div>

                  <div className="logement-all-infos">
                    <div className="logement-infos">
                      <p className="logement-infos-title">
                        {appartement.title}
                      </p>
                      <LogementLocalisation
                        localisation={appartement.location}
                      />
                      <div className="logement-tags">
                        {appartements &&
                          appartement.tags.map((item, index) => {
                            return (
                              <LogementTags key={`${index}-tag`} tag={item} />
                            )
                          })}
                      </div>
                    </div>
                    <div className="logement-proprietaire-rating">
                      <div className="logement-proprietaire-infos">
                        <LogementProprietaire
                          nomPrenom={appartement.host.name}
                        />
                        <LogementAvatar avatar={appartement.host.picture} />
                      </div>
                      <LogementEtoiles etoiles={appartement.rating} />
                    </div>
                  </div>
                  <div className="dropdowns-page-logement">
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
