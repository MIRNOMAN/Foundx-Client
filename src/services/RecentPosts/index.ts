import envConfiq from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`
        ${envConfiq.baseApi}/items?sortBy=createdAt&limit=9`);

  return res.json();
};
