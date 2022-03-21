import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components"

const PaginationWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`

const Link = styled(RouterLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;
`

export const Styled = {
  PaginationWrapper,
  Link,
}