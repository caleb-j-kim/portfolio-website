// Redirects to the Home Page

import { redirect } from "next/navigation";

export default function Page() {
    redirect("/pages/home");
    }