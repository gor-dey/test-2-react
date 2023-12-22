import { ButtonProps } from '@shared/types'

type BasicButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: ButtonProps & BasicButtonProps) => {
    return (
        <button {...props} className={`btn btn-primary mt-auto ${props.className}`} onClick={props.onClick}>
            {props.text}
        </button>
    )
}
