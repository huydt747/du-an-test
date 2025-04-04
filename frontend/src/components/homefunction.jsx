import { useEffect } from "react";

function HomeFunction() {
  useEffect(() => {
    // Xử lý sự kiện khi bấm Ctrl + B
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        alert("Best CNN clone ever🚀");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Xử lý sự kiện cuộn trang
    const handleScroll = () => {
      const hDiv = document.getElementById("Hdiv");
      if (hDiv) {
        hDiv.style.marginTop = `${window.scrollY + 70}px`;
        hDiv.style.zIndex = "100";
        if (window.scrollY >= 226) {
          hDiv.style.zIndex = "-100";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Xử lý sự kiện resize
    const handleResize = () => {
      const navDivFirstChild = document.querySelector("nav div:first-child");
      if (!navDivFirstChild) return;

      const children = navDivFirstChild.children;
      if (window.innerWidth <= 1207) {
        children[children.length - 1].style.display = "block";
        children[children.length - 2].style.display = "none";
      }
      if (window.innerWidth <= 1111) {
        children[children.length - 3].style.display = "none";
      }
      if (window.innerWidth <= 1047) {
        children[children.length - 4].style.display = "none";
      }
      if (window.innerWidth <= 1000) {
        children[children.length - 1].style.display = "none";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners khi component bị unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default HomeFunction;