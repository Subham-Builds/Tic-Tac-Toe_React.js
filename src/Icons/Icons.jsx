import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({ name }){
    if(name == "circle"){
        return <h1><FaRegCircle/></h1>
    }else if(name == "cross"){
        return <h1><FaTimes/></h1>
    }else{
        return <h1><FaPen/></h1>
    }
}
export default Icon;