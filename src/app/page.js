
'use client'
import Background_login from "@/components/Background_login";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from './page.module.css';
import LogInForm from "@/components/LogInForm";


export default function Home() {
    const route =useRouter();
  const navigate =(name)=>{
    route.push(name);
  }
  return (
<main>
  <Background_login className={styles.background} ></Background_login>
  {/* main text */}
  {<LogInForm />}
  
</main> 
  );
}

