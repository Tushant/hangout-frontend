import styled from 'styled-components';

export const DashboardContainer = styled.div`
  --spacing: 1rem;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px 1fr 70px;
  grid-template-columns: 200px 1fr;
  grid-template-areas: 'header header' 'nav    main' 'footer footer';
  width: 100%;
`;

export const Main = styled.main`
  flex: 1;
  grid-area: main;
  padding: var(--spacing);
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  background-color: #f4f7fa;

  @media screen and (min-width: 48rem) {
    --spacing: 2rem;
  }
`;

export const Wrapper = styled.div`
  --column-count: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--spacing) * -0.5);
  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-gap: var(--spacing);

  @media screen and (min-width: 48rem) {
    --column-count: 4;
  }

  @supports (display: grid) {
    margin: 0;
  }
`;

export const Card = styled.div`
  height: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const DashboardItem = styled.div`
  flex: 1 1 50%;
  grid-column-end: span 2;
  padding: calc(var(--spacing) / 2);

  @supports (display: grid) {
    padding: 0;
  }
`;
