import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignIn,
} from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* <p>Home</p> */}
      {/* <UserButton afterSignOutUrl='/'/> */}

      {/* <SignedOut>
        <SignInButton />
      </SignedOut> */}
      {/* <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn> */}
    </div>
  );
};

export default Home;
