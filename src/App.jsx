import './App.css'
import MyComponent from './components/MyComponent'
import Nested from './components/Nested'
import Slots from './components/Slots'
import Proxy from './components/Proxy'
import NumberList from './components/NumberList'
import NamesList from './components/NamesList'
import Events from './components/Events'
import Game from './components/Game'


function App() {
  return (
    <>
    <Nested>
      <MyComponent name="Will" age={3*10}/>
      <MyComponent name="George" age="30" birthday="04/10/1992"/>
      <MyComponent/>
      <MyComponent/>
    </Nested>
    <Slots footer={<p>left content</p>} header={<MyComponent/>}>
      <MyComponent name="Kate" age="30" left={<h1>Left Content</h1>}/>
    </Slots>
    <Proxy name="George" age="30" birthday="04/10/1992"/>
      {/* <NumberList numbers={[1,2,3]}/> */}
      {/* <NamesList people={[{name:"will"},{name:"sam"},{name:"george"}]} /> */}
      <Events/>
      <Game/>
    </>
  )
}

export default App
