import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'

import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <div className="App">
          Hello world!
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
