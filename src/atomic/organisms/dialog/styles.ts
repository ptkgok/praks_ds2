import { styled,keyframes } from "../../../configs/design_system";
import * as DialogPrimitive from '@radix-ui/react-dialog';


const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
});

export const StyledContent = styled(DialogPrimitive.Content, {
  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-out`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 16px 16px',
    gap: '16px',
    width: '343px',
    height: 'max-content',
    background: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(37, 42, 49, 0.16), 0px 8px 24px rgba(37, 42, 49, 0.24)',
    borderRadius: '12px',
    textAlign: 'center'
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
});
