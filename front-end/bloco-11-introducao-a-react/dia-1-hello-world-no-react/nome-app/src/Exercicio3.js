// Exercício 3.1

// Depois: const JSX = <h1>Hello JSX!</h1>;

// Exercício 3.2

// const JSX = <div>
//     <h1>bla</h1>
//     <p>ble</p>
//     <ul>
//         <li>bli</li>
//         <li>blo</li>
//         <li>blu</li>
//     </ul>
// </div>

// Exercício 3.3

// const JSX = (
// 	<div>
// 		<h1>This is a block of JSX</h1>
// 		<p>Here's a subtitle</p>
// 		{/*comment*/}
// 	</div>
// );

// Exercício 3.4

// const JSX = (
// 	<div>
// 		<h1>Hello World</h1>
// 		<p>Lets render this to the DOM</p>
// 	</div>
// );
// // Change code below this line
// ReactDOM.render(JSX, document.getElementById('challenge-node'));

// Exercício 3.5

// const JSX = (
//   <div className = 'myDiv'>
//     <h1>Add a class to this div</h1>
//   </div>
// );

// Exercício 3.6

// const JSX = (
//   <div>
//     <h2>Welcome to React!</h2> <br />
//     <p>Be sure to close all tags!</p>
//     <hr />
//   </div>
// );

// Exercício 3.7

// const MyComponent = function() {
//   // Change code below this line

// return <div>frase teste</div>

//   // Change code above this line
// }

//Exercício 3.8

// class MyComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		// Change code below this line

// 		return <div>
// 			<h1>Hello React!</h1>
// 		</div>

// 		// Change code above this line
// 	}
// };

// Exercício 3.9 

// const ChildComponent = () => {
// 	return (
// 		<div>
// 			<p>I am the child</p>
// 		</div>
// 	);
// };

// class ParentComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>I am the parent</h1>
// 				{ /* Change code below this line */}

// 				<ChildComponent />

// 				{ /* Change code above this line */}
// 			</div>
// 		);
// 	}
// };