import CSS from "./index.module.scss"

interface IProps {

    src: string,

    page: string

}

export default function Index({ src, page }: IProps) {

    return (

        <a 

            target="_blank"
        
            href={page} 
            
            className={CSS.Arcoiris}
            
        >

            <img className="object-fill h-full w-full p-2 relative z-50" src={src} alt="" />

        </a>

    )

}
