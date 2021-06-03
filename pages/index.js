import { useEffect } from 'react';
import CustomHead from './components/Header';
import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router'
import useAccount from './js/user';

export default function Home() {
  const user = useAccount();
  const router = useRouter();
  const userData = useAccount().userData();
  useEffect(() => {
    const dataFromLocal = JSON.parse(window.localStorage.getItem("userData"));

    if (dataFromLocal.username) {
      user.signIn(dataFromLocal.username)
    } else {
      router.push('/login')
    }


  }, [])


  function logout() {
    const res = user.signOut();
    if (res.success) router.push("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <CustomHead title={"NEXTJS APP"} />
      <header>
        <h1>index</h1>
        <Button
          color="lightBlue"
          buttonType="filled"
          size="lg"
          ripple="dark"
          onClick={logout}
        >
          logout
        </Button>
      </header>
      <main>


      </main>


    </div>
  );
}
