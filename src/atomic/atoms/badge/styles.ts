import { styled } from "../../../configs/design_system"


export const Container = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  width: 'max-content',
  background: 'transparent',
  borderRadius: '100px',
  border: '1.5px solid',
  color: '$primary',
  font: '12px "Roboto", sans-serif',
  fontWeight: 'bold',
  lineHeight: '16px',
  transition: 'all 0.3s ease',
  '& i': {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    variant: {
      outline: {
        border: '1px solid',
        background: 'none',
      },
    },
    color: {
      primary: {
        background: '$primary',
        color: '$black',
        border: 'solid 1.5px $primary',
      },
      secondary: {
        background: '$secondary',
        color: '$white',
        border: 'solid 1.5px $secondary',
      },
      gray: {
        background: '#E8EDF1',
        color: '#252A31',
        border: 'solid 1.5px #E8EDF1',
      },
    },
  },
})
