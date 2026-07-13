import { Metadata } from "next";
import BlogClient from "@/components/blog/blog-client";

export const metadata: Metadata = {
    title: "Blog | Raffly.dev",
    description: "Blog",
};

export default function BlogPage() {
    return (
        <BlogClient />
    );
}