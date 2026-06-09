"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import Image from "next/image";
import {
  BriefcaseBusiness,
  CircleUser,
  CodeXml,
  GitFork,
  Home,
  Mail,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const t = useTranslations("Sidebar.menu");

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    {
      id: "home",
      label: t("home"),
      icon: Home,
    },
    {
      id: "about",
      label: t("about"),
      icon: CircleUser,
    },
    {
      id: "skills",
      label: t("skills"),
      icon: CodeXml,
    },
    {
      id: "experience",
      label: t("experience"),
      icon: BriefcaseBusiness,
    },
    {
      id: "project",
      label: t("project"),
      icon: GitFork,
    },
    {
      id: "contact",
      label: t("contact"),
      icon: Mail,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r">

      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <Link href="/">
              <Image
                src="/images/gozdekosa.png"
                alt="profile"
                className="mx-auto my-4 w-4/6 rounded-full border-3 border-purple-600 transition-all duration-300 group-data-[collapsible=icon]:w-8"
                height={180}
                width={180}
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activeSection === item.id;

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        w-full h-11 justify-center text-center
                        text-base font-medium tracking-wide
                        transition-all duration-300

                        ${
                          active
                            ? "bg-purple-500/10 text-purple-500 border border-purple-500/30"
                            : "text-zinc-600 dark:text-zinc-300 hover:text-purple-400 dark:hover:text-purple-400"
                        }
                      `}
                    >
                      <Link
                        href={`#${item.id}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <Icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-6 px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-row group-data-[collapsible=icon]:flex-col items-center justify-center gap-3 w-full transition-all duration-300">

              <a
                href="https://www.linkedin.com/in/gozdekosa/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-zinc-500 dark:text-zinc-400 text-zinc-500 hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/40 transition-all shadow-sm"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://github.com/gozdekosa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-zinc-500 dark:text-zinc-400 text-zinc-500 hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/40 transition-all shadow-sm"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  );
}