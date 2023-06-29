import { StyledBurger } from './Burger.styled';

interface IBurger {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: IBurger) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
