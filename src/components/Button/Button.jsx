import style from './Button.module.css'

const Button = ({ children, onClick, type = 'button' }) => {
    return (
      <button className={style.btn} type={type} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export {Button};
  