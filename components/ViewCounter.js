import { useEffect, useState } from "react";
import useSWR from "swr";

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

function ViewCounter({ slug, blogPage = false }) {
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

    return () => {
      setTimeout(() => (localStorage.setItem(slug, "true"), 200));
    };
  }, [slug]);

  if (!data) return <div>loading...</div>;
  return <div>{views > 0 ? views.toLocaleString() : "–"} views</div>;
}

export default ViewCounter;
