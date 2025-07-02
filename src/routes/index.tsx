import { createFileRoute } from '@tanstack/react-router'
import Componentezin from '../assets/components/componentezin'
import HomeBtn from '../assets/components/homeBtn'
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Componentezin/>
      <br></br>
      <br></br>
      <br></br>
      <HomeBtn/>
      
    </div>
  )
}