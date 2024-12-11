import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import { getPost } from "@/src/services/post";

interface IProps {
  params: {
    itemId: string;
  };
}