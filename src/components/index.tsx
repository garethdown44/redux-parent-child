import styled from '@emotion/styled'

export const SaveSuccessMessage = styled.div<{ isSaveSuccess: boolean }>`
  display: ${props => props.isSaveSuccess ? 'block' : 'none'};
  color: green;
`