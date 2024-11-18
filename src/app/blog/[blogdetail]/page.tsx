type Params = {
  blogdetail: string;
};
export default async function BlogDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { blogdetail } = await params;

  const fetchdata = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogdetail}`,
    { cache: "no-store" }
  );
  const res = await fetchdata.json();
  return (
    <div className="bg-orange-400 flex justify-center p-3">
      <div className="bg-orange-300 w-4/5  sm:w-2/4 p-8 rounded-md">
        <h1 className="text-2xl py-4">Blog Detail</h1>
        <div className="space-y-3">
          <h5>
            {" "}
            <span className="font-bold">Blog ID:</span>
            {res.id}
          </h5>
          <h5>
            <span className="font-bold">Blog Title: </span>
            {res.title}
          </h5>
          <h5>
            <span className="font-bold">Blog Content: </span>
            {res.body}
          </h5>
        </div>
      </div>
    </div>
  );
};

