import { cn } from "~/lib/utils";
import { Navbar } from "~/components/navbar";
import { Button, Input, Progress, Tooltip } from "~/components/tredici";
import { useState } from "react";
import axios from "axios";
import { DanbooruPost } from "~/types/post";
import { Checkbox } from "./components/tredici";
import { Post } from "./components/post";
import { NumberInput } from "./components/number-input";
import { DownloadIcon } from "@radix-ui/react-icons";
import JSZip from "jszip";
import saveAs from "file-saver";

const getUrl = (safe: boolean) => {
  return safe
    ? "https://safebooru.donmai.us/posts.json"
    : "https://danbooru.donmai.us/posts.json";
};

const App = () => {
  const [data, setData] = useState<DanbooruPost[]>([]);
  const [tags, setTags] = useState<string>("");
  const [safe, setSafe] = useState<boolean>(
    () => (window.localStorage.getItem("safe") ?? "true") === "true"
  );

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);

  const onFetch = async () => {
    setData([]);

    try {
      const response = await axios.get(getUrl(safe), {
        params: {
          tags: tags,
          limit,
          page
        }
      });

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from Danbooru API", error);
    }
  };

  const [progress, setProgress] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [zipping, setZipping] = useState<boolean>(false);
  const [max, setMax] = useState<number>(0);

  const onDownload = async () => {
    setMax(data.length);
    setZipping(false);

    const zip = new JSZip();
    const imgFolder = zip.folder("images")!;

    for (let [i, { file_url, file_ext }] of data.entries()) {
      if (file_url) {
        const imgData = await axios.get(file_url, {
          responseType: "blob"
        });

        imgFolder.file(`${i}.${file_ext}`, imgData.data);
        setProgress(i => i + 1);
      }

      setImageIndex(i);
    }
    setZipping(true);

    setProgress(0);
    setMax(100);

    let content = await zip.generateAsync({ type: "blob" }, metadata => {
      setProgress(metadata.percent || 0);
    });

    setZipping(false);

    setTimeout(() => {
      setProgress(0);
      setMax(0);
      setImageIndex(0);
    }, 1000);

    saveAs(content, "images.zip");
  };

  return (
    <div className={cn("w-screen h-screen flex flex-col items-center")}>
      <Navbar />
      <div className={cn("w-1/2", "pt-20 flex-grow flex flex-col")}>
        <div className={cn("flex flex-col items-center gap-6")}>
          <p>
            Downloads images from any *booru site. <br />
            These sites are huge databases with all kinds of anime visual media
            in it. Just type in the tags you want to search for and hit fetch to
            show the images. Then you can download them all at once. <br />
            <br />
          </p>
          <div className={cn("flex gap-4")}>
            <Input
              autoComplete="off"
              spellCheck={false}
              className={cn("max-w-60")}
              value={tags}
              onValueChange={setTags}
            />
            <Button onClick={onFetch}>Fetch</Button>
            <Button
              disabled={!data.length}
              leftIcon={<DownloadIcon />}
              onClick={onDownload}
            >
              Download
            </Button>
          </div>

          {max > 0 && (
            <div className={cn("flex flex-col")}>
              {zipping ? (
                <p>Zipping images... {Math.round(progress)}%</p>
              ) : (
                <p>
                  Fetching images... {imageIndex}/{data.length}
                </p>
              )}
              <Progress value={progress} max={max} />
            </div>
          )}

          <div className={cn("flex gap-4", "select-none")}>
            <span className={cn("flex items-center gap-2")}>
              <Checkbox
                id="safe"
                checked={safe}
                onCheckedChange={v => {
                  setSafe(Boolean(v));
                  window.localStorage.setItem("safe", v.toString());
                }}
              />
              <Tooltip delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <label htmlFor="safe">Safe</label>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  Only include SFW (Safe For Work) content
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
            </span>
            <span className={cn("flex items-center gap-4")}>
              <Tooltip delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <p>Page</p>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  Current page number
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
              <NumberInput value={page} onChange={setPage} />
            </span>
            <span className={cn("flex items-center gap-4")}>
              <Tooltip delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <p>Limit</p>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  Number of posts to fetch per page
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
              <NumberInput value={limit} onChange={setLimit} max={200} />
            </span>
          </div>
        </div>

        {data.length > 0 &&
          data.map((post, index) => <Post key={index} {...post} />)}
      </div>
    </div>
  );
};

export { App };
