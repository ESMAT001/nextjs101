import { useEffect } from 'react';
import CustomHead from './components/Header';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router'
import useAccount from './js/user';
import Link from 'next/Link';

export default function Home({ posts, photos }) {
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
    <div className="">
      <CustomHead title={"NEXTJS APP"} />
      <header className="flex flex-row justify-between items-center bg-gray-100 p-4">
        <h1 className="text-md ">Index page</h1>
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
      <main className="flex flex-col p-10 ">
        <h2>POSTS</h2>
        <div className="flex flex-col justify-center items-center space-y-8  text-center">
          {
            posts.length > 0 &&
            posts.map((el, i) => {
              return (
                <div >
                  <Link
                    href={{
                      pathname: '/posts/[id]',
                      query: { id: el.id },
                    }}>
                    <a>
                      <Card >
                        <CardImage
                          src={photos[i].url}
                          alt={photos[i].title}
                          className="w-20 mx-auto"
                        />

                        <CardBody>
                          <H6 color="gray">Title</H6>
                          <Paragraph color="gray">
                            {el.title}
                          </Paragraph>
                        </CardBody>

                      </Card>
                    </a>
                  </Link>
                </div>
              )
            })

          }

        </div>
      </main>


    </div>
  );
}


export async function getStaticProps(context) {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json();
  res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();
  if (!posts || !photos) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts, photos },
  }

}