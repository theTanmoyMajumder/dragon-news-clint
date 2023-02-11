import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        // console.log(name, password, email, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/logIn');
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    };

    const handleAccepted = e => {
        // console.log(e.target.checked);
        setAccepted(e.target.checked);
    };

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept all <Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted} >
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;