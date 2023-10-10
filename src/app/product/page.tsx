import Header from "@/components/Header";

function Product({searchParams}:any) {

  console.log(searchParams , "params")
  return (
    <div  >
      <Header/>
      <h1 className="text-black">{searchParams.title}</h1>
      <h1 className="text-black">{searchParams.description}</h1>
      <img src={searchParams.imageUrl} alt="" />
  </div>
  );
}

export default Product;
