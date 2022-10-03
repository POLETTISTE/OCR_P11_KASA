import data from '../data/Data'

const Appartements = () => {
  return (
    <div>
      {data.map((appartement) => (
        <ul key={`${appartement.id}`}>
          <li>{appartement.id}</li>
          <li>{appartement.title}</li>
          <li>{appartement.rating}</li>
          <li>-----------------</li>
        </ul>
      ))}
    </div>
  )
}

export default Appartements
