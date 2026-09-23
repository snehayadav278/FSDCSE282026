import ICard from "./ICard";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';


function ICardGallery(){
  const student = [{
    pic : img1,
    rollno: "2433",
    name: "Sneha",
    branch: "Computer Science and Engineering",
    section: "28"
  },
  {
    pic : img2,
    rollno: "2434",
    name: "Suhani",
    branch: "Computer Science and Engineering",
    section: "28"
  },
  {
    pic : img3,
    rollno: "2435",
    name: "Tanisha",
    branch: "Computer Science and Engineering",
    section: "28"
  },
  {
    pic : img1,
    rollno: "2433",
    name: "Siyaa",
    branch: "Computer Science and Engineering",
    section: "28"
  },
  {
    pic : img2,
    rollno: "2433",
    name: "Sunaina",
    branch: "Computer Science and Engineering",
    section: "28"
  }
]
return (
    <div style={{height:'400px', display:'flex',justifyContent:'space-evenly', border:'2px solid black'}}>
   
  {/* <ICard data={student[1]} />  */}
  {
    student.map((ele)=>(
      <ICard data={ele} />

    ))
  }
    </div>
  )
}
export default ICardGallery;