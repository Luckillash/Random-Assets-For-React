import CSS from "./index.module.scss"

interface IProps {

    primaryText: string,

    selected: boolean,

    onClick: () => unknown

}

export default function Index({ primaryText, selected, onClick }: IProps) {

    return (

        <span 
        
        aria-selected={selected} 

        onClick={onClick}
        
        className={CSS.Neon}>
            
            { primaryText }
            
        </span>

    )

}
