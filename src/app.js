import {React, ReactDOM} from './react'

function Hello ({title} = {}) {
  return React.createElement('div', null, `hello world${title}`)
}

class App extends React.Component {
  render() {
    console.log(this.props)
    return React.createElement('div', null, `I am a App${this.props.title}`)
  }
}
class MyButton extends React.Component{
  render() {
    return React.createElement('button', {onclick: this.props.onClick}, 'Clickme')
  }
}
var helloWorld = React.createElement(Hello, {title: 'Number 1'}, null)
var helloWorld2 = React.createElement(Hello, {title: 'Number 2'}, null)
var regular = React.createElement('div', null, 'I just a regular div')
var parent = React.createElement('div', null, helloWorld, helloWorld2, regular, 'I just a text')
var myButton = React.createElement(MyButton, {onClick: () => console.log('working')}, null)
ReactDOM.render(parent, document.getElementById('root'))

ReactDOM.render(React.createElement(App, {title: 'Number 3'}, null), document.getElementById('root'))
ReactDOM.render(myButton, document.getElementById('root'))

// we expect to see:
// hello world
// hello world
// I just a regular div
// I just a text
