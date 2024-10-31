import { cn } from "~/lib/utils";
import { Button, IconButton } from "~/components/tredici";
import { useTheme } from "~/contexts/theme";
import React, { useMemo } from "react";
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <div
      className={cn(
        "w-full h-12 py-2",
        "fixed top-0 left-0",
        "px-12",
        "flex items-center justify-between",
        "backdrop-blur-md z-50"
      )}
    >
      <h1 className={cn("text-2xl font-bold")}>Booru Downloader</h1>
      <div className={cn("flex gap-4")}>
        <a
          href="https://github.com/saverioscagnoli/booru-downloader"
          target="_blank"
        >
          <Button leftIcon={<GitHubLogoIcon />} colorScheme="b/w">
            Source
          </Button>
        </a>
        <IconButton
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export { Navbar };
