import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const postsElem = posts.map((article, index)=>{
            return <Article key={index} element={article} />
    })
     return (
            <div>
                <main>
                    {postsElem}
                </main>
            </div>

     )
}

export default ArticleList;