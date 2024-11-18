import Link from "next/link";
interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export default async function Blog() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();
  return (
    <div className="bg-orange-400 flex justify-center p-3">
      <div className="bg-orange-300 w-4/5  sm:w-2/4 p-8 rounded-md">
        <h1 className="text-2xl py-4">Blog List</h1>

        <ul className="space-y-4">
          {res.map((item: BlogPost, index: number) => {
            return (
              <li key={index}>
                <Link href={`/blog/${item.id}`}>
                  {item.id}----{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
