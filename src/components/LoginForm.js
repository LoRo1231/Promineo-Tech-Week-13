import React from 'react';

function LoginForm(){
    return(
        <div>
            <h3 className='text-center m-4 border'> Log In </h3>
        

            <form>
                <div className="container">
                    <div className='row'>
                        <div className='input-group m-2'>
                            <span className="input-group-text"> User Name </span>
                            <input type="text" className="form-control" id="first-name"/>
                            <span className="input-group-text"> Password </span>
                            <input type="text" className="form-control" id="first-name"/>
                        </div>
                        
                        <div>
                            <button type="submit" className="btn btn-primary"> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;