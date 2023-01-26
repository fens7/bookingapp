import { Link } from "react-router-dom";
import ButtonMUI from '@mui/material/Button'

export function Button( props ){
    const { to, type, disabled, children, variant } = props;

    return (
        <ButtonMUI type={type} disabled={disabled} variant={variant}>
            {
                to ? <Link to={to}>{children}</Link> : children
            }
        </ButtonMUI>
    )
}

Button.defaultProps = {
    variant: 'contained'
}