import React from 'react'
import ReactDom from 'react-dom'
import Logo from './tl-logo.png'
import './index.css'


class ComponentLoginScreen extends React.Component{

    changeScreen(){
        document.getElementById("cover").classList.toggle("coverChanged")
        document.querySelector(".ocultRegisterScreen").classList.toggle("changes")
        document.querySelector(".ocultLoginScreen").classList.toggle("changes")
        document.querySelector(".visibleLoginScreen").classList.toggle("nonVisible")
        document.querySelector(".visibleRegisterScreen").classList.toggle("nonVisible")
        document.querySelector(".ocultLoginScreen").classList.remove("removeMe")
        document.querySelector(".visibleRegisterScreen").classList.remove("removeMe")

        ////////////////////////////////

        let mobileScreenBtn = document.getElementById("mobileScreenBtn")
        mobileScreenBtn.classList.toggle("reg")

        if(mobileScreenBtn.classList.contains("reg")){
            mobileScreenBtn.firstChild.innerHTML = "Register"
        }else{
            mobileScreenBtn.firstChild.innerHTML = "Login"
        }
    }

    verifyPassword(){
        let password1 = document.getElementById("IDregPassword1")
        let password2 = document.getElementById("IDregPassword2")
        let locker = document.querySelectorAll(".verify")

        if(password2.value !== password1.value && password2.value !== ""){
            locker.forEach(el=>{
                el.style.color = "red"
            })
        }else{
            locker.forEach(el=>{
                el.style.color = "green"
            })
        }

        if(password1.value == "" && password2.value == ""){
            locker.forEach(el=>{
                el.style.color = "#a0a0a0"
            })
        }
            
        
    }

    render(){
        return (
            <div className="container">
                <div className="blocks">
                    <div className="cover coverChanged" id="cover">
                    </div>
                    <div className="formScreen loginScreen">
                        <div className="visibleLoginScreen">
                           <img src={Logo} alt="logo-img" />
                           <div className="formBox">
                               <form className="defaultForm" action="GET">
                                   <h2>LOGIN</h2>
                                   <div className="defaultInput">
                                        <input type="email" name="email-login" id="IDloginMail" placeholder="E-mail"/>
                                        <i class='bx bx-user-circle'></i>
                                    </div>
                                   <div className="defaultInput">
                                       <input type="password" name="password-login" id="IDpasswordMail" placeholder="Password" />
                                       <i class='bx bxs-lock' ></i>
                                   </div>
                                   <button type="submit" className="defaultBtn log">Login</button>
                               </form>
                           </div>
                        </div>
                        <div className="ocultLoginScreen removeMe changes">
                        <h2>Organize seus eventos!</h2>
                            <p>Crie e compartilhe eventos<br/>utilizando nossa plataforma!</p>
                            <p>Gerencie tudo com<br/>apenas poucos cliques!</p>
                            <p>Já possui cadastro?</p>
                            <div className="defaultBtn log" onClick={this.changeScreen}>
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                    <div className="formScreen registerScreen">
                        <div className="visibleRegisterScreen nonVisible removeMe">
                        <img src={Logo}  alt="logo-img"/>
                           <div className="formBox">
                               <form className="defaultForm" action="POST">
                                   <h2>REGISTER</h2>
                                   <div className="defaultInput">
                                        <input type="text" name="name-reg" id="IDregName" placeholder="Nome"/>
                                        <i class='bx bx-mail-send'></i>
                                    </div>
                                   <div className="defaultInput">
                                        <input type="email" name="email-reg" id="IDregEmail" placeholder="E-mail"/>
                                        <i class='bx bx-user-circle'></i>
                                    </div>
                                   <div className="defaultInput">
                                       <input type="password" name="password-reg" id="IDregPassword1" placeholder="Password" onKeyUp={this.verifyPassword}/>
                                       <i class='bx bxs-lock verify'></i>
                                   </div>
                                   <div className="defaultInput">
                                       <input type="password" name="password-reg" id="IDregPassword2" placeholder="Confirm password" onKeyUp={this.verifyPassword}/>
                                       <i class='bx bxs-lock verify'></i>
                                   </div>
                                   <button type="submit" className="defaultBtn reg">Register</button>
                               </form>
                           </div>
                        </div>
                        <div className="ocultRegisterScreen .reg">
                            <h2>Organize seus eventos!</h2>
                            <p>Crie e compartilhe eventos<br/>utilizando nossa plataforma!</p>
                            <p>Gerencie tudo com<br/>apenas poucos cliques!</p>
                            <p>Não possui cadastro?</p>
                            <div className="defaultBtn reg" onClick={this.changeScreen}>
                                <span>Register</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobileScreenBtn">
                    <p>Não possui registro?</p>
                <div className="defaultBtn reg" id="mobileScreenBtn" onClick={this.changeScreen}>
                    <span>Register</span>
                </div>
                </div>
            </div>

        )
    }

}

ReactDom.render( <ComponentLoginScreen/>, document.getElementById('root'))