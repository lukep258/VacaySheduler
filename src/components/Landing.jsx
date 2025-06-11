import '../App.css'

export default function Landing(props){
    return(
        <>
            <p>landing</p>
            <button onClick={props.setDayi(1)}>
                click me</button>
        </>
    )
}