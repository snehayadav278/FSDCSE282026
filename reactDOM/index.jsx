const container = document.getElementById("root");
// console.log(container);

const root = ReactDOM.createRoot(container);

const h21 = <h2>Welcome to JSX</h2>;
const h22 = <h1>ABES Engineering College</h1>
const wrapper= <div style={{border:'4px solid red'}}>{h21}{h22}</div>
const div= <div style={{border:'4px solid black'}}>
{wrapper}
<h2>Heyy...using JSX</h2>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IHXeQYCc8TiCsvZqz6clZy7U8zNhgx89u6IvsFwr9g&s"></img>
</div>
root.render(div);