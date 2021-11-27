import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import GlobalStyles from "./components/Global";
import { Container } from "./components/layout/Container";
import Card from "./components/card/Card";
import Data from './Data';
import Footer from "./components/footer/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer:"#003333"
  },
  mobile: '768px',
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {Data.map((item, index) => (
            <Card key={index} item={ item }/>
          ))}
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
