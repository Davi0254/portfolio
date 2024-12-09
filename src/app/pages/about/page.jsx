import Link from "next/link";

const about = () => {
    return (        
        <div className="text-center">
            
            <h1 className="mt-32">ABOUT</h1>
            <p>
            Full Stack Web Developer, committed to<br/> 
            creating projects that contribute to the<br/> 
            growth and development of the company<br/>
             or organization I work for 
            </p>
            <Link href='/'><p className="text-blue-500 underline hover:text-blue-700">voltar</p></Link>
        </div>
    )
}

export default about;