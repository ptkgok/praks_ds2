import { styled, keyframes } from "../../../configs/design_system"

const scaleUp = keyframes({
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  });

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100px 100px 0px 100px',
    overflow: 'hidden',
    width: 40,
    height: 40
})

export const HoverPopoverContainer = styled('div', {
    width: 'max-content',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    background: '$black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    visibility: 'hidden',
    borderRadius: '8px',
    padding: '2px 2px',
    marginTop: '155px',
    color: 'white',
    '& li': {
        listStyle: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: 10,
        width: 130,
        '& a': {
            color: 'white',
            textDecoration: 'none',
        },
        '&:hover': {
            background: '$black2',
            color: 'white'
        }
    },
    '&:hover': {
        visibility: 'visible',
    }
})


export const Image = styled('img', {
    objectFit: 'center',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    '&:hover': {
        cursor: 'pointer',
        [`& + ${HoverPopoverContainer}`]: {
            visibility: 'visible',
            animation: `${scaleUp} 0.5s ease-in-out`,
        }
    }
})
