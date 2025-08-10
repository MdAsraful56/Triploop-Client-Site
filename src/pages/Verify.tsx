import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email] = useState(location.state);

    useEffect(() => {
        if (!email) {
            navigate('/');
        }
    }, [email, navigate]);

    return <div>Verify your email: {email}</div>;
};

export default Verify;
