import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Kutang</h1>
        <Button width="500px">Close/Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </>
);
export default Root;
