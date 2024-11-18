"use client";
import { useState, useEffect } from "react";

function Home() {
  const [comment, setComment] = useState("");
  const [newcomment, setNewcomment] = useState<string[]>([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setNewcomment(JSON.parse(savedComments));
    }
  }, []);

  const  handlechange = () => {
    // event.preventDefault();
    if (comment.trim()) {
      const updatedComments = [...newcomment, comment];
      setNewcomment(updatedComments);
      setComment("");

      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };
  const clearComments = () => {
    localStorage.removeItem("comments");
    setNewcomment([]);
  };

  return (
    <div className="bg-orange-400 flex justify-center p-3">
      <div className="bg-orange-300 w-4/5  sm:w-2/4 p-8 rounded-md">
        <h1 className="text-2xl py-4">Home Page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          mollitia, quia repellendus ut excepturi quae deserunt aperiam debitis
          minima a necessitatibus aut, provident harum? Eveniet quo corrupti
          cupiditate eligendi rerum?
        </p>
        {/*  */}
        <div className="bg-orange-500 rounded-md p-5 my-10">
          <div>
            <h1 className="py-3">Comment Section</h1>
            <div>
              <div>
                <form onSubmit={handlechange}>
                  <input
                    className="p-2 rounded-lg w-11/12
              "
                    onSubmit={handlechange}
                    value={comment}
                    type="text"
                    placeholder="comment here!"
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  />
                </form>
              </div>

              <main className="sm:flex">
                <div className="px-5">
                  <button
                    type="submit"
                    onClick={clearComments}
                    className="bg-orange-600 p-2 rounded-3xl px-4 my-4"
                  >
                    Delete Comments
                  </button>
                </div>
                <div className="px-5">
                  <button
                    type="submit"
                    onClick={handlechange}
                    className="bg-orange-600 p-2 rounded-3xl px-4 my-4"
                  >
                    Post
                  </button>
                </div>
              </main>
            </div>
            <div>
              {newcomment.map((item: string, index: number) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
export default Home;
                                       