import Header from "../components/header";
import FormUpdate from "../components/formUpdate";
import {useLocation} from 'react-router-dom';


const StudentUpdate = () => {
    const location = useLocation();
    const id = location.state._id
    // console.log(id);
    return (
        <div>
            <Header/>
            <FormUpdate id={id}/>
        </div>
    );
}
export default StudentUpdate;