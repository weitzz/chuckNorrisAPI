
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './style/theme';
import Home from './pages'
function App() {
  return (
    <ThemeProvider theme={theme}>
     <Home/>
     <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
