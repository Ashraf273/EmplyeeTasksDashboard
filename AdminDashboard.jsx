import AllTask from "../sections/AllTask"
import CreateTask from "../sections/CreateTask"
import Header from "../sections/Header"


const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-20">
    <Header changeUser={props.changeUser}/>
    <CreateTask />
    <AllTask />
      
    </div>
  )
}

export default AdminDashboard
