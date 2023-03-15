import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.prodAuth.isAuth)


    return (
        <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>navigate("/")} class="cursor-pointer">
                <circle cx="50" cy="50" r="50" fill="#22C55E"/>
                <path d="M42.423 65.0525L42.423 69.6688L24.0798 75.5734L30.5559 56.0246L32.999 56.2651C36.206 56.5807 39.401 55.7425 42.0165 53.916L44.2566 55.6224L45.6195 57.9775L44.3428 59.5711C43.0998 61.1227 42.423 63.055 42.423 65.0525Z" stroke="white" stroke-width="2"/>
                <path d="M79.4625 20.9297C80.7412 20.0222 82.1871 19.4627 83.6796 19.2906C83.5295 21.1301 82.8032 22.8726 81.6036 24.2067C77.9093 28.3152 70.9019 36.0474 65.5557 41.5835C61.7769 45.4965 56.8802 49.8872 52.9147 53.3097C50.9347 55.0185 49.1921 56.4816 47.9448 57.5172C47.4016 57.9681 46.9524 58.338 46.6187 58.6116L41.5576 52.8157L50.129 44.1822L60.3077 35.3358L70.953 26.9688L79.4625 20.9297Z" fill="white" stroke="white" stroke-width="2"/>
                <path d="M24.0079 75.6704L34.0811 65.7258" stroke="white" stroke-width="2"/>
                <path d="M37.0316 64.4509C37.0316 65.4685 36.2397 66.2508 35.3146 66.2508C34.3895 66.2508 33.5976 65.4685 33.5976 64.4509C33.5976 63.4333 34.3895 62.651 35.3146 62.651C36.2397 62.651 37.0316 63.4333 37.0316 64.4509Z" stroke="white" stroke-width="1.5"/>
                <path d="M20.0053 74.3439C20.8192 73.1746 22.4923 73.0256 23.5 74.0327L23.5769 74.1095C24.1753 74.7076 25.0464 74.9428 25.8646 74.7272L29.102 73.8738C29.2865 73.8252 29.4772 73.8046 29.6678 73.8126L33.1109 73.9583C34.4635 74.0155 34.7481 75.8953 33.4731 76.3504V76.3504L30.611 77.5762C30.535 77.6088 30.4549 77.6305 30.3729 77.6408V77.6408C29.4758 77.7534 29.3055 78.9804 30.138 79.333L30.3417 79.4192C31.2651 79.8103 31.0224 81.1812 30.0209 81.2314L26.1347 81.4263C25.8231 81.4419 25.5206 81.5367 25.2558 81.7017L24.0869 82.4299C22.5924 83.361 20.6633 83.1974 19.347 82.028L18.7118 81.4637C18.3937 81.1812 17.9832 81.0251 17.5578 81.0251H14.1562C13.0153 81.0251 12.6974 79.4592 13.748 79.0143L14.1851 78.8291C14.873 78.5378 14.873 77.5628 14.1851 77.2714L13.3785 76.9298C12.6235 76.61 12.9144 75.4777 13.7301 75.5616V75.5616C13.8403 75.5729 13.9517 75.5584 14.0553 75.5193L15.457 74.9903C16.0266 74.7754 16.6629 74.8297 17.1879 75.138V75.138C18.095 75.6708 19.2595 75.4155 19.8605 74.552L20.0053 74.3439Z" fill="white"/>
            </svg>

            <span class="ml-3 text-xl cursor-pointer" onClick={()=>navigate("")}>InkFinder</span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
            <a class="mr-5 hover:text-white cursor-pointer">Offers</a>
            <a class="mr-5 hover:text-white cursor-pointer ">Verification</a>
            <a class="mr-5 hover:text-white cursor-pointer" onClick={()=>navigate("/about")}>About us</a>
            <a class="mr-5 hover:text-white cursor-pointer ">Account</a>

            {isAuth ? <a class="mr-5 hover:text-white cursor-pointer" onClick={()=>navigate("/users")}>User List</a> : <div></div>}
            </nav>
            <a class="mr-5 hover:text-white cursor-pointer" href="https://github.com/fdsssawe">Zhovanyk Olexander</a>
            <button 
            onClick={()=>{
                if(isAuth){
                    dispatch(logout())
                    navigate("/")
                }
            }}
            class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Log out
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
            
        </div>
        </header>
    );
};

export default Header;