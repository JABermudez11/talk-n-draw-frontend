import React, { Component } from 'react'

import p5 from 'p5'
import "../css/Canvas.css"

class Canvas extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    Sketch = (p) => {
        p.setup = () => {
            const can = p.createCanvas(600, 600);
            p.background(230);
            // width of lines
            p.strokeWeight(5);
            // color
            p.stroke(104)

            const x = (p.windowWidth - p.width) / 2;
            const y = (p.windowHeight - p.height) / 2;
            can.position(x, y);

            // const div = p.createDiv("Toolbar")            

            const saveBtn = p.createButton("Save Drawing")
            saveBtn.mousePressed(this.saveImg)

            const eraseBtn = p.createButton("Eraser")
            eraseBtn.mousePressed(this.setEraser)

            const blue = p.createButton("Blue")
            blue.mousePressed(this.setBlue)

            const red = p.createButton("Red")
            red.mousePressed(this.setRed)

            const yellow = p.createButton("Yellow")
            yellow.mousePressed(this.setYellow)
            
            // p.createDiv("Title Drawing")
            
            // const inp = p.createInput('');
            // inp.input(this.handleInput);  

            p.createDiv()

            const clearBtn = p.createButton("Clear Drawing")
            clearBtn.mousePressed(this.clearImg)
            
        }

        this.setYellow = () => {
            p.stroke(0, 255, 0)
        }

        this.setRed = () => {
            p.stroke(255, 0, 0)
        }

        this.setBlue = () => {
            p.stroke(0,0,255)
        }

        this.setEraser = () => {
            p.erase(10)
        }

        this.clearImg = () => {
            // p.clear()
        }

        this.handleInput = () => {
            // console.log(this.value)             
        }

        this.saveImg = () => {
            // p.save()
            p.saveCanvas()
        }
   
        p.draw = () => {
            if (p.mouseIsPressed) {
                p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            }             
        }
     }    

    render() {
        return (
            <div ref={this.myRef} className="wholeCanvas">                                
            </div>            
        )
    }
}

export default Canvas