import { useContext, useEffect } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experiences from "./components/experiences/experiences";
import Intro from "./components/intro/intro";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ParticlesBg from 'particles-bg'


const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const muiLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  const muiTheme = darkMode ? muiDarkTheme : muiLightTheme;

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return (
    <div>
      <section className="intro-section">
        <ParticlesBg
          type="circle"
          num={200}
          bg={true}
        />
        <Intro darkMode={darkMode}/>
      </section>
      <ThemeProvider theme={muiTheme}>
        <Toggle />
        <About />
        <Experiences />
        <Contact />
      </ThemeProvider>
    </div>

  );
};

export default App;
