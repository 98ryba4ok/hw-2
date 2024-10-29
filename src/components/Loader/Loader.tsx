import React from 'react';
import cn from 'classnames';
import LoaderIcon from '../icons/LoaderIcon';
import './Loader.css'
import '../../styles/variables.css';
export type LoaderProps = {
    /** Размер */
    size?: 's' | 'm' | 'l';
    /** Дополнительный класс */
    className?: string;
};

const Loader: React.FC<LoaderProps> = ({className, size = 'l'}) =>{
    return(
        <LoaderIcon
        className={cn(className,'loader', `loader_size_${size}`)}
        color='accent'>

        </LoaderIcon>
    )
};

export default Loader;
