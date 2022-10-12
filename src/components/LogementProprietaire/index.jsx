const LogementProprietaire = (props) => {
  const nomPrenom = props.nomPrenom
  const nom = nomPrenom.split(' ').pop()
  const prenom = nomPrenom.split(' ').shift()

  return (
    <div className="logement-proprietaire">
      <p>{prenom}</p>
      <p>{nom}</p>
    </div>
  )
}

export default LogementProprietaire
