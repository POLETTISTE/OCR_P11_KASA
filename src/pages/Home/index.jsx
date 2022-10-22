import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'
import appartements from '../../data/data.json'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Fragment>
      <Banner
        text="Chez vous, partout et ailleurs"
        bg="banner-home"
        key="banner-home"
      />
      <div className="home-gallerie">
        {appartements &&
          appartements.map((appartement, index) => {
            return (
              <div
                className="logement-infos-home logement-image-max-width"
                key={`${index}-${appartement.id}`}
              >
                <Link to={`/Logement/${appartement.id}`}>
                  <Thumb
                    className="logement-infos-home logement-image-max-width"
                    texte={appartement.title}
                    image={appartement.cover}
                  />
                </Link>
              </div>
            )
          })}
      </div>
    </Fragment>
  )
}

export default Home
