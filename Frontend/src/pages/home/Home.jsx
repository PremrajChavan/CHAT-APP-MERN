import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/sidebar"


const Home = ()=> {
    return (
        <div className='flex sm:h-[650px] md:h-[550px] rounded-lg overflow-hidden bg-[#66DF3] bg-clip-padding
         backdrop-filter backdrop-blur-lg bg-[#1C1C1E]'>
            <Sidebar/>
            <MessageContainer />
        </div>
    )
}

export default Home