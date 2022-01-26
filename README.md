## creation project
```
npm init vite@latest application-name --template react-ts
```

## file deletion
- [x] src/App.css
- [x] src/favicon.svg
- [x] src/index.css
- [x] src/logo.svg

## file changes
### src/App.tsx
```
function App() {
return <h1>Hello World</h1>
}
export default App
```

### src/main.tsx
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
```

## installation of dependencies
```
npm install
```

## run project
```
npm run dev
```