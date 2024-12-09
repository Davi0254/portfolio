import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const contact = () => {
  return (
    <div className="flex flex-col border-solid gap-4 items-center mt-28 ">
      <h1>CONTACT</h1>
      <p>name: Davi Martins Oliveira</p>
      <div className="flex">
        <PhoneAndroidIcon />
        <p>phone: 73999352772</p>
      </div>
      <div className="flex">
        <AlternateEmailIcon />
      <p>Email: martinsoliveiradavi83@gmail.com</p>
      </div>      
      <div className="flex">
      <GitHubIcon />
        <p>Github:</p>
        <Link href="https://github.com/Davi0254">
          <p className="text-blue-500 underline hover:text-blue-700">
            https://github.com/Davi0254
          </p>
        </Link>
      </div>
      <Link href="/">
        <p className="text-blue-500 underline hover:text-blue-700">go back</p>
      </Link>
    </div>
  );
};

export default contact;
