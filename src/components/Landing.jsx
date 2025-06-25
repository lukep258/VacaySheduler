import '../App.css'
import CalComp from './Calendar'

export default function Landing(props){
    return(
        <>
            <p>landing</p>
            <CalComp setDayi={props.setDayi} setDayf={props.setDayf}/>
        </>
    )
}