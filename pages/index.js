import useSWR from "swr";

import { supabase } from "../lib/supabase-client";

export const getStaticProps = async () => {
  const { data: threads } = await supabase
    .from("threads")
    .select(
      `
    id,title
  `
    )
    .order("created_at", {
      ascending: false,
    });

  return {
    props: {
      threads,
    },
  };
};

const Index = ({ threads }) => {
  return (
    <>
      <h1>Threads</h1>
      {JSON.stringify(threads, null, 2)}
    </>
  );
};

export default Index;
