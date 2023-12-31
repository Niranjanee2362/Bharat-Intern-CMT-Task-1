import { db, storage } from "@/backend/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import dynamic from "next/dynamic";
import Head from "next/head";
import "react-quill/dist/quill.snow.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import React, { useRef, useState } from "react";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function PostBlog() {
  const { data: session } = useSession();
  const router = useRouter();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>();
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [content,setContent] = useState<string>('');
  const TAGS = [
    "Innovation",
    "Health",
    "Wanderlust",
    "Storytelling",
    "Fashion",
    "Tech",
    "Food",
    "Career",
  ];
  const [values, setValues] = useState({
    title: "",
    tags: "",
    content: "",
    desc: ""
  });



  console.log(content)

  const handleValuesChange =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => {
        return { ...prev, [key]: e.target.value };
      });
    };

  const handleTagsSelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, tags: val };
    });
  };

  const getBlogId = async () => {
    const initialVal = 230001;
    const coll = collection(db, "blogs");
    const snapshot = await getCountFromServer(coll);

    return `BB${initialVal + snapshot.data().count}`;
  };

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFiles(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (files) {
      const blogId = await getBlogId();
      const storageRef = ref(storage, `files/${fileName}`);
      const metadata = {
        contentType: "image/png",
      };
      const uploadTask = uploadBytesResumable(storageRef, files, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            var newBlog = {
              title: values.title,
              tag: values.tags,
              content: content,
              desc: values.desc,
              name: session?.user?.name,
              picture: session?.user?.image,
              email: session?.user?.email,
              createdAt: serverTimestamp(),
              imageUrl: downloadURL,
            };
            if (!newBlog.title || !newBlog.tag || !newBlog.content) {
              setLoading(false);
              alert("Please fill all the fields");
            } else {
              const docRef = doc(db, "blogs", blogId);
              await setDoc(
                docRef,
                {
                  ...newBlog
                },
                { merge: true }
              )
              console.log(newBlog);
              setLoading(false);
              alert("Blog Posted");
              router.push('/dashboard');
            }
          });
        }
      );
      console.log(files);
      console.log(values);
    } else {
      alert('upload cover img');
    }
  };

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(e.dataTransfer.files[0]);
      setFileName(e.dataTransfer.files[0].name);
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }
  return (
    <>
    <Head>
      <title>Post a Blog</title>
    </Head>
    <main className="min-h-screen w-full font-outfit bg-app-grey-dark text-stone-200">
      {/* <Header /> */}
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
          <span className="text-3xl lg:text-5xl font-bold">Post a Blog</span>
          <p className="text-slate-200 md:text-lg">
          Express Yourself In The Digital Age
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 font-outfit bg-app-grey-light flex flex-col gap-4 rounded border border-white/10"
        >
          <h1 className="font-bold text-xl md:text-2xl">Blog Details</h1>
          <div className="grid w-full items-center gap-1.5">
            <Label>Cover Image</Label>
            <div
              className={`${
                dragActive ? "border-app-slate-blue" : "border-stone-300"
              }  p-4 border-2  border-dashed rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
              onDragEnter={handleDragEnter}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
            >
              <input
                placeholder="fileInput"
                className="hidden"
                ref={inputRef}
                type="file"
                // multiple={true}
                onChange={handleChange}
                accept="image/png"
              />
              {!fileName ? (
                <p>
                  Drag & Drop files or{" "}
                  <span
                    className="font-bold text-app-slate-blue cursor-pointer"
                    onClick={openFileExplorer}
                  >
                    <u>Select file</u>
                  </span>{" "}
                  to upload
                </p>
              ) : (
                <p>{fileName}</p>
              )}
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Blog Title</Label>
            <Input
              onChange={handleValuesChange("title")}
              required
              type="text"
              className="h-12"
              placeholder="Title of the blog"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="tags" className="mb-2">
              Blog Tags
            </Label>
            <Select required onValueChange={handleTagsSelect}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {TAGS.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="content">Blog Description</Label>
            <Input
              onChange={handleValuesChange("desc")}
              required
              type="text"
              className="h-12"
              placeholder="Description of the blog"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="content">Blog Content</Label>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder="Write Your Blog here"
              value={content}
              onChange={setContent}
            />
          </div>
          <Button type="submit" className="h-12 mt-12">
            {loading ? "Uploading..." : "Post this Blog"}
          </Button>
          {progress > 0 && <Progress value={progress} className="w-full" />}
          {/* <Button type="submit" className="h-12">
            Post this Blog
          </Button> */}
        </form>
      </section>
      {/* <Footer /> */}
    </main>
    </>
  );
}
// export async function getServerSideProps(context: any) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   const email = session?.user?.email;
//   const docRef = doc(db, "users", email!);
//   const docSnap = await getDoc(docRef);

//   const user: any = session ? { user: docSnap.data() } : null;
//   return {
//     props: {
//       ...user,
//     },
//   };
// }

export default PostBlog;
