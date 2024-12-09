'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import To_Do_List_Pad from '../assets/To_Do_List_Pad.webp';
import FinancePic from '../assets/Finance-the-Growth-of-Your-Business-in-a-Challenging-Financial-World.jpg';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material'; 

 
export default function Page() {
   const router = useRouter();
   
   const handleRedirect = () => {
    router.push('https://github.com/Davi0254/advanced-todo-list')
   };


return (
    <>
    <Header />
      <div className="background text-center bg-gray-300 p-64 mt-5">
      </div> 
       
      <div className="flex card-background justify-evenly mt-7 mb-7">
      <Card onClick={() => handleRedirect('https://github.com/Davi0254/advanced-todo-list')} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
         src={To_Do_List_Pad}
         alt="To_Do_List_Pad"
         height={140}
         width={345}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Advanced-to-do-list
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Languages: html, css, javascript, react, nodejs, sql
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
      </Card >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
         src={FinancePic}
         alt="Fiance-pic"
         height={140}
         width={345}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Aplicaçao para gerenciar finanças
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Aplicaçao para gerenciar finanças pessoais
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
      </Card>
    </div>
    </>
  )
}

const Header = () => {
  return (
  <div className="flex flex-row mt-7">
   <h1 className="ml-16 text-sm"><b>PORTFOLIO</b></h1>
   <div className="flex justify-end flex-grow mr-52">
   <Link href='/pages/about' className=" text-xs"><b>ABOUT</b></Link>
   <Link href='/pages/contact' className="ml-20  text-xs"><b>CONTACT</b></Link>
   </div>
  </div>
)} 
