import { useEffect } from 'react';
import Header from './components/Header';
import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router'
import useAccount from './js/user';

export default function Home() {
  const user = useAccount();
  const router = useRouter();
  const userData = useAccount().userData();
  useEffect(() => {
    if (!userData.username && !userData.email) {
      router.push('/login')
    }
  }, [])


  function logout() {
    const res = user.signOut();
    if (res.success) router.push("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Header title={"NEXTJS APP"} />

      <main>
        index
        <Button
          color="lightBlue"
          buttonType="filled"
          size="lg"
          ripple="dark"
          onClick={logout}
        >
          logout
        </Button>
      </main>


    </div>
  );
}
