import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDom.createRoot(document.querySelector('#root'))//making the root equal to the id in the html
root.render(<App />)//passing in a app component
