
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Header from './components/Header';
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

import { userRouter } from 'next/router';

export default function Home() {

  const router = userRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Header title={"NEXTJS APP"} />

      <main className="w-2/5">
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Login</H5>
          </CardHeader>

          <CardBody>

            <div className="mb-8 px-4">
              <InputIcon
                type="email"
                color="lightBlue"
                placeholder="Email Address"
                iconName="email"
              />
            </div>
            <div className="mb-4 px-4">
              <InputIcon
                type="password"
                color="lightBlue"
                placeholder="password"
                iconName="lock"
              />
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center">
              <Button
                color="lightBlue"
                buttonType="filled"
                size="lg"
                ripple="dark"
              >
                Login
                    </Button>
            </div>
          </CardFooter>
        </Card>
      </main>


    </div>
  );
}
