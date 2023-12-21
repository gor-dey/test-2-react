import { ButtonProps } from '@shared/types'
import { Link } from 'react-router-dom'

type BasicButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: ButtonProps & BasicButtonProps) => {
    if (props.link)
        return (
            <Link to={props.link}>
                <button className={`btn btn-primary mt-auto ${props.className}`} onClick={props.onClick}>
                    {props.text}
                </button>
            </Link>
        )
    else {
        return (
            <button {...props} className={`btn btn-primary mt-auto ${props.className}`} onClick={props.onClick}>
                {props.text}
            </button>
        )
    }
}
