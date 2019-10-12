import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Login} from './action';
function Loginpage() {
    let input1=React.createRef();
    let input2=React.createRef();
    let dispatch=useDispatch();
    let location=useSelector(state=>state);
    console.log(location);
    return(
        <div className="Loginpage">
            <div className="box">
                <h1>Login</h1>
                <div className="credentials">
                    <label>Username</label><input type="text" ref={input1}/><br/>
                    <label>Password</label><input type="password" ref={input2}/>
                </div>
                <div className="btns">
                    <Link to="location.page" onClick={()=>dispatch(Login({username:input1,password:input2,page:'/rack'}))}><button>Login</button></Link>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    );

}

export default Loginpage;