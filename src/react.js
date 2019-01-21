import {isClass, isStateLessComponent} from './reactUtils'

function anElement(element, props, children) {
  if (isClass(element)) {
    const component = new element(props)
    return component.render()
  } else if (isStateLessComponent(element)) {
    return element(props)
  } else {
    return handleHtmlElement(element, props, children)
  }
}

function createElement(el, props, ...children) {
  return anElement(el, props, children)
}

function handleHtmlElement(element, props, children) {
  const anElement = document.createElement(element)
  if(props && props.ref) {
    props.ref(anElement)
  }

  children.forEach(function(child) {
    if (typeof child === 'object') {
      anElement.appendChild(child)
    } else {
      anElement.innerHTML += child
    }
  })
  if(props) {
    Object.keys(props).forEach((propName) => {
      if(/^on.*$/.test(propName)) {
        anElement.addEventListener(propName.substr(2).toLowerCase(), props[propName])
      } else {
        anElement.setAttribute(propName, props[propName])
      }
    })
  }
 debugger
 return anElement
}

class Component{
  constructor(props) {
    console.log(props)
    this.props = props
  }
}

const React = {
  createElement,
  Component
}

const ReactDOM = {
  render: function(el, domEl) {
    domEl.appendChild(el)
  }
}

export {React, ReactDOM}

