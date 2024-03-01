class SVG {
    constructor(){
        this.shapeElement=""
        this.textElement = ""
    }

    makeshapeElement(renderText){
        this.shapeElement = renderText
    }
    maketextElement(text,color){
        this.textElement = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       ${this.shapeElement}
        ${this.textElement}
      
      </svg>`
    }

}

module.exports = SVG