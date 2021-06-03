import { useState, useEffect } from 'react';
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

import { useRouter } from 'next/router'
import useAccount from './js/user';

export default function login() {
    const user = useAccount();
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    useEffect(() => {
        const userData = user.userData();
        if (userData.username && userData.email) {
            router.push('/')
        }
    }, [])


    const login = async function () {
        let res = await user.signIn(username);
        console.log(res)
        if (res.success && res.error === null) {
            router.push('/')
        } else {
            setError(res.error)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen " style={{
            background: "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(./bg.jpg)",
            backgroundPosition: "center", backgroundSize: "cover"
        }}>
            <Header title={"NEXTJS APP"} />

            <main className="w-10/12 sm:w-7/12 md:w-4/12">
                <Card>
                    <CardHeader color="lightBlue" size="lg">
                        <H5 color="white">Login</H5>
                    </CardHeader>

                    <CardBody>

                        <div className="mb-8 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="username"
                                iconName="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={error}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="password"
                                iconName="lock"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={error}
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
                                onClick={login}
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
