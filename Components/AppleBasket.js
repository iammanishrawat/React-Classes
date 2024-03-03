const AppleBasket = ({appleCount, basketName}) => {
  return (
    <div className="apple-basket">
      <h1>{appleCount}</h1>
      <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket