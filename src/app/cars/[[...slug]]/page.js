export default async function CarsPages({params}){
    const slug = await params;

    console.log(slug)
    return(
        <h1>I am cars</h1>
    )
}