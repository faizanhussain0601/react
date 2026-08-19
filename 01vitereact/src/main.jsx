import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
 <h1>MyApp functioon</h1>
    )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//        href: 'https://google.com',
//        target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "faizan react"

const reactElement = React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "click me to visit google",
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    reactElement
)
