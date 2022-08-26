const OffersList = ({icon, title, className, description}) => {
  return (
    <div className={className}>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default OffersList