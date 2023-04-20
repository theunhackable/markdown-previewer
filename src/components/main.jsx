import React, { Component } from 'react';
import '../App.css';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            html: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // doSomething()
        const newText = event.target.value;
        console.log(newText)
        this.setState(
            (prevState) =>{
                return {
                    text: newText
                }
            }    
        );
        
        // call the converter here after changing the text
        this.setState((prevState) =>{
            return {
                html: this.marked.parse(prevState.text)
            }
        })
        
        
    }

    componentWillMount(){
        // let us setup our marked renderer to use

        this.marked = marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code, lang) {
              const language = hljs.getLanguage(lang) ? lang : 'js';
              return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
            pedantic: false,
            gfm: true,
            sanitize: false,
            smartypants: false,
            xhtml: false,
            breaks: true
          });
    }

    componentDidMount(){
        const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"`

    this.setState(
        () => {
            return {text: defaultText};
        }
    );

    this.setState(
        () => {
            return {
                html: this.marked.parse(defaultText)
            }
        }
    )
    
    }

    render() { 
        return ( 
        <div id='container'>
            <textarea value={this.state.text} onChange={this.handleChange} id='editor'>
            
            </textarea>
            <output id='preview' dangerouslySetInnerHTML={{__html: this.state.html}}>
                
            </output>
        </div> );
    }
}
 
export default Main;