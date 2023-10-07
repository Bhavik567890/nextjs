"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchSinglePost, updatePost } from "@/modules/post/postSlice";
import { useRouter } from "next/navigation";

interface Props {
    params: {
      id: string;
    };
  }
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is Required",
  }),
  body: z.string().min(1, {
    message: "Body is Required",
  }),
});

const EditPost =  ({params}:Props) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const getSinglePostData = useSelector((state:any) =>state?.root?.post?.getSinglePostData)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: getSinglePostData?.title,
      body:  getSinglePostData?.body,
    },
  });

  useEffect(() =>{
    dispatch(fetchSinglePost(params.id))
 
  },[params,dispatch])

  const isLoading = form?.formState?.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    //   dispatch(createPost(values));
    dispatch(updatePost(params.id, values));
      form.reset();
      router.push('/post')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 px-6 mx-auto max-w-md"
      >
        <FormField
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Title
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  className="w-full bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Body
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  disabled={isLoading}
                  className="w-full bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Body"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            variant={"primary"}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditPost;
