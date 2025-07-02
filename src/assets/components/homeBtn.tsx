import style from "../components/homebtn.module.css"
import { useNavigate } from '@tanstack/react-router';
const HomeBtn = ()=>{
    const navigate = useNavigate();
    const handleGoToAboutPage = () => { navigate({ to:'/products/$id', params: { id: '123' }})}

    return(
        <div className={style.divBtn} id="testeDaSilva">
            <a className={style.btn} onClick={handleGoToAboutPage}>outro</a>
        </div>
    );
};
export default HomeBtn;