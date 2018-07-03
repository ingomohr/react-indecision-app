console.log('App.js is up and running.');

var app = {
    title: 'Indecision App',
    subtitle: "Don't just sit there, do something!"
};

// JSX - Javascript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);


