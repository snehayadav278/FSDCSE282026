import ICard from "./ICard";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

function ICardGallery(){
  const student = {
    pic : img1,
    rollno: "2400320101105",
    name: "Sneha",
    branch: "Computer Science and Engineering",
    section: "28"
  }
  return(
    <div style={{display:'flex', gap:'20p'}}>
      <ICard data={student} />
    </div>
  );
}
export default ICardGallery;