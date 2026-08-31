const root = document.getElementById('root');
console.log(root);

const button = document.getElementById('btn');
const h2= document.createElement('h2');
const h1 = document.createElement('h1');
const img = document.createElement('img');
const loader = document.createElement('h1');
loader.innerText = "Loading Data....";
async function showData(){
    // alert("hiii");
    try{
    root.appendChild(loader);
    const serverData = await fetch('https://fakestoreapi.com/products');
    const jsonData = await serverData.json();
    h1.innerHTML = `<h1 style="color:red">${jsonData[0].title}</h1>`;
    const table=`<table border='2px'>
               ${
                jsonData.map((ele)=>{
                    return `<tr>
                    <td><img src=${ele.image} height=200 width=200></img></td>
                    <td>${ele.id}</td>
                    <td>${ele.title}</td>
                    <td>${ele.price}</td>
                    </tr>`
                })
               }
               </table>`
    h1.innerHTML = table;
    // h2.innerText ="welcome to DOM Manipulation";
    // h1.innerText = "abes engineering college";
    root.appendChild(h1);
    // root.appendChild(h2);
    // img.src= "https://images.unsplash.com/photo-1787894565548-0df8b29874bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";
    // img.setAttribute('height' , 200);
    // img.setAttribute('width' , 200);
    // root.appendChild(img);
    }catch(e){
        console.log(e)
    }
    finally{
        root.removeChild(loader);
    }
}
button.addEventListener('click' , showData);