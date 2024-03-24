const inquirer = require("inquirer")
const Circle = require('./lib/Circle') 
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")
const SVG = require("./lib/SVG")
const fs = require("fs")

function acceptPrompt(){
    inquirer.prompt([
        {
            type:"input",
            message:"enter logo text.",
            name:"text"
        },
        {
            type:"list",
            message:"enter logo text.",
            name:"textcolor",
            choices:["Red","Green","Purple","Blue","Grey","Pink","Orange","Brown","Black","White"]
        },
        {
            type:"list",
            message:"select a shape",
            name:"shape",
            choices:["Circle","Square","Triangle"]
        },
        {
            type:"list",
            message:"select shape color",
            name:"shapecolor",
            choices:["Red","Green","Purple","Blue","Grey","Pink","Orange","Brown","Black","White"]
        },
    ]).then(response => {
        switch(response.shape){

        case "Circle":
            var myLogoShape = new Circle()
            myLogoShape.setColor(response.shapecolor);
            generateSVG(myLogoShape, response);
            break;
        case "Triangle":
            var myLogoShape = new Triangle()
            myLogoShape.setColor(response.shapecolor);
            generateSVG(myLogoShape, response);
            break;
        case "Square":
            var myLogoShape = new Square()
            myLogoShape.setColor(response.shapecolor);
            generateSVG(myLogoShape, response);
            break;
        }
    })
}

function generateSVG(myLogoShape, response){
    var renderTextShape = myLogoShape.render()
    var mySVG = new SVG()
    mySVG.makeshapeElement(renderTextShape)
    mySVG.maketextElement(response.text, response.textcolor)
    var svgHTML = mySVG.render()
    console.log(svgHTML)
    fs.writeFileSync("logo.svg",svgHTML,function(err){
        if(err) throw err;
    })

}

acceptPrompt()