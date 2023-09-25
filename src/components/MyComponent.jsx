function MyComponent({birthday,name,age}){
    
    const styles = {}
    if(birthday){
        styles.color = "green"
    } else{
        styles.color = "red" 
    }
    if(!name){
        return <NoName/>
    }
    return <h1 style={styles}>Hello {name} your age is {age} birthday is on {birthday} </h1>
}
function NoName(){
    return <p>You didnt set a name</p>
}
export default MyComponent
