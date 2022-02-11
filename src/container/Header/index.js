import HeaderWrapper from "./HeaderWrapper";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Header = () => {
    return (<HeaderWrapper className="container py-3 d-flex align-items-center justify-content-between">
        <div className="logo">
            <img className="w-100" src="https://express24.uz/img/header-logo.svg" alt="Express 24" />
        </div>
        <form className="d-flex align-items-center border ps-2" action="">
            <input className="h-100 w-100 border-0" type="text" placeholder="Поиск" />
            <button className="btn h-100" type="submit">
                <SearchIcon />
            </button>
        </form>
        <Link to='admin'>
            <div className="profile d-flex align-items-center fw-bold fs-5">
                <div className="userImg d-flex align-items-center justify-content-center rounded-circle border-dark p-0 me-2">
                    <AccountCircleIcon sx={{ fontSize: "45px", }} />
                </div>
                <span>Axrorjon</span>
                {/* Place for pannel */}
            </div>
        </Link>
    </HeaderWrapper>)
}

export default Header;