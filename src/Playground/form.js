const app = {
    title: 'Indecision App',
    subtitle: 'it is ok not to be okay',
    options: ['one', 'two']
};

function addItem(event) {
    event.preventDefault();
    const input = document.getElementById('optionInput').value;
    if (input) {
        app.options.push(input);
        // Update the template to re-render with the new option added
        weGatRerend();
    }
}

function removeItem(index) {
    app.options.splice(index, 1);
    // Update the template to re-render with the item removed
    weGatRerend();
}

function removeAll(){
    app.options =[];
    weGatRerend();
}

const appRoot = document.getElementById('app');
const weGatRerend = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {app.options.map((list, index) => (
                    <div key={index}>
                        <li>{list}</li>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </div>
                ))}
            </ol>
            <form onSubmit={addItem}>
                <input type='text' id='optionInput' name='option' />
                <button>Add option</button>
            </form>
            <button onClick={removeAll}>Remove all</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

weGatRerend();
