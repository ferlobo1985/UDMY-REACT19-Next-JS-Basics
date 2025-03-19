export default function DashboardLayout(props){
    const conditional = false;

    return(
        <>
            { props.children }
            { conditional ? props.analytics : props.posts }
        </>
    )
}