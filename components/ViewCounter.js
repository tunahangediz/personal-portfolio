import { useEffect, useState } from "react";
import useSWR from "swr";

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

function ViewCounter({ slug, blogPage = false, visible = true }) {
  const { data, error } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const visited = localStorage.getItem(slug);

    const registerView = () => {
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });
    };

    if (blogPage && visited !== "true") {
      registerView();
    }
    setTimeout(() => (localStorage.setItem(slug, "true"), 200));
    // return () => {
    //   setTimeout(() => (localStorage.setItem(slug, "true"), 200));
    // };
  }, [slug]);

  if (!data) return <div className={!visible && "hidden"}>loading...</div>;
  return (
    <div className={!visible && "hidden"}>
      {views > 0 ? views.toLocaleString() : "–"} views
    </div>
  );
}

export default ViewCounter;
