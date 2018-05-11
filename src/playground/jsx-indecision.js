console.log('App.js is running!');

// JSX - JavaScript XML
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

const app = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title + '!'}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? </button>
            <button onClick={onRemoveAll}>Remove All </button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option} </li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();