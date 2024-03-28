import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global.js'
import theme from './Styles/theme.js'
// import { Home } from './pages/Home'
// import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)
