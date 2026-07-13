import { Metadata } from "next";
import CaseStudiesClient from "@/components/casestudies/casestudies-client";

export const metadata: Metadata = {
    title: "Case Studies | Raffly.dev",
    description: "Case Studies",
};

export default function CaseStudiesPage() {
    return (
        <CaseStudiesClient />
    );
}