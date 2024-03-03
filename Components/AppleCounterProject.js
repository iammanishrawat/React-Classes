import Button from './Button'
import leftArrow from '../assets/images/left_arrow.png'
import rightArrow from '../assets/images/right_arrow.png'
import AppleBasket from './AppleBasket'
import "./style.scss"

const AppleCounterProject = () => {
  return (
    <section className='flex-box'>
      <AppleBasket appleCount={10} basketName='Basket 1' />
      <Button imageUrl={leftArrow} buttonName="Left Arrow" />
      <Button imageUrl={rightArrow} buttonName="Right Arrow" />
      <AppleBasket appleCount={0} basketName='Basket 2' />
    </section>
  )
}

export default AppleCounterProject