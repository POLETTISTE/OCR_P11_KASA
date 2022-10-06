import LogementImage from '../../components/LogementImage'
import LogementNom from '../../components/LogementNom'
import LogementLocalisation from '../../components/LogementLocalisation'
import LogementTags from '../../components/LogementTags'
import LogementProprietaire from '../../components/LogementProprietaire'
import LogementAvatar from '../../components/LogementAvatar'
import LogementEtoiles from '../../components/LogementEtoiles'

import Dropdown from '../../components/Dropdown'

const Logement = () => {
  return (
    <div>
      <LogementImage />
      <div className="logement-infos">
        <LogementNom />
        <LogementLocalisation />
        <LogementTags />
      </div>
      <div className="proprietaire-rating">
        <LogementEtoiles />
        <div className="proprietaire-infos">
          <LogementProprietaire />
          <LogementAvatar />
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown titre="description" texte="texte" />
        <Dropdown titre="équipements" texte="texte" />
      </div>
    </div>
  )
}

export default Logement
