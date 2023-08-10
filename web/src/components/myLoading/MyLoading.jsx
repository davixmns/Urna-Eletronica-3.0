import ReactLoading from 'react-loading';


export const MyLoading = ({type, color, height, width}) => {
    return (
        <>
            <ReactLoading type={type} color={color} height={height} width={width} />
        </>
    )
}