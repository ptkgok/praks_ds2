import { styled } from "../../../configs/design_system"

export const Container = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 5em',
  width: '100%',
  height: '80px',
  background: '$black',
  overflow: 'hidden',
  '@media (max-width: 646px)': {
    padding: '0px 0.8em',
  }
})


export const RightSide = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
  padding: '10px 0px',
  '@media (max-width: 640px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    gap: 0,
    height: '70vh',
    position: 'absolute',
    top: 0,
    left: 0,
    background: '$black',
  }
})

export const LeftSide = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
})

export const ListOptions = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
  listStyle: 'none',
  marginRight: '1.5rem',
  '& a': {
    color: '$white',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '19px',
    '&:hover': {
      color: '$primary',
    }
  },
  '@media (max-width: 640px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  }
})