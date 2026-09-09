const container = document.getElementById("root");
console.log(container);

const root = ReactDOM.createRoot(container);
// const h2 = React.createElement('h2',{style:{color:'red'}},'Welcome to React');
// const h1 = React.createElement('h1',{style:{color:'brown',backgroundColor:'orange'}},'ABES Engineering College')
// const img = React.createElement('img' , {src:'https://images.unsplash.com/photo-1787377963808-2aa73070d02c?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     , style:{height:'200px', width:'300px' , margin:'40px' , border:'2px solid black'}
// });



// const img = React.createElement('img' , {src:'https://images.unsplash.com/photo-1787779335320-41220a14ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , style:{height:'200px',width:'200px' , margin:'40px'}})
// const name = React.createElement('h2', {} , 'Name : Sneha Yadav');
// const about = React.createElement('p' , {} , 'Motivated and detail-oriented Computer Science student seeking an entry-level position where I can apply my technical and communication skills to contribute to organizational growth while continuously learning and developing professionally.')
// const college = React.createElement('h2' , {} , 'College : ABES Engineering College');
// const year = React.createElement('h2' , {} , 'Year : B.Tech 3rd year');
// const language = React.createElement('h2' , {} , 'Skills : C++ , HTML , CSS , JS ');
// const div1 = React.createElement('div' , {style:{marginLeft: '10px'}})
// const div = React.createElement('div' , {style:{border:'2px solid black',backgroundColor:'grey',height:'600px',width:'700px'}} , img , name ,about,  college , year, language);
// root.render(div);

const h21 = <h2>Welcome to JSX</h2>;
root.render(h21);