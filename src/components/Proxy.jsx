import MyComponent from "./MyComponent"

function Proxy(props){
    return <div style={{border:"1px solid red"}}>
        <MyComponent {...props}/>
    </div>
}
export default Proxy
