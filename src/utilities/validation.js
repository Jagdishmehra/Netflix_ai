export const valid=(email,password)=>{
    
    const validemail =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validpass=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if(!validemail){
        return(
            "Invalid Email ID"
        );
    }
    if(!validpass){
        return(
            <div>Enter valid Password:
            <ul>
                <li>·Min 8 characters</li>
                <li>·at least 1 letter</li>
                <li>·1 number and 1 special character</li></ul></div>
        )
    }
    return null;
};