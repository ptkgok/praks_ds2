import { styled } from "../../../configs/design_system"

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: 'max-content',
  minWidth: '200px',
  border: '1px solid #403D4A',
  borderRadius: '4px',
  'i': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: 50
  }
})

export const ContainerGroup = styled('div', {
  
})

export const Label = styled('label', {
  display: 'flex',
  paddingLeft: 5,
})

export const StatusField = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
})

export const Field = styled('input', {
  display: 'flex',
  width: '100%',
  borderRadius: '4px',
  minHeight: '40px',
  border: 'none',
  outline: 'none',
  padding: '0px 5px',
  '&:hover': {
    [`& + ${Container}`]: {
      border: 'solid green',
    }
  }
})