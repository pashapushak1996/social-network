import React from "react";
import styles from './FormControls.module.css';

// export const FormControl = ({input, meta, ...props}) => {
//     const {touched, error} = meta;
//     const isError = touched && error;
//     return (
//         <div className={ isError ? styles.formControl : undefined }>
//             <textarea
//                 className={ isError ? `${ styles.formControl } ${ styles.error }` : undefined } { ...input } { ...props }/>
//             { isError ?
//                 <div>
//                     <span>{ error }</span>
//                 </div> : null }
//         </div>
//     );
// };


//form element HOC

export const formElement = Element => ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={ isError ? styles.formControl : undefined }>
            <Element
                className={ isError ? `${ styles.formControl } ${ styles.error }` : undefined } { ...input } { ...props }/>
            { isError ?
                <div>
                    <span>{ meta.error }</span>
                </div> : null }
        </div>
    );
};







