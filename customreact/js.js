function customRender(reactElement  , container){
    const domElement = document.createElement(reactElement.type)
    domElement.setAttribute('href', reactElement.props.href)
    domElement.innerHTML= reactElement.props.children
    container.appendChild (domElement)
}
const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.example.com',   
        children: 'Click here'
    }
}

function customButtonRender(createButton , container){
    const buttonElement = document.createElement(createButton.type)
    buttonElement.setAttribute('onClick', createButton.props.onClick)
    buttonElement.innerHTML= createButton.props.children
    container.appendChild (buttonElement)
}

const createButton = {
    type: 'button',
    props:{
        onClick: () => alert('Button Clicked!'),
        children: 'Click Me'
    }   
}

const mainContainer = document.querySelector('#root')
customRender(reactElement  , mainContainer)
customButtonRender(createButton ,mainContainer)