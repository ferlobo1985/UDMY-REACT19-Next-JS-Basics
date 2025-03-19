import { redirect } from 'next/navigation';

export default async function UserNamePage({params, searchParams}){
  const id = (await params).id;
  const name = (await params).name
  const data = await params;
  // const query = await searchParams;

  if(id != 100){
    redirect('/')
  }


    return(
      <>
        <h1>{id} is the ID: {name} is the name</h1>
      </>
    )
}