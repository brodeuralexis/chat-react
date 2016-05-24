# React

## React.cloneElement

|Argument|Description|
|--------|-----------|
|&lt;? extends React.Component&gt;|Une instance de n'importe quelle classe qui hérite de React.Component|
|object|Un objet contenant les propriétées à surcharger|

```es6
class Component extends React.Component {

    static propTypes = {
        a: React.PropTypes.number,
        b: React.PropTypes.string
    };
    
    render() {
        return (
            <div>
                Are Equal ? { this.props.a == this.props.b ? (
                    <span>
                        Yes
                    </span>
                ) : (
                    <span>
                        No
                    </span>
                ) }
            </div>
        );
    }

}

<Component a={ 2 } b="3" /> // Affichera "No"

React.cloneElement(<Component a={ 2 } />, { b: "2")); // Affichera "Yes"
```

## React.Component

```es6
class Component extends React.Component {

    static propTypes = {
    },
    
    static defaultProps = {
        optionalArray: [],
        optionalBool: false,
        optionalFunc: () => {},
        optionalNumber: 42,
        optionalObject: {},
        optionalString: "toto"
    };
    
    state = {
        content: ''
    };
    
    componentWillMount() {
    }
    
    componentWillReceiveProps() {
    }
    
    shouldComponentUpdate() {
        return true;
    }
    
    componentWillUpdate() {
    }
    
    render() {
        return <div>render()</div>;
    }
    
    componentDidUpdate() {
    }
    
    componentWillUnmount() {
    }

}
```

## React.PropTypes

```jsx
    static propTypes = {
        // Traduit de https://facebook.github.io/react/docs/reusable-components.html
        // Déclaration de propriétées primitives
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,
    
        // Un noeud est n'importe quoi qui peut être affiché
        optionalNode: React.PropTypes.node,
    
        // Une instance d'un Component
        optionalElement: React.PropTypes.element,
    
        // Une instance d'une classe spécifique
        optionalMessage: React.PropTypes.instanceOf(Message),
    
        // Énumération de valeurs
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
    
        // Une union de types
        optionalUnion: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
          React.PropTypes.instanceOf(Message)
        ]),
    
        // Un tableau d'un certain type
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
    
        // Un objet avec les propriétées d'un certain type
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
    
        // Un objet ayant une forme particulière
        optionalObjectWithShape: React.PropTypes.shape({
          color: React.PropTypes.string,
          fontSize: React.PropTypes.number
        }),
    
        // Toute règle de type peut-être suffixé par `isRequired` pour indiquer
        // quelle est requise
        requiredFunc: React.PropTypes.func.isRequired,
    
        // N'importe quel type
        requiredAny: React.PropTypes.any.isRequired,
    
        // Il est aussi possible d'utiliser une fonction pour valider
        // les propriétées
        customProp: function(props, propName, componentName) {
        },
    };
```

### Cycle de vie des éléments React
* Remplace `getDefaultProps` par la propriété `defaultProps`;
* Remplacer `getInitialState` par la propriété `state`;
* Remplacer `componentWillMount` par `constructor`.
![React Life Cycle Methods](https://pbs.twimg.com/media/CMwGfDdU8AA5VbX.png)

# ReactDOM

## ReactDOM.render

|Argument|Description|
|--------|-----------|
|&lt;? extends React.Component&gt;|Une instance de n'importe quelle classe qui hérite de React.Component|
|&lt;? extends HTMLElement&gt;|Une instance d'un noeud dans le DOM|

```js
// En considérant que `App` est un enfant de React.Component

ReactDOM.render(<App />, document.getElementById('app'));
```

