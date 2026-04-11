// ════ FONTSOURCE — SUBSTITUIR POR CLIENTE ════
// Trocar os imports abaixo pelas fontes definidas no design-system.json
// tokens.typography.font-display.fontsource_imports[]
// tokens.typography.font-sans.fontsource_imports[]
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/400-italic.css'
import '@fontsource/source-sans-3/300.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/500.css'
// ════ FIM FONTSOURCE ════

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
