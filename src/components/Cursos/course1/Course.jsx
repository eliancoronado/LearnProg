import './Course.css'
import CHeader from './Header/CHeader'
import CHome from './Home/CHome'
import Temario from './Temario/Temario'

function Course() {

  return(
    <>
    <CHeader />
    <div className="C1-wr">
      <CHome />
      <Temario />
    </div>
    </>
  )
}

export default Course