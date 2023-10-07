"use client";
import { deletePost, getFetchAllPost } from "@/modules/post/postSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import Loading from "@/lib/loading";
import { useRouter } from "next/navigation";

const Posts = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state: any) => state?.root?.post?.postData);
  const loading = useSelector((state: any) => state?.root?.auth?.loading);
  const router = useRouter();
  type PostType = {
    id: number;
    title: string;
    body: string;
  };

  useEffect(() => {
    dispatch(getFetchAllPost());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  const handleCreatePost = () => {
    router.push("/create-post");
  };

  const handleDeletePost = (id:number) => {
    dispatch(deletePost(id));
  } 
  const handleEditPost = (id:number) => {
    router.push(`/edit-post/${id}`);
  }
  return (
    <div>
      <div className="flex justify-end">
        <Button variant={"primary"} className="mr-4" onClick={handleCreatePost}>
          Create Post
        </Button>
        <Button variant={"default"} onClick={() =>router.push('/blog')} >Blog</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postData?.length > 0 &&
            postData?.map((o: PostType, i: number) => (
              <TableRow key={o.id}>
                <TableCell>{o.title}</TableCell>
                <TableCell>{o.body}</TableCell>
                <TableCell>
                  <div className="flex">
                    <Pencil  onClick={() => handleEditPost(o?.id) } className="w-4 h-4 text-blue-500 cursor-pointer mr-2" />
                    <Trash2 onClick={() => handleDeletePost(o?.id)} className="w-4 h-4 text-red-500 cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Posts;
