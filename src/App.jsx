import { useContext } from "react";
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

  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()

  return (
    <div>
      <div
        style={{
          color: darkMode && "white",
        }}
      >
        {/* <div>
          <ParticlesBg
            color="#87CEEB"
            type="circle"
            num={2}
            bg={true}
          />
          <ParticlesBg
            color="#87CEFA"
            type="circle"
            num={2}
            bg={true}
          />
        </div> */}
        <ParticlesBg
          type="circle"
          num={200}
          bg={true}
        />
        <Intro darkMode={darkMode}/>
      </div>
      <div
        style={{
          backgroundColor: darkMode ? "#222932" : "white",
          color: darkMode && "white",
        }}
      >
        <ThemeProvider theme={muiTheme}>
          <Toggle />

          <About />
          <Experiences />
          {/* <Projects /> */}
          <Contact />
        </ThemeProvider>
      </div>
    </div>

  );
};

export default App;
