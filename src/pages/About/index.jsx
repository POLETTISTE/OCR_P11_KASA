import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

const About = () => {
  return (
    <div>
      <Banner bg="banner-about" />
      <Dropdown titre="Fiabilité" texte="texte" />
      <Dropdown titre="Respect" texte="texte" />
      <Dropdown titre="Service" texte="texte" />
      <Dropdown titre="Responsabilité" texte="texte" />
    </div>
  )
}

export default About
