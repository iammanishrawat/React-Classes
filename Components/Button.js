const Button = ({imageUrl, buttonName}) => {
  return (
    <button type="button" title={buttonName} className="counter-button">
        <img src={imageUrl} alt={buttonName} />
    </button>
  )
}

export default Button