import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import React, { useRef, useState } from "react";

function PostBlog() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>();
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

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      // for (let i = 0; i < e.target.files["length"]; i++) {
      setFiles(e.target.files[0]);
      // }
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
      setFiles(e.dataTransfer.files[0]);
      // }
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

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }
  return (
    <main className="min-h-screen w-full font-outfit bg-app-grey-dark text-stone-200">
      {/* <Header /> */}
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
          <h2 className="text-3xl lg:text-5xl font-bold">Post a Blog</h2>
          <p className="text-slate-200 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            nec sem nec pellentesque. Quisque eget nulla sem. Duis quis velit eu
            leo semper.
          </p>
        </div>
        <form
          // onSubmit={handleSubmit}
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
              // onSubmit={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
            >
              {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
              <input
                placeholder="fileInput"
                className="hidden"
                ref={inputRef}
                type="file"
                // multiple={true}
                onChange={handleChange}
                accept="image/png"
              />

              <p>
                Drag & Drop files or{" "}
                <span
                  className="font-bold text-blue-600 cursor-pointer"
                  onClick={openFileExplorer}
                >
                  <u>Select files</u>
                </span>{" "}
                to upload
              </p>

              {/* <div className="flex flex-col items-center p-3">
                {files.map((file: any, idx: any) => (
                  <div key={idx} className="flex flex-row space-x-5">
                    <span>{file.name}</span>
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeFile(file.name, idx)}
                    >
                      remove
                    </span>
                  </div>
                ))}
              </div> */}
            L</div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Blog Title</Label>
            <Input
              // onChange={handleValuesChange("title")}
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
            <Select
              required
              // onValueChange={handleCategorySelect}
            >
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
            <Label htmlFor="content">Blog Content</Label>
            <Textarea
              required
              // onChange={handleValuesChange("description")}
              placeholder="Type your blog content"
              id="content"
            />
          </div>

          <Button type="submit" className="h-12">
            Post this Job
          </Button>
        </form>

        {/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}
      </section>
      {/* <Footer /> */}
    </main>
  );
}

export default PostBlog;
