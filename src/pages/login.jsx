import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    onLogin();
    const onSubmited = async (data) => {
        console.log("Datos de formulario", data);
        try {
            const response = await axios.post("http://localhost/loginApi/login", data);
            console.log("respuesta", response);
            alert("Bienvenido " + response.data.nombre);

            navigate("/dashboard");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error en el inicio de sesión. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h2 className="text-center text-primary mb-4">Ingresar</h2>
                    <div className="card p-4 shadow">
                        <form onSubmit={handleSubmit(onSubmited)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    {...register("correo", { required: true })}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                {errors.correo && <p className='text-danger'>Campo requerido</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    {...register("contrasena", { required: true })}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                                {errors.contrasena && <p className='text-danger'>Campo requerido</p>}
                            </div>

                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
