const placeholder = `
Let's see how a Markdown Previewer works!
## Headers:
Place a hashtag followed by a space in front for each level of header you want to achieve.
# H1
## H2
### H3
#### H4
##### H5
###### H6
<br>

## Sharing Code:

Place 3 backticks before and after your code block.

\`\`\`

let x = someFunction(5, 10);
function someFunction(a, b) {
    return a * b;
}


\`\`\`
<br>

## Styling text:
Place text inside of ** ** to make it  **bold**.
Place text inside of _ _ to make it _italic_.
Or, you can have it  **_both!_** ways.
And strikethrough text by placing it inside of ~~ ~~ ~~crossing stuff out~~.

<br>

## Adding links:
Put text inside of [] and the URL inside of ()
[Let's connect!](https://www.linkedin.com/in/pia-torain-dev)

<br>

## Add a block quote:
Precede it by > and a space
> Block Quotes!

<br>

## Share a list:
Precede each level by a hyphen and a space.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


Numbered lists.
1. apple 
2. orange
3. banana

## Embed images:

<img src="https://i.ibb.co/ZmZWsK4/DNA.png" alt="DNA" border="0" />
`;

class App extends React.Component {
    state = {
        text: placeholder
    }
  
    handleChange = (e) => {
        this.setState({
        text: e.target.value
        })
    }
  
    render() {
        const { text } = this.state;
        
        const markdown = marked(text, { breaks: true });
        
        return(
            <div>
                <div className="col">
                    <div className="col-10 mx-auto">
                        <h5 className="text-center title editor">Editor</h5>
                        <textarea id="editor" className="form-control p-2" value={text} onChange={this.handleChange}/>
                    </div>
                    <div className="col-12 mx-auto" >
                        <h5 className="text-center title">Preview</h5>
                        <div className="preview p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));