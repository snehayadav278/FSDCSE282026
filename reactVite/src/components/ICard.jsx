function ICard({data}){
    return(
        <div style={{border: '10px solid red', height:'500px', width:'300px'}}>
            <h2>ABES Engineering College</h2>
            <img src={data.pic} alt="Profile" style={{width:'200px' , height:'190px'}} />
            <h5>Roll Number: {data.rollno}</h5>
            <h5>Name: {data.name}</h5>
            <h5>Branch: {data.branch}</h5>
            <h5>Section: {data.section}</h5>
        
        </div>
    )
}
export default ICard;