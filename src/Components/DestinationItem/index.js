import './index.css'

const DestinationItem = ({eachItem}) => {
  const {id, name, imgUrl} = eachItem
  return (
    <li className="Items-container" key={id}>
      <img src={imgUrl} alt="img" className="image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
