import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  min-height: 200px;

  iframe {
    transition: 0.3s;
  }

  &:hover {
    iframe {
      box-shadow: 0 0 10px 0 white;
      border: 1px solid rebeccapurple;
      /* z-index: 1; */
    }
  }
`;
