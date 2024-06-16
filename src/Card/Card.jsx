import Icons from '../Icons/Icons';
import './card.css'
function Card({gameend,user, onPlay, index}){
    let icon = <Icons/>
    if(user == 'X'){
        icon = <Icons name = "cross"/>
    }
    else if(user =='O'){
        icon = <Icons name = "circle"/>
    }
    return (
        <div className='card' onClick={() => !gameend && onPlay(index)}>
            {icon}
        </div>
    )
}
export default Card