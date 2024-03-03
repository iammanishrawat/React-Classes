const Button = ({imageUrl, buttonName, clickHandler}) => {
  return (
    <button type="button" title={buttonName} className="counter-button" onClick={clickHandler}>
        <img src={imageUrl} alt={buttonName} />
    </button>
  )
}

export default Button