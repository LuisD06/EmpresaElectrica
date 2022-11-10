import { Link, Outlet } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div className="background">
                <div className="login-container center">
                    <div className="logo-container">
                        <img src="https://www.ccelrecreo.com/wp-content/uploads/2021/11/empresa-electrica-quito600x600.png" alt="logo.png" />
                    </div>
                    <div className="form-container">
                        <h2>LOGIN</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="userName">Nombre de usuario</label>
                                <input type="text" name="userName"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">Contraseña</label>
                                <input type="password" name="userPassword"/>
                            </div>
                            <div className="form-action-group">
                                {/* <a href="">Entrar</a> */}
                                <Link to="/dashboard">Entrar</Link>
                            </div>
                            {/* <p>¿No tiene una cuenta? <a href="">Registrarse</a></p> */}
                            <p>¿No tiene una cuenta? <Link to="/register">Registrarse</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
