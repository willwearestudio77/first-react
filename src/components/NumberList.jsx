
function NumberList ({numbers}){
    return (
        <ul>
            {numbers.map(n => <li>{n}</li>)}
        </ul>
    )
}
export default NumberList