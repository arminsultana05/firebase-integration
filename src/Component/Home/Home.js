import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Home = () => {
    const {user}= useFirebase()
    return (
        <div>
           <h2>This is User</h2> 
           <h5>{user?user.displayName:'Vooot'}</h5>
        </div>
    );
};

export default Home;