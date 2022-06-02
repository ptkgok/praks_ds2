import { styled } from "../../../configs/design_system"


export const Container = styled("button", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 16px',
  gap: '10px',
  width: 'max-content',
  height: '44px',
  background: '$primary',
  borderRadius: '6px',
  border: '1.5px solid',
  color: '#FFFFFF',
  font: '14px/24px "Roboto", sans-serif',
  fontWeight: 'normal',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '$primary2',
  },
  '&:disabled': {
    background: '#CACACA',
    cursor: 'not-allowed',
  },
  '&:active': {
    background: '$primary3',
  },
  '& i': {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    variant: {
      outline: {
        border: '1px solid $primary',
        color: '$primary',
        background: 'none',
        '&:hover': {
          background: '$primary',
          color: 'white',
        },
        '&:active': {
          background: '$primary2',
        },
      },
    },
   size: {
      small: {
        fontSize: '12px',
        padding: '8px 16px',
      },
      medium: {
        fontSize: '14px',
        padding: '12px 16px',
      },
      large: {
        fontSize: '16px',
        padding: '8px 26px',
      },
      fullWidth: {
        padding: '10px 50px',
        width: '343px',
      }
   },
    color: {
      primary: {
        background: '$primary',
        color: '$black',
        border: 'solid 1.5px $primary',
        '&:hover': {
          background: '$black',
          color: '$primary',
          border: 'solid 1.5px $primary'
        },
        '&:active': {
          background: '$primary3',
        },
      },
      secondary: {
        background: '$secondary',
        color: '$white',
        border: 'solid 1.5px $secondary',
        '&:hover': {
          background: '$white',
          color: '$secondary',
          border: 'solid 1.5px $secondary'
        },
        '&:active': {
          background: '$secondary2',
        },
      },
      gray: {
        background: '#E8EDF1',
        color: '#252A31',
        border: 'solid 1.5px #E8EDF1',
        '&:hover': {
          background: '#DCE3E9',
        },
        '&:active': {
          background: '#CAD4DE',
        },
      },
    },
  },
})
