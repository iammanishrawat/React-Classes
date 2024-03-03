import Button from './Button';
import leftArrow from '../assets/images/left_arrow.png';
import rightArrow from '../assets/images/right_arrow.png';
import AppleBasket from './AppleBasket';
import './style.scss';

const AppleCounterProject = () => {
  const totalAppleCount = 10;
  let rightAppleCount = 0;
  let leftAppleCount = totalAppleCount - rightAppleCount;

  const leftClickHandler = () => {
    if(rightAppleCount > 0){
      rightAppleCount--;
      leftAppleCount++;
      console.log(leftAppleCount);
    }
  };
  const rightClickHandler = () => {
    if(leftAppleCount > 0){
      leftAppleCount--;
      rightAppleCount++;
      console.log(rightAppleCount);
    }
  };

  // jsx area

  return (
    <>
      <section className="flex-box">
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          imageUrl={leftArrow}
          buttonName="Left Arrow"
          clickHandler={leftClickHandler}
        />
        <Button
          imageUrl={rightArrow}
          buttonName="Right Arrow"
          clickHandler={rightClickHandler}
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
      <button
        style={{
          margin: '15px auto',
          display: 'block',
          padding: '15px',
        }}
        onClick={() => {
          console.log(hello);
        }}
      >
        Re-Render
      </button>
    </>
  );

  // jsx area
};

export default AppleCounterProject;
